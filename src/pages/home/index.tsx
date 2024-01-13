import { useSearchParams } from "react-router-dom";
import { usePokemons } from "../../core/usePokemons";
import { PokemonCard } from "./components/pokemonCard";
import { Pagination } from "../../components/common/pagination";
import "./style.css";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const pageNumber = page ? +page : 0;
  const { pokemons, pages } = usePokemons(pageNumber > 0 ? pageNumber - 1 : 0);

  const onPageClick = (page: number) => {
    setSearchParams(`?page=${page}`);
  };

  return (
    <div className="pokemons">
      <p className="pokemons__title">Pokemons</p>
      <div className="pokemons__cards">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={pageNumber === 0 ? 1 : pageNumber}
        pages={pages}
        onPageClick={onPageClick}
      />
    </div>
  );
};

export { HomePage };
