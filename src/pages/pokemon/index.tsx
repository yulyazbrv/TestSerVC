import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../../core/usePokemon";
import HomeIcon from "../../assets/icons/home.svg";
import "./style.css";

const PokemonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon } = usePokemon(id || "");

  return (
    <div className="pokemon">
      <div
        className="pokemon__back-wrapper"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={HomeIcon} />
      </div>
      {pokemon ? (
        <div className="pokemon__wrapper">
          <p className="pokemon__name">{pokemon.name}</p>
          <img
            className="pokemon__image"
            src={`https://lorempokemon.fakerapi.it/pokemon/200/${id}`}
          />
          <div className="pokemon__params-table">
            <span>Id</span>
            <span>Order</span>
            <span>Weight</span>
            <span>Height</span>
            <span>Forms</span>
            <span>{pokemon.id}</span>
            <span>{pokemon.order}</span>
            <span>{pokemon.weight}</span>
            <span>{pokemon.height}</span>
            <div>
              {pokemon.forms.map((item) => (
                <p key={item.name}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>loader</p>
      )}
    </div>
  );
};

export { PokemonPage };
