import React from "react";
import { useAppSelector } from "../app/hooks";
import CompareContainer from "../components/CompareContainer";
import Wrapper from "../sections/Wrapper";

type Props = {};

function Compare({}: Props) {
  const { compareQueue } = useAppSelector(({ pokemon }) => pokemon);
  return (
    <div className="grid grid-cols-[49%,49%] h-[100%] w-[100%] gap-[1rem] py-3 px-2">
      <CompareContainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareContainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </div>
  );
}

export default Wrapper(Compare);
