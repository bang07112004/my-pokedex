import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { useAppDispatch } from "../app/hooks";
import {
  pokemonStatType,
  pokemonTypeInterface,
  userPokemonType,
} from "../utils/Types";
import { pokemonTypes } from "../utils/getPokemonTypes";
function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonType;
  isEmpty?: boolean;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          // @ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };
  const getStats = () => {
    const data = createStatsArray(pokemon?.types!, "strength");
    return (
      <div className="max-h-[200px] space-y-1">
        <div className=" grid grid-cols-[25%,75%] gap-[2rem] w-[100%]">
          <h4 className=" flex justify-end items-center">Strength</h4>
          <div className="flex gap-x-[1rem] space-y-2 w-[100%] flex-wrap ">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => (
                <div className=" flex justify-center items-center flex-col gap-[1rem]">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="h-[3rem] w-[3rem]"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className=" grid grid-cols-[25%,75%] gap-[2rem] w-[100%]">
          <h4 className=" flex justify-end items-center">Weakness</h4>
          <div className="flex gap-x-[1rem] space-y-2 w-[100%] flex-wrap ">
            {createStatsArray(pokemon?.types!, "weakness").map(
              (stat: { image: string }) => (
                <div className=" flex justify-center items-center flex-col gap-[1rem]">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="h-[3rem] w-[3rem]"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className=" grid grid-cols-[25%,75%] gap-[2rem] w-[100%]">
          <h4 className=" flex justify-end items-center">Resistance</h4>
          <div className="flex gap-x-[1rem] space-y-2 w-[100%] flex-wrap ">
            {createStatsArray(pokemon?.types!, "resistance").map(
              (stat: { image: string }) => (
                <div className=" flex justify-center items-center flex-col gap-[1rem]">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="h-[3rem] w-[3rem]"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className=" grid grid-cols-[25%,75%] gap-[2rem] w-[100%]">
          <h4 className=" flex justify-end items-center">Vulnerable</h4>
          <div className="flex gap-x-[1rem] space-y-2 w-[100%] flex-wrap ">
            {createStatsArray(pokemon?.types!, "vulnerable").map(
              (stat: { image: string }) => (
                <div className=" flex justify-center items-center flex-col gap-[1rem]">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="h-[3rem] w-[3rem]"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-[100%] w-[100%] relative">
      {isEmpty && (
        <div className="flex justify-center items-center flex-col gap-[3rem] h-[100%]">
          <button className="cursor-pointer rounded-[10rem] bg-white/20 hover:bg-white/50 transition-all duration-300 hover:scale-110 flex justify-center items-center p-[2rem] border-0">
            <FaPlus className="text-black text-[5rem]" />
          </button>
          <h3 className="text-white uppercase tracking-[0.3rem] select-none font-bold">
            Add Pokemon to Comparison
          </h3>
        </div>
      )}
      {pokemon && (
        <div
          className="h-[100%] grid grid-cols-[1fr] grid-rows-[90%,10%]"
          key={pokemon?.id}
        >
          <div className="font-bold text-white tracking-[0.1rem] uppercase grid w-[100%] grid-rows-[40%,60%]">
            <div className="flex flex-col justify-center items-center">
              <h3 className="select-none">{pokemon?.name}</h3>
              <img
                src={pokemon?.image}
                alt={pokemon?.name}
                className="h-[10rem] select-none"
              />
            </div>
            <div className=" w-[100%] flex flex-col items-start max-h-[100%] gap-[1rem] overflow-y-scroll overflow-x-hidden pb-[1rem]">
              <div className="grid grid-cols-[25%,75%] gap-[2rem] w-[100%]">
                <h4 className="flex justify-end items-center text-lg font-bold select-none">
                  Type
                </h4>
                <div className="flex gap-[1rem] w-[100%] flex-wrap">
                  {pokemon?.types.map((type: pokemonTypeInterface) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="flex justify-center items-center flex-col gap-[1rem] select-none">
                        <img
                          src={type[keys[0]].image}
                          alt={type[keys[0]].name}
                          title={type[keys[0]].name}
                          className="h-[3rem] w-[3rem]"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="w-[100%] h-[100%] grid grid-cols-3 ">
            <button className="select-none border border-gray-500 hover:bg-[#27af0f]/80 hover:border-[#27af0f]  text-[1.2rem] font-bold uppercase  text-[#ffffff] tracking-[0.1rem] cursor-pointer bg-black/20 transition-all duration-300 ease-in-out ">
              Add
            </button>
            <button
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              className="select-none border border-gray-500  hover:bg-[#1f51ff]/80 hover:border-[#1f51ff]  text-[1.2rem] font-bold uppercase  text-[#ffffff] tracking-[0.1rem] cursor-pointer  bg-black/20 transition-all duration-300 ease-in-out "
            >
              View
            </button>
            <button
              onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
              className="select-none border border-gray-500  hover:bg-[#e21b5a]/80 hover:border-[#e21b5a]  text-[1.2rem] font-bold uppercase  text-[#ffffff] tracking-[0.1rem] cursor-pointer  bg-black/20 transition-all duration-300 ease-in-out "
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompareContainer;
