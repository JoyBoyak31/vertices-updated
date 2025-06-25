import React, { useEffect, useRef } from 'react';
import styles from './Roadmap.module.css';

const Roadmap = () => {
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
    <div className={styles.roadmapContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection} ref={addToRefs}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>
            Vertices <span className={styles.highlight}>Roadmap</span>
          </h1>
          <p className={styles.subtitle}>
            Our journey to revolutionize global commerce through AI, blockchain, and decentralized finance
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection} ref={addToRefs}>
        <div className={styles.container}>
          <div className={styles.roadmapTimeline}>
            
            {/* Q3 2025 - Genesis Launch */}
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineMarker} ${styles.completed}`}>
                <span className={styles.markerIcon}>🚀</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>Q3 2025</div>
                <h3>Genesis Launch</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.checkIcon}>✅</span>
                    <span>Token Generation Event (TGE) on BNB Chain</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.checkIcon}>✅</span>
                    <span>Launch on major DEXs & CEXs</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.checkIcon}>✅</span>
                    <span>Staking pool and reward system activation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Q4 2025 - Live Pilot Phase */}
            <div className={styles.timelineItem}>
              <div className={`${styles.timelineMarker} ${styles.current}`}>
                <span className={styles.markerIcon}>⚡</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>Q4 2025</div>
                <h3>Live Pilot Phase</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.progressIcon}>🔄</span>
                    <span>Partner with regional eCommerce platforms</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.progressIcon}>🔄</span>
                    <span>Launch AI-driven traceability dashboard (beta)</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.progressIcon}>🔄</span>
                    <span>Begin onboarding logistics providers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2026 - Mainnet Rollout */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.markerIcon}>🌐</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>2026</div>
                <h3>Mainnet Rollout</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Vertices Mainnet activation with enterprise API suite</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Launch eComm Plugin SDK for Web3 marketplaces</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>First global logistics integrations (Top 20 players)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2027 - AI + Web3 Expansion */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.markerIcon}>🤖</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>2027</div>
                <h3>AI + Web3 Expansion</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Self-healing supply chain AI released</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Launch of Vertices Marketplace (peer-to-peer commerce)</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Rollout of decentralized reputation & scoring system</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2028 - Global Scaling */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.markerIcon}>🌍</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>2028</div>
                <h3>Global Scaling</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Geographic expansion: US, EU, SEA</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Vertices ID for verified sellers & buyers (Soulbound Tokens)</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Open governance via Vertices DAO (token-holder voting)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2029-2030 - Mass Adoption */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.markerIcon}>🏆</span>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>2029 - 2030</div>
                <h3>Mass Adoption & Autonomous Commerce</h3>
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Vertices handles 50M+ transactions/year</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Used by top 10 global eCommerce brands</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>AI-driven autonomous logistics & fulfillment zones</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Launch of Vertices Enterprise Suite (Web3-native ERP)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Roadmap;