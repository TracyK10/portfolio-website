// import React from "react";
import "./Projects.css";
import CoffeeShopPhoto from "../assets/coffee-shop.png"
import LandingPagePhoto from "../assets/Landing-Page.png"
import GamePhoto from "../assets/Dragon-game.png"
import TemperatureConverterImage from "../assets/Temperature-converter.png"

function Projects() {
  const projectArray = [
    {
      title: "Coffee Shop",
      description:
        "This is a simple website for a coffee shop that displays a menu of hot coffee drinks, allows users to search for specific drinks, and provides a feedback form for customers. The website is built using HTML, CSS, and JavaScript, and it utilizes the Bootstrap framework for styling and responsiveness.",
      image: CoffeeShopPhoto,
      link: "https://github.com/TracyK10/cafe-shop",
    },
    {
      title: "Product Landing Page",
      description:
        "This website utilizes HTML for structure, CSS for styling, and JavaScript for dynamic functionality. It integrates Bootstrap 5.3.2 for responsive design, Font Awesome 6.0.0 for icons, and Owl Carousel 2.3.4 for responsive sliders. The project includes index.html, styles.css, script.js, and an images/ directory, ensuring an organized file structure for easy navigation and maintenance.",
      image: LandingPagePhoto,
      link: "https://github.com/TracyK10/OIBSIP/tree/main/purrrfect-landing-page",
    },
    {
      title: "Tribute to Hellen Keller",
      description:
        "This is a straightforward HTML page dedicated to honoring Helen Keller. It features comprehensive details about her life, accomplishments, and significant contributions to society.",
      image: "https://via.placeholder.com/150",
      link: "https://github.com/TracyK10/OIBSIP/tree/main/tribute%20page",
    },
    {
      title: "Temperature converter",
      description:
        "A simple temperature converter web application where users can input a temperature value in either Celsius, Fahrenheit, or Kelvin, and convert it to the other two temperature units.",
      image: TemperatureConverterImage,
      link: "https://github.com/TracyK10/OIBSIP/tree/main/temperature-converter",
    },
    {
      title: "Dragon Repeller RPG",
      description:
        "Dragon Repeller RPG is a text-based HTML, CSS and JavaScript game where players defeat a menacing dragon, navigate locations, and manage stats, weapons, and inventory. Explore, battle monsters, and make strategic decisions.",
      image: GamePhoto,
      link: "https://github.com/TracyK10/role-playing-game",
    },
    {
      title: "Personal Portfolio",
      description:
        "This is a portfolio website built using React, enhanced with styling from both Tailwind CSS and Bootstrap 5. It showcases a collection of projects and personal information, offering a visually appealing and responsive design that highlights skills and accomplishments effectively.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
  ];

  return (
    <div id="projects">
      <div className="text-center my-5">
        <h1 className="text-4xl">Projects 💻</h1>
      </div>
      <div className="grid grid-cols-3 m-14">
        {projectArray.map((project, id) => (
          <div
            key={id}
            className="flex flex-col md:flex-row justify-center items-center"
          >
            <div>
              <img src={project.image} alt={project.title} className="w-4/5" />
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <a href={project.link}>
                <button className="py-2 px-5 rounded-2xl mx-3 ease-in-out duration-200">Source code</button>
              </a>
              <a href={project.link}>
                <button className="py-2 px-5 rounded-2xl mx-3 ease-in-out duration-200">Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
