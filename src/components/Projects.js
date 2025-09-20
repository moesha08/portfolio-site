import React from 'react';

/**
 * Projects Component - Showcases portfolio projects
 */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FinWise - Personal Finance Assistant",
      description: "A database-driven project designed to help users manage personal finances. Includes ERD, SQL scripts, and queries for managing expenses, income, and savings goals.",
      image: "https://placehold.co/400x300/3498db/ffffff?text=FinWise",
      role: "Database Designer & Developer",
      technologies: ["SQL", "ERD", "Relational Databases"]
    },
    {
      id: 2,
      title: "React Portfolio Website",
      description: "This personal portfolio website created using React, React Router, and CSS. Features multiple pages including Home, About, Projects, Services, and Contact with a working form.",
      image: "https://placehold.co/400x300/2ecc71/ffffff?text=Portfolio+Site",
      role: "Front-End Developer",
      technologies: ["React", "React Router", "CSS", "Vite"]
    },
    {
      id: 3,
      title: "IFLDS - Intelligent Freight Logistics Dispatch System",
      description: "A software engineering project that includes requirements specification, UML diagrams, and system modeling for a freight logistics dispatch platform.",
      image: "https://placehold.co/400x300/f39c12/ffffff?text=IFLDS",
      role: "System Analyst",
      technologies: ["UML", "SRS", "Use Case Modeling"]
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description: "A reservation management system prototype that allows customers to book tables online. Features include table scheduling, customer records, and basic notifications.",
      image: "https://placehold.co/400x300/9b59b6/ffffff?text=Booking+System",
      role: "Full-Stack Student Developer",
      technologies: ["React", "Node.js", "PostgreSQL", "APIs"]
    },
    {
      id: 5,
      title: "Public Transportation Management System",
      description: "A conceptual project for managing bus and train schedules, passenger information, and ticketing. Includes requirements documentation, system modeling, and mock interfaces.",
      image: "https://placehold.co/400x300/1abc9c/ffffff?text=Transport+System",
      role: "System Designer",
      technologies: ["UML", "SRS", "System Modeling"]
    },
    {
      id: 6,
      title: "Cloud Deployment Project",
      description: "Deployment of web applications using modern cloud platforms. Includes setup of a React portfolio site on Vercel and a database-driven project on Netlify. Learning integration with Azure fundamentals.",
      image: "https://placehold.co/400x300/2980b9/ffffff?text=Cloud+Deployment",
      role: "Student Developer",
      technologies: ["Vercel", "Netlify", "Azure", "GitHub"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">Projects</h2>
        <section className="projects-grid" aria-label="Portfolio Projects">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={`Screenshot of ${project.title}`} 
                className="project-image" 
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="role">{project.role}</span>
                <p>{project.description}</p>
                <p className="technologies">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
