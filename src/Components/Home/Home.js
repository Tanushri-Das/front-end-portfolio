import React from "react";
import myimg from "../.././assets/heroImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const links = [
    {
      id:1,
      child:(
          <><FaLinkedin size={30}/></>
      ),
      href:'https://www.linkedin.com/in/tanushri-das/',
      style:'rounded-tr-md'
  },
  {
    id:2,
    child:(
        <><FaGithub size={30}/></>
    ),
    href:'https://github.com/Tanushri-Das',
},
{
    id:3,
    child:(
        <><HiOutlineMail size={30}/></>
    ),
    href:'mailto:dastanushri402@gmail.com',
},
  
  ];
  const myresume = [
    {
      id: 1,
      child:(
        <>Dawnload Resume <BsFillPersonLinesFill size={30}/></>
      ),
      href: "/Tanu.pdf",
      download: true,
    },
  ]
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-purple-500 to-fuchsia-400 mt-0"
    >
      {/*max-w-screen-lg flex flex-col items-center justify-center md:flex-row*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center h-screen px-4 md:ml-64 overflow-hidden pb-24 lg:pb-0 lg:-mt-20">
        {/* flex flex-col justify-center */}
        <div
          className="flex flex-col justify-center h-full"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold text-amber-400/75">
            Hi There ...{" "}
          </h1>
          <h2 className="font-extrabold text-4xl lg:text-6xl text-white my-8">
            This is{" "}
            <span className="text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
              Tanushri Das
            </span>
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            I'm a{" "}
            <span className="text-violet-900" style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
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

          <div className="lg:hidden mt-12 grid grid-cols-3 justify-center items-center ml-16">
            {links.map(({ id,child, href, download }) => (
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
          <div className="lg:hidden mt-12 grid grid-cols-1 justify-center items-center ml-[165px]">

            {
               myresume.map(({id,child,href,style,download})=>(<button key={id} className={"flex justify-between items-center bg-indigo-500 w-60 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>
                <a className='flex justify-between items-center w-full text-white' href={href} download={download} target="_blank" rel="noreferrer">{child}</a>
            </button>))
            }

            
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
            className="rounded-2xl mx-auto w-[300px] mt-12 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
