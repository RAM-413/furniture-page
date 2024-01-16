import React from "react";
import sofaimg from "../assets/images/sofa-img.webp";
import Common from "./Common";

const Ourstory = () => {
  return (
    <>
      <div>
        <div className="max-w-[1341px] mx-auto px-3 overflow-hidden">
          <div className="  grid grid-cols-1 lg:grid-cols-2 pt-[134px]">
            <div className="span-cols-2 w-full px-3 flex justify-center">
              <div className="relative" >
                <img className="w-full max-w-[300px] sm:max-w-[400px]" src={sofaimg} alt="sofaimg" />
                <span className="w-[280px] h-[200px] sm:w-[416px] sm:h-[336px]  top-[-8%] left-[-7%] sm:top-[-7%] absolute z-[-1] bg-[linear-gradient(270deg,#8C939B_0%,_#243040_100%)]" />
              </div>
            </div>
            <div className="span-cols-2 w-full  px-3 mb-10" >
              <div className="flex items-center gap-3 pt-10">
                <hr className="sm:w-[95px] w-[55px] h-[1px] bg-[#000]" />
                <h6 className="text-[20px] font-normal font-poppins text-[#BD7D41]">
                  Welcome Our Story
                </h6>
              </div>

              <h2 className="sm:text-[35px] text-[27px] font-poppins font-bold text-[#243040] max-w-[436px] pt-[19px]">
                We create the product you tell us you wish existed.{" "}
              </h2>
              <p className="sm:text-[18px] text-[16px] font-normal font-poppins text-[rgba(0,0,0,0.70)] max-w-[596px] pt-[19px] pb-[34px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
                non rhoncus nisi neque sit amet nibh. Phasellus consectetur
                semper ante et mattis
              </p>
              <Common text="READ MORE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
