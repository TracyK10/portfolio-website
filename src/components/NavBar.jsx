import { NavLink } from "react-router-dom"
import Logo from "../assets/twk-high-resolution-logo-black-transparent.png"


function NavBar() {
  return (
    <nav className="flex justify-between">
      <img
        src={Logo}
        alt="my logo"
        className="h-12 ml-4 mt-4"
      />
      <ul className="flex py-5 space-x-10 justify-end mr-11">
        <NavLink className="cursor-pointer text-xl" to="/">Home</NavLink>
        <NavLink className="cursor-pointer text-xl" to="/about">About</NavLink>
        <NavLink className="cursor-pointer text-xl" to="/projects">Projects</NavLink>
        <NavLink className="cursor-pointer text-xl" to="/experience">Experience</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar
