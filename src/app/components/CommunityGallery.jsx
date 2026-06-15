'use client';

import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const CommunitySection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #f8f9fa; /* Light background matching the layout */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: -0.3px;
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 1.3rem;
    padding: 0 10px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* Controls the aspect ratio of the cards to match the reference image */
  aspect-ratio: 1.15 / 1; 
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background-color: #e2e8f0; /* Fallback skeleton color while images load */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  /* Subtle hover state effect for interactivity */
  ${ImageContainer}:hover & {
    transform: scale(1.03);
  }
`;

// --- Main Component ---

export default function CommunityGallery() {
  // Replace these URLs/paths with your actual image file locations
  const galleryImages = [
    {
      id: 1,
      src: '/h9.jpeg', 
      alt: 'Technician operating specialized testing equipment outside'
    },
    {
      id: 2,
      src: '/h11.jpeg',
      alt: 'Close up of a professional testing hardware kit case'
    },
    {
      id: 3,
      src: '/h12.jpeg',
      alt: 'Happy smiling local neighborhood family outdoors'
    },
    {
      id: 4,
      src: '/h13.jpeg',
      alt: 'Technician setting up environmental water testing tools'
    }
  ];

  return (
    <CommunitySection>
      <SectionTitle>
        Trusted by your neighbors. Committed to our community.
      </SectionTitle>
      
      <GalleryGrid>
        {galleryImages.map((image) => (
          <ImageContainer key={image.id}>
            <StyledImage src={image.src} alt={image.alt} />
          </ImageContainer>
        ))}
      </GalleryGrid>
    </CommunitySection>
  );
}