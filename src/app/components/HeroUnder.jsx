'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// --- Styled Components ---


// --- Value Proposition Banner Row ---

const ValueRibbonContainer = styled.div`
  width: 100%;
  background-color: #020710;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;


  @media(max-width:768px){
//   transform:translateY(-20%);
  }
`;

const RibbonGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PropItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

const PropTextDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropHeadline = styled.h4`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PropCaption = styled.p`
  color: #94a3b8;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
`;

// --- Main Assembly Component ---

export default function HeroUnder() {
  return (
    <>

  

      {/* Trust & Verification Value Props Matrix Row */}
      <ValueRibbonContainer>
        <RibbonGrid>
          {/* Prop 1 */}
          <PropItem>
            <IconWrapper>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </IconWrapper>
            <PropTextDetails>
              <PropHeadline>100% FREE</PropHeadline>
              <PropCaption>No obligation inspection</PropCaption>
            </PropTextDetails>
          </PropItem>

          {/* Prop 2 */}
          <PropItem>
            <IconWrapper>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </IconWrapper>
            <PropTextDetails>
              <PropHeadline>Local El Paso Experts</PropHeadline>
              <PropCaption>We know our water</PropCaption>
            </PropTextDetails>
          </PropItem>

          {/* Prop 3 */}
          <PropItem>
            <IconWrapper>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </IconWrapper>
            <PropTextDetails>
              <PropHeadline>Advanced Testing</PropHeadline>
              <PropCaption>Professional grade equipment</PropCaption>
            </PropTextDetails>
          </PropItem>

          {/* Prop 4 */}
          <PropItem>
            <IconWrapper>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </IconWrapper>
            <PropTextDetails>
              <PropHeadline>Honest Results</PropHeadline>
              <PropCaption>You decide what's best</PropCaption>
            </PropTextDetails>
          </PropItem>
        </RibbonGrid>
      </ValueRibbonContainer>
    </>
  );
}