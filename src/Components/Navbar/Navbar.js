
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  
    const menuItems = <>
    <li className="text-2xl lg:text-white font-semibold"><a href='/'>Home</a></li>
    <li className="text-2xl lg:text-white font-semibold"><a href='#about'>About</a></li>
    <li className="text-2xl lg:text-white font-semibold"><a href='#projects'>Projects</a></li>
    <li className="text-2xl lg:text-white font-semibold"><a href='#skills'>Skills</a></li>
    <li className="text-2xl lg:text-white font-semibold"><a href='#experience'>Experience</a></li>
    <li className="text-2xl lg:text-white font-semibold"><a href='#contact'>Contact Us</a></li>
    </>
  return (
    <div className="navbar bg-blue-800 flex justify-between p-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
       <div>
        <h1 className="text-2xl md:text-4xl whitespace-nowrap text-white tanu lg:text-5xl lg:ml-2" >Tanushri Das</h1>
      </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;