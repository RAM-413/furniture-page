import React from "react";
import footerlogo from "../assets/images/nav-logo.webp";
import insta from "../assets/images/insta.svg";
import facebbok from "../assets/images/fb.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#243040] pt-[70px] overflow-hidden">
        <div className=" flex  max-w-[1320px] w-full flex-wrap mx-auto px-3">
          <div className="w-full lg:w-[50%]" data-aos="fade-right">
            <div className="flex  gap-2 flex-col">
              <div className=" flex gap-[6px]">
                <img src={footerlogo} alt="logo" />
                <h2 className="text-white text-[33px] font-bold font-roboto">
                  FURNITURE
                </h2>
              </div>
              <div>
                <p className="max-w-[338px] text-white text-sm font-normal font-roboto ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse feugiat nunc in leo vestibulum, at congue erat
                  accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                  sapien.
                </p>
                <div className=" flex gap-5 pt-6">
                  <a href="https://www.instagram.com/" target="_blank">
                    <img className=" cursor-pointer hover:translate-y-[-5px] duration-300" src={insta} alt="insta" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img
                      className=" cursor-pointer hover:translate-y-[-5px] duration-300"
                      src={facebbok}
                      alt="insta"
                    />
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <img
                      className=" cursor-pointer hover:translate-y-[-5px] duration-300"
                      src={twitter}
                      alt="insta"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-wrap gap-y-6 pt-7 lg:pt-0">
            <ul className="w-1/2 sm:w-[33.33%]" data-aos="fade-in-top">
              <li className="text-white text-sm font-medium font-roboto max-w-[130px]  after:w-full after:absolute relative  after:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]">
                ABOUT STORE
              </li>
              <li className="pt-[17px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Home
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Shop
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Product
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Festival Offer
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Log In
                </a>
              </li>
            </ul>

            <ul className="w-1/2 sm:w-[33.33%]" data-aos="fade-in-bottom">
              <li className="text-white text-sm font-medium font-roboto max-w-[130px]  after:w-full after:absolute relative  after:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]">
                BRANDS
              </li>
              <li className="pt-[17px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Album
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Shop
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Product
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Festival Offer
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Log In
                </a>
              </li>
            </ul>

            <ul className="w-full sm:w-[33.33%] pt-5 sm:pt-0" data-aos="fade-left">
              <li className="text-white text-sm font-medium font-roboto max-w-[130px]  after:w-full after:absolute relative  after:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#BD7D41]">
                CATEGORIES
              </li>
              <li className="pt-[17px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Single
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Aleeper Sofas
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Accent Chairs
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Festival Offer
                </a>
              </li>
              <li className="pt-[12px]">
                <a
                  href="#"
                  className="text-white text-sm font-normal after:duration-300 font-roboto after:w-0 after:hover:w-full after:absolute relative after:left-[50%] after:hover:left-0 after:bottom-0 py-1.5 after:h-[2px] after:rounded-full after:bg-[#FFFF]"
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-t rounded border-[rgba(255,255,255,0.50)] mt-[81.1px] w-full">
          <p className="text-white text-[14px] font-normal py-[23px] text-center ">
            @copyright2021
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
