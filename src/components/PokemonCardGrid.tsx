import React, { useState } from "react";
import { pokemonTypeInterface, userPokemonType } from "../utils/Types";
import { IoGitCompare } from "react-icons/io5";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addToCompare } from "../app/slices/PokemonSlice";
import { setToast } from "../app/slices/AppSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
type Props = {
  pokemons: {
    pokemons: userPokemonType[];
  };
};

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonType[] }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [notification, setNotification] = useState(false);
  return (
    <div className="max-h-[80vh] overflow-y-scroll text-white uppercase relative">
      {notification && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 fixed inset-0 h-[100%] w-[100%] z-50 flex py-3"
        >
          <div className="bg-white/80 rounded-lg px-5 text-center py-3 text-black w-[30%] h-fit mx-auto my-auto">
            <h1 className="text-lg font-bold ">
              The Pokemon has been added to Comparison
            </h1>
            <button
              onClick={() => setNotification(false)}
              className="flex items-center justify-center group bg-green-500/20 gap-2 mx-auto mt-5 px-5 py-2 rounded-xl"
            >
              <AiFillCheckCircle className="text-xl group-hover:text-green-600 " />
              <p className="text-xl group-hover:text-green-600 font-semibold">
                Confirm
              </p>
            </button>
          </div>
        </motion.div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[4rem] m-[4rem] mt-[2rem]">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonType) => {
            const type = data.types.map((typeName) => {
              return typeName;
            });
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`w-[250px] flex justify-center items-center flex-col rounded-md p-[1rem] relative
                ${type[0].grass && "bg-[#76cc54]/30"}
                ${type[0].fire && "bg-[#ff4422]/30"}
                ${type[0].water && "bg-[#3299fe]/30"}
                ${type[0].electric && "bg-[#ffcd32]/30"}
                ${type[0].normal && "bg-[#aaaa99]/30"}
                ${type[0].ice && "bg-[#67cdff]/30"}
                ${type[0].fighting && "bg-[#ba5545]/30"}
                ${type[0].poison && "bg-[#7f3f72]/30"}
                ${type[0].ground && "bg-[#ddba54]/30"}
                ${type[0].flying && "bg-[#8898fe]/30"}
                ${type[0].psychic && "bg-[#ff5599]/30"}
                ${type[0].bug && "bg-[#abba22]/30"}
                ${type[0].rock && "bg-[#baab66]/30"}
                ${type[0].ghost && "bg-[#6667ba]/30"}
                ${type[0].dragon && "bg-[#7766ec]/30"}
                ${type[0].dark && "bg-[#765545]/30"}
                ${type[0].steel && "bg-[#ababbb]/30"}
                ${type[0].fairy && "bg-[#ef99ef]/30"}
                `}
                key={data.id}
              >
                <div className="absolute top-[0.7rem] left-[0.8rem] text-[1rem] cursor-pointer">
                  {location.pathname.includes("/pokemon") ? (
                    <>
                      <FaPlus
                        onClick={() => dispatch(addPokemonToList(data))}
                        className="text-[#27af0f] relative hover:scale-110 ease-in-out transition-all duration-300 text-xl font-bold"
                      />
                      <span className="absolute z-[-1] h-6 w-6 rounded-full bg-blue-600 inset-0  "></span>
                    </>
                  ) : location.pathname.includes("/search") ? (
                    <>
                      <FaPlus className="text-[#27af0f] relative hover:scale-110 ease-in-out transition-all duration-300 text-xl font-bold" />
                      <span className="absolute z-[-1] h-6 w-6 rounded-full bg-green-600 inset-0 blur-md brightness-150  "></span>
                    </>
                  ) : (
                    <FaTrash className="text-[#e21b5a] hover:scale-110 ease-in-out transition-all duration-300 text-xl font-bold" />
                  )}
                </div>
                <div className="absolute top-[0.5rem] right-[0.8rem] text-[1.3rem] cursor-pointer">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      setNotification(true);
                    }}
                    className="text-[#1f51ff] hover:scale-110 transition-all duration-300 text-2xl font-bold relative"
                  />
                  <span className="absolute z-[-1] h-6 w-6 rounded-full bg-blue-600 inset-0 blur-md brightness-150 "></span>
                </div>
                <h3 className="text-center select-none cursor-pointer my-[1rem] text-lg font-bold ">
                  {data.name}
                </h3>
                <div>
                  <img
                    src={data.image}
                    alt={data.name}
                    className="h-[12rem] cursor-pointer image relative"
                    loading="lazy"
                    onClick={() => navigate(`/pokemon/${data.id}`)}
                  />
                  <span
                    className={`h-[14rem] w-[12rem] bg-red absolute inset-0 top-16 left-6 z-[-1] blur-md brightness-200
                    ${type[0].grass && "bg-[#76cc54]/30"}
                    ${type[0].fire && "bg-[#ff4422]/30"}
                    ${type[0].water && "bg-[#3299fe]/30"}
                    ${type[0].electric && "bg-[#ffcd32]/30"}
                    ${type[0].normal && "bg-[#aaaa99]/30"}
                    ${type[0].ice && "bg-[#67cdff]/30"}
                    ${type[0].fighting && "bg-[#ba5545]/30"}
                    ${type[0].poison && "bg-[#7f3f72]/30"}
                    ${type[0].ground && "bg-[#ddba54]/30"}
                    ${type[0].flying && "bg-[#8898fe]/30"}
                    ${type[0].psychic && "bg-[#ff5599]/30"}
                    ${type[0].bug && "bg-[#abba22]/30"}
                    ${type[0].rock && "bg-[#baab66]/30"}
                    ${type[0].ghost && "bg-[#6667ba]/30"}
                    ${type[0].dragon && "bg-[#7766ec]/30"}
                    ${type[0].dark && "bg-[#765545]/30"}
                    ${type[0].steel && "bg-[#ababbb]/30"}
                    ${type[0].fairy && "bg-[#ef99ef]/30"}
                    `}
                  ></span>
                </div>

                <div
                  className={`w-[100%] grid gap-[1rem] ${
                    type.length > 1 && "grid-cols-2"
                  }`}
                >
                  {data.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type);
                      return (
                        <div
                          className="flex flex-col justify-center items-center mt-[0.5rem] gap-[0.4rem]"
                          key={index}
                        >
                          <img
                            src={type[keys[0]].image}
                            alt=""
                            className="h-[2rem] mt-6 select-none relative"
                            loading="lazy"
                          />
                          <span
                            className={`h-[2rem] w-[2rem] blur-md brightness-150 z-[-1] -mt-1  rounded-full absolute
                           ${keys[0] === "grass" && "bg-[#76cc54]"}
                           ${keys[0] === "fire" && "bg-[#ff4422]"}
                           ${keys[0] === "water" && "bg-[#3299fe]"}
                           ${keys[0] === "electric" && "bg-[#ffcd32]"}
                           ${keys[0] === "normal" && "bg-[#aaaa99]"}
                           ${keys[0] === "ice" && "bg-[#67cdff]"}
                           ${keys[0] === "fighting" && "bg-[#ba5545]"}
                           ${keys[0] === "poison" && "bg-[#7f3f72]"}
                           ${keys[0] === "ground" && "bg-[#ddba54]"}
                           ${keys[0] === "flying" && "bg-[#8898fe]"}
                           ${keys[0] === "psychic" && "bg-[#ff5599]"}
                           ${keys[0] === "bug" && "bg-[#abba22]"}
                           ${keys[0] === "rock" && "bg-[#baab66]"}
                           ${keys[0] === "ghost" && "bg-[#6667ba]"}
                           ${keys[0] === "dragon" && "bg-[#7766ec]"}
                           ${keys[0] === "dark" && "bg-[#765545]"}
                           ${keys[0] === "steel" && "bg-[#ababbb]"}
                           ${keys[0] === "fairy" && "bg-[#ef99ef]"}
                          `}
                          ></span>
                          <h6
                            className={`text  -sm font-semibold select-none
                                ${keys[0] === "grass" && "text-[#76cc54]"}
                                ${keys[0] === "fire" && "text-[#ff4422]"}
                                ${keys[0] === "water" && "text-[#3299fe]"}
                                ${keys[0] === "electric" && "text-[#ffcd32]"}
                                ${keys[0] === "normal" && "text-[#aaaa99]"}
                                ${keys[0] === "ice" && "text-[#67cdff]"}
                                ${keys[0] === "fighting" && "text-[#ba5545]"}
                                ${keys[0] === "poison" && "text-[#7f3f72]"}
                                ${keys[0] === "ground" && "text-[#ddba54]"}
                                ${keys[0] === "flying" && "text-[#8898fe]"}
                                ${keys[0] === "psychic" && "text-[#ff5599]"}
                                ${keys[0] === "bug" && "text-[#abba22]"}
                                ${keys[0] === "rock" && "text-[#baab66]"}
                                ${keys[0] === "ghost" && "text-[#6667ba]"}
                                ${keys[0] === "dragon" && "text-[#7766ec]"}
                                ${keys[0] === "dark" && "text-[#765545]"}
                                ${keys[0] === "steel" && "text-[#ababbb]"}
                                ${keys[0] === "fairy" && "text-[#ef99ef]"}
                            `}
                          >
                            {keys[0]}
                          </h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default PokemonCardGrid;
