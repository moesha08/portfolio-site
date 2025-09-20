import React from 'react';

/**
 * Projects Component - Modern and responsive showcase
 */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FinWise - Personal Finance Assistant",
      description: "Manage personal finances with ERD, SQL scripts, and queries for expenses, income, and savings goals.",
      image: "/images/finwise.png",
      role: "Database Designer & Developer",
      technologies: ["SQL", "ERD", "Relational Databases"],
      github: "https://github.com/moesha08/finwise",
      live: ""
    },
    {
      id: 2,
      title: "React Portfolio Website",
      description: "Personal portfolio website with multiple pages including Home, About, Projects, Services, and Contact with working form.",
      image: "/images/portfolio.png",
      role: "Front-End Developer",
      technologies: ["React", "React Router", "CSS", "Vite"],
      github: "https://github.com/moesha08/portfolio-site",
      live: ""
    },
    {
      id: 3,
      title: "IFLDS - Intelligent Freight Logistics Dispatch System",
      description: "Requirements specification, UML diagrams, and system modeling for a freight logistics dispatch platform.",
      image: "/images/iflds.png",
      role: "System Analyst",
      technologies: ["UML", "SRS", "Use Case Modeling"],
      github: "https://github.com/moesha08/iflds",
      live: ""
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description: "Reservation management system with table scheduling, customer records, and notifications.",
      image: "/images/booking.png",
      role: "Full-Stack Student Developer",
      technologies: ["React", "Node.js", "PostgreSQL", "APIs"],
      github: "https://github.com/moesha08/restaurant-booking",
      live: ""
    },
    {
      id: 5,
      title: "Public Transportation Management System",
      description: "Manage bus/train schedules, passengers, and ticketing. Includes documentation, system modeling, and mock interfaces.",
      image: "/images/public-transport.png",
      role: "System Designer",
      technologies: ["UML", "SRS", "System Modeling"],
      github: "https://github.com/moesha08/transport-system",
      live: ""
    },
    {
      id: 6,
      title: "Cloud Deployment Project",
      description: "Deploy web apps using cloud platforms. React portfolio on Vercel, database project on Netlify, integrating Azure fundamentals.",
      image: "/images/cloud-deploy.png",
      role: "Student Developer",
      technologies: ["Vercel", "Netlify", "Azure", "GitHub"],
      github: "https://github.com/moesha08/cloud-deployment",
      live: ""
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">Projects</h2>
        <section className="projects-grid" aria-label="Portfolio Projects">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  className="project-image" 
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="role">{project.role}</span>
                <p>{project.description}</p>
                <p className="technologies">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
