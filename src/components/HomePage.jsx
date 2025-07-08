import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import logo from '../assets/logo/logo.png';
import NetworkBackground from './NetworkBackground';

const Home = () => {
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
    <div className={styles.homeContainer}>
      {/* ✅ Hero Section with animated background */}
      <section className={styles.heroSection} ref={addToRefs}>
        <div className={styles.backgroundWrapper}>
          <NetworkBackground />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              A New Standard in <span className={styles.highlight}>Intelligent</span><br />
              Digital Commerce
            </h1>
            <p className={styles.heroSubtitle}>
              The Vertices Network is redefining the future of eCommerce and logistics through
              a fusion of AI, blockchain, and decentralized finance (DeFi).
            </p>
            <div className={styles.heroButtons}>
              <a href="../../public/vertices-whitepaper.pdf" target="_blank" className={`${styles.btn} ${styles.btnSecondary}`}>
                Read Whitepaper
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.tokenCard}>
              <div className={styles.logoGlow}>
                <img src={logo} alt="logo" className={styles.logo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={styles.featuresSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pioneering the Next Era of Commerce</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconAI}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>AI-Powered Agents</h3>
              <p>Real-time demand forecasting, smart routing, and logistics automation powered by advanced AI.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconBlockchain}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c-1.1-2.3-3.6-4-6.5-4s-5.4 1.7-6.5 4c1.1 2.3 3.6 4 6.5 4s5.4-1.7 6.5-4z" />
                </svg>
              </div>
              <h3>On-Chain Traceability</h3>
              <p>Tamper-proof audit trails from manufacturer to consumer with blockchain verification.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconAutomation}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Self-Healing Supply Chains</h3>
              <p>Predictive analytics and AI automatically reroute around delays and disruptions.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.iconIoT}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
              </div>
              <h3>IoT Integration</h3>
              <p>Blockchain-logged geolocation and condition data with real-time asset tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className={styles.utilitySection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>VTXN Token Utility</h2>
          <div className={styles.utilityGrid}>
            <div className={styles.utilityCard}>
              <div className={styles.utilityIcon}>💳</div>
              <h4>Payments</h4>
              <p>Fast, borderless transactions for suppliers, 3PLs, and vendors</p>
            </div>
            <div className={styles.utilityCard}>
              <div className={styles.utilityIcon}>🔒</div>
              <h4>Staking</h4>
              <p>Unlock advanced AI features and real-time supply chain analytics</p>
            </div>
            <div className={styles.utilityCard}>
              <div className={styles.utilityIcon}>🎁</div>
              <h4>Rewards</h4>
              <p>Earn VTXN by contributing verified data and maintaining uptime</p>
            </div>
            <div className={styles.utilityCard}>
              <div className={styles.utilityIcon}>🗳️</div>
              <h4>Governance</h4>
              <p>Vote on system upgrades, protocol parameters, and ecosystem fund usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className={styles.roadmapSection} ref={addToRefs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.roadmapTimeline}>
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineMarker} ${styles.completed}`}></div>
              <div className={styles.timelineContent}>
                <h4>Q3 2025 </h4>
                <ul>
                  <li>Token Generation Event (TGE)</li>
                  <li>Staking pool and AI dashboard (beta)</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineMarker} ${styles.current}`}></div>
              <div className={styles.timelineContent}>
                <h4>Q4 2025</h4>
                <ul>
                  <li>eCommerce pilots, logistics partner onboarding</li>
                  <li>Listings on major exchanges</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4>2026</h4>
                <ul>
                  <li>Vertices Mainnet and API Suite</li>
                  <li>SDK for Web3 marketplaces</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4>2027</h4>
                <ul>
                  <li>Vertices Marketplace</li>
                  <li>Autonomous AI routing systems</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4> 2028</h4>
                <ul>
                  <li> DAO governance launch</li>
                  <li>The Vertices ID (Soulbound identities)</li>
                </ul>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4>2029–2030</h4>
                <ul>
                  <li> Vertices ERP for enterprises</li>
                  <li>50M+ transactions/year</li>
                  <li>Mass adoption by top eCommerce brands</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

    </div>
  );
};

export default Home;