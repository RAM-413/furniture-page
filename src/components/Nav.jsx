import React, { useState } from "react";
import Navlogo from "../assets/images/nav-logo.webp";
import { Link, useLocation } from "react-router-dom";
import { Cart, Searchicon } from "./icon";

const Nav = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const SearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className="max-w-[1320px] w-full mx-auto px-3 pt-4 h-[91px] z-[99] ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="sm:w-[61px] sm:h-[61px] w-[30px] h-[30px]" src={Navlogo} alt="logo" />
            <h2 className="text-white text-[25px] sm:text-[33px] font-bold font-roboto">
              FURNITURE
            </h2>
          </div>
          <div className="flex items-center">
            <ul
              className={`${nav ? "right-0" : "right-[-100%]"
                } flex items-center gap-14 mobileView duration-300 z-10`}
            >
              <Link
                to="/"
                onClick={show}
                className={`${"after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-0  after:h-[3px] after:rounded-full hover:after:bg-[#BD7D41] "} text-lg font-normal text-white  font-roboto  relative py-1.5 hover:`}
              >
                HOME
              </Link>
              <Link
                to="/About"
                onClick={show}
                className={`${"after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-0  after:h-[3px] after:rounded-full hover:after:bg-[#BD7D41]"} text-lg font-normal text-white font-roboto text-nowrap relative py-1.5 `}
              >
                ABOUT US
              </Link>
              <Link
                to="/Shop"
                onClick={show}
                className={`${"after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-0  after:h-[3px] after:rounded-full hover:after:bg-[#BD7D41]"} text-lg font-normal text-white  font-roboto  relative py-1.5 `}
              >
                SHOP
              </Link>
              <Link
                to="/Contact"
                onClick={show}
                className={`${"after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-0  after:h-[3px] after:rounded-full hover:after:bg-[#BD7D41]"} text-lg font-normal text-white font-roboto text-nowrap uppercase relative py-1.5 `}
              >
                Contact Us
              </Link>
            </ul>
            <div className='flex items-center gap-[16px] sm:gap-[18px] pl-10'>
              <div className='flex gap-4 items-center '>
                <span onClick={SearchOpen}>
                  {isSearchOpen ? (<div className=" relative z-1  cursor-pointer group mb-1 ">
                    <span className="flex bg-white  group-hover:bg-[#BD7D41]  absolute -left-3 duration-500 top-0 rotate-45 h-[2px] w-5"></span>
                    <span className="flex bg-white group-hover:bg-[#BD7D41] absolute -left-3 duration-500 -rotate-45 h-[2px] w-5 mb-1"></span>
                  </div>) : (<Searchicon />)}
                </span>
                <input type='text' placeholder='  Sarch.....' className={`transition-all  ease-in duration-300 rounded outline-none max-sm:hidden   ${isSearchOpen ? "w-[120px]" : "w-[0]"}`} />
              </div>
              <Cart />
            </div>
            <label className="lg:hidden sm:ml-7 ml-3" onClick={show}>
              {nav ? (
                <div className="relative z-40">
                  <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1"></span>
                  <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1"></span>
                </div>
              ) : (
                <div className="relative z-40">
                  <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1"></span>
                  <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1"></span>
                  <span className=" flex w-6 h-1 bg-white duration-300 rounded-2xl"></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </nav>
      <div className='flex justify-center items-center'>
        <input type='text' placeholder='  Sarch.....' className={` transition-all ease-in duration-500 rounded max-sm:block sm:hidden ${isSearchOpen ? "w-[220px]" : "w-[0] "}`} />
      </div>
    </>
  );
};

export default Nav;
