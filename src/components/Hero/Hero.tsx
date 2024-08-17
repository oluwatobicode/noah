import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function Hero() {
  const navigate = useNavigate();
  function onClick() {
    navigate("/contact");
  }
  return (
    <div className="ml-5 mt-5 mb-5 w-fit">
      <h1 className="text-[30px] text-white  lg:text-[66px] font-bold">
        <span className="block">Hi,</span>
        <span className="flex gap-1">
          I'm{"  "}
          <span className="flex items-center">
            <img src="/img/A.png" className="w-[30px] lg:w-[66px]" />
            rkade,
          </span>
        </span>
        Blockchain Developer
      </h1>
      <p className="text-[#9A9A9A] leading-[24.38px] font-medium tracking-widest text-[15px] lg:text-[20px] ">
        Smart Contract engineer
      </p>
      <Button type="primary" onClick={onClick}>
        Contact me!
      </Button>
    </div>
  );
}
export default Hero;
