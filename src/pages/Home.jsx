import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import "./Home.css";
import Footer from "../components/Footer";
import HeroImage from "../assets/Late_night_work_at_home__-removebg-preview.png";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: "> Tracy Karanja.",
        autoStart: true,
        delay: 100,
        loop: true,
        pauseFor: 3000,
      });
    }
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main id="home" className="hero-section flex flex-col md:flex-row justify-between ml-8 md:ml-28 mr-8 md:mr-10 mt-16">
        <div className="mb-8 md:mb-0">
          <h2>Hello, I am</h2>
          <h1 className="text-green-800" id="typewriter-name" ref={typewriterRef}></h1>
          <h3 className="description py-3 w-full md:w-3/4 font-semi-bold">
            I'm a multidisciplinary developer and designer <span className="emphasis">(sometimes)</span> with a
            passion for creating engaging, entertaining user experiences. I
            mostly do frontend work and <span className="emphasis">occasionally</span> dabble in backend
            development. ✨
          </h3>
          <a href="/Tracy Karanja Resume(2).pdf" download="Tracy Karanja Resume(2).pdf">
            <button className="rounded-full drop-shadow-lg">
              Download CV
            </button>
          </a>
        </div>
        <img src={HeroImage} alt="Hero" className="hero-image w-full md:w-auto ml-0" />
      </main>
      <div className="flex justify-center mt-8">
        <FontAwesomeIcon icon={faAngleDown} size="2x" bounce />
      </div>
      <Projects />
      <About />
      <Skills />
      <Experience />

      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
