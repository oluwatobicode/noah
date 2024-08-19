import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="ml-5 mr-5  mb-10 mt-10 w-fit">
      <h1 className="text-white font-bold text-[30px] lg:text-[40px]">
        Socials
      </h1>
      <div className="flex items-center justify-center gap-5">
        <div className="flex lg:flex-col flex-col gap-24">
          <div className="flex gap-5 ">
            <div className="bg-[#000000] w-fit  p-5  rounded-md flex items-center justify-center">
              <a href="https://x.com/01_arkade" target="blank">
                <FaXTwitter
                  size={40}
                  className="md:w-[30px] md:h-[25px]  w-[10px] h-[10px]"
                  color="#fff"
                />
              </a>
            </div>
            <p className="text-[#06FCD8] font-bold lg:text-3xl text-[12px] flex gap-2 items-center justify-center">
              <span className="lg:text-5xl text-white">-</span>@01_arkade
            </p>
          </div>

          <div className="flex gap-5">
            <div className="bg-[#000000] w-fit  p-5  rounded-md flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/noah-biliamin-579743211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <FaLinkedinIn
                  size={30}
                  className="md:w-[30px] md:h-[25px]  w-[10px] h-[10px]"
                  color="#fff"
                />
              </a>
            </div>
            <p className="text-[#06FCD8] font-bold lg:text-3xl text-[12px] flex gap-2 items-center justify-center">
              <span className="lg:text-5xl text-white">-</span>@Noah Billamin
            </p>
          </div>
        </div>

        <div className="flex  items-center justify-center  lg:flex-col flex-col gap-24">
          <div className="flex gap-5">
            <div className="bg-[#000000] w-fit p-5  rounded-md flex items-center justify-center">
              <a href="https://github.com/yomidep" target="blank">
                <FaGithub
                  size={30}
                  href="www.gooogle.com"
                  className="md:w-[30px] md:h-[25px]  w-[10px] h-[10px]"
                  color="#fff"
                />
              </a>
            </div>
            <p className="text-[#06FCD8] font-bold lg:text-3xl text-[12px] flex gap-2 items-center justify-center">
              <span className="lg:text-5xl text-white">-</span>@01_arkade
            </p>
          </div>

          <div className="flex gap-5">
            <div className="bg-[#000000] w-fit p-5  rounded-md flex items-center justify-center">
              {/* noah put in the link here */}
              <a href="">
                <img
                  src="/img/warpacster.svg"
                  className="md:w-[30px] md:h-[25px]  w-[10px] h-[10px]"
                  alt="warpacster"
                />
              </a>
            </div>
            <p className="text-[#06FCD8] font-bold lg:text-3xl text-[12px]  flex gap-2 items-center justify-center">
              <span className="lg:text-5xl text-white">-</span>@arkade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Socials;
