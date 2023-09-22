import React from 'react'
import '..//index.css'
import PokemonLogo from "../Components/Pokemon-Logo-removebg-preview.png";

export default function Navbar({searchPokemon,setPokemonName}) {
  return (
    <div className='nv'>
     <div className="centered-image">
        <img src={PokemonLogo} alt="Pokemon Logo" className="pokemon-logo" />
      </div>
      <div className="input-box">
    <i className="uil uil-search"></i>
    <input type="text" placeholder="Search here..." onChange={(event) =>{
      setPokemonName(event.target.value)
    }} />
    <button className="button" onClick={searchPokemon}>Search</button>
    </div>
  </div>
    
  )
}
