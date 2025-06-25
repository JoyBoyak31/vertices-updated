import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo} onClick={() => handleNavClick('home')}>
          <span className={styles.logoText}>Vertices</span>
          <span className={styles.logoTagline}>connecting the dots</span>
        </div>
        
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
  <button 
    onClick={() => handleNavClick('contact')} 
    className={`${styles.navLink} ${currentPage === 'contact' ? styles.active : ''}`}
  >
    Contact
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;