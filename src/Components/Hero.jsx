import React from "react";
import proPic from '../assets/Images/black.jpg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-40 lg:mb-35 w-full overflow-x-hidden">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2 overflow-hidde">
          <div className="w-full flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl font-thin tracking-tighter lg:mt-16 lg:text-6xl">
              Bablu Kumar
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent">
              Full Stack Developer
            </span>
            <p className="my-4 py-4 tracking-tighter font-light max-w-xl w-full">
              I am a skilled Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). With expertise in building dynamic, responsive web applications, I handle both frontend and backend development seamlessly. My experience includes designing and implementing robust solutions for various projects. Passionate about learning and delivering efficient, scalable code, I continuously strive to enhance my skills.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
              <img src={proPic} alt="" className="w-[300px] rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
