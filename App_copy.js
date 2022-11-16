import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokmemon] = useState({})

  useEffect(() => {
    const pokeApiBaseUrl = "https://pokeapi.co/api/v2/pokemon"
    fetch(`${pokeApiBaseUrl}/charmeleon`)
      .then((res) => { //fetch retorna una respuesta por l oque se debe tratar con .then
        return res.json()//el pasarlo a json tambien terona una promesa, por lo que se debe volver a tuilizar .then estamos recibiendo un string pero debemos convertirlo a json dicho proceso demora por lo cual debemos ocupar .then
      })
      .then((poke) => {
        // console.log({ pokemon })
        setPokmemon(poke)

      })
  }, [])

  console.log({pokemon})

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default}></img>
        <span>#{pokemon.id}</span>
      </div>
    </div>
  );
}

export default App;
