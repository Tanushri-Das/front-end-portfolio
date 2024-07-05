import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div
      id="experience"
      name="experience"
      className="w-full h-full bg-[#3944bc] text-white pb-10"
    >
      <div className="w-full xl:w-4/5 mx-auto flex flex-col justify-center h-full project lg:ml-8 xl:ml-40 p-4 md:p-4">
        <div
          className="mt-16 md:mt-24 xl:mt-4 mb-8"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl font-bold inline">
            Experience
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="font-bold mb-4 text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            Full Stack Developer
          </p>
          <p className="font-medium mb-2 text-lg whitespace-nowrap">
            Salesqueen Software Solutions
          </p>
          <p className="font-medium mb-2 text-lg whitespace-nowrap">
            Chennai, Tamil Nadu, India (Remote)
          </p>
          <p className="font-medium mb-2 text-lg about-text">
            From February 2023 - April 2023
          </p>
          <p className="font-medium text-lg sm:text-xl md:text-xl work">
            I implemented frontend designs using HTML, CSS, JavaScript, and
            Bootstrap, enhancing the user experience and improving site
            performance.
          </p>
        </div>
        <div className="mt-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <p className="font-bold mb-4 text-lg sm:text-xl md:text-2xl whitespace-nowrap">
              Frontend Developer (React.js)
            </p>
            <p className="font-medium mb-2 text-lg whitespace-nowrap">
              GlobFluent VidyaTech Pvt. Ltd.
            </p>
            <p className="font-medium mb-2 text-lg whitespace-nowrap">
              Delhi, India (Remote)
            </p>
            <p className="font-medium mb-2 text-lg about-text">
              From May 2024 - June 2024
            </p>
            <p className="font-medium text-lg sm:text-xl md:text-xl work">
              I worked with React.js, Tailwind CSS, Swiper.js, and TypeScript to
              build responsive and dynamic user interfaces. I implemented signup
              and sign-in functionality with backend APIs, including email and
              OTP verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
