
import RickMorty from './img/rick-morty2.png'

import { useState } from 'react';
import './App.css'
import { Character } from './Character';

function App() {
  
  const [character, setCharacter] = useState(null);

  const apiRes = async () =>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const datos = await api.json();
    setCharacter(datos.results)

  }
  
  // if (character == null) {
  //   console.log("Antes de presionar el boton",character)
  // }else{
  //   console.log("Despues de presionar el boton",character)
  // }

  return (
    <>
      <div className='centrarContainer'>
        <div className='flex-home'>
          {character ? (
            <Character character={character} setCharacter={setCharacter} />
          ) : (
            <>
              <h1>Ricy y Mortys</h1>
              <img src={RickMorty} alt="rick-morty" className='rick-morty-home'/>
              <button className='buttonPersonajes' onClick={apiRes}>Buscar Personajes</button>
            </>
          )
          
          }
          
        </div>
      </div>
    </>
  )
}

export default App
