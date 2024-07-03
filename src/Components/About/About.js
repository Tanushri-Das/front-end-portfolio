import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full h-full bg-[#3944bc] text-white -mt-44 pb-14"
    >
      <div
        id="about"
        className="w-full xl:w-4/5 p-4 md:p-4 mx-auto flex flex-col justify-center h-full project lg:ml-8 xl:ml-40"
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
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-sm md:text-lg mt-8 md:text-justify">
            Hello ,This is Tanushri Das . I have completed my bachelor's degree
            in Computer Science and Engineering from Leading University . After
            that , I started learning front-end web development . During my
            full-stack web development internship , I implemented front-end
            designs using HTML, CSS, JavaScript, and Bootstrap, enhancing the
            user experience and improving site performance . Recently, I
            completed my other internship in front-end web development, working
            with React.js, Tailwind CSS, Swiper.js, and TypeScript to build
            responsive and dynamic user interfaces . I implemented signup and
            sign-in functionality with backend APIs, including email and OTP
            verification . I love to work on web application using technologies
            like Html , Css , Javascript ,Bootstrap , React , Tailwind Css ,
            Firebase Authentication , Shadcn Ui , Typescript, Material Ui ,
            Swagger , Redux Toolkit , Ant Design , REST API, Node.js,
            Express.js, Mongodb . My dream is to become a MERN stack developer,
            where I can efficiently and effectively develop both the front end
            and back end .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
