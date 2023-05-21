import { fromJSON } from "postcss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css'

const Contact = () => {
  const navigate = useNavigate();

  const [clear, setClear] = useState(null);
  const handleClear = () => {
    navigate("/");
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-purple-500 to-fuchsia-400 p-4 text-white  pb-10 md:pb-24"
    >
      <div className="flex flex-col p-1 md:p-0 lg:p-4 justify-center max-w-screen-lg mx-auto h-full contacts xl:ml-52">
        <div
          className="pb-8 mt-16 md:mt-20 lg:mt-24 xl:mt-32"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold inline border-b-4 border-amber-500">
            Contact Us
          </p>
          <p className="pt-8 md:pt-12 pb-12 md:pb-14 font-semibold txet-2xl">
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
              className="p-2 bg-black text-white border-2 rounded-md focus:outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              className="my-5 p-2 bg-black text-white border-2 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id=""
              rows="10"
              className="p-2 bg-black text-white border-2 rounded-md focus:outline-none resize-none"
              placeholder="Enter your message"
            ></textarea>
            <button
              onClick={handleClear}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300 font-bold text-xl"
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
