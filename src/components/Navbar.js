import React from "react";
import "../components//Navbar.css"; // Import the styling

/**
 * Navbar Component - Responsive navigation bar with custom logo
 * Includes accessibility features and smooth animations
 */
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const pages = ["home", "about", "projects", "services", "contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={() => handleNavigation("home")}>
          <div className="logo-shape">MA</div>
          <h2 className="logo-text">Moesha Aurelle</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => handleNavigation(page)}
                className={currentPage === page ? "active" : ""}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
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
            <button
              key={page}
              onClick={() => handleNavigation(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
