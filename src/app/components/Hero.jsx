'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80px); /* Adjusts based on your header height */
  background-color: #051329; /* Matches the dark navy depth of the image */
  background-image: linear-gradient(to right, #051329 45%, transparent 85%), 
                    url('/boywater.png'); /* Replace with your image asset path */
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  padding: 4rem 6%;
  color: #ffffff;
  // font-family: 'Arial', sans-serif;
  margin-top:50px;

  @media (max-width: 968px) {
    background-image: linear-gradient(to bottom, rgba(5, 19, 41, 0.7) 60%, rgba(5, 19, 41, 0.1)), 
                      url('/boywater.png');
    background-position: center;
    background-size:cover;
    padding: 4rem 1.5rem;
    align-items: flex-start;
  }
`;

const ContentContainer = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem); /* Scales beautifully across devices */
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.5px;

  span {
    color: #3b82f6; /* Accent blue for "In Your Water?" */
    display: block;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 0.75rem 0;
  color: #e2e8f0;
`;

const Tagline = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #94a3b8; /* Dimmer secondary text color */
  margin: 0 0 2.5rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background-color: #0066cc; /* Solid water blue */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 1rem 1.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: 6px;
  padding: 1rem 1.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3b82f6;
  }
`;

// --- Main Component ---

export default function Hero() {
  const router = useRouter()
  return (
    <HeroSection>
      <ContentContainer>
        <Headline>
          What’s Really 
          <span>In Your Water?</span>
        </Headline>
        
        <Subtitle>
          Free in-home water quality inspection for El Paso residents.
        </Subtitle>
        
        <Tagline>
          Safe water. Healthy family. Peace of mind.
        </Tagline>

        <ButtonGroup>
          <PrimaryButton onClick={()=>router.push('/contact')}>
            Schedule Free Inspection
          </PrimaryButton>
          {/* <SecondaryButton>
            See Common Contaminants
          </SecondaryButton> */}
        </ButtonGroup>
      </ContentContainer>
    </HeroSection>
  );
}