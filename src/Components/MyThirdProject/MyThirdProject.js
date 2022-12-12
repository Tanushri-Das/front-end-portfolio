
import React from "react";


const MyThirdProject = ({ project }) => {
  const {
    project_name,
    home_src1,
    home_src2,
    home_src3,
    home_src4,
    sign,
    log,
    courses_1,
    courses_2,
    courses_3,
    courses_4,
    pre_1,
    pre_2,
    dawn_1,
    dawn_2,
    blog,
    livesite_href,cilent_side,server_side
  } = project;

  console.log(sign);
  return (
    <div>
      <div>
        <h1 className="block font-bold py-12 text-2xl">Screenshot of {project_name}</h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <img src={home_src1} alt="" />
          <img src={home_src2} alt="" />
          <img src={home_src3} alt="" />
          <img src={home_src4} alt="" />
          <img src={sign} alt="" />
          <img src={log} alt="" />
          <img src={courses_1} alt="" />
          <img src={courses_2} alt="" />
          <img src={courses_3} alt="" />
          <img src={courses_4} alt="" />
          <img src={pre_1} alt="" />
          <img src={pre_2} alt="" />
          <img src={dawn_1} alt="" />
          <img src={dawn_2} alt="" />

          <img src={blog} alt="" />
        </div>
        <p className="font-bold py-6 text-2xl">Description :</p>
        <li className="font-semibold">This website is helpful for CSE students.Some CSE major courses ideas are given in this website.</li>
        <li className="font-semibold">User can signup with email & password and login to this website using Google , Github and also email & password with Firebase Authentication .</li>
          <li className="font-semibold">All the courses and the course related basic ideas are given on the courses page.</li>
          <li className="font-semibold">If you click on the button of the card of each course , you can know more details of those courses.</li>
          <li className="font-semibold">There is a premium button on the card of this page .</li>
          <li className="font-semibold">If you click on the premium button , you will go to the details page of that course.</li>
          <li className="font-semibold">If he want , he can dawnload the that courses details page .</li>
          
          <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-3 lg:gap-0">
             
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={livesite_href}target="_blank" rel="noreferrer">Live Site</a></button>
              
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={cilent_side}target="_blank" rel="noreferrer">Client Side</a></button>
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={server_side}target="_blank" rel="noreferrer">Server Side</a></button>
            </div>
      </div>
    </div>
  );
};

export default MyThirdProject;
