type ButtonProps = {
  el: {
    projectName: string;
    projectLogo: string;
    projectImg: string;
    projectDesc: string;
    projectLink: string;
  };
};

function ProjectList({ el }: ButtonProps) {
  return (
    <div className="mb-20 max-w-[950px]">
      <div className="flex  items-center justify-between bg-[#111313] w-full rounded-md">
        <div className="p-10">
          <img src={el.projectLogo} alt="project-logo" />
          <h1 className="text-[#06FCD8] font-bold lg:text-[30px] text-[7.4px] ">
            {el.projectName}
          </h1>
        </div>
        <div className="">
          <img src={el.projectImg} alt="" />
        </div>
      </div>
      <p className="text-white mt-2 font-medium lg:text-[25px] text-[10.34px] text-justify lg:leading-[44.53px] leading-[12.12px] w-fit">
        {el.projectDesc}
      </p>
    </div>
  );
}
export default ProjectList;
