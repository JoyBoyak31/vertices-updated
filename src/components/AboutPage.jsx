import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {

  const teamMembers = [
    {
      name: 'Damir',
      role: 'Founder Advisor',
      shortDescription: 'Highly skilled blockchain developer and member of the SBCA Blockchain Association.',
      fullDescription: 'Damir Lukavackic is a highly skilled blockchain developer and a member of the SBCA Blockchain Association of Slovenia/Europe. Actively engaged in the blockchain community, he regularly participates in live meetings and contributes as a team member to various crypto projects.',
      imageClass: 'avatarImageDamir',
    },
    {
      name: 'Piyanut',
      role: 'Blockchain Advisor',
      shortDescription: 'CEO of Stellarity Token, actively involved in blockchain space since 2016.',
      fullDescription: 'Piyanut Wonglakhon is the CEO of Stellarity Token and has been actively involved in the blockchain space since 2016. A dedicated and engaged member of the blockchain community, she frequently participates in industry events and contributes to various cryptocurrency projects.',
      imageClass: 'avatarImagePiyanut',
    }
  ];

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

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <div className={styles.teamContainer}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamCardInner}>
                  <div className={styles.avatarContainer}>
                    <div className={`${styles.avatarImage} ${styles[member.imageClass]}`}>
                      <div className={styles.placeholderIcon}>👤</div>
                    </div>
                  </div>

                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                    
                    <div className={styles.memberDescription}>
                      <p className={styles.descriptionShort}>
                        {member.shortDescription}
                      </p>
                      <p className={styles.descriptionFull}>
                        {member.fullDescription}
                      </p>
                    </div>

                    {/* <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink} aria-label="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className={styles.socialLink} aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
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