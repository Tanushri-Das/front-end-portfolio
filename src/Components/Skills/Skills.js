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
import redux from '../../assets/redux.png';
import typescript from '../../assets/typescript.png';
import vite from '../../assets/vite.png';
import './Skills.css'

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
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: next,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: material,
      title: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id:11,
      src:  vite,
      title: "Vite",
      style: "shadow-blue-600",
    },
    {
      id:12,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id:13,
      src: express,
      title: "Express Js",
      style: "shadow-white",
    },
    {
      id: 14,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-700",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-purple-500 to-fuchsia-400 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pb-16 md:pb-24 lg:ml-8 xl:ml-56 skill">
        <div
          className="mt-16 md:mt-24 xl:mt-32"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-3xl font-bold inline border-b-4 border-amber-500">
            My Skills
          </p>
          <p className="pt-8 md:pt-12 text-xl pb-10 md:pb-16 font-semibold">
            I acquired these skills till now
          </p>
        </div>
        <div
          className="w-full skill-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 xl:px-12 sm:px-0 skills-div"
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
