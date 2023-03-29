export interface AppTypeInitialState {
  toasts: string[];
  userInfo: undefined | { email: string };
}
export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonType[];
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonType[];
}
export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}
export interface pokemonTypeInterface {
  [key: string]: {
    name: any;
    image: string;
    resistance: string[];
    strength: string[];
    weakness: [];
    vulnerable: [];
  };
}
export interface userPokemonType extends generatedPokemonType {
  firebaseId?: string;
}
export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";
export interface PokemonStatsType {
  name: string;
  value: string;
}
