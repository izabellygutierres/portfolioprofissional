import Header from "./components/Header/Header";
import Hero from "./assets/sections/Hero/Hero";
import Resume from "./assets/sections/Resume/Resume";
import Portfolio from "./assets/sections/Portfolio/Portfolio";
import Contact from "./assets/sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Resume/>
      <Portfolio />
      <Contact/>
      <Footer/>
    </>
    
  );
}

export default App;