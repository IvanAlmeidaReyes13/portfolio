import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"

import Projects from "./components/Projects"
import Footer from "./components/Footer.jsx"
import './App.css'
import Technologies from "./components/Technologies.jsx"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Technologies />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
