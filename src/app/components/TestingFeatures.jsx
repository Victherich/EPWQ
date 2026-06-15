'use client';

import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

// const SectionContainer = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 480px;
//   padding: 80px 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background-color: #030b14; /* Dark lab blue/black background */
//   color: #ffffff;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//   overflow: hidden;

//   /* Simulates the dark laboratory background vignette */
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: radial-gradient(circle at 80% 50%, rgba(16, 44, 79, 0.4) 0%, rgba(3, 11, 20, 1) 75%);
//     z-index: 1;
//   }
// `;

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* 1. Base fallback background color
    2. A gradient that goes from completely solid dark blue on the left (to keep text legible)
       to transparent on the right to reveal the microscope image.
    3. The laboratory background image itself positioned at the right.
  */
  background: 
    linear-gradient(to right, #030b14 35%, rgba(3, 11, 20, 0.85) 60%, rgba(3, 11, 20, 0.4) 100%),
    url('/h14.jpeg'); /* Replace with your actual image path or public URL */
  
  background-size: contain;
  background-position: right center;
  background-repeat: repeat;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  overflow: hidden;

  /* This overlay darkens and colors the image with that specific laboratory blue tint */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 50%, rgba(16, 44, 79, 0.35) 0%, rgba(3, 11, 20, 0.9) 80%);
    z-index: 1;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

const HeaderBlock = styled.div`
  max-width: 480px;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 24px 0;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0aec0; /* Subdued gray text */
  margin: 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 32px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
  opacity: 0.9;

  svg {
    width: 38px;
    height: 38px;
  }
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
  color: #e2e8f0;
  margin: 0;
`;

// --- Custom Precision SVGs matching the image ---

// Microscope / Beaker Lab Equipment Icon
const ProfessionalGradeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h12M7 14h10M12 4v10M9 7h6" />
    <circle cx="12" cy="4" r="1" />
    <path d="M5 21h14a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1z" />
  </svg>
);

// Target / Crosshair Recommended Methods Icon
const EPARecommendedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
  </svg>
);

// Shield with Checkmark Accurate Results Icon
const AccurateResultsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

// Document with Fast Bolt Lightning Icon
const FastOnSiteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polygon points="11 13 9 16 13 16 11 19 15 15 11 15 11 13" />
  </svg>
);

// --- Main Component ---

export default function TestingFeatures() {
  const features = [
    {
      id: 1,
      icon: <ProfessionalGradeIcon />,
      text: 'Professional Grade Equipment',
    },
    {
      id: 2,
      icon: <EPARecommendedIcon />,
      text: 'EPA Recommended Methods',
    },
    {
      id: 3,
      icon: <AccurateResultsIcon />,
      text: 'Accurate & Reliable Results',
    },
    {
      id: 4,
      icon: <FastOnSiteIcon />,
      text: 'Fast On-Site Results',
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <HeaderBlock>
          <Title>
            Advanced Testing.<br />
            Accurate Results.
          </Title>
          <Description>
            We use professional grade equipment to test for the contaminants that matter
            most to your health and home.
          </Description>
        </HeaderBlock>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureText>{feature.text}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
}