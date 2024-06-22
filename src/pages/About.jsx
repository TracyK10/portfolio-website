// import { useEffect, useState } from "react";
import "./About.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="hero-section flex justify-evenly ml-28 mr-10 mt-32">
        <img
          src="/src/assets/MY-PHOTO.JPG"
          alt="My Photo"
          className="w-96 h-90 object-cover rounded-md"
        />
        <div className="typewriter py-3 w-1/2">
          <h2 className="text-amber-900">Hi, my name is Tracy Wanjiru Karanja</h2>
          <p>
            I am currently a junior full-stack developer based in Nairobi,
            Kenya. I create visually appealing websites and love to indulge in
            innovative ideas.
          </p>
          <p>
            I am always curious about tech. I have done Front-end development
            with SheCodes Foundation, Full-stack development with Moringa school
            and I am currently in my last year in Multimedia University doing
            Mathematics and Computer Science.
          </p>
          <p>Why I got into software development you ask?</p>
          <p>
            I always wanted to make a difference in the world, leave a mark.
            Growing up, I thought I could make a difference being in medicine
            and I studied sciences a lot because I loved it. But as I got older,
            I realized that my passion was not in medicine but in tech and I
            found myself enjoying programming. Once I got into it, I just
            naturally developed a passion for it, especially when I saw how
            exciting it is to create solutions to the problems in the world with
            just a few lines of code.
          </p>
          <p>
            I aim to empower users, create connections with fellow developers
            and enhance the way others interact with technology.
          </p>
        </div>
      </main>
      <div className="text-center mt-32 mb-32">
        <h2 className="text-amber-900">Other things I enjoy...</h2>
        <div className="flex flex-col space-y-10 items-center">
          <div className="flex items-center space-x-5 ml-32">
            <img src="/src/assets/movie.png" alt="" className="w-80 h-90" />
            <p className="py-3 w-1/2">
              I love to watch TV shows and movies. Currently, I am obsessed with
              Kdramas. My favorite is twenty five twenty one. I also like to
              listen to music during my free time.
            </p>
          </div>
          <div className="flex items-center space-x-5 ml-32">
            <img src="/src/assets/travel.png" alt="" className="w-80 h-90" />
            <p className="py-3 w-1/2">
              I love to travel. I have been to a few places outside of Kenya on
              school trips and to attend conferences such as the Sub-Saharan
              Model United Nations(SAIMUN) as a delegate in high school.
            </p>
          </div>
          <div className="flex items-center space-x-5 ml-32">
            <img src="/src/assets/books.png" alt="" className="w-80 h-90" />
            <p className="py-3 w-1/2">
              I love to read. I have read a few books and I am currently reading
              books by John Green such as Turtles All The Way Down.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
