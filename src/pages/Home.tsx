import Navbar from "../ui/Navbar";
import Hero from "../components/Hero/Hero";
import ProjectIntro from "../components/Hero/ProjectIntro";
import Into from "../components/Hero/Into";
import CTA from "../ui/CTA";
import Boye from "../ui/Boye";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectIntro />
      <Into />
      <CTA />
      <Boye />
    </div>
  );
}
export default Home;
