import "./About.css";
import ProfilePhoto from "../assets/MY-PHOTO.JPG";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div id="about">
      <main className="hero-section flex flex-col md:flex-row justify-evenly ml-4 md:ml-28 mr-4 md:mr-10 mt-10 md:mt-32">
        <img
          src={ProfilePhoto}
          alt="My Photo"
          className="w-96 h-90 object-cover rounded-md mb-6 md:mb-0"
        />
        <div className="typewriter py-3 w-full md:w-1/2">
          <div className="text-4xl text-green-800 font-semibold mb-10">
            <Typewriter
              options={{
                strings: "> Hi again!",
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
            Thanks for scrolling this far! I'm a junior full-stack developer
            from Nairobi, Kenya, creating eye-catching websites and diving into
            innovative ideas. I started with SheCodes for front-end, Moringa
            School for full-stack, and I'm now finishing my Mathematics and
            Computer Science degree at Multimedia University. Initially drawn to
            medicine, I discovered my true passion in programming
            <span className="emphasis"> (and sometimes UI/UX)</span> and now
            love solving real-world problems with code and connecting with
            fellow tech enthusiasts.
          </p>
          <p>
            Other than coding, I watch tv shows, knit, workout and volunteer at
            my church as a counsellor for teenagers.🤓 I've also been trying to
            read more so feel free to reach out to me with any book
            recommendations! ✨
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
