import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="ml-5 mr-5 mb-10 mt-10 w-fit">
      <h1 className="text-white font-bold lg:text-[40px]">Socials</h1>
      <div className="flex justify-between mt-10 mb-10">
        <div className="flex items-center justify-center gap-5">
          <div className="bg-[#000000] p-5  rounded-md flex items-center justify-center">
            <FaXTwitter size={30} className="w-[30px] h-[25px]" color="#fff" />
          </div>
          <p className="text-[#06FCD8] font-bold lg:text-3xl text-[7px] flex gap-2 items-center justify-center">
            <span className="lg:text-5xl text-white">-</span>@01_arkade
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="bg-[#000000]   p-5  rounded-md flex items-center justify-center">
            <FaGithub size={30} className="w-[30px] h-[25px]" color="#fff" />
          </div>
          <p className="text-[#06FCD8] font-bold lg:text-3xl flex gap-2 items-center justify-center">
            <span className="lg:text-5xl text-white">-</span>@01_arkade
          </p>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex items-center justify-center gap-5">
          <div className="bg-[#000000]  w-fit p-5  rounded-md flex items-center justify-center">
            <FaLinkedinIn
              size={30}
              className="w-[30px] h-[25px]"
              color="#fff"
            />
          </div>
          <p className="text-[#06FCD8] font-bold lg:text-2xl flex gap-2 items-center justify-center">
            <span className="lg:text-5xl text-white">-</span>@Noah Billamin
          </p>
        </div>

        <div className="flex gap-5">
          <div className="bg-[#000000] p-3 rounded-md flex items-center justify-center">
            <img src="/img/warpacster.png" alt="warpacster" />
          </div>
          <p className="text-[#06FCD8] font-bold lg:text-3xl flex gap-2 items-center justify-center">
            <span className="lg:text-5xl text-white">-</span>@arkade
          </p>
        </div>
      </div>
    </div>
  );
}
export default Socials;
