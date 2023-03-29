import React from "react";

const Wrapper = (Component: React.FC) => () => {
  return (
    <div className=" my-0 mx-[5rem] border-[0.5px] border-[#ffffff34] border-y-0 h-[80vh] bg-[#ffffff0d] overflow-hidden pb-[4rem]">
      <Component />
    </div>
  );
};

export default Wrapper;
