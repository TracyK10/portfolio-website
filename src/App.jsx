import NavBar from "./components/NavBar"
import './App.css'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Skills from "./pages/Skills"


function App() {

  return (
    <>
    <NavBar />
      <Home />
      <Projects />
      <About />
      <Skills/>
      </>
  )
}

export default App
