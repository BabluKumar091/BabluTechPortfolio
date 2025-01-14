import React from "react";
import HotelPic from "../assets/Images/HMS.avif";
import WeatherImg from "../assets/Images/WeatherImg.avif";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 p-4">
      <h1 className="my-4 text-4xl font-thin text-center mb-16">Projects</h1>
      <div className="flex flex-wrap lg:justify-center mb-8">
        <div className="w-full lg:w-1/4 ">
          <img
            src={HotelPic}
            alt=""
            className="w-64 h-54 object-cover rounded-md mb-4"
          />
        </div>
        <div className="w-full max-w-full lg:w-3/4 pl-4">
          <p>
            <span className="text-xl font-thin text-neutral-400 mb-2">
              Hotel Managment Sytem
            </span>
            <h4 className="font-thin mt-2">
              The Hotel Management System is a full-stack web application
              developed using the MERN stack. It streamlines hotel operations by
              offering efficient booking, room management, and customer service
              features. The project leverages MongoDB for data storage, Express
              and Node.js for the backend, and React for a responsive user
              interface. This system was developed as part of a B.Tech. III year
              coursework at Jodhpur Institute of Engineering and Technology.
            </h4>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src={WeatherImg}
            alt=""
            className="w-64 h-54 object-cover rounded-md "
          />
        </div>
        <div className="w-full max-w-full lg:w-3/4 pl-4">
          <p>
            <span className="text-xl font-thin text-neutral-400 mb-2">
              Weather App
            </span>
            <h4 className="font-thin mt-2">
              The Weather App is a responsive web application built using React
              and the OpenWeatherMap API. It allows users to search for
              real-time weather updates by city, displaying detailed information
              such as temperature, humidity, and weather conditions. The app
              features a clean user interface with components like SearchBox and
              WeatherData to enhance user experience. It's an ideal project for
              showcasing API integration and front-end development skills.
            </h4>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src={HotelPic}
            alt=""
            className="w-64 h-54 object-cover rounded-md "
          />
        </div>
        <div className="w-full max-w-full lg:w-3/4 pl-4">
          <p>
            <span className="text-xl font-thin text-neutral-400 mb-2">
              Hotel Managment Sytem
            </span>
            <h4 className="font-thin mt-2">
              The Hotel Management System is a full-stack web application
              developed using the MERN stack. It streamlines hotel operations by
              offering efficient booking, room management, and customer service
              features. The project leverages MongoDB for data storage, Express
              and Node.js for the backend, and React for a responsive user
              interface. This system was developed as part of a B.Tech. III year
              coursework at Jodhpur Institute of Engineering and Technology.
            </h4>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src={HotelPic}
            alt=""
            className="w-64 h-54 object-cover rounded-md "
          />
        </div>
        <div className="w-full max-w-full lg:w-3/4 pl-4">
          <p>
            <span className="text-xl font-thin text-neutral-400 mb-2">
              Hotel Managment Sytem
            </span>
            <h4 className="font-thin mt-2">
              The Hotel Management System is a full-stack web application
              developed using the MERN stack. It streamlines hotel operations by
              offering efficient booking, room management, and customer service
              features. The project leverages MongoDB for data storage, Express
              and Node.js for the backend, and React for a responsive user
              interface. This system was developed as part of a B.Tech. III year
              coursework at Jodhpur Institute of Engineering and Technology.
            </h4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
