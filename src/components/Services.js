import React from "react";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "React front-end development with responsive and clean interfaces.",
      features: ["React", "Responsive Design", "UI/UX", "GitHub"]
    },
    {
      icon: "🗄️",
      title: "Database Projects",
      description: "Database design, SQL queries, and data integrity management.",
      features: ["SQL", "PostgreSQL", "ERD", "Data Management"]
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Basic Python and Excel data analysis and visualization.",
      features: ["Python", "Pandas", "Excel", "Visualization"]
    },
    {
      icon: "☁️",
      title: "Cloud & Deployment",
      description: "Deploying projects on Vercel, Netlify, and learning Azure fundamentals.",
      features: ["Vercel", "Netlify", "Azure", "Git"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((f, i) => (<li key={i}>{f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
