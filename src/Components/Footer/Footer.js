import React from "react";
import myimg from "../.././assets/heroImage.jpg";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-full h-full p-24 bg-gradient-to-b lg:-mt-10 from-purple-500 to-fuchsia-400 text-white pb-24">
      <div className="">
      <div className="avatar ml-[90px] lg:ml-[610px]">
        <div className="w-24 rounded-full">
          <img src={myimg} />
        </div>
      </div>
      <div className="text-center font-semibold">
        <h2 className="text-3xl my-4">Tanushri Das</h2>
        <p>Copyright &copy; {date} All rights reserver by Tanushri Das</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
