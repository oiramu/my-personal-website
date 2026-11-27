import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import AboutMe from './sections/AboutMe/AboutMe';
import Konfii from './sections/Konfii/Konfii';

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Konfii />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
