import { useState } from "react";
import Button from "../../ui/Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onsubmit(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name,
        email,
        subject,
        message,
      })
    );
  }

  return (
    <div className="m-5">
      <div className="mb-2 w-fit">
        <h1 className="text-white text-[20px] lg:text-[35px]  font-bold">
          Contact Me!
        </h1>
        <p className="text-white text-[16px] lg:text-[30px]  font-light">
          Let’s Create Amazing Things Together
        </p>
      </div>
      <form action="" className="mt-10" onSubmit={onsubmit}>
        <div className="flex gap-5">
          <input
            type="text"
            name=""
            id=""
            className="bg-[#2D2D2D] h-14 w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px] placeholder:pl-5 p-5 text-white "
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name=""
            id=""
            className="bg-[#2D2D2D] h-14 w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-5 p-5 text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-[#2D2D2D] h-16 mb-5 w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-5 p-5 text-white"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-[#2D2D2D] h-[250px] w-full placeholder:text-[#FFFFFF66] text-[16px] lg:text-[30px]  placeholder:pl-5 p-5 text-white active:border-none active:border-transparent"
          />
        </div>
        <Button type="primary">Submit</Button>
      </form>
    </div>
  );
}
export default Form;
