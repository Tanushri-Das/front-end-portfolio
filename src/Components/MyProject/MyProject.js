import React from "react";
import { FaArrowAltCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyProject = ({project}) => {
  const { id, home_src,project_name, short_description } = project;
  return (
    <div className="">
      <div className="card w-10/12 bg-base-100 shadow-xl p-6">
        <figure>
        <img
                className="rounded-lg max-w-full h-[340px]"
                src={home_src}
                alt="services"
              />
        </figure>

        <h2 className="text-lg font-bold text-violet-500 mt-5">{project_name}</h2>
        <p>{short_description}</p>
        <div className="card-actions">
            <Link to={`/myprojects/${id}`}>
            <button className="btn btn-outline btn-info">View Details</button>
            </Link>
            
          </div>
      </div>
    </div>
  );
};

export default MyProject;
