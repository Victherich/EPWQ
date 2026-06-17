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
              url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop') no-repeat center center;
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

export default function TermsAndConditionsPage() {
  return (
    <PageWrapper>
      {/* Visual Header Banner */}
      <HeroBanner>
        <PreTitle>TERMS AND CONDITIONS</PreTitle>
        <MainTitle>Terms and Conditions</MainTitle>
      </HeroBanner>

      {/* Primary Text Content Area */}
      <ContentContainer>
        
        <SectionBlock>
          <Paragraph>
            Welcome to El Paso Water Quality. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, services, and any interactions with our company. By accessing or using our website and services, you agree to be bound by these Terms.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>1. Company Information</SectionHeading>
          <Paragraph>
            El Paso Water Quality provides free water testing and educational resources about water quality. We are not affiliated with El Paso Water, the city&apos;s official water provider. Our mission is to inform and empower residents about potential contaminants in their water.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>2. Eligibility & Use of Services</SectionHeading>
          <Paragraph>
            You must be at least 18 years old to use our services.Our free water testing is available only in specific locations. Availability may change without notice.The results from our water testing are for informational purposes only and should not be considered as official regulatory testing.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>3. No Sales or Endorsements</SectionHeading>
          <Paragraph>
            El Paso Water Quality does not sell water filtration systems or endorse specific products.Our goal is to provide unbiased, science-backed information to help you make informed decisions about your water quality.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>4. Accuracy of Information</SectionHeading>
          <Paragraph>
            While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or accuracy of any content on our website or in our reports.Water quality can change over time due to various environmental and infrastructural factors.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>5. Limitation of Liability</SectionHeading>
          <Paragraph>
            El Paso Water Quality is not responsible for any decisions made based on our water test results.We are not liable for any damages, health effects, or issues arising from the use of our services or reliance on the information provided.If you have serious concerns about your water quality, we recommend consulting with certified water testing laboratories or regulatory agencies.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>6. Scheduling & Cancellations</SectionHeading>
          <Paragraph>
            Free water tests are scheduled on a first-come, first-served basis. We reserve the right to reschedule or cancel appointments based on availability.If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>7. Intellectual Property</SectionHeading>
          <Paragraph>
            All content on our website, including text, images, logos, and educational materials, is the property of El Paso Water Quality and may not be copied, modified, or distributed without permission.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>8. Changes to Terms</SectionHeading>
          <Paragraph>
            We may update these Terms at any time without prior notice. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.
          </Paragraph>
          <Paragraph>
            You can cancel the SMS service at any time. Simply text &quot;STOP&quot; to the shortcode. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
          </Paragraph>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>9. Contact Information</SectionHeading>
          <Paragraph>
            For any questions or concerns about these Terms, please contact us at:
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

      </ContentContainer>
    </PageWrapper>
  );
}