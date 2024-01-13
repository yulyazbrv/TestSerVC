import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

/**
 * Fetch the list of pokemons from API
 * @param offset how many records to skip
 * @param limit how many records to return
 * @returns list of pokemons
 *
 * @url https://pokeapi.co/docs/v2#resource-listspagination-section
 */
export const getPokemonList = (
  offset = 20,
  limit = 20
): Promise<{ data: { results: CommonPokemon[]; count: number } }> =>
  api.get(`/pokemon?offset=${offset}&limit=${limit}`);

/**
 * Fetch a single pokemon from API
 * @param id id or name of the pokemon
 * @returns pokemon
 *
 * @url https://pokeapi.co/docs/v2#pokemon
 */
export const getPokemon = (id: number | string): Promise<{ data: Pokemon }> =>
  api.get(`/pokemon/${id}`);
