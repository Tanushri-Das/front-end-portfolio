// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import {Link} from 'react-scroll';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "projects",
//     },
//     {
//       id: 4,
//       link: "skills",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];

//   return (
//     <div className="flex justify-between items-center w-full h-24 px-4 text-white from-purple-500 to-fuchsia-400 fixed">
//       <div>
//         <h1 className="text-5xl font-signature ml-2">Tanushri Das</h1>
//       </div>
//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 text-xl cursor-pointer capitalize font-semibold text-white hover:scale-105 duration-200"
//           >
//             <Link to={link} smooth duration={500}>{link}</Link>
//           </li>
          
//         ))}
        
//       </ul>
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
//           {links.map(({ id, link }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-3xl"
//             >
//               <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
//             </li>
//           ))}
          
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {


    const menuItems = <>
    <li className="text-2xl lg:text-white font-semibold"><Link to='/'>Home</Link></li>
    <li className="text-2xl lg:text-white font-semibold"><Link to='/blog'>Blog</Link></li>
    
    </>
  return (
    <div className="navbar bg-purple-500 flex justify-between p-7">
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
       {/* <Link to='/' className="btn btn-ghost normal-case text-2xl">Ashley <span className="text-orange-400 ml-2"> Homestore</span></Link>  */}
       <div>
        <h1 className="text-2xl lg:text-5xl font-signature lg:ml-2">Tanushri Das</h1>
      </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {menuItems}
        </ul>
      </div>
      {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
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
          </label> */}
    </div>
  );
};

export default Navbar;