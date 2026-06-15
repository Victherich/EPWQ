"use client";

import React from "react";
import styled from "styled-components";

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* HERO SECTION WITH BACKGROUND IMAGE & GRADIENT OVERLAY */}
      <HeroSection>
        <HeroOverlay />
        <HeroContainer>
          <Badge>About us</Badge>
          <HeroTitle>
            Protecting Your Family’s Water Through Pure Transparency
          </HeroTitle>
          <HeroSubtitle>
            At El Paso Water Quality, we believe that every household deserves 
            access to the safest, cleanest water possible. Learn who we are, 
            what we stand for, and why we do it.
          </HeroSubtitle>
          {/* <PrimaryButton href="#mission">Explore Our Story ↓</PrimaryButton> */}
        </HeroContainer>
      </HeroSection>

      {/* STRATEGIC TRANSPARENCY NOTICE */}
      <NoticeSection>
        <NoticeContainer>
          <NoticeIconWrapper>⚠️</NoticeIconWrapper>
          <NoticeContent>
            <h3>Important Transparency Clarification</h3>
            <p>
              To be completely transparent, <strong>we are not affiliated with El Paso Water</strong>. 
              They are the city’s official municipal water utility provider responsible for mass distribution. 
              While their bulk supply successfully meets structural legal frameworks, legal compliance 
              does not guarantee that individual household tap water is entirely clear of downstream trace elements.
            </p>
          </NoticeContent>
        </NoticeContainer>
      </NoticeSection>

      {/* MAIN MISSION SECTION */}
      <Section id="mission">
        <Container>
          <SplitGrid>
            <TextColumn>
              <SectionBadge>OUR CORE MISSION</SectionBadge>
              <MainHeading>Educating and Empowering Households—Not Selling Products</MainHeading>
              <Paragraph>
                Many families assume that if water is legally compliant, it must be 100% safe to drink. 
                However, rigorous environmental studies show that standard municipal infrastructure can still 
                harbor disinfection byproducts, heavy metal precursors from domestic plumbing, PFAS, and other 
                compounds that may present long-term health vulnerabilities.
              </Paragraph>
              <Paragraph>
                Our mission is straightforward and absolute. We exist to deliver science-backed parameters 
                directly to you, eliminating the guesswork so you can protect your kitchen, kids, and overall health.
              </Paragraph>
              
              <MissionList>
                <MissionItem>
                  <IconCircle>📊</IconCircle>
                  <div>
                    <h4>Transparent Data Distribution</h4>
                    <p>Provide open, understandable, and accurate data about domestic water characteristics.</p>
                  </div>
                </MissionItem>
                <MissionItem>
                  <IconCircle>🛡️</IconCircle>
                  <div>
                    <h4>Informed Household Decisions</h4>
                    <p>Help El Paso parents and property owners choose their protection level confidently.</p>
                  </div>
                </MissionItem>
                <MissionItem>
                  <IconCircle>🔬</IconCircle>
                  <div>
                    <h4>100% Free Instrumentation Testing</h4>
                    <p>Offer localized evaluation directly inside your home to analyze your exact point of use.</p>
                  </div>
                </MissionItem>
              </MissionList>
            </TextColumn>

            {/* Visual Card + Inline Context Image */}
            <GraphicColumn>
              <SectionImageFrame 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80" 
                alt="Water purity laboratory analysis testing parameters" 
              />
              <DisplayCard>
                <CardHeader>
                  <DropIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C12 2 4 10 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 10 12 2 12 2Z"/>
                  </DropIcon>
                  <h3>Why Local Testing Matters</h3>
                </CardHeader>
                <StatGrid>
                  <StatItem>
                    <StatValue>30m</StatValue>
                    <StatLabel>On-Site Analysis</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>0$</StatValue>
                    <StatLabel>Total Obligation</StatLabel>
                  </StatItem>
                </StatGrid>
                <CardFooterText>
                  "We are entirely here to educate and empower you with clear knowledge—not to sell you an expensive inventory package."
                </CardFooterText>
              </DisplayCard>
            </GraphicColumn>
          </SplitGrid>
        </Container>
      </Section>

      {/* THE COMPLIANCE VS. PURITY BREAKDOWN */}
      <GraySection>
        <Container>
          <CenteredHeader>
            <SectionBadge>THE TRUTH ABOUT WATER</SectionBadge>
            <MainHeading>Legal Compliance vs. Real Household Purity</MainHeading>
            <SubHeadingText>
              Understanding the critical differences between municipal regulatory parameters and 
              what actually comes out of your tap.
            </SubHeadingText>
          </CenteredHeader>

          <ThreeColumnGrid>
            <GridCard>
              <CardImage src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80" alt="Aging industrial plumbing infrastructure mains" />
              <CardContentBlock>
                <CardIcon>🏗️</CardIcon>
                <h4>Aging Downstream Infrastructure</h4>
                <p>
                  Even when water leaves a central processing plant flawlessly, it travels through 
                  miles of legacy underground utility mains and older residential service lateral pipes 
                  where heavy sediment can be introduced.
                </p>
              </CardContentBlock>
            </GridCard>

            <GridCard>
              <CardImage src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=400&q=80" alt="Water metrics assessment testing and byproducts analysis" />
              <CardContentBlock>
                <CardIcon>🧪</CardIcon>
                <h4>Disinfection Byproducts</h4>
                <p>
                  Treatment plants use chlorine to neutralize biological bacteria. However, when 
                  chlorine interacts with natural organic matter, it creates trace byproducts 
                  (like Trihalomethanes) that homeowners often prefer to optimize out.
                </p>
              </CardContentBlock>
            </GridCard>

            <GridCard>
              <CardImage src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80" alt="Clean domestic tap water flow detailing micro contaminants evaluation" />
              <CardContentBlock>
                <CardIcon>💧</CardIcon>
                <h4>Emerging Micro-Contaminants</h4>
                <p>
                  Modern compounds such as PFAS, microplastics, and structural agricultural run-offs are 
                  increasingly scrutinized globally. Testing evaluates your structural point-of-use variables.
                </p>
              </CardContentBlock>
            </GridCard>
          </ThreeColumnGrid>
        </Container>
      </GraySection>

      {/* CALL TO ACTION CTA BANNER BLOCK WITH BACKGROUND ACCENT IMAGE */}
      <CtaSection>
        <CtaContainer>
          <CtaOverlayImage />
          <CtaContentRelative>
            <h2>Don't Worry, We Can Help!</h2>
            <p>
              Take the guesswork out of your tap water. Secure a dedicated session with our 
              on-site informational inspectors to check your hardness, dissolved particles, and safety indexes.
            </p>
            <CtaButton href="/contact">
              📌 Schedule Your Free On-Site Test Today
            </CtaButton>
          </CtaContentRelative>
        </CtaContainer>
      </CtaSection>
    </PageWrapper>
  );
}

// --- Styled Components Schema ---

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
  background-color: #ffffff;
  overflow-x: hidden;
`;

/* HERO STYLES WITH BACKGROUND IMAGE OVERLAY CONTRAST */
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 40px;
  background-image: url("https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 120px 20px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg, 
    rgba(3, 11, 20, 0.95) 0%, 
    rgba(15, 30, 51, 0.85) 100%
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

/* TRANSPARENCY NOTICE BAR */
const NoticeSection = styled.section`
  width: 100%;
  padding: 32px 40px;
  background-color: #fffbeb;
  border-bottom: 1px solid #fef3c7;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const NoticeContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const NoticeIconWrapper = styled.div`
  font-size: 2rem;
  line-height: 1;
`;

const NoticeContent = styled.div`
  h3 {
    margin: 0 0 6px 0;
    color: #92400e;
    font-size: 1.1rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    color: #78350f;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

/* WORKSPACE CONTAINERS */
const Section = styled.section`
  width: 100%;
  padding: 100px 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const GraySection = styled(Section)`
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
`;

const SplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionBadge = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: #1d4ed8;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const MainHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.2;
  color: #0f172a;
  margin: 0 0 24px 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.65;
  color: #475569;
  margin: 0 0 20px 0;
`;

/* MISSION LIST GRAPHICS */
const MissionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

const MissionItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  h4 {
    margin: 0 0 4px 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #475569;
  }
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  border: 1px solid #e2e8f0;
`;

/* GRAPHIC BLOCK & SECTION IMAGE EXTENSIONS */
const GraphicColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const SectionImageFrame = styled.img`
  width: 100%;
  max-width: 380px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
`;

const DisplayCard = styled.div`
  width: 100%;
  max-width: 380px;
  background: #030b14;
  border-radius: 16px;
  padding: 36px 32px;
  color: #ffffff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

const DropIcon = styled.svg`
  width: 28px;
  height: 28px;
  color: #3b82f6;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 24px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 4px;
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 500;
`;

const CardFooterText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #cbd5e1;
  font-style: italic;
  opacity: 0.9;
`;

/* THREE COLUMN DATA MATRIX WITH FEATURE IMAGES */
const CenteredHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const SubHeadingText = styled.p`
  font-size: 1.15rem;
  color: #64748b;
  margin: 12px 0 0 0;
  max-width: 650px;
  line-height: 1.5;
`;

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const GridCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #e2e8f0;
`;

const CardContentBlock = styled.div`
  padding: 32px;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 14px 0;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #475569;
  }
`;

const CardIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 14px;
  line-height: 1;
`;

/* CALL TO ACTION ACCENTS WITH ADVANCED BG INTERACTION */
const CtaSection = styled.section`
  width: 100%;
  padding: 100px 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CtaContainer = styled.div`
  position: relative;
  max-width: 950px;
  width: 100%;
  border-radius: 16px;
  padding: 70px 40px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 40px rgba(29, 78, 216, 0.25);
  overflow: hidden;
  background: #1e40af;
`;

const CtaOverlayImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  mix-blend-mode: overlay;
  pointer-events: none;
`;

const CtaContentRelative = styled.div`
  position: relative;
  z-index: 2;

  h2 {
    font-size: 2.6rem;
    font-weight: 800;
    margin: 0 0 16px 0;
    letter-spacing: -0.5px;

    @media (max-width: 640px) {
      font-size: 1.9rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 36px 0;
    color: #e0f2fe;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: #ffffff;
  color: #1d4ed8;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 18px 36px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;