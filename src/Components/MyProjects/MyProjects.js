
import React from "react";


const MyProjects = ({ project }) => {
  const {
    project_name,
    home_src,
    home1_src,
    sign,
    login,
    order,
    add,
    mypro,
    seller,
    buyer,
    livesite_href,cilent_side,server_side
  } = project;

  console.log(sign);
  return (
    <div className="">
      <div>
        <h1 className="block font-bold py-12 text-2xl">Screenshot of {project_name}</h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <img className="" src={home_src} alt="" />
          <img src={home1_src} alt="" />
          <img src={sign} alt="" />
          <img src={login} alt="" />
          <img src={order} alt="" />
          <img src={add} alt="" />
          <img src={mypro} alt="" />
          <img src={seller} alt="" />
          <img src={buyer} alt="" />
        </div>
        <p className="font-bold py-6 text-2xl">Description :</p>
        <li className="font-semibold">This website can be used admin,buyer and seller.</li>
        <li className="font-semibold">This can be able to order user Product in Website.</li>
          <li className="font-semibold">User can pay the booking order payment through Stripe.</li>
          <li className="font-semibold">Seller will be able to add Product.</li>
          <li className="font-semibold">Each product can be seen in each category product.</li>
          <li className="font-semibold">The seller can see all the products to added him.</li>
          <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-3 lg:gap-0">
             
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={livesite_href}target="_blank" rel="noreferrer">Live Site</a></button>
              
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={cilent_side}target="_blank" rel="noreferrer">Client Side</a></button>
              <button className="bg-gradient-to-r rounded-lg from-indigo-500 via-purple-500 to-pink-500 w-full lg:w-32 px-2 py-2 duration-200 hover:scale-105 text-white"><a href={server_side}target="_blank" rel="noreferrer">Server Side</a></button>
          </div>
      </div>
    </div>
  );
};

export default MyProjects;
