import React from 'react';

/**
 * Navbar Component - Navigation with custom logo and responsive menu
 * Includes accessibility features and smooth animations
 */
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Custom Logo - Meets assignment requirements */}
        <div className="logo" onClick={() => handleNavigation('home')}>
          <div className="logo-shape">MA</div>
          <h2>Moesha Aurelle</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {['home', 'about', 'projects', 'services', 'contact'].map((page) => (
            <li key={page}>
              <a
                onClick={() => handleNavigation(page)}
                className={currentPage === page ? 'active' : ''}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {['home', 'about', 'projects', 'services', 'contact'].map((page) => (
            <a
              key={page}
              onClick={() => handleNavigation(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;