import Header from "./components/Header";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import About from "./components/About";
import BackgroundDecoration from "./components/BackgroundDecoration";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [activeCard, setActiveCard] = useState("about");

  // Add animation on page load
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`app-container ${isLoaded ? "fade-in" : ""}`}>
      <Header activeCard={activeCard} setActiveCard={setActiveCard} />
      <div className="main_section">
        <div className="cards_section">
          <Hobbies />
          <Skills />
          <About />
        </div>
        <BackgroundDecoration />
      </div>
      <Footer />
    </div>
  );
}

export default App;
