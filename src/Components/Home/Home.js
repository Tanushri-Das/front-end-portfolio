import React from "react";
import myimg from "../.././assets/heroImage.jpg";

import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-purple-500 to-fuchsia-400"
    >
        {/*max-w-screen-lg flex flex-col items-center justify-center md:flex-row*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center h-screen px-4 md:ml-64 overflow-hidden pb-24 lg:pb-0">
        {/* flex flex-col justify-center */}
        <div className="flex flex-col justify-center h-full mt-44 md:mt-0" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Hi,Everyone !</h1>
          <h2 className="font-extrabold text-4xl lg:text-6xl text-white my-8">This is <span className="text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">Tanushri Das</span></h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">I'm a <span className="text-violet-900" style={{fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Front-End Web Developer', 'React Developer', 'Javascript Developer', 'Self Believer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span> </h2>
          
          <p className="text-gray-500 py-4 max-w-md">
           
          </p>
          {/* <div>
            <button className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-violet-900 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div> */}
        </div>

        <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <img
            src={myimg}
            alt="my profile"
            className="rounded-2xl mx-auto w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
