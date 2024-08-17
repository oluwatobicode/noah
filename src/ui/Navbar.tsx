import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
  const [showMobile, setShowMobile] = useState(false);

  const toggleNav = () => {
    setShowMobile(!showMobile);
  };
  return (
    <div className=" mt-5 ml-5 mr-5 ">
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-full ">
        <div className="mr-auto">
          <img
            src="/img/Logo.svg"
            className="w-[220px] h-[110px]"
            alt="navbar"
          />
        </div>

        <nav className=" lg:mr-auto lg:w-[400px] lg:h-[45px] lg:rounded-3xl lg:p-1  flex items-center justify-center bg-[#1A1C1D]">
          <ul className="text-white flex flex-row gap-2 font-bold text-[19.2px] justify-evenly w-full">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3 items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <span className="w-[10px] h-[10px] bg-[#43DA92] rounded-full"></span>
            <p className="text-[#43DA92] font-bold text-[16.8px]">Available</p>
          </div>

          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full w-[48px] h-[48px] flex items-center justify-center ">
            <FaGithub className="text-white" size={20} />
          </button>
          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full w-[48px] h-[48px] flex items-center justify-center">
            <FaXTwitter className="text-white " size={20} />
          </button>
          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full w-[48px] h-[48px] flex items-center justify-center">
            <FaLinkedinIn className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* mobile responsivness */}
      <div className="lg:hidden flex justify-between top-0 ">
        <div className="flex">
          <img src="/img/ARKADEPP.svg" className="w-[60px]" alt="arkade" />
          <button onClick={toggleNav}>
            <img
              src="/img/harmburger.svg"
              className="w-[40px]"
              alt="harmburger"
            />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#43DA92] rounded-full"></span>
          <p className="text-[#43DA92] font-bold text-[16.8px]">Available</p>
        </div>
        {showMobile && (
          <div className="absolute ease-in duration-1000  transition  top-0 left-0 h-full w-[250px] bg-[#222222]">
            <nav className="items-center flex flex-col h-full">
              <div className="">
                <img
                  src="/img/Logo.svg"
                  className="w-[150px] h-[110px]"
                  alt="navbar"
                />
              </div>
              <div className="mb-auto">
                <ul className="text-white flex flex-col gap-6 items-center ">
                  <li className="">
                    <NavLink
                      to="/"
                      className="bg-[#2D2D2D]  px-[2rem] py-[0.5rem] rounded-full "
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="bg-[#2D2D2D]  px-[2rem] py-[0.5rem]  rounded-full"
                      to="/work"
                    >
                      Work
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="bg-[#2D2D2D]  px-[2rem] py-[0.5rem] rounded-full"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="bg-[#2D2D2D]  px-[2rem] py-[0.5rem] rounded-full"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row mb-10 gap-5">
                <button className="bg-black hover:bg-[#2D2D2D]   rounded-full w-[48px] h-[48px] flex items-center justify-center ">
                  <FaGithub className="text-white" size={20} />
                </button>
                <button className="bg-black  hover:bg-[#2D2D2D]  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                  <FaXTwitter className="text-white " size={20} />
                </button>
                <button className="bg-black hover:bg-[#2D2D2D]  rounded-full w-[48px] h-[48px] flex items-center justify-center">
                  <FaLinkedinIn className="text-white" size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
