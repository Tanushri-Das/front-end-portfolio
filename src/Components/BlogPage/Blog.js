import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SocialLinks from "../SocialLinks/SocialLinks";
const Blog = () => {
  return (
    <div>
      <div
        name="about"
        className="w-full h-full bg-gradient-to-b  bg-white text-purple-500 pb-24"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div
            className="pb-4 mt-28 lg:mt-24 lg:mb-10 text-center"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-4xl font-bold inline">Coming Soon ...</h3>
          </div>
        </div>
      </div>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default Blog;
