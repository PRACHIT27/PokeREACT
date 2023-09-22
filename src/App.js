import './App.css';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import Wrapper from './Components/Wrapper';
import axios from 'axios';
import React, {useState,useEffect} from 'react';



function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName,setPokemonName] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async(res) => {
    const uniquePokemon = new Set(); // Create a Set to store unique values
    res.map(async (item) =>{
      const result = await axios.get(item.url);
      uniquePokemon.add(result.data); 
      const uniquePokemonArray = Array.from(uniquePokemon);
      setPokemon(uniquePokemonArray)
      // setPokemon((currentList) => [...currentList,result.data]);
    })
  }

  const pokeLoad = async() =>{
    setLoading(true)
    const res = await axios.get(currentPageUrl).then(res =>{
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      getPokemon(res.data.results);
    } );   
  }
 
  useEffect(()=>{pokeLoad()},[currentPageUrl]);
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  if (loading) return "Loadingggggg...."

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  const searchPokemon = async() =>{
    setLoading(true);
    let poke = pokemonName.toLowerCase();
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`).then(result =>{
      setLoading(false);
      // console.log(result.data);
      setPokemon(result.data);
    });
  }

  // console.log(pokemon);
  return (
    <>
    <Navbar searchPokemon = {searchPokemon} setPokemonName={setPokemonName}/>
    <Wrapper pokemon={pokemon}/>
    <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}
export default App;
