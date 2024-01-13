type CommonPokemon = {
  name: string;
  url: string;
};

type Pokemon = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: { name: string; url: string }[];
  game_indices: PokemonGameIndices[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: { name: string; url: string };
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

type PokemonAbility = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

type PokemonGameIndices = {
  game_index: number;
  version: { name: string; url: string };
};

type PokemonMove = {
  move: { name: string; url: string };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: { name: string; url: string };
    version_group: { name: string; url: string };
  }[];
};

type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

type PokemonType = {
  slot: number;
  type: { name: string; url: string };
};
