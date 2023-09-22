import React from 'react';
import '..//index.css';

export default function Card({item}) {
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  const themeColor = typeColor[item.types[0].type.name]
  let styling ={
    background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`
  }
   return (
    
    <div className='card' style={styling} key={item.id}>
        <p className="hp">
            <span>HP {item.stats[0].base_stat}</span>
          </p>
          <img src={item.sprites.other.dream_world.front_default}/>
          <p className="poke-name">{item.name}</p>
          <div className="stats">
            <div className="stat-item">
              <h3>{item.stats[1].base_stat}</h3>
              <p>Attack</p>
            </div>
            <div className="stat-item">
              <h3>{item.stats[2].base_stat}</h3>
              <p>Defense</p>
            </div>
            <div className="stat-item">
              <h3>{item.stats[5].base_stat}</h3>
              <p>Speed</p>
            </div>
          </div>
    </div>
  )
}

