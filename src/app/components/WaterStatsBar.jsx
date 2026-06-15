'use client'
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const StatsBarSection = styled.section`
  width: 100%;
  background-color: #f8fafc; /* Ultra-light clean background matching the image */
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 992px) {
    padding: 2.5rem 1.5rem;
  }
`;

const StatsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }
`;

const IntroTextWrapper = styled.div`
  flex: 1;
  max-width: 420px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const Headline = styled.p`
  color: #0f172a; /* Deep charcoal navy blue */
//   font-family: 'Arial', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem; /* Generous spacing between stats blocks */

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
    width: 100%;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

const NumberLabel = styled.span`
  color: #0066cc; /* Vibrant branding water blue matching the text figures */
//   font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.15rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatCaption = styled.span`
  color: #475569; /* Soft muted slate description text */
//   font-family: 'Arial', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
`;

// --- Component Assembly ---

export default function WaterStatsBar() {
  return (
    <StatsBarSection>
      <StatsContainer>
        
        {/* Left Side Branding Statement Block */}
        <IntroTextWrapper>
          <Headline>
            We've helped hundreds of El Paso families get answers about their water.
          </Headline>
        </IntroTextWrapper>

        {/* Right Side Live Metric Counter Grid */}
        <StatsGrid>
          
          {/* Stat 1 */}
          <StatItem>
            <NumberLabel>500+</NumberLabel>
            <StatCaption>Homes Tested</StatCaption>
          </StatItem>

          {/* Stat 2 */}
          <StatItem>
            <NumberLabel>15+</NumberLabel>
            <StatCaption>Years of Experience</StatCaption>
          </StatItem>

          {/* Stat 3 */}
          <StatItem>
            <NumberLabel>100%</NumberLabel>
            <StatCaption>Free Inspections</StatCaption>
          </StatItem>

          {/* Stat 4 */}
          <StatItem>
            <NumberLabel>
              5
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                style={{ marginLeft: '2px', transform: 'translateY(-2px)' }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </NumberLabel>
            <StatCaption>Local Rating</StatCaption>
          </StatItem>

        </StatsGrid>
        
      </StatsContainer>
    </StatsBarSection>
  );
}