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
            The Vertices <span className={styles.highlight}>Roadmap</span>
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
                
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.progressIcon}>🔄</span>
                    <span>Token Generation Event (TGE)</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.progressIcon}>🔄</span>
                    <span>Staking pool and AI dashboard (beta)</span>
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
               
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.checkIcon}>✅</span>
                    <span>eCommerce pilots, logistics partner onboarding</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.checkIcon}>✅</span>
                    <span>Listings on major exchanges</span>
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
            
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span> Vertices Mainnet and API Suite</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span> SDK for Web3 marketplaces</span>
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
               
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Vertices Marketplace</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Autonomous AI routing system</span>
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
                
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>DAO governance launch</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>The Vertices ID (Soulbound identities)</span>
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
               
                <div className={styles.milestones}>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Vertices ERP for enterprises</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>50M+ transactions/year</span>
                  </div>
                  <div className={styles.milestone}>
                    <span className={styles.futureIcon}>⏳</span>
                    <span>Mass adoption by top eCommerce brands</span>
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