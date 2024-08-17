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
          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center ">
            <a href="https://github.com/yomidep" target="blank">
              <FaGithub className="text-white " size={20} />
            </a>
          </button>
          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center">
            <a href="https://x.com/01_arkade" target="blank">
              <FaXTwitter className="text-white " size={20} />
            </a>
          </button>
          <button className="bg-black hover:bg-[#2D2D2D]  rounded-full lg:w-[48px] w-[35px] h-[35px] lg:h-[48px] flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/noah-biliamin-579743211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="blank"
            >
              <FaLinkedinIn className="text-white" size={20} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CTA;
