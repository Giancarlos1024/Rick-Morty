import React from 'react'


export const Character = (props) => {
  const {character, setCharacter} = props;

  const VolverHome = () =>{
    setCharacter(null)
  }
  console.log(character)
  return (
    <div className='generalCharacter'>
      <h1>Personajes de Rick y Morty</h1>
      <button className='buttonPersonajes' onClick={VolverHome}>Volver Home</button>
      <div className='contenedorPersonajes'>
      {character.map((character,index) =>(
        <div className='personajesUnitarios' key={index}>
          <div>
            <img src={character.image} alt={character.image} />
            <p>{character.name}</p>
            <p>
              {character.status === "Alive" ? (
                <>
                  <span className='Alive' /> Alive
                </>
              ):(
                <>
                  <span className='Dead' /> Dead
                </>
              )}
            </p>
            <p>{character.species}</p>
            
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
