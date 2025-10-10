// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-shape">MA</div>
          <h2 className="logo-text">Moesha Aurelle</h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {pages.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className={isActive(page.path) ? "active" : ""}
                aria-current={isActive(page.path) ? "page" : undefined}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={isActive(page.path) ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
