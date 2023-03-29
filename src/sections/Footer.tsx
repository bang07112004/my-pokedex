import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="grid grid-cols-[5rem,auto,5rem] border-t-[0.5px] border-t-[#ffffff3b]">
      <div className=" flex justify-center items-center"></div>
      <div className="border-[0.5px] border-[#ffffff3b] border-y-0"></div>
      <div className=" flex justify-center items-center">
        <MdOutlinePowerSettingsNew className="cursor-pointer text-[#e21b5a] text-[2.5rem]" />
      </div>
    </footer>
  );
}

export default Footer;
