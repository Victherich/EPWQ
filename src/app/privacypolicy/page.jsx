'use client'
import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc; /* Soft slate white */
  color: #0f172a; /* Deep charcoal navy blue */
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroBanner = styled.div`
  width: 100%;
  height: 320px;
  background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), 
              url('https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1200&auto=format&fit=crop') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const PreTitle = styled.span`
  color: #3b82f6; /* Branding water blue tint */
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
`;

const MainTitle = styled.h1`
  color: #ffffff;
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.main`
  width: 100%;
  max-width: 850px;
  background-color: #ffffff;
  margin: -60px auto 5rem auto; /* Overlaps hero section beautifully */
  padding: 3.5rem 4rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: -30px 1rem 3rem 1rem;
    padding: 2.5rem 1.75rem;
    width: calc(100% - 2rem);
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2.5rem;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  color: #475569; /* Soft muted descriptive gray */
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0 0 1.25rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactCard = styled.div`
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  font-size: 1.05rem;
  color: #1e293b;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  a {
    color: #0066cc;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// --- Component Assembly ---

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      {/* Visual Header Banner */}
      <HeroBanner>
        <PreTitle>PRIVACY POLICY</PreTitle>
        <MainTitle>PRIVACY POLICY</MainTitle>
      </HeroBanner>

      {/* Primary Text Content Area */}
      <ContentContainer>
        
        <SectionBlock>
          <Paragraph>
            At El Paso Water Quality, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>1. Information We Collect</SectionHeading>
          <Paragraph>
            We may collect the following types of personal information:
            Name, email address, phone number, and address when you schedule a free water test.Any additional information you voluntarily provide during our consultation or in communication with us.
            We do not collect sensitive financial or medical information.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>2. How We Use Your Information</SectionHeading>
          <Paragraph>
            We use your information to:
            Schedule and conduct free water tests.Provide educational resources about water quality.Improve our services and customer experience. Contact you for appointment confirmations, follow-ups, or updates.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>3. Data Protection & Security</SectionHeading>
          <Paragraph>
            We implement security measures to protect your personal information from unauthorized access or misuse.Your information is stored securely and is not sold or shared with third parties for marketing purposes.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>4. Sharing of Information</SectionHeading>
          <Paragraph>
            We do not share your personal information with third parties, except in the following cases:
            If required by law or government authorities.If necessary to prevent fraud, protect safety, or respond to legal requests.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>5. Your Rights & Choices</SectionHeading>
          <Paragraph>
            You have the right to request access to or deletion of your personal information. You can opt out of communications from us at any time by contacting us.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>6. Cookies & Website Tracking</SectionHeading>
          <Paragraph>
            Our website may use cookies to enhance user experience and analyze website traffic. You can disable cookies in your browser settings if you do not wish to be tracked.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>7. Updates to This Privacy Policy</SectionHeading>
          <Paragraph>
            We may update this Privacy Policy periodically. Any changes will be posted on our website with the updated date.
          </Paragraph>
          <Paragraph>
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>8. Contact Information</SectionHeading>
          <Paragraph>
            If you have any questions about our Privacy Policy or how your data is handled, please contact us:
          </Paragraph>
          
          <ContactCard>
            <ContactItem>
              <span>📧</span> Email: <a href="mailto:info@waterqualityinspection.org">info@waterqualityinspection.org</a>
            </ContactItem>
            <ContactItem>
              <span>📞</span> Phone: <a href="tel:+19159872546">+1 915-987-2546</a>
            </ContactItem>
          </ContactCard>
        </SectionBlock>

        <SectionBlock>
          <Paragraph>
            All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Messaging services.
            By using our website and services, you agree to this Privacy Policy. If you do not agree, please refrain from using our services.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <Paragraph>
           SMS/Text Messaging: By providing your mobile number, you consent to receive
appointment reminder text messages from El Paso Water Quality at the number you
provide. Message frequency varies; you may receive up to 2 reminder messages per
scheduled appointment. Message and data rates may apply. Reply STOP to unsubscribe
or HELP for help. We do not share or sell your mobile opt-in information or phone
number with third parties for marketing purposes </Paragraph>
        </SectionBlock>

      </ContentContainer>
    </PageWrapper>
  );
}