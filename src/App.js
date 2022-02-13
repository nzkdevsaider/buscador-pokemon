import logo from './img/logo.png';
import './App.css';
import { useState } from "react";
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState(null)
  const reqAPI = async () => {
    const randPokemon = Math.floor(Math.random() * (900 - 1)) + 1;
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/"+randPokemon)
    const data = await request.json()
    
    setPokemon(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Buscador Pokémon</h1>
        {pokemon ? (
          <Pokemon pokemon={pokemon}/>
        ) : (
          <img src={logo} alt="logo" className="img-home" />
        )}
        
        <button onClick={reqAPI} className="btn-search"> Buscar aleatoriamente </button>
      </header>
    </div>
  );
}

export default App;
