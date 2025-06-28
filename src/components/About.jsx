import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection} ref={addToRefs}>
        <div className={styles.heroContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.mainTitle}>
              About <span className={styles.highlight}>THE VERTICES</span>
            </h1>
            <div className={styles.subtitle}>Building the Infrastructure for Autonomous Commerce</div>
          </div>

          <div className={styles.companyDescription}>
            <p>
              THE VERTICES is a future-first technology company building the infrastructure for
              autonomous, intelligent, and decentralized global commerce through blockchain-enabled,
              AI-powered platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <p>
                To power the intelligent, automated, and decentralized commerce networks of tomorrow.
                We believe the next wave of global trade will be data-driven, token-powered, and AI-managed.
              </p>
            </div>
            <div className={styles.problemSolution}>
              <div className={styles.problemBox}>
                <h3>The Problem</h3>
                <ul>
                  <li>Outdated logistics with blind spots and data silos</li>
                  <li>High costs due to middlemen and lack of automation</li>
                  <li>Inability to track products, origin, or condition at scale</li>
                </ul>
              </div>
              <div className={styles.solutionBox}>
                <h3>Our Solution</h3>
                <ul>
                  <li>Web3-native logistics and commerce stack</li>
                  <li>Every product visible, verifiable, and programmable</li>
                  <li>AI-powered automation and real-time intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className={styles.ecosystemSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>THE VERTICES Ecosystem</h2>
          <div className={styles.componentsGrid}>
            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconToken}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>The Vertices Network (VTXN)</h3>
              <p>Native token powering traceability, payments, staking, and governance across the entire ecosystem.</p>
            </div>

            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconAI}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>AI Supply Chain Layer</h3>
              <p>Self-healing logistics, predictive analytics, and automated routing powered by intelligent AI agents.</p>
            </div>

            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconBlockchain}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1.1-2.3-3.6-4-6.5-4s-5.4 1.7-6.5 4c1.1 2.3 3.6 4 6.5 4s5.4-1.7 6.5-4z" />
                </svg>
              </div>
              <h3>Blockchain Traceability</h3>
              <p>Immutable on-chain logs for products, inventory, and logistics steps ensuring complete transparency.</p>
            </div>

            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconSDK}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3>eCommerce SDK</h3>
              <p>API & SDK suite for merchants to integrate wallets, rewards, and blockchain listings seamlessly.</p>
            </div>

            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconMarketplace}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
                  <path d="M5 4h14l-1 14H6L5 4z" />
                  <path d="M9 10h6" />
                </svg>
              </div>
              <h3>Decentralized Marketplace</h3>
              <p>P2P product listings with embedded AI personalization and NFT-based product records.</p>
            </div>

            <div className={styles.componentCard}>
              <div className={`${styles.componentIcon} ${styles.iconDAO}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Governance DAO</h3>
              <p>Token-holder voting on platform direction, fees, partnerships, and ecosystem upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className={styles.audienceSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who We Serve</h2>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <h4>eCommerce Platforms</h4>
              <p>Need traceable, fraud-free supply chains with real-time visibility</p>
            </div>
            <div className={styles.audienceCard}>
              <h4>Logistics Providers</h4>
              <p>Demand automation, routing optimization, and predictive analytics</p>
            </div>
            <div className={styles.audienceCard}>
              <h4>Brands & Retailers</h4>
              <p>Require transparency, ESG reporting, and customer trust</p>
            </div>
            <div className={styles.audienceCard}>
              <h4>Consumers</h4>
              <p>Expect instant delivery, product authenticity, and transparency</p>
            </div>
            <div className={styles.audienceCard}>
              <h4>Developers</h4>
              <p>Can build dApps, integrations, and marketplace solutions</p>
            </div>
            <div className={styles.audienceCard}>
              <h4>Investors</h4>
              <p>Seeking real-world Web3 utility and scalable B2B models</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Future Tech for Future Commerce</h2>
          <div className={styles.visionContent}>
            <p className={styles.visionText}>
              The next decade of commerce is decentralized, intelligent, and automated.
              The Vertices Network is designed to support the future of global trade.
            </p>
            <div className={styles.visionFeatures}>
              <div className={styles.visionFeature}>
                <span className={styles.visionIcon}>🏭</span>
                <h4>Tokenized Warehousing</h4>
                <p>Real-world assets like storage space become fractionalized and tradable</p>
              </div>
              <div className={styles.visionFeature}>
                <span className={styles.visionIcon}>🤖</span>
                <h4>AI + Blockchain Synergy</h4>
                <p>Fully autonomous procurement, routing, and delivery systems</p>
              </div>
              <div className={styles.visionFeature}>
                <span className={styles.visionIcon}>🌐</span>
                <h4>Cross-Chain Operability</h4>
                <p>VTXN usable across multiple blockchains via secure bridges</p>
              </div>
              <div className={styles.visionFeature}>
                <span className={styles.visionIcon}>🔒</span>
                <h4>Zero-Knowledge Privacy</h4>
                <p>Secure enterprise data on-chain without compromising confidentiality</p>
              </div>
              <div className={styles.visionFeature}>
                <span className={styles.visionIcon}>🌱</span>
                <h4>Green Logistics</h4>
                <p>Carbon offsets tracked and verified on-chain per delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Join the Commerce Revolution</h2>
          <p className={styles.ctaText}>
            Be part of building the intelligent, automated, and decentralized future of global trade
          </p>
          <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Explore VTXN Token
            </button>
              <a href="../../public/vertices-whitepaper.pdf" target="_blank" className={`${styles.btn} ${styles.btnSecondary}`}>
                Read Whitepaper
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;