import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <div className=" mt-5 ml-5 mr-5 ">
      <div className="flex flex-row items-center justify-between max-w-full ">
        <div className="mr-auto">
          <img
            src="/img/Logo.svg"
            className="w-[220px] h-[110px]"
            alt="navbar"
          />
        </div>

        <nav className="mr-auto w-[400px] h-[45px] rounded-3xl p-1  flex items-center justify-center bg-[#1A1C1D]">
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

          <button className="bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center ">
            <FaGithub className="text-white" size={20} />
          </button>
          <button className="bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center">
            <FaXTwitter className="text-white " size={20} />
          </button>
          <button className="bg-black rounded-full w-[48px] h-[48px] flex items-center justify-center">
            <FaLinkedinIn className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
