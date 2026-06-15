'use client'
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const AttentionSection = styled.section`
  width: 100%;
  background-color: #f8fafc; /* Crisp clean white background matching the image */
  padding: 5rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    padding: 3.5rem 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #0f172a; /* Deep charcoal navy blue */
`;

const Headline = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroParagraph = styled.p`
  color: #475569; /* Soft muted descriptive gray */
  font-family: 'Arial', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 520px;
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: #1e293b;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6; /* Branding water blue tint */
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ActionButton = styled.button`
  align-self: flex-start;
  background-color: #0066cc; /* High-contrast call-to-action blue */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-family: 'Arial', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #0052a3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const MapVisualPane = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* Sets a responsive aspect ratio for the map card */
  background-color: #eef2f6; /* Gray map card base matching the design */
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

/* Styled internal components simulating the map and legend assets from the image */
const MapServiceArea = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 55%;
  height: 60%;
  background-color: rgba(59, 130, 246, 0.25); /* Transparent light blue water zones */
  border-radius: 8px;
`;

const MapMarker = styled.div`
  position: absolute;
  top: 55%;
  left: 65%;
  width: 10px;
  height: 10px;
  background-color: #e53e3e; /* Red location pin point */
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(229, 62, 62, 0.2);
`;

const LegendCard = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LegendTitle = styled.p`
  color: #1e293b;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ColorSwatch = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${({ $color }) => ($color)};
`;

// --- Component Assembly ---

export default function WaterAttentionSection() {
  return (
    <AttentionSection>
      <ContentContainer>
        
        {/* Left Copy Block with Action Trigger */}
        <InfoBlock>
          <Headline>Why El Paso Water<br />Needs Attention</Headline>
          
          <IntroParagraph>
            Our unique desert environment, aging infrastructure, and mineral-rich water sources contribute to issues that every homeowner should be aware of.
          </IntroParagraph>

          <CheckList>
            <CheckItem>
              <IconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </IconWrapper>
              Hard water is common across the region
            </CheckItem>

            <CheckItem>
              <IconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </IconWrapper>
              Chlorine levels can vary throughout the city
            </CheckItem>

            <CheckItem>
              <IconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </IconWrapper>
              Old pipes may add unwanted contaminants
            </CheckItem>

            <CheckItem>
              <IconWrapper>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </IconWrapper>
              Water quality differs from neighborhood to neighborhood
            </CheckItem>
          </CheckList>

          <ActionButton>Learn More About El Paso Water</ActionButton>
        </InfoBlock>
        
        {/* Right Stylized Map Visual Card element */}
        <MapVisualPane>
          <MapServiceArea aria-hidden="true" />
          <MapMarker aria-hidden="true" />
          
          <LegendCard>
            <LegendTitle>Water Quality Levels</LegendTitle>
            <LegendItem><ColorSwatch $color="rgba(59, 130, 246, 0.4)" /> Good</LegendItem>
            <LegendItem><ColorSwatch $color="#eab308" /> Moderate</LegendItem>
            <LegendItem><ColorSwatch $color="#e53e3e" /> Poor</LegendItem>
          </LegendCard>
        </MapVisualPane>
        
      </ContentContainer>
    </AttentionSection>
  );
}