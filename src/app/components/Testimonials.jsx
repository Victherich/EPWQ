'use client';

import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const TestimonialsSection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #f8f9fa; /* Off-white background */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: -0.5px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 240px;
  border: 1px solid rgba(0, 0, 0, 0.02);
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  color: #ffb400; /* Star gold color */
`;

const ReviewText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 28px 0;
  font-style: normal;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #e2e8f0;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
`;

const LocationText = styled.span`
  font-size: 0.85rem;
  color: #718096;
  margin-top: 2px;
`;

// --- Inline Star SVG Component ---
const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// --- Main Component ---

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: '"Very professional and thorough. They showed us things about our water we never knew. Highly recommend!"',
      author: 'Maria G.',
      location: 'West El Paso',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120', // Replace with local image paths if needed
    },
    {
      id: 2,
      text: '"The inspection was eye-opening. Now we have peace of mind knowing our family is safe."',
      author: 'James T.',
      location: 'East El Paso',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    },
    {
      id: 3,
      text: '"Best service in town! Honest, friendly and no pressure at all."',
      author: 'Sandra R.',
      location: 'Northeast El Paso',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120&h=120',
    },
  ];

  return (
    <TestimonialsSection>
      <SectionTitle>What El Paso Families Say</SectionTitle>
      
      <CardsGrid>
        {reviews.map((review) => (
          <TestimonialCard key={review.id}>
            <div>
              <StarsWrapper>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </StarsWrapper>
              <ReviewText>{review.text}</ReviewText>
            </div>
            
            <AuthorContainer>
              <Avatar $src={review.avatarUrl} />
              <MetaInfo>
                <AuthorName>– {review.author}</AuthorName>
                <LocationText>{review.location}</LocationText>
              </MetaInfo>
            </AuthorContainer>
          </TestimonialCard>
        ))}
      </CardsGrid>
    </TestimonialsSection>
  );
}