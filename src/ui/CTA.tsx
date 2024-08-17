import Button from "./Button";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

function CTA() {
  return (
    <div className="ml-5 mr-5 mb-5  p-3 lg:p-10 border-solid max-w-full border border-[#06FCD8]">
      <p className="text-white lg:text-lg text-[12.95px]">Work with me</p>
      <h1 className="text-white font-bold lg:text-[30px] text-[11.9px]">
        Let’s Create Amazing Things Together
      </h1>
      <Button icon={<MdOutlineArrowOutward />} type="primary">
        Hire Me
      </Button>
      <div className="flex items-center  justify-between  mt-10">
        <img src="/img/Logo.svg" className="w-[100px] lg:w-[200px] mr-auto" />
        <div className="flex items-center  justify-between gap-2">
          <Button link="" type="secondary">
            Download CV
          </Button>
          <button className="bg-black rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center ">
            <FaGithub className="text-white " size={20} />
            <a href="" target="blank"></a>
          </button>
          <button className="bg-black rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center">
            <FaXTwitter className="text-white " size={20} />
            <a href="" target="blank"></a>
          </button>
          <button className="bg-black rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center">
            <FaLinkedinIn className="text-white" size={20} />
            <a href="" target="blank"></a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CTA;
