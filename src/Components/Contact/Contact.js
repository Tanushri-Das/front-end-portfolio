import { fromJSON } from "postcss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const [clear, setClear] = useState(null);
  const handleClear = () => {
    navigate("/");
  };

  return (
    <div
      id="contact"
      name="contact"
      className="w-full h-full bg-[#3944bc] text-white"
    >
      <div className="w-full xl:w-4/5 mx-auto flex flex-col justify-center h-full project lg:ml-8 xl:ml-40 p-4 md:p-4">
        <div
          className="mb-8"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl font-bold inline">Contact Us</p>
          <p className="font-bold mb-4 text-lg sm:text-xl md:text-2xl whitespace-nowrap mt-10">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <form
            action="https://getform.io/f/c2f8bf3b-ca10-4a4c-a5d0-60cd3a0f1053"
            method="POST"
            className="flex flex-col w-full sm:w-1/2"
          >
            <input
              type="text"
              name="name"
              className="p-2 bg-white text-black border-2 rounded-md focus:outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              className="my-5 p-2 bg-white text-black border-2 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id=""
              rows="10"
              className="p-2 bg-white text-black border-2 rounded-md focus:outline-none resize-none"
              placeholder="Enter your message"
            ></textarea>
            <button
              onClick={handleClear}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-2 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300 font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
