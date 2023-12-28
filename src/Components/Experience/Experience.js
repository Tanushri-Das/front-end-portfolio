import React from "react";
import './Experience.css'

const Experience = () => {
  return (
    <div id="experience"
      name="experience"
      className="w-full h-full bg-blue-800 md:-mt-10 text-white pb-14 md:pb-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:ml-8 xl:ml-56 about">
        <div
          className="pb-4 mt-16 md:mt-24 xl:mt-4"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold inline border-b-4 border-amber-500">
            Experience
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="font-bold my-4 text-lg sm:text-xl md:text-2xl whitespace-nowrap lg:text-3xl">
            Salesqueen Software Solutions
          </p>
          <p className="font-bold my-4 text-lg sm:text-xl md:text-xl whitespace-nowrap">
            Chennai, Tamil Nadu, India
          </p>
          <p className="font-bold my-4 text-lg sm:text-xl md:text-xl whitespace-nowrap">
            Full Stack Developer
          </p>
          <p className="font-bold my-4 text-lg sm:text-xl md:text-xl whitespace-nowrap">
            From February 2023 - April 2023
          </p>
          <p className="font-bold my-4 text-lg sm:text-xl md:text-xl work">
            Implemented frontend design with Html , Css , Bootstrap and some use
            of jquery plugin with responsive pixel perfect website .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
