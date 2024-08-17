import work from "../../data/work.json";

function WorkExpirence() {
  return (
    <div className="m-5">
      <div className="mb-10">
        <h1 className="text-[#06FCD8] font-bold text-[25px] lg:text-[30px] mb-2">
          Work Experience
        </h1>
        <p className="text-white font-semibold text-[10px] lg:text-3xl">
          Here is a list of some of the places I’ve worked as a backend
          developer, blockchain developer and a smart contract developer.
        </p>
      </div>

      <div className="text-justify">
        {work.map((el, index) => (
          <div className="mb-5" key={index}>
            <h1 className="text-[#06FCD8] font-bold lg:text-[25px] text-[10.96px] mb-2">
              {el.name}
            </h1>
            <p className="text-white lg:text-[20px] text-[15px] font-medium lg:leading-[28.13px] leading-[20.2px]">
              {el.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WorkExpirence;
