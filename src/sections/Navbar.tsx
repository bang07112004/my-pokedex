import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import pokeballIcon from "../assets/pokeball-icon.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];
  const location = useLocation();
  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, navigationRoutes]);
  function ul(index: number) {
    var underlines = document.querySelectorAll<HTMLElement>(".indicate");
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }

  return (
    <nav className="grid grid-cols-[5rem,auto,5rem] border-b-[0.5px] border-b-[#ffffff3b]">
      <div className="flex justify-center items-center">
        <img
          src={pokeballIcon}
          alt="pokeballIcon"
          className="cursor-pointer h-[3rem] select-none"
        />
      </div>
      <div className="border-[0.5px] border-[#ffffff3b] border-y-0 py-0 px-[20rem]">
        <ul className="parent grid grid-cols-5 items-center justify-between h-[100%] list-none z-[1] relative">
          <div className="indicate block absolute bottom-0 bg-white w-[20%] h-[2px] rounded-xl z-0 ease-in-out left-0 "></div>
          <div className="indicate block absolute bottom-0 bg-white w-[20%] h-[2px] rounded-xl z-0 ease-in-out left-0 "></div>
          <div className="indicate block absolute bottom-0 bg-white w-[20%] h-[2px] rounded-xl z-0 ease-in-out left-0 "></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link
                to={route}
                key={index}
                className=" text-white w-fit mx-auto flex items-center justify-center border-b-[1px] border-transparent"
              >
                <li className="uppercase cursor-pointer font-semibold tracking-[0.2rem] select-none">
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className=" flex justify-center items-center">
        <GiHamburgerMenu className="text-white text-[2rem] cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
