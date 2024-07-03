import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/Bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import react from "../../assets/react.png";
import next from "../../assets/nextjs.png";
import material from "../../assets/material.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import vite from "../../assets/vite.png";
import sass from "../../assets/sass.png";
import swiper from "../../assets/swiper.png";
import swagger from "../../assets/swagger.png";
import vercel from "../../assets/vercel.jpg";
import netlify from "../../assets/netlify.jpeg";
import "./Skills.css";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: material,
      title: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: vite,
      title: "Vite",
      style: "shadow-blue-600",
    },
    {
      id: 13,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: express,
      title: "Express Js",
      style: "shadow-white",
    },
    {
      id: 15,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-700",
    },
    {
      id: 16,
      src: swiper,
      title: "Swiper Js",
      style: "shadow-blue-600",
    },
    {
      id: 17,
      src: swagger,
      title: "Swagger",
      style: "shadow-green-700",
    },
    {
      id: 18,
      src: netlify,
      title: "Netlify",
      style: "shadow-green-700",
    },
    {
      id: 19,
      src: vercel,
      title: "Vercel",
      style: "shadow-white",
    },
  ];
  return (
    <div id="skills" name="skills" className="bg-[#3944bc] w-full h-full pb-10">
      <div className="w-full xl:w-4/5 mx-auto flex flex-col justify-center h-full text-white pb-14 project lg:ml-8 xl:ml-40 skill p-4 md:p-4">
        <div
          className="mt-16 md:mt-24 xl:-mt-0"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl font-bold inline">My Skills</p>
          <p className="pt-8 pb-10 md:pb-16 font-semibold text-lg sm:text-xl md:text-2xl">
            I acquired these skills till now
          </p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-center"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-xl ${style} skill-card`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-6 font-bold text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
