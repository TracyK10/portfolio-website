// import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer"
import "./Projects.css";

function Projects() {
  const projectArray = [
    {
      title: "Coffee Shop",
      description:
        "This is a simple website for a coffee shop that displays a menu of hot coffee drinks, allows users to search for specific drinks, and provides a feedback form for customers. The website is built using HTML, CSS, and JavaScript, and it utilizes the Bootstrap framework for styling and responsiveness.",
      image: "/src/assets/coffee-shop.png",
      link: "https://github.com/TracyK10/cafe-shop",
    },
    {
      title: "Product Landing Page",
      description:
        "This website utilizes HTML for structure, CSS for styling, and JavaScript for dynamic functionality. It integrates Bootstrap 5.3.2 for responsive design, Font Awesome 6.0.0 for icons, and Owl Carousel 2.3.4 for responsive sliders. The project includes index.html, styles.css, script.js, and an images/ directory, ensuring an organized file structure for easy navigation and maintenance.",
      image: "/src/assets/Landing-Page.png",
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
      image: "/src/assets/Temperature-converter.png",
      link: "https://github.com/TracyK10/OIBSIP/tree/main/temperature-converter",
    },
    {
      title: "Dragon Repeller RPG",
      description:
        "Dragon Repeller RPG is a text-based HTML, CSS and JavaScript game where players defeat a menacing dragon, navigate locations, and manage stats, weapons, and inventory. Explore, battle monsters, and make strategic decisions.",
      image: "/src/assets/Dragon-game.png",
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
    <div>
      <header>
        <NavBar />
      </header>
      <div className="typewriter text-center my-5">
        <h1>Projects</h1>
      </div>
      <Tab.Container defaultActiveKey="0">
        <Row className="mx-3">
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {projectArray.map((project, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    style={{ backgroundColor: "#948264", margin: "1px" }}
                    eventKey={index.toString()}
                  >
                    {project.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {projectArray.map((project, index) => (
                <SideNav
                  key={index}
                  project={project}
                  eventKey={index.toString()}
                />
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </div>
  );
}

export default Projects;
