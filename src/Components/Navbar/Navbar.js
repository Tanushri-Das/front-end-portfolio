import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <>
      <li className="text-xl text-white font-semibold">
        <a href="/">Home</a>
      </li>
      <li className="text-xl text-white font-semibold">
        <a href="#about">About</a>
      </li>
      <li className="text-xl text-white font-semibold">
        <a href="#projects">Projects</a>
      </li>
      <li className="text-xl text-white font-semibold">
        <a href="#skills">Skills</a>
      </li>
      <li className="text-xl text-white font-semibold">
        <a href="#experience">Experience</a>
      </li>
      <li className="text-xl text-white font-semibold">
        <a href="#contact">Contact Us</a>
      </li>
    </>
  );

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-[#3944bc] md:pt-2">
      <div className="w-full xl:w-4/5 mx-auto lg:ml-8 xl:mx-40 p-4 md:p-4 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-4xl whitespace-nowrap text-white lg:text-5xl lg:ml-2 font-bold">
                Tanushri
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block ml-auto">
              <ul className="flex items-baseline space-x-6">
                {menuItems}
              </ul>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-[#3944bc] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3944bc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-4 pt-8 pb-3 space-y-1 sm:px-3">
            {menuItems}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
