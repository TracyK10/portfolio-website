import Python from "../assets/python.png";
import React from "../assets/react.png";
import Postman from "../assets/postman.png";
import Tailwind from "../assets/tailwind.png";
import JS from "../assets/js.png";
import HTML from "../assets/html.png";
import CSS from "../assets/csssss.png";
import Bootstrap from "../assets/bootstrap.png";
import Typescript from "../assets/typescript.png";
import Api from "../assets/api.png";
import "./Skills.css";

function Skills() {
  const skillsObject = [
    {
      name: "Python",
      image: Python,
    },
    {
      name: "React",
      image: React,
    },
    {
      name: "Postman",
      image: Postman,
    },
    {
      name: "Tailwind",
      image: Tailwind,
    },
    {
      name: "JavaScript",
      image: JS,
    },
    {
      name: "HTML",
      image: HTML,
    },
    {
      name: "CSS",
      image: CSS,
    },
    {
      name: "Bootstrap",
      image: Bootstrap,
    },
    {
      name: "Typescript",
      image: Typescript,
    },
    {
      name: "API",
      image: Api,
    },
  ];

  return (
    <div id="skills" className="ml-4 md:ml-28 mr-4 md:mr-28 mt-10 md:mt-32">
      <h1 className="text-4xl text-center my-5">My Skills 💻</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsObject.map((skill, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <img src={skill.image} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2 text-center skills-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
