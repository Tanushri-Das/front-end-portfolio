
import React from "react";


const MySecond = ({ project }) => {
  const {
    project_name,
    home1,
    home2,
    home3,
    home4,
    sign,
    log,
    details,
    see1,
    see2,
    blog,
    mine,
    add,
    livesite_href,cilent_side,server_side
  } = project;

  console.log(sign);
  return (
    <div>
      <div>
        <h1 className="block font-bold py-12 text-2xl">Screenshot of {project_name}</h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <img src={home1} alt="" />
          <img src={home2} alt="" />
          <img src={home3} alt="" />
          <img src={home4} alt="" />
          <img src={sign} alt="" />
          <img src={log} alt="" />
          <img src={details} alt="" />
          
          <img src={see1} alt="" />
          <img src={see2} alt="" />
          <img src={mine} alt="" />
          <img src={add} alt="" />
          <img src={blog} alt="" />
        </div>
        <p className="font-bold py-6 text-2xl">Description :</p>
        <li className="font-semibold">This is a doctor's personal website ,who can services some eye related treatment.</li>
        <li className="font-semibold">User can signup and login to this website using Google , email & password with Firebase Authentication .</li>
          <li className="font-semibold">On the service details page , the user can see individual reviews for each service.</li>
          <li className="font-semibold">User can give review for every services.</li>
          <li className="font-semibold">User can see all her given reviews for all services in my reviews page .</li>
          <li className="font-semibold">User can add services </li>
          <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-3 lg:gap-0">
             
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={livesite_href}target="_blank" rel="noreferrer">Live Site</a></button>
              
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={cilent_side}target="_blank" rel="noreferrer">Client Side</a></button>
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={server_side}target="_blank" rel="noreferrer">Server Side</a></button>
            </div>
      </div>
    </div>
  );
};

export default MySecond;
