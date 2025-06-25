import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Vertices</h3>
            <p>Connecting the digital commerce ecosystem</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>GitHub</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Vertices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;