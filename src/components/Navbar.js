import React, { useState } from "react";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pages = ["home", "about", "projects", "services", "contact"];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => handleNavClick("home")}>
          <div className="logo-shape">MA</div>
          <h2>Moesha Aurelle</h2>
        </div>

        <ul className={`nav-links ${isMobileOpen ? "mobile-active" : ""}`}>
          {pages.map((page) => (
            <li key={page}>
              <a
                onClick={() => handleNavClick(page)}
                className={currentPage === page ? "active" : ""}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
