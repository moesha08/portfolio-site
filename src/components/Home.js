// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">
    <div className="container">
      <section className="hero">
        <h1>Hello, I'm Moesha Aurelle</h1>
        <p>
          I'm a Software Engineering Technician student passionate about web
          development, databases, and data analytics. I create practical, user-friendly 
          digital solutions and projects that combine coding, data, and cloud technologies.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="cta-button">
            Explore My Work
          </Link>
          <Link to="/about" className="cta-button secondary">
            Learn More About Me
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
