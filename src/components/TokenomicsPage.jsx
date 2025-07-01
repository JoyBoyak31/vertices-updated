import React, { useState, useEffect } from 'react';
import styles from './Tokenomics.module.css';

const TokenomicsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsVisible(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tokenData = [
    { 
      label: 'Community Rewards & Staking', 
      percentage: 20, 
      color: '#ff00ff',
      description: 'Long-term staking rewards & adoption incentives'
    },
    { 
      label: 'Ecosystem Growth Fund', 
      percentage: 18, 
      color: '#00ffff',
      description: 'Dev grants, cross-chain expansion, dApp partners'
    },
    { 
      label: 'Team & Founders', 
      percentage: 12, 
      color: '#ff6b6b',
      description: '4-year vesting with 1-year cliff'
    },
    { 
      label: 'Treasury & Operations', 
      percentage: 10, 
      color: '#4ecdc4',
      description: 'Governance proposals & operational expenses'
    },
    { 
      label: 'Airdrop Campaigns', 
      percentage: 10, 
      color: '#45b7d1',
      description: 'Transparent user onboarding & milestone-based release'
    },
    { 
      label: 'Strategic Partners', 
      percentage: 10, 
      color: '#96ceb4',
      description: 'Aligned partners in AI, logistics, retail'
    },
    { 
      label: 'Merchant Onboarding', 
      percentage: 10, 
      color: '#ffa726',
      description: 'Incentivize merchants & support onboarding'
    },
    { 
      label: 'Listing Liquidity', 
      percentage: 5, 
      color: '#ab47bc',
      description: 'Ensures smooth trading & price stability'
    },
    { 
      label: 'Advisors & Experts', 
      percentage: 5, 
      color: '#66bb6a',
      description: 'Domain leaders in compliance, AI, logistics'
    }
  ];

  const calculateCircularPosition = (index, total) => {
    const radius = Math.min(window.innerWidth * 0.35, 400);
    const angle = (index * 360) / total - 90;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const CircularLayout = () => (
    <div className={styles.circularContainer}>
      {/* Center Circle */}
      <div className={styles.centerCircle}>
        <div className={styles.innerCircle}>
          <div className={styles.tokenSymbol}>
            <span className={styles.tokenIcon}>◊</span>
            <span className={styles.tokenName}>VTXN</span>
          </div>
        </div>
      </div>
      
      {/* Token Distribution Cards */}
      {tokenData.map((data, index) => (
        <div 
          key={index}
          className={`${styles.infoCard} ${isVisible ? styles.visible : ''}`}
          style={{
            ...calculateCircularPosition(index, tokenData.length),
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div 
                className={styles.colorIndicator}
                style={{ backgroundColor: data.color }}
              />
              <span className={styles.percentage}>{data.percentage}%</span>
            </div>
            <div className={styles.cardTitle}>{data.label}</div>
            <div className={styles.cardDescription}>{data.description}</div>
            <div 
              className={styles.cardLine} 
              style={{ backgroundColor: data.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const GridLayout = () => (
    <div className={styles.gridLayout}>
      {tokenData.map((data, index) => (
        <div 
          key={index} 
          className={`${styles.gridCard} ${isVisible ? styles.visible : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.gridCardHeader}>
            <div 
              className={styles.gridColorIndicator}
              style={{ backgroundColor: data.color }}
            />
            <span className={styles.gridPercentage}>{data.percentage}%</span>
          </div>
          <div className={styles.gridCardTitle}>{data.label}</div>
          <div className={styles.gridCardDescription}>{data.description}</div>
          <div 
            className={styles.progressBar}
            style={{ 
              backgroundColor: `${data.color}20`,
              border: `1px solid ${data.color}40`
            }}
          >
            <div 
              className={styles.progressFill}
              style={{ 
                width: `${data.percentage * 4}%`,
                backgroundColor: data.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`${styles.tokenomicsWrapper} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.backgroundGrid} />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>TOKENOMICS</h1>
          <p className={styles.subtitle}>Token Distribution & Allocation</p>
        </header>
        
        {!isMobile ? <CircularLayout /> : <GridLayout />}
        
        <div className={styles.totalSupply}>
          <div className={styles.supplyLabel}>Total Supply</div>
          <div className={styles.supplyValue}>2,100,000,000 VTXN</div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;