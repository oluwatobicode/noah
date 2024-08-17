const curYear = new Date();

function Boye() {
  return (
    <div className="ml-5 mr-5 flex items-center justify-between mb-5">
      <p className="text-white font-bold text-[10px] lg:text-[15px]">
        &copy; {curYear.getFullYear()} - Designed by 🅱oyethecreator
      </p>
      <p className="text-white font-bold text-[10px] lg:text-[15px]">
        adeboyeblessing05@gmail.com
      </p>
    </div>
  );
}
export default Boye;
