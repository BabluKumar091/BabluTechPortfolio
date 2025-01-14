import React from "react";
import aboutPic from "../assets/Images/AboutPic.jpg";

const About = () => {
  return (
    <div className="border-b pb-4 border-neutral-900">
      <h2 className="text-4xl my-20 text-center">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutPic} alt="" className="rounded-md" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="tracking-tighter font-light py-6">
              I'm Bablu Kumar, a Full Stack Developer with expertise in the MERN
              stack (MongoDB, Express.js, React, and Node.js). I specialize in
              creating responsive, dynamic web applications and managing both
              the frontend and backend efficiently. With a focus on clean,
              scalable code, I have successfully delivered various robust
              solutions. I’m always eager to explore new technologies and
              continuously improve my skill set. My goal is to build
              high-performance applications that provide an excellent user
              experience and meet the needs of modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
