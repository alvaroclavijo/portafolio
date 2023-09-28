import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="/images/your-photo.jpg" // Replace with your photo URL
            alt="Your Name"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-lg md:text-xl">
            Web Developer | Designer | Creative Thinker
          </p>
          <p className="mt-4">
            Welcome to my portfolio website. I'm passionate about creating
            beautiful and functional websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
