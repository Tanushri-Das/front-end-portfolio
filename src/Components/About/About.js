import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b lg:-mt-10 from-purple-500 to-fuchsia-400 text-white pb-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          className="pb-4 mt-28 lg:mt-32"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-4xl font-bold inline border-b-4 border-amber-500">
            About
          </p>
        </div>
        <p
          className="lg:text-xl text-sm mt-20 text-justify"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {" "}
          Hello,my name is Tanushri Das.Recently I am completeing my
          graduation B.Sc in CSE at Leading University.Then I am started
          learning front end web developement.I love to work on web application
          using technologies like Bootstrap,Javascript,React,Tailwind,Firebase
          Authentication,Nodejs,Express Js,MongoDb.I want to be a passionate
          Full Stack Web Developer.My Goal is to make my dream comes true .
        </p>
        <br />
        <p className="text-xl"></p>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h3 className="font-bold my-6 text-3xl">Front End Web Developer</h3>

          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            BirthDate : 05 January 1999
          </h4>
          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Phone : +8801646471948
          </h4>
          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            City : Dhaka , Bangladesh
          </h4>
          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Age : 22
          </h4>
          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Degree : B.Sc in CSE
          </h4>
          <h4 className="font-semibold mb-2 text-xl">
            <MdOutlineKeyboardArrowRight size={25} className="inline mr-2" />
            Email : dastanushri402@gmail.com
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
