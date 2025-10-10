// src/components/Contact.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Redirecting to Home page...");

    // Reset form fields
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    // Navigate to home page
    navigate("/");
  };

  return (
    <div className="page contact-page">
      <div className="container">
        <h2 className="page-title">Contact Me</h2>

        <div className="contact-grid">
          {/* Contact Info Panel */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <strong>Name:</strong> Moesha Aurelle Emaleu Deutou
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:moeshaaurelle0@gmail.com">
                moeshaaurelle0@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 416-931-1637
            </p>
            <p>
              <strong>Location:</strong> Scarborough, Ontario, Canada
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                My LinkedIn
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/moesha08"
                target="_blank"
                rel="noreferrer"
              >
                My GitHub
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <input
              name="firstName"
              value={form.firstName}
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              value={form.phone}
              placeholder="Phone (optional)"
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
              required
            />
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
