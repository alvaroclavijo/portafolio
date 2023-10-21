import React from "react";
import FixedWidthContainer from "./UI/FixedWidthContainer";

const Banner: React.FC = () => {
  return (
    <section id="banner" className="relative w-screen h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="video/banner_background.mp4" type="video/mp4" />
      </video>
      <FixedWidthContainer className="relative flex flex-row h-full align-center items-center justify-evenly">
        <div className="h-3/4">
          <img
            src="img/banner_photo.png"
            alt="Your Banner"
            className="h-full object-cover object-left rounded-full"
          />
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-semibold">Alvaro Clavijo</h1>
          <p className="text-lg mt-4">Full-stack developer</p>
          <p className="mt-4">
            Self-driven Full-stack developer with focus React.js
          </p>
          {/* <a
            href="#_"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Projects</span>
          </a> */}
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-16 py-8 font-mono font-medium text-xl tracking-tighter text-white bg-gray-800 rounded-lg group overflow-hidden transition duration-300 ease-in-out hover:bg-green-500 mt-12"
          >
            <span className="absolute w-full h-full transition-transform duration-500 ease-out transform -translate-y-full group-hover:translate-y-0 text-xs">
              Have fun with my
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative z-10">Projects</span>
          </a>
        </div>
      </FixedWidthContainer>
    </section>
  );
};

export default Banner;
