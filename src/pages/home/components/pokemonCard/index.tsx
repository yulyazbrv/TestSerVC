import { useNavigate } from "react-router-dom";
import "./style.css";

interface Props {
  pokemon: CommonPokemon;
}

const PokemonCard = (props: Props) => {
  const { pokemon } = props;
  const navigate = useNavigate();
  const urlParts = pokemon.url.split('/');
  const pokemonId = urlParts[urlParts.length - 2]

  return (
    <div className="pokemon-card" onClick={() => navigate(`/${pokemonId}`)}>
      <div className="pokemon-card__image-wrapper">
        <img
          className="pokemon-card__image"
          src={`https://lorempokemon.fakerapi.it/pokemon/200/${pokemonId}`}
        />
      </div>
      <p className="pokemon-card__title">{pokemon.name}</p>
    </div>
  );
};

export { PokemonCard };
