import React from "react";

const Home = ({ setCurrentPage }) => (
  <div className="page">
    <div className="container">
      <section className="hero">
        <h1>Hello, I'm Moesha Aurelle</h1>
        <p>
          I’m a Software Engineering Technician student passionate about web
          development, databases, and data analytics. I create practical, user-friendly digital solutions and projects that combine coding, data, and cloud technologies.
        </p>
        <button
          className="cta-button"
          onClick={() => setCurrentPage("projects")}
          aria-label="Navigate to Projects section"
        >
          Explore My Work
        </button>
      </section>
    </div>
  </div>
);

export default Home;
