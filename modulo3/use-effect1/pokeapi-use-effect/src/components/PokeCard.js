import axios from "axios";
import { useState, useEffect } from "react";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    pegaPokemon(props.pokeName);
  }, [props.pokeName]);

  return (
    <figure>
      <h2>{pokemon.name}</h2>

      <p>Peso: {pokemon.weight} Kg</p>

      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>

      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
}

export default PokeCard;
