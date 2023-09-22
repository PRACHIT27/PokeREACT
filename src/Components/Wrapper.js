// import React from 'react';
// import "..//index.css";
// import Card from './Card';


// export default function Wrapper({pokemon}) {


//   return (
  
//     <div className='wrapper'>
//     {
//       <> if(Array.isArray({pokemon})){
//         pokemon.map((item) =>{
//           return(<Card item={item} key={item.id}/>)
          
//         })
//       }
//       else{
//         return(<Card item={pokemon} key={pokemon.id}/>)
//       }
//      </>
//     }
    
//     </div> 
    
//   )
// }

import React from 'react';
import '../index.css';
import Card from './Card';

export default function Wrapper({pokemon }) {
  return (
    <div className='wrapper'>
      {Array.isArray(pokemon) ? (
        pokemon.map((item) => (
          <Card item={item} key={item.id} />
        ))
      ) : (
        <Card item={pokemon} key={pokemon.id} />
      )}
    </div>
  );
}
