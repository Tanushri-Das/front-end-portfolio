import React from "react";
import myimg from "../.././assets/heroImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { HiOutlineMail } from "react-icons/hi";
import "./Home.css";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tanushri-das/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Tanushri-Das",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:dastanushri402@gmail.com",
    },
  ];
  const myresume = [
    {
      id: 1,
      child: (
        <>
          Dawnload Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "Tanushri Das - Junior Frontend Developer Latest Resume.pdf",
      download: true,
    },
  ];
  return (
    <div name="home" className="xl:h-[90vh] home w-full bg-[#3944bc] pt-8 md:pt-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center xl:h-[90vh]  xl:ml-40 overflow-hidden p-4 md:p-4 pb-24 lg:pb-0 lg:-mt-20 xl:mt-0 mb-40 md:mb-40">
        <div
          className="flex flex-col justify-center h-full info-lg"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 md:mt-8 lg:mt-16 xl:-mt-[270px] font-bold text-white">
            Hi There ...{" "}
          </h1>
          <h2 className="font-semibold text-xl md:text-3xl text-white my-6">
            This is Tanushri Das
          </h2>
          <h2 className="text-xl md:text-3xl font-medium text-white">
            I am a{" "}
            <span className="text-white" style={{ fontWeight: "medium" }}>
              <Typewriter
                words={[
                  "Front-End Web Developer",
                  "React Developer",
                  "Javascript Developer",
                  "Self Believer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
          </h2>

          <div className="lg:hidden mt-16 lg:mt-44 grid grid-cols-3 justify-center items-center linkedin-social-links">
            {links.map(({ id, child, href, download }) => (
              <button key={id}>
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </button>
            ))}
          </div>
          <div className="lg:hidden mt-16 grid grid-cols-1 justify-center items-center resume-btn">
            {myresume.map(({ id, child, href, style, download }) => (
              <button
                key={id}
                className={
                  "flex justify-between items-center w-60 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
                  " " +
                  style
                }
              >
                <a
                  className="flex justify-between items-center w-full text-white"
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </button>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={myimg}
            alt="my profile"
            className="rounded-lg mx-auto w-[300px] mt-16 lg:mt-52 xl:-mt-48 my-pro-img"
          />
        </div>
      </div>
      <div className="hidden xl:hidden mt-16 lg:mt-20 linkedin-social-links-two">
        <div className="grid grid-cols-3 justify-center items-center">
          {links.map(({ id, child, href, download }) => (
            <button key={id}>
              <a
                className="flex justify-between items-center w-full text-white"
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </button>
          ))}
        </div>
      </div>
      <div className="hidden xl:hidden mt-16 resume-btn-two">
        <div className="grid grid-cols-1 justify-center items-center">
          {myresume.map(({ id, child, href, style, download }) => (
            <button
              key={id}
              className={
                "flex justify-between items-center w-60 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
                " " +
                style
              }
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
