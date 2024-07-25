
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
        <a href="#home" className="cursor-pointer text-xl font-semibold">Home</a>
        <a href="#projects" className="cursor-pointer text-xl font-semibold" >Projects</a>
        <a href="#about" className="cursor-pointer text-xl font-semibold" >About</a>
        <a href="#skills" className="cursor-pointer text-xl font-semibold" >Skills</a>
        <a href="#experience" className="cursor-pointer text-xl font-semibold" >Experience</a>
      </ul>
    </nav>
  );
}

export default NavBar
