import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemons.api";

const usePokemons = (page: number) => {
  const { data, isFetching } = useQuery({
    queryKey: ["pokemons", page],
    queryFn: () => getPokemonList(page * 20, 20),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  return {
    pokemons: data ? data.data.results : [],
    pages: data ? Math.ceil(data.data.count / 20) : 0,
    isFetching,
  };
};

export { usePokemons };
