import Projects from "../components/Projects/Projects";
import WorkExpirence from "../components/Projects/WorkExpirence";
import Boye from "../ui/Boye";
import CTA from "../ui/CTA";
import Navbar from "../ui/Navbar";

function Work() {
  return (
    <div className="">
      <Navbar />
      <WorkExpirence />
      <Projects />
      <CTA />
      <Boye />
    </div>
  );
}
export default Work;
