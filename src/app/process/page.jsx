"use client";

import React from "react";
import styled from "styled-components";
import InspectionProcess from "../components/InspectionProcess";
import WaterDifferenceTabs from "../components/WaterDifferenceTabs";

export default function WaterProcessHeroPage() {
  return (
    <PageWrapper>
      {/* FULL WIDTH HERO SECTION */}
      <HeroSection>
        <HeroOverlay />
        <HeroContainer>
          {/* <Badge>SCIENCE-BACKED EVALUATION</Badge> */}
          <HeroTitle>
            How We Verify Your Household Water Safety
          </HeroTitle>
          <HeroSubtitle>
            Discover the precise testing methodologies, certified equipment, 
            and safety indexes used directly at your tap to uncover hidden 
            contaminants and structural water impurities.
          </HeroSubtitle>
          {/* <PrimaryButton href="#start-discovery">
            See the Testing Framework ↓
          </PrimaryButton> */}
        </HeroContainer>
      </HeroSection>

      {/* DYNAMIC SLOT FOR IMPORTED COMPONENTS */}
      <MainContentSlot>
    
        <InspectionProcess/>
           <WaterDifferenceTabs/>
      </MainContentSlot>
    </PageWrapper>
  );
}

// --- Styled Components Schema ---

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  background-color: #ffffff;
  overflow-x: hidden;
  width: 100%;
  margin-top:40px;
`;
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  /* 0px padding on left/right as requested */
  padding: 50px 0px; 
  background-image: url("https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 1; /* Establishes a stacking context for children absolute tracking */

  @media (max-width: 768px) {
    padding: 120px 0px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  /* FIXED: Changed 100 to 100% so the browser registers the gradient */
  background: linear-gradient(
    135deg, 
    rgba(3, 11, 20, 0.53) 0%, 
    rgba(15, 30, 51, 0.83) 100% 
  );
  pointer-events: none;
  z-index: 1;
`;

const HeroContainer = styled.div`
  max-width: 850px;
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Soft fallback protection inside the centered block for smaller mobile text rows */
  padding: 0 20px; 
  box-sizing: border-box;
`;

const Badge = styled.span`
  background-color: rgba(59, 130, 246, 0.25);
  color: #60a5fa;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid rgba(59, 130, 246, 0.4);
  backdrop-filter: blur(4px);
`;

const HeroTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 24px 0;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin: 0 0 40px 0;
  max-width: 720px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 16px 36px;
  background-color: #1d4ed8;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(29, 78, 216, 0.4);
  transition: all 0.2s ease;

  &:hover {
    background-color: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(29, 78, 216, 0.5);
  }
`;

const MainContentSlot = styled.main`
  width: 100%;
  background-color: #ffffff;
`;