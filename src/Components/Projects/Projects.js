import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";

const Portfolio = () => {
  // const projects = [
  //     {
  //         id:1,
  //         project_name:'Ashley Homestore',
  //         src:furniture,
  //         description : 'This is a furniture reseal website,which provides some second hand products.This website can be used buyer,seller and admin.',
  //         livesite_href:'https://furniture-reseal.web.app/',
  //         cilent_side:'https://github.com/Tanushri-Das/furniture-reseal-client-side',
  //         server_side:'https://github.com/Tanushri-Das/furniture-reseal-server-side'
  //     },

  //     {
  //         id:2,
  //         project_name:'Tanu Eye Care',
  //         src:eye,
  //         description:'This is a eye disease service website , which provides some related solution.User can get review this all services if he want. ',
  //         livesite_href:'https://doctor-personal-website.web.app/',
  //         cilent_side:'https://github.com/Tanushri-Das/doctor-personal-website',
  //         server_side:'https://github.com/Tanushri-Das/doctor-personal-server-side'
  //     },
  //     {
  //         id:3,
  //         project_name:'Dream CSE',
  //         src:cse,
  //         description:'This is a computer science and enginnering courses learning website.This webiste is helpful for all CSE students.',
  //         livesite_href:'https://learning-platform-da97f.web.app/',
  //         cilent_side:'https://github.com/Tanushri-Das/learning-platform-client-side',
  //         server_side:'https://github.com/Tanushri-Das/learning-platform-server-side'
  //     }
  // ]

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);

  return (
    <div
      name="projects"
      className="w-full bg-gradient-to-b from-purple-500 to-fuchsia-400 pb-24 text-white md:h-full"
    >
      <div className="w-full lg:w-4/5 p-4 mx-auto flex flex-col justify-center h-full md:ml-64 pb-[56px] lg:pb-20">
        <div
          className="pb-8 mt-28 lg:mt-32"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-4xl font-bold inline border-b-4 border-amber-500">
            My Projects
          </p>
          <p
            className="py-10 font-semibold"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Check out some of my projects right here
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  sm:px-0 ">
          {
            projects.map(({id,project_name,home_src,server_side,cilent_side,livesite_href,short_description})=>(
            <div key={id} className="shadow-md shadow-gray-600 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-lg p-4" data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <img src={home_src} alt="" className="rounded-md duration-200 hover:scale-105 w-full h-52"/>
            <h2 className="text-center mt-4 font-bold text-2xl">{project_name}</h2>
            <p className="text-justify mt-4 font-lg text-xl">{short_description}</p>
            
          {/* <button className="btn btn-primary mb-6 lg:block w-80 mr-6 text-lg" key={id} value={project_name}>
            <Link to={`/project/${id}`}>
              View Details
            </Link>
          </button> */}
          <button className="btn btn-primary mb-6 lg:block w-full mt-7 mr-6 text-lg" key={id} value={project_name}>
 
            <Link to={`/project/${id}`}>
              View Details
            </Link>
  
          </button>
          </div>
            ))
        }
         
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
