import React from "react";
import Wrapper from "../sections/Wrapper";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemnData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { randomBytes } from "crypto";
import { debounce } from "../utils/Debounce";
type Props = {};

function Search({}: Props) {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);
  useEffect(() => {
    if (allPokemon) {
      const clonedPokemon = [...allPokemon];
      const randomPokemon = clonedPokemon
        .sort(() => Math.random() - Math.random())
        .slice(0, 30);
      dispatch(getPokemonData(randomPokemon));
    }
  }, [allPokemon, dispatch]);
  const handleChange = debounce((value: string) => getPokemon(value), 300);
  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemon = [...(allPokemon as [])];
      const randomPokemon = clonedPokemon
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemon));
    }
  };
  return (
    <>
      <div className="h-[100%] w-[100%] max-w-[100%] text-white uppercase ">
        <input
          type="text"
          className="w-[100%] h-[10%] pl-[1rem] text-[1.3rem] bg-[#ffffff20] outline-none focus:outline-none text-white input"
          placeholder="Search Pokemon"
          onChange={(e) => handleChange(e.target.value)}
        />
        <PokemonCardGrid pokemons={randomPokemons!} />
      </div>
    </>
  );
}

export default Wrapper(Search);
