import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <nav className="flex justify-between">
      <img
        src="/src/assets/twk-high-resolution-logo-black-transparent.png"
        alt="my logo"
        className="h-12 ml-4 mt-4"
      />
      <ul className="flex py-5 space-x-10 justify-end mr-11">
        <NavLink className="cursor-pointer" to="/">Home</NavLink>
        <NavLink className="cursor-pointer" to="/about">About</NavLink>
        <NavLink className="cursor-pointer" to="/projects">Projects</NavLink>
        <NavLink className="cursor-pointer" to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}

export default NavBar
