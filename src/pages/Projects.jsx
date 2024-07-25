import "./Projects.css";
import CoffeeShopPhoto from "../assets/coffee-shop.png";
import LandingPagePhoto from "../assets/Landing-Page.png";
import GamePhoto from "../assets/Dragon-game.png";
import TemperatureConverterImage from "../assets/Temperature-converter.png";
import WeatherAppImage from "../assets/weather-app.png"
import RecipeAppImage from "../assets/recipe-app.png"

function Projects() {
  const projectArray = [
    {
      title: "Coffee Shop",
      description:
        "This is a simple website for a coffee shop that displays a menu of hot coffee drinks, allows users to search for specific drinks, and provides a feedback form for customers. The website is built using HTML, CSS, and JavaScript, and it utilizes the Bootstrap framework for styling and responsiveness.",
      image: CoffeeShopPhoto,
      demo: "https://cafe-shop-one.vercel.app/",
      link: "https://github.com/TracyK10/cafe-shop",
    },
    {
      title: "Product Landing Page",
      description:
        "This website utilizes HTML for structure, CSS for styling, and JavaScript for dynamic functionality. It integrates Bootstrap 5.3.2 for responsive design, Font Awesome 6.0.0 for icons, and Owl Carousel 2.3.4 for responsive sliders. The project includes index.html, styles.css, script.js, and an images/ directory, ensuring an organized file structure for easy navigation and maintenance.",
      image: LandingPagePhoto,
      demo: "https://purrfect-rouge.vercel.app/",
      link: "https://github.com/TracyK10/OIBSIP/tree/main/purrrfect-landing-page",
    },
    {
      title: "SheCodes Weather App",
      description:
        "My SheCodes weather app provides real-time weather updates and forecasts for any location, letting users search by city or use their current location, all with a responsive design.",
      image: WeatherAppImage,
      demo: "https://tracy-karanja-weather-app.netlify.app/",
      link: "https://github.com/TracyK10/weather-app",
    },
    {
      title: "Temperature converter",
      description:
        "A simple temperature converter web application where users can input a temperature value in either Celsius, Fahrenheit, or Kelvin, and convert it to the other two temperature units.",
      image: TemperatureConverterImage,
      demo: "https://temp-converter-delta.vercel.app/",
      link: "https://github.com/TracyK10/OIBSIP/tree/main/temperature-converter",
    },
    {
      title: "Dragon Repeller RPG",
      description:
        "Dragon Repeller RPG is a text-based HTML, CSS and JavaScript game where players defeat a menacing dragon, navigate locations, and manage stats, weapons, and inventory. Explore, battle monsters, and make strategic decisions.",
      image: GamePhoto,
      demo: "https://tracyk10.github.io/role-playing-game/",
      link: "https://github.com/TracyK10/role-playing-game",
    },
    {
      title: "AI Recipe Generator",
      description:
        "This project is an AI-powered recipe generator that creates easy-to-follow recipes based on user instructions. The application is built with modern web technologies and leverages an AI API to generate the recipes.",
      image: RecipeAppImage,
      demo: "https://tracy-karanja-recipe-generator.netlify.app/",
      link: "https://github.com/TracyK10/recipe-generator",
    },
  ];

  return (
    <div id="projects">
      <div className="text-center my-5">
        <h1 className="text-4xl">Projects 💻</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        {projectArray.map((project, id) => (
          <div key={id} className="flex flex-col items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-4/5 rounded-lg"
            />
            <h4 className="mt-3">{project.title}</h4>
            <p>{project.description}</p>
            <div className="flex space-x-3">
              <a href={project.link}>
                <button className="py-2 px-4 rounded-full ease-in-out duration-200 project-button">
                  Source code
                </button>
              </a>
              <a href={project.demo}>
                <button className="py-2 px-4 rounded-full ease-in-out duration-200">
                  Demo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
