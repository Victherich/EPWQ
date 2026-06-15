'use client'
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const ProcessSection = styled.section`
  width: 100%;
  background-color: #f8fafc; /* Light clean backdrop matching the design */
  padding: 5rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem;
  }
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const MainHeading = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #0f172a; /* Deep dark navy/charcoal */
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: #64748b; /* Soft slate descriptive gray */
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

const StepsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

/* Desktop step connection line */
const ConnectorLine = styled.div`
  position: absolute;
  top: 45px; /* Centers lines directly with the white outer circle nodes */
  left: 15%;
  width: 70%;
  height: 2px;
  border-top: 2px dashed #cbd5e1;
  z-index: 1;

  @media (max-width: 992px) {
    display: none; /* Hidden on mobile viewports */
  }
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 300px;
  position: relative;
  z-index: 5;

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;

const OuterIconCircle = styled.div`
  width: 90px;
  height: 90px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  color: #0066cc; /* Water blue tint icon colors */
  margin-bottom: 1.25rem;
  position: relative;
`;

const StepNumberBadge = styled.div`
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  background-color: #0c3366; /* Deep contract blue badge */
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  font-family: 'Arial', sans-serif;
  color: #0f172a;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 1rem 0 0.75rem 0;
`;

const StepDescription = styled.p`
  color: #475569;
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`;

// --- Main Assembly Component ---

export default function InspectionProcess() {
  return (
    <ProcessSection>
      
      {/* Top Main Headers */}
      <HeaderBlock>
        <MainHeading>Our 3-Step Inspection Process</MainHeading>
        <Subtitle>Simple. Fast. Informative.</Subtitle>
      </HeaderBlock>

      {/* Main Row / Column Container */}
      <StepsContainer>
        
        {/* Desktop Dashed Connector overlay line background */}
        <ConnectorLine />

        {/* Step 1 Block */}
        <StepCard>
          <OuterIconCircle>
            {/* Custom Outline House Vector */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <StepNumberBadge>1</StepNumberBadge>
          </OuterIconCircle>
          <StepTitle>We Test<br />Your Water</StepTitle>
          <StepDescription>
            We test your tap water using advanced, professional equipment.
          </StepDescription>
        </StepCard>

        {/* Step 2 Block */}
        <StepCard>
          <OuterIconCircle>
            {/* Custom Droplet Wave Vector */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"></path>
              <path d="M12 18.5a3.5 3.5 0 0 0 3.5-3.5"></path>
            </svg>
            <StepNumberBadge>2</StepNumberBadge>
          </OuterIconCircle>
          <StepTitle>We Show You<br />Results Live</StepTitle>
          <StepDescription>
            You'll see exactly what's in your water. We explain everything.
          </StepDescription>
        </StepCard>

        {/* Step 3 Block */}
        <StepCard>
          <OuterIconCircle>
            {/* Custom Check Verified Circle Vector */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <StepNumberBadge>3</StepNumberBadge>
          </OuterIconCircle>
          <StepTitle>You Decide<br />What's Best</StepTitle>
          <StepDescription>
            No pressure. You choose the best solution for your home and your family.
          </StepDescription>
        </StepCard>

      </StepsContainer>
    </ProcessSection>
  );
}