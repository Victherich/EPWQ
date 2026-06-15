'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// --- Styled Components ---

const TestBannerSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  background-color: #030a16; /* Fallback matching the deep theme background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 3rem 1.5rem;
  }
`;

const GraphicBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 65%; /* Restricts the asset image to occupy the right-hand portion */
  height: 100%;
  z-index: 1;
  pointer-events: none;

  /* Smoothly masks the background image from solid color on the left to transparent on the right */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #030a16 0%, rgba(3, 10, 22, 0.4) 40%, rgba(3, 10, 22, 0) 100%);
    z-index: 2;
  }

  img {
    object-fit: cover;
    object-position: right center;
  }

  @media (max-width: 992px) {
    width: 100%;
    opacity: 0.25; /* Softens on small devices to keep overlay text readable */
    
    &::before {
      background: linear-gradient(to bottom, #030a16 0%, rgba(3, 10, 22, 0.8) 100%);
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
`;

const SectionTitle = styled.h2`
//   font-family: 'Arial', sans-serif;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.5px;

  span {
    color: #3b82f6; /* Accent light blue matching the reference design colors */
    display: block;
    margin-top: 0.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DescriptionParagraph = styled.p`
  color: #cbd5e1; /* Smooth grey-white palette */
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 2rem 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
`;

const CheckIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

// --- Component Assembly ---

export default function WaterTestBanner() {
  return (
    <TestBannerSection>
      {/* Background Section Skyline Image Asset with Splashes Layer mask */}
      <GraphicBackgroundWrapper>
        <Image
          src="/h8.jpeg" 
          alt="El Paso neighborhood skyline water backdrop"
          fill
          priority
        />
      </GraphicBackgroundWrapper>

      {/* Main Copy Content Box Grid layout element */}
      <ContentContainer>
        <InfoBlock>
          <SectionTitle>
            Your Water Deserves
            <span>To Be Tested</span>
          </SectionTitle>
          
          <DescriptionParagraph>
            Water quality varies across El Paso neighborhoods. A professional inspection is the only way to know what's in your water.
          </DescriptionParagraph>

          <FeaturesList>
            <FeatureItem>
              <CheckIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </CheckIconWrapper>
              Protect your family's health
            </FeatureItem>

            <FeatureItem>
              <CheckIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </CheckIconWrapper>
              Prevent costly plumbing damage
            </FeatureItem>

            <FeatureItem>
              <CheckIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </CheckIconWrapper>
              Improve taste, clarity and odor
            </FeatureItem>

            <FeatureItem>
              <CheckIconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </CheckIconWrapper>
              Make informed decisions
            </FeatureItem>
          </FeaturesList>
        </InfoBlock>
        
        {/* Intentionally left empty column block to let background skyline breathe on large display ports */}
        <div aria-hidden="true" />
      </ContentContainer>
    </TestBannerSection>
  );
}