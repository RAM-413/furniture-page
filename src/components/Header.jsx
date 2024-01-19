import React from "react";
import Nav from "./Nav";
import Common from "./Common";

const Header = () => {
  return (
    <>
      <div className="  xl:min-h-screen bg-cover  bg-center bg-no-repeat bg-[url(./assets/images/header-bg.webp)] flex flex-col overflow-hidden" >
        <Nav />
        <div className=" pt-[20px] sm:pt-0 py-[130px] xl:py-0">
          <h2 className="max-w-[908px] text-center text-white sm:text-5xl !leading-normal text-[30px] font-bold font-poppins mx-auto sm:pt-[80px] pt-[5px]" >
            Awesome Design Best Furniture For Your Interior
          </h2>
          <p className="text-center text-white text-[17px] sm:text-xl font-normal font-poppins pt-[15px]" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus{" "}
          </p>
          <div className=" flex justify-center">
            <Common className="sm:mt-[50px] mt-[20px]" text="SHOP NOW"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
