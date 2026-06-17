'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; 

// --- Styled Components ---

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #02070d; /* Deep dark blue-black */
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 60px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 20px 20px 20px;
  }
`;

const MainGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

// --- Column Styles ---
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandSection = styled(FooterColumn)`
  max-width: 280px;
`;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

const BrandName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.5px;
  
  span.top {
    font-size: 1.1rem;
    color: #ffffff;
  }
  span.bottom {
    font-size: 0.95rem;
    color: #a0aec0;
    font-weight: 400;
  }
`;

const BrandDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #a0aec0;
  margin: 0;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 20px 0;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledLink = styled.a`
  font-size: 0.9rem;
  color: #a0aec0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const ContactList = styled(LinkList)`
  gap: 16px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: #a0aec0;
`;

const IconWrapper = styled.span`
  color: #a0aec0;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// --- Bottom Bar Styles ---
const BottomDivider = styled.div`
  max-width: 1200px;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 16px;
    text-align: center;
  }
`;

const CopyrightText = styled.span`
  font-size: 0.8rem;
  color: #718096;
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIconLink = styled.a`
  color: #a0aec0;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  &:hover {
    color: #ffffff;
  }
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 101;
`;

// New wrapper to cleanly bound your image size
const LogoImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;  /* Adjust the width to fit your logo asset design */
  height: 40px;  /* Adjust the height to balance your header layout */
  border-radius:50px;
  overflow: hidden;
  margin-right:10px;
`;


// --- Icon Sub-components ---
const WaterDropLogo = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 4 10 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 10 12 2 12 2Z" fill="#3182ce"/>
    <path d="M12 6C12 6 7 11 7 14C7 16.5 9 18.5 12 18.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- Main Component ---
export default function Footer() {
  return (
    <FooterContainer>
      <MainGrid>
        {/* Brand Meta Column */}
        <BrandSection>
          <LogoContainer>
            {/* <WaterDropLogo /> */}
            <LogoImageWrapper>
                    <Image 
                          src="/logo.webp"    
                          alt="Water Quality Inspection Logo"
                          fill                
                          style={{ objectFit: 'cover'}} 
                          // priority   
                        />
            </LogoImageWrapper>
            <BrandName>
              <span className="top">WATER QUALITY</span>
              <span className="bottom">INSPECTION</span>
            </BrandName>
          </LogoContainer>
          <BrandDesc>
            Helping El Paso families make informed decisions about their water quality.
          </BrandDesc>
        </BrandSection>

        {/* Quick Links Column */}
        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <li><StyledLink href="#">Home</StyledLink></li>
            <li><StyledLink href="/about">About</StyledLink></li>
            {/* <li><StyledLink href="/water-quality">Water Quality</StyledLink></li> */}
            <li><StyledLink href="/process">Process</StyledLink></li>
            {/* <li><StyledLink href="/faq">FAQ</StyledLink></li> */}
            <li><StyledLink href="/contact">Contact</StyledLink></li>
             <li><StyledLink href="/termsandconditions">Terms and Conditions</StyledLink></li>
              <li><StyledLink href="/privacypolicy">Privacy Policy</StyledLink></li>
          </LinkList>
        </FooterColumn>

        {/* Service Areas Column */}
        <FooterColumn>
          <ColumnTitle>Service Areas</ColumnTitle>
          <LinkList>
            <li><StyledLink href="#">West El Paso</StyledLink></li>
            <li><StyledLink href="#">East El Paso</StyledLink></li>
            <li><StyledLink href="#">Northeast El Paso</StyledLink></li>
            <li><StyledLink href="#">Central El Paso</StyledLink></li>
            <li><StyledLink href="#">Surrounding Areas</StyledLink></li>
          </LinkList>
        </FooterColumn>

        {/* Contact Us Column */}
        <FooterColumn>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactList>
            <ContactItem>
              <IconWrapper><PhoneIcon /></IconWrapper>
              <span>+1 915 987 2546</span>
            </ContactItem>
            <ContactItem>
              <IconWrapper><MailIcon /></IconWrapper>
              <span>info@waterqualityinspection.org</span>
            </ContactItem>
            <ContactItem>
              <IconWrapper><MapPinIcon /></IconWrapper>
              <span>5823 N Mesa St, El Paso 79912 Texas</span>
            </ContactItem>
          </ContactList>
        </FooterColumn>
      </MainGrid>

      {/* Bottom Legal / Social Bar */}
      <BottomDivider>
        <CopyrightText>
          &copy; {new Date().getFullYear()} Water Quality Inspection. All rights reserved.
        </CopyrightText>
        
        <SocialsWrapper>
          {/* Facebook */}
          <SocialIconLink href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/></svg>
          </SocialIconLink>
          {/* Instagram */}
          <SocialIconLink href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </SocialIconLink>
          {/* LinkedIn (Icon matching layout standard) */}
          <SocialIconLink href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </SocialIconLink>
          {/* X / Twitter */}
          <SocialIconLink href="#" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </SocialIconLink>
        </SocialsWrapper>
      </BottomDivider>
    </FooterContainer>
  );
}