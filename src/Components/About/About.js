import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full h-full bg-blue-800 text-white -mt-44 pb-14"
    >
      <div
        id="about"
        className="w-full xl:w-4/5 p-4 mx-auto flex flex-col justify-center bg-blue-800 h-full lg:ml-8 xl:ml-56 border-2 border-white"
      >
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold inline">
            About
          </p>
        </div>
        <p
          className="lg:text-xl text-sm md:text-lg mt-8 md:text-justify"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {" "}
          Hello , my name is Tanushri Das . Recently I am completeing my
          graduation B.Sc in CSE at Leading University . Then I am started
          learning front end web developement . I love to work on web
          application using technologies like Bootstrap , Javascript , React ,
          Tailwind , Firebase Authentication , Nodejs , Express Js , MongoDb . I
          want to be a passionate Full Stack Web Developer.My Goal is to make my
          dream comes true .
        </p>
      </div>
    </div>
  );
};

export default About;
