import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-screen px-4 lg:px-20 bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606]">
      <div className="flex flex-col z-50 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#40e2e7] mt-4">
          KASHIF IMRAN,
        </h1>
        <h3 className="text-gray-400 text-xl lg:text-2xl mt-2">
          A front-end developer.
        </h3>
        <p className="text-white tracking-widest font-mono font-thin mt-4">
          Passionate about creating visually stunning and <br />
          user-friendly websites. <br />
          Explore my portfolio to see how I turn ideas <br />
          into interactive experiences!
        </p>

        <div className="mt-6 text-white flex justify-center lg:justify-start gap-4">
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 hover:animate-bounce"
              src="/discord.png"
              alt="Discord"
            />
          </a>
          <a
            href="https://www.facebook.com/Kashi13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 hover:animate-spin"
              src="/facebook.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/kashif.malik365/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-7 hover:animate-spin"
              src="/instagram.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 hover:animate-spin"
              src="/linkdn.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/settings/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 hover:animate-spin"
              src="/github.png"
              alt="Github"
            />
          </a>
        </div>

        <a href="/cvpdf.pdf" download>
          <button className="h-10 w-full lg:w-[280px] shadow-md bg-[#40e1e76b] mt-8 rounded hover:translate-y-1 hover:bg-[#2b9094] text-white transition duration-200">
            Download CV
          </button>
        </a>
      </div>

      <div className="flex justify-center w-full lg:w-1/3 mb-8 lg:mb-0">
        <img
          className="object-contain max-h-[300px] lg:max-h-[400px] w-auto"
          src="/tiger.png"
          alt="Tiger"
        />
      </div>
    </div>
  );
};

export default Hero;
