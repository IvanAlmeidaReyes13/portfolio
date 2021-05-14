import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects"
import Footer from "./components/Footer.jsx"
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
