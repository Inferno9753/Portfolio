import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage,setSelectedPage]=useState('home');
  const [isTopOfPage,setIsTopOfPage]=useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
      <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <MySkills/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto ">
        <Contact/> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
