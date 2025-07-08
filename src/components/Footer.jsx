import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <img src="/src/assets/logo/logo.png" alt="Vertices Logo" className={styles.footerLogoImg} />
              <span className={styles.footerLogoText}>The Vertices</span>
            </div>
            <p className={styles.footerTagline}>AI-Powered Digital Commerce Platform</p>
          </div>
          
          <div className={styles.footerCenter}>
            <p className={styles.footerCopyright}>
              © 2025 The Vertices Network. All rights reserved.
            </p>
            
          </div>
          
          <div className={styles.footerRight}>
            <h4 className={styles.footerHeading}>Connect With Us</h4>
            <div className={styles.footerSocial}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
              
              <a href="#" className={styles.socialLink} aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 4.5L2.5 12.5L9.5 13.5L11.5 19.5L14.5 15.5L18.5 19.5L21.5 4.5Z"></path>
                </svg>
              </a>
            </div>
            
            
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.footerDisclaimer}>
            The Vertices Network is a project in active development. Tokens have no financial value. Always DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;