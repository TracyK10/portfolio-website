import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import "./Home.css";
import Footer from "../components/Footer";

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
      <main className="hero-section flex justify-between ml-28 mr-10 mt-32">
        <img
          src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b1f8a4628a60fe7a4b2f1_006-p-800.png"
          alt="Hero"
          className="hero-image"
        />
        <div>
          <h2>Hello, I am</h2>
          <h1
            className="text-amber-900"
            id="typewriter-name"
            ref={typewriterRef}
          ></h1>
          <h3 className="description py-3 w-3/4 font-semi-bold">
            Currently a student developer at Moringa and SheCodes. I have a
            passion for creating innovative and efficient projects. I am looking
            forward to continuous learning and innovation in the tech industry.
          </h3>
          <Link to="/contact">
            <button className="rounded-full drop-shadow-lg">
              Get in touch
            </button>
          </Link>
        </div>
      </main>
      <div className="text-center mt-32 mb-32">
        <h2 className="text-amber-900">Want to see what I have worked on?</h2>
        <Link to="/projects">
          <button className="rounded-full drop-shadow-lg">View Projects</button>
        </Link>
      </div>
      <div className="text-center mt-32 mb-32">
        <h2 className="text-amber-900">Looking to collaborate?</h2>
        <p className="text-amber-900">
          I am always open to new opportunities. Let's create something
          together!
        </p>
        <Link to="/contact">
          <button className="rounded-full drop-shadow-lg">Contact Me</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
