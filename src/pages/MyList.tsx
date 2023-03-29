import React from "react";
import { useAppSelector } from "../app/hooks";
import Login from "../components/Login";
import Wrapper from "../sections/Wrapper";

type Props = {};

function MyList({}: Props) {
  const { userInfo } = useAppSelector(({ app }) => app);
  return (
    <div className=" h-[100%] w-[100%] text-white max-w-[100%] uppercase ">
      <Login />
    </div>
  );
}

export default Wrapper(MyList);
