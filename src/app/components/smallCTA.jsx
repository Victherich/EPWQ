"use client";

import Link from "next/link";
import styled from "styled-components";

export default function SmallCTA() {
  return (
    <CTACard>
      <h3>Ready for Safer Water?</h3>
      <p>Schedule your 100% free, no-obligation home water inspection today.</p>
      <CTAButton href="/contact">Book Inspection</CTAButton>
    </CTACard>
  );
}

const CTACard = styled.div`
  background-color: #030b14;
  color: #ffffff;
  padding: 36px 28px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(3, 11, 20, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;

  h3 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 700;
    word-break: normal;
    overflow-wrap: break-word;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.5;
    word-break: normal;
    overflow-wrap: break-word;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 14px 20px;
  background-color: #1d4ed8;
  color: #ffffff;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease;
  margin-top: 6px;
  word-break: normal;
  overflow-wrap: break-word;

  &:hover {
    background-color: #1e40af;
  }
`;