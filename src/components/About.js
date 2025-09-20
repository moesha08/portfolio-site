import React from 'react';

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
              src="https://placehold.co/400x500/2c3e50/ffffff?text=Professional+Photo" 
              alt="Professional Portrait" 
            />
          </div>
          <div className="profile-info">
            <h3>Moesha Aurelle Emaleu Deutou Software Engineering Technician student • Web & Data enthusiast</h3>
            <p>
            Hello! I’m Moesha Aurelle Emaleu Deutou, a Software Engineering Technician student at Centennial College with hands-on experience in logistics,
            software engineering, and web development. I have a strong interest in React, databases, and data analytics, and I’m currently building a 
            professional portfolio that combines software engineering, data science, and cloud technologies. In the past, I worked as a logistics assistant 
            in my home country, where I gained 2 years of practical experience in planning, inventory, and operations management. My goal is to grow as a 
            data-driven software engineer, contribute to impactful projects, and pursue opportunities in web development, data analytics, and cloud computing after graduation
            </p>
            <p>
             My approach combines a strong foundation in software engineering principles with creative problem-solving to design practical, user-focused solutions. I’m passionate
             about clean and maintainable code, responsive design, and building projects that bridge both software development and data analysis. As I continue my studies in Software
             Engineering at Centennial College, I stay committed to learning emerging technologies in web development, data science, and cloud computing, while applying them to real-world
             projects that prepare me for a career in the tech industry.
            </p>
            <p>
             When I’m not coding or working on class projects, I spend time building my portfolio, practicing web and data projects, and learning new tools in AI, cloud, and data science. 
             I also enjoy taking online courses and connecting with tech communities as I prepare for a career in software engineering and data analytics
            </p>
            <a href="#" className="resume-link">
              📄 Download My Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;