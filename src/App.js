import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"
import Hero from "./Main/hero/Hero";
import Nav from "./common/Nav.js";
import Exotic from "./Main/juice/exotic";
import Info from "./Main/info-section/info";
import Contact from "./Main/contact/contact";
import Foot from "./common/footer";
AOS.init({once: true});

function App() {
  return (
    
        <>
        <Nav />
        <Hero />
        <Exotic/>
        <Info/>
        <Contact/>
        <Foot/>
        </>
  );
}

export default App;
