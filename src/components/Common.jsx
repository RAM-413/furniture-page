import React from "react";

const Common = (props) => {
  return (
    <>
      <button
        className={`bg-[#BD7D41] border-none py-[15px] px-[9px] sm:py-[19px] sm:px-12 text-white sm:text-xl text-[18px] font-semibold  font-poppins  relative  hover:text-black outline outline-[#BD7D41]  after:absolute after:bg-white after:z-[-1] after:left-[-20%] after:right-[-20%]  after:top-0 after:bottom-0 after:duration-500 hover:after:duration-500  common1 z-[1] overflow-hidden ${props.className}`}
      >
        {props.text}
      </button>
    </>
  );
};

export default Common;
