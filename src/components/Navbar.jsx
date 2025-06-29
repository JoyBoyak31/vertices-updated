import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo} onClick={() => handleNavClick('home')}>
          <span className={styles.logoText}>The Vertices - updated</span>
          <span className={styles.logoTagline}>connecting the dots</span>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <button
            onClick={() => handleNavClick('home')}
            className={`${styles.navLink} ${currentPage === 'home' ? styles.active : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`${styles.navLink} ${currentPage === 'about' ? styles.active : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('tokenomics1')}
            className={`${styles.navLink} ${currentPage === 'tokenomics1' ? styles.active : ''}`}
          >
            Tokenomics
          </button>
          <button
            onClick={() => handleNavClick('roadmap')}
            className={`${styles.navLink} ${currentPage === 'roadmap' ? styles.active : ''}`}
          >
            Roadmap
          </button>
          <button className={styles.whitepaperButton}>
            <a
              href="https://thevertices.com/login.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
            Sign-in / Sign-up
            </a>
          </button>

        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <button
            onClick={() => handleNavClick('home')}
            className={`${styles.mobileNavLink} ${currentPage === 'home' ? styles.active : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`${styles.mobileNavLink} ${currentPage === 'about' ? styles.active : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('tokenomics1')}
            className={`${styles.mobileNavLink} ${currentPage === 'tokenomics1' ? styles.active : ''}`}
          >
            Tokenomics
          </button>
          <button
            onClick={() => handleNavClick('roadmap')}
            className={`${styles.mobileNavLink} ${currentPage === 'roadmap' ? styles.active : ''}`}
          >
            Roadmap
          </button>
          <button className={styles.whitepaperButton}>
            <a
              href="https://thevertices.com/login.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Sign-in / Sign-up
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;