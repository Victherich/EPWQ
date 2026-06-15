'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const CtaSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 320px;
  background-color: #030a16; /* Deep navy dark theme background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: 280px;
  }
`;

/* Simulates background water splash assets layered underneath content.
  Replace background-image URLs with your actual local file path paths.
*/
const SplashBackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.45; /* Soft blend to ensure high text contrast */
  background-image: url('/water-splash-left.png'), url('/water-splash-right.png');
  background-position: left bottom, right bottom;
  background-repeat: no-repeat;
  background-size: contain, contain;

  @media (max-width: 768px) {
    opacity: 0.25; /* Dialed down further on small screens to avoid crowding text */
  }
`;

const CentralContentBlock = styled.div`
  position: relative;
  z-index: 5;
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MainHeading = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #ffffff;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;

  span {
    color: #3b82f6; /* Accent blue tint highlighted text matching the image */
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const DescriptiveText = styled.p`
  color: #cbd5e1; /* Smooth clear light gray secondary font color */
  font-family: 'Arial', sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  margin: 0 0 2.25rem 0;
  max-width: 480px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.75rem;
  }
`;

const PrimaryCtaButton = styled.button`
  background-color: #0066cc; /* High-contrast branding blue color fill */
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  padding: 1.1rem 2.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(0, 102, 204, 0.3);
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #0052a3;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    width: 100%; /* Spans full width organically on extra small phone viewports */
    padding: 1rem 1.5rem;
  }
`;

// --- Component Assembly ---

export default function WaterFindOutCTA() {
    const router = useRouter()
  return (
    <CtaSection>
      {/* Background Graphic Visualizer Node Elements */}
      <SplashBackgroundOverlay aria-hidden="true" />

      {/* Main Structural Typography Box */}
      <CentralContentBlock>
        <MainHeading>
          Ready to Find Out What's
          <span>In Your Water?</span>
        </MainHeading>
        
        <DescriptiveText>
          Schedule your free in-home water quality inspection today.
        </DescriptiveText>

        <PrimaryCtaButton onClick={()=>router.push('/contact')}>
          Schedule Free Inspection
        </PrimaryCtaButton>
      </CentralContentBlock>
    </CtaSection>
  );
}