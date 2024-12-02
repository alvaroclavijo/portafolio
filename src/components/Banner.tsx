import React from "react";
import FixedWidthContainer from "./UI/FixedWidthContainer";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section id="banner" className="relative w-screen h-screen flex">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="video/banner_background.mp4" type="video/mp4" />
      </video>
      <FixedWidthContainer className="relative flex flex-col lg:flex-row align-center items-center gap-5 lg:gap-10">
        <div className="w-[90%] lg:h-[60%] aspect-square lg:aspect-auto">
          <Image
            width={300}
            height={300}
            src="/img/banner_photo.png"
            alt="Bnner"
            className="h-full w-full object-cover object-left rounded-full"
          />
        </div>

        <div className="text-white flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-semibold">Alvaro Clavijo</h1>
          <p className="text-lg mt-4">Full-stack developer</p>
          <p className="mt-4">
            I am a full-stack developer with over 5 years of experience.
          </p>
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
