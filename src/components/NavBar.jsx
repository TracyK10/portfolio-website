import { useState } from "react";
import Logo from "../assets/twk-high-resolution-logo-black-transparent.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 relative z-10">
        <img src={Logo} alt="my logo" className="h-12" />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-10 items-center md:items-baseline absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent`}
        >
          <li className="block text-center md:text-left">
            <a
              href="#home"
              className="block py-2 md:py-0 text-xl font-semibold"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li className="block text-center md:text-left">
            <a
              href="#projects"
              className="block py-2 md:py-0 text-xl font-semibold"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li className="block text-center md:text-left">
            <a
              href="#about"
              className="block py-2 md:py-0 text-xl font-semibold"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li className="block text-center md:text-left">
            <a
              href="#skills"
              className="block py-2 md:py-0 text-xl font-semibold"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li className="block text-center md:text-left">
            <a
              href="#experience"
              className="block py-2 md:py-0 text-xl font-semibold"
              onClick={toggleMenu}
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-lime-800 bg-opacity-90 opacity-90 z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default NavBar;
