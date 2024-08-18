import Navbar from "../ui/Navbar";
import Form from "../components/Contact/Form";
import CTA from "../ui/CTA";
import Boye from "../ui/Boye";
import Socials from "../components/Contact/Socials";

function Contact() {
  return (
    <div className="">
      <Navbar />
      <Form
        initialName=""
        initialEmail=""
        initialSubject=""
        initialMessage=""
      />
      <Socials />
      <CTA />
      <Boye />
    </div>
  );
}
export default Contact;
