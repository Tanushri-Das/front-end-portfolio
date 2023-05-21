import React from "react";
import myimg from "../.././assets/heroImage.jpg";
import './Footer.css'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-full h-full p-16 md:p-24 bg-gradient-to-b lg:-mt-10 from-purple-500 to-fuchsia-400 text-white pb-24">
      <div className="">
      <div className="avatar footer-div">
        <div className="w-24 rounded-full">
          <img src={myimg} />
        </div>
      </div>
      <div className="text-center font-semibold">
        <h2 className="text-2xl whitespace-nowrap md:text-3xl my-4">Tanushri Das</h2>
        <p className="text-sm lg:text-lg">Copyright &copy; {date} All rights reserved by Tanushri Das</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
