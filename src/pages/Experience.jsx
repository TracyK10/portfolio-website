import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


function Experience() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="mb-40">
        <h1 className="text-center mb-32">Experience</h1>
        <div className="text-center flex justify-between ml-28 mr-10 mt-32">
          <h2 className="w-3/4">Web development and design intern</h2>
          <div className="ml-10 mr-10 mt-0">
            <h4>Company: Oasis Infobyte</h4>
            <p>
              I have experience in front-end development using HTML, CSS, and
              JavaScript. I received mentorship and tasks during the internship. I have also worked on projects that involve creating
              responsive and visually appealing designs.
            </p>
            <a href="https://github.com/TracyK10/OIBSIP">
              <button className="rounded-full">View Projects</button>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Experience;
