// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      {/* Pass both currentPage and setCurrentPage to Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conditionally render pages and pass setCurrentPage */}
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "about" && <About setCurrentPage={setCurrentPage} />}
      {currentPage === "projects" && <Projects setCurrentPage={setCurrentPage} />}
      {currentPage === "services" && <Services setCurrentPage={setCurrentPage} />}
      {currentPage === "contact" && <Contact setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
