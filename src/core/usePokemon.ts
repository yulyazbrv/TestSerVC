import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../api/pokemons.api";

const usePokemon = (id: string) => {
  const { data, isFetching } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
    staleTime: 5000,
  });

  return {
    pokemon: data?.data,
    isFetching,
  };
};

export { usePokemon };
