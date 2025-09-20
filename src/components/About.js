import React from 'react';
import './About.css'; // Make sure this CSS file exists
/**
 * About Component - Personal information and professional background
 */
const About = () => {
  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img 
              src="/profile.jpg" 
              alt="Moesha Aurelle Portrait" 
            />
          </div>
          <div className="profile-info">
            <h3>Moesha Aurelle Emaleu Deutou | Software Engineering Technician student | Web & Data enthusiast</h3>
            <p>
              I’m a Software Engineering Technician student at Centennial College with hands-on experience in logistics, software engineering, and web development. I have a strong 
              interest in React, databases, and data analytics, and I’m building a professional portfolio that combines software engineering, data science, and cloud technologies. Previously, 
              I worked as a logistics assistant, gaining 1 year+ of experience in planning, inventory, and operations management.
            </p>
            <p>
              My approach combines a strong foundation in software engineering principles with creative problem-solving to design practical, user-focused solutions. I’m passionate
              about clean and maintainable code, responsive design, and building projects that bridge both software development and data analysis. As I continue my studies in Software
              Engineering at Centennial College, I stay committed to learning emerging technologies in web development, data science, and cloud computing, while applying them to real-world
              projects that prepare me for a career in the tech industry.
            </p>
            <p>
              Outside of coding and class projects, I build my portfolio, work on web and data projects, and explore new tools in AI, cloud, and data science to prepare for a career in software engineering and data analytics.
            </p>

            {/* Updated link: replace '/resume.pdf' with the real file path */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="resume-link"
            >
              📄 Download My Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
