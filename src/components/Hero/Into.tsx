function Into() {
  return (
    <div className="m-5 flex lg:flex-row flex-col justify-center gap-6 w-auto">
      <div className="w-fit text-left">
        <h1 className="text-[#06FCD8] lg:text-[64px] text-[30px] font-bold">
          What I&apos;m into?
        </h1>
        <p className="text-white mb-5 mt-2 text-justify lg:text-[20px] text-[15px] font-medium">
          Full-stack developer with an unwavering belief in the transformative
          power of decentralized technology. I'm passionate about leveraging
          blockchain to build a more equitable, transparent, and efficient
          future. My coding journey began with a deep dive into JavaScript,
          Python, and React.js, crafting user-centric web applications.
        </p>
        <p className="text-white text-justify lg:text-[20px] text-[15px]  font-medium">
          Now, I'm channeling that experience into creating dApps and smart
          contracts that address real-world challenges, from supply chain
          inefficiencies to financial inclusion. I'm constantly expanding my
          skillset, delving into Rust and Solidity, and staying on the cutting
          edge of blockchain advancements. If you share my passion for
          harnessing this technology for positive change, I'd love to
          collaborate and explore the possibilities together. Let's build
          something meaningful.
        </p>
      </div>

      <div className="flex flex-wrap lg:gap-24 gap-9 justify-between">
        <div className="flex flex-col items-center justify-center">
          <img src="/img/javascript.png" alt="javascript" className="w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Javascript
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/img/rust.jpg" alt="rust" className="rounded-full w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Rust
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/img/hardhat.jpg" alt="hardhat" className="w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Hardhat
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/img/anchor.jpg" alt="anchor" className="w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Anchor
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/img/typescript.jpg" alt="typescript" className="w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Typescript
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/img/python.jpg" alt="python" className="w-20" />
          <span className="text-[#06FCD8] mt-3 text-[15px] font-bold">
            Python
          </span>
        </div>
      </div>
    </div>
  );
}
export default Into;
