import { useState } from "react";
import Logo from "../assets/twk-high-resolution-logo-black-transparent.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <img src={Logo} alt="my logo" className="h-12" />
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          &#9776;
        </button>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-10 items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <a href="#home" className="block py-2 md:py-0 text-xl font-semibold">
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block py-2 md:py-0 text-xl font-semibold"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2 md:py-0 text-xl font-semibold">
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="block py-2 md:py-0 text-xl font-semibold"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="block py-2 md:py-0 text-xl font-semibold"
          >
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
