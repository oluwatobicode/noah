import { useNavigate } from "react-router-dom";

function ProjectIntro() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/work");
  }

  return (
    <div className="mt-10 mb-5  flex flex-col">
      <h1 className="text-[40px] ml-5 font-bold text-[#06FCD8] ">
        My Projects
      </h1>
      <div className=" ml-5 mr-5 flex flex-col lg:flex-row lg:items-center justify-between gap-2">
        <div className="">
          <p className=" text-white text-[20px] text-justify">
            Here's a collection of some recent projects that I've worked on
            alongside talented individuals from various companies around. While
            these projects represent only a small fraction of my overall
            portfolio, they showcase the collaborative effort and diverse
            expertise that went into their creation.
          </p>
        </div>

        <div className="">
          <button
            className="w-32 h-12 text-[#06FCD8] border-[#06FCD8] hover:bg-[#06FDC8] hover:text-[#000] border-[1.5px] rounded-md"
            onClick={onClick}
          >
            See More!
          </button>
        </div>
      </div>

      <div className="mt-5 flex">
        <img
          src="/img/project-one.png"
          alt="Project-one"
          className="lg:w-[315px] lg:h-[200px] w-[99px] h-[70px]"
        />
        <img
          src="/img/project-two.png"
          alt="Project-two"
          className="lg:w-[315px] lg:h-[200px] w-[99px] h-[70px]"
        />
        <img
          src="/img/project-three.png"
          alt="Project-three"
          className="lg:w-[315px] lg:h-[200px] w-[99px] h-[70px]"
        />
        <img
          src="/img/project-four.png"
          alt="Project-four"
          className="lg:w-[315px] lg:h-[200px] w-[99px] h-[70px]"
        />
      </div>
    </div>
  );
}
export default ProjectIntro;
