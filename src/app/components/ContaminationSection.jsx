"use client";

import React from 'react';
import styled from 'styled-components';

// --- Contaminants Data Structure ---
const CONTAMINANTS_DATA = [
  {
    id: 'chlorine',
    title: 'Chlorine',
    description: 'Causes dry skin, irritation and unpleasant taste & odor.',
    image: '/h1.jpeg',
  },
  {
    id: 'heavy-metals',
    title: 'Heavy Metals',
    description: 'Lead, arsenic, mercury and other harmful metals.',
    image: '/h15.jpeg',
  },
  {
    id: 'pfas',
    title: 'PFAS',
    description: '"Forever chemicals" linked to serious health risks.',
    image: '/h2.jpeg',
  },
  {
    id: 'hard-water',
    title: 'Hard Water Minerals',
    description: 'Causes scale buildup and damages appliances.',
    image: '/h3.jpeg',
  },
  {
    id: 'bacteria',
    title: 'Bacteria & Microorganisms',
    description: 'May cause illness and health problems.',
    image: '/h4.jpeg',
  },
  {
    id: 'pipe-contamination',
    title: 'Pipe Contamination',
    description: 'Rust, sediment & chemicals from aging infrastructure.',
    image: '/h5.jpeg',
  },
];

// --- Main Component ---

export default function Contaminants() {
  return (
    <SectionContainer>
      <LeftContent>
        <Title>
          What May Be
          <span>In Your Water</span>
        </Title>
        <Description>
          Tap water can look clean, but it may contain harmful contaminants you can't see, taste, or smell.
        </Description>

        {/* NEW ENHANCEMENTS IN LEFT COLUMN */}
        <StatsWrapper>
          <StatBox>
            <StatNum>0$</StatNum>
            <StatLabel>On-Site Analysis</StatLabel>
          </StatBox>
          <StatBox>
            <StatNum>30m</StatNum>
            <StatLabel>Testing Duration</StatLabel>
          </StatBox>
        </StatsWrapper>

        <InfoList>
          <InfoItem>
            <CheckIcon>🔬</CheckIcon>
            <div>
              <ItemHeading>Point-of-Use Testing</ItemHeading>
              <ItemText>We evaluate water directly from your household tap, not mass utility lines.</ItemText>
            </div>
          </InfoItem>
          <InfoItem>
            <CheckIcon>📊</CheckIcon>
            <div>
              <ItemHeading>Immediate Parameter Data</ItemHeading>
              <ItemText>Get accurate, clear readings on hardness, particulates, and chemical indexes on-site.</ItemText>
            </div>
          </InfoItem>
        </InfoList>

        <ViewAllButton href="/contact">
          Schedule Free Evaluation
        </ViewAllButton>
      </LeftContent>

      <RightGrid>
        {CONTAMINANTS_DATA.map((item) => (
          <Card key={item.id}>
            <ImageWrapper>
              <CardImage src={item.image} alt={item.title} />
            </ImageWrapper>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardBody>
          </Card>
        ))}
      </RightGrid>
    </SectionContainer>
  );
}

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #f8fafc;
  padding: 5rem 6%;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 1.5rem;
  }
`;

const LeftContent = styled.div`
  position: sticky;
  top: 120px;
  flex: 1;
  max-width: 380px;

  @media (max-width: 1100px) {
    position: static;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.5px;

  span {
    display: block;
    color: #1d4ed8;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;

/* NEW LEFT SIDE CONTENT ELEMENTS */
const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;

  @media (max-width: 1100px) {
    max-width: 450px;
  }
`;

const StatBox = styled.div`
  background: #ffffff;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.01);
`;

const StatNum = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1d4ed8;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: left;
  width: 100%;

  @media (max-width: 1100px) {
    max-width: 450px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const CheckIcon = styled.div`
  font-size: 1.25rem;
  line-height: 1;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ItemHeading = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
`;

const ItemText = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
`;

const ViewAllButton = styled.a`
  display: inline-block;
  text-align: center;
  background-color: #1d4ed8;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 0.95rem 2rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.15);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1e40af;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(29, 78, 216, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1100px) {
    max-width: 450px;
  }
`;

/* RIGHT GRID & CARDS */
const RightGrid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem; 
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 640px) {
    border-radius: 12px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 110px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;

  @media (max-width: 640px) {
    padding: 0.85rem;
    gap: 0.4rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;