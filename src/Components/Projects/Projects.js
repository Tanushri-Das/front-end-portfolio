import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);

  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-purple-500 to-fuchsia-400 pb-14 md:pb-24 text-white md:h-full"
    >
      <div className="w-full xl:w-4/5 p-4 mx-auto flex flex-col justify-center h-full project lg:ml-8 xl:ml-56">
        <div
          className="pb-8 mt-16 md:mt-24 xl:mt-32"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl font-bold inline border-b-4 border-amber-500">
            My Projects
          </p>
          <p
            className="py-6 md:py-10 font-semibold"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Check out some of my projects right here
          </p>
        </div>

        <div className="grid myproject grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:px-0 ">
          {projects.map(
            ({
              id,
              project_name,
              home_src,tech,
              server_side,
              cilent_side,
              livesite_href,
              short_description,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg p-4 project-card"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={home_src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full h-52"
                />
                <h2 className="text-center mt-4 font-bold text-2xl">
                  {project_name}
                </h2>
                <p className="text-justify mt-4 font-lg text-xl">
                  {short_description}
                </p>
                <p className="font-medium mt-1">
                Technology Used : {tech}
                </p>
                
                {/* <button
                  className="btn btn-primary mb-6 lg:block w-full mt-7 mr-6 text-lg"
                  key={id}
                  value={project_name}
                >
                  <Link to={`/project/${id}`}>View Details</Link>
                </button> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 gap-3 lg:gap-7 xl:gap-2 mt-4 ">
                  <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full font-semibold xl:w-full 2xl:w-auto px-2 py-2 duration-200 hover:scale-105 text-white">
                    <a href={livesite_href} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </button>

                  <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full px-2 xl:w-full 2xl:w-auto font-semibold py-2 duration-200 hover:scale-105 text-white">
                    <a href={cilent_side} target="_blank" rel="noreferrer">
                      Client
                    </a>
                  </button>
                  <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full xl:w-full 2xl:w-auto font-semibold px-2 py-2 duration-200 hover:scale-105 text-white">
                    <a href={server_side} target="_blank" rel="noreferrer">
                      Server
                    </a>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
