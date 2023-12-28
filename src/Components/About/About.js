import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './About.css'

const About = () => {
  return (
    <div id="about"
      name="about"
      className="w-full h-full md:-mt-10 bg-blue-800 text-white pb-14 md:pb-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:ml-8 xl:ml-56 about">
        <div
          className="pb-4 mt-16 md:mt-24 xl:-mt-24"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold inline border-b-4 border-amber-500">
            About
          </p>
        </div>
        <p
          className="lg:text-xl text-sm md:text-lg mt-7 xl:mt-14 md:text-justify about-p"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {" "}
          Hello , my name is Tanushri Das . Recently I am completeing my
          graduation B.Sc in CSE at Leading University . Then I am started
          learning front end web developement . I love to work on web application
          using technologies like Bootstrap , Javascript , React , Tailwind , Firebase
          Authentication , Nodejs , Express Js , MongoDb . I want to be a passionate
          Full Stack Web Developer.My Goal is to make my dream comes true .
        </p>
        {/* <p
          className="md:hidden lg:block lg:mt-14 xl:hidden md:text-justify"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {" "}
          Hello , my name is Tanushri Das . Recently I am completeing my
          graduation B.Sc in CSE at Leading University . Then I am <br /> started
          learning front end web developement . I love to work on web application
          using technologies like Bootstrap , Javascript ,<br /> React , Tailwind , Firebase
          Authentication , Nodejs , Express Js , MongoDb . I want to be a  passionate
          Full Stack Web Developer. My <br /> Goal is to make my dream comes true .
        </p> */}
        <br />
        <p className="text-xl"></p>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="font-bold my-4 text-xl md:text-2xl whitespace-nowrap lg:text-3xl">Front-end Web Developer</p>

          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            BirthDate : 05 January 1999
          </p>
          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Phone : +8801646471948
          </p>
          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            City : Dhaka , Bangladesh
          </p>
          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Age : 22
          </p>
          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Degree : B.Sc in CSE
          </p>
          <p className="font-medium mb-2 text-sm md:text-xl about-text">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Email : dastanushri402@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
