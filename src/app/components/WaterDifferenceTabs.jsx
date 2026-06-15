// 'use client'
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';

// // --- Interactive Data Layer ---

// const TEST_DATA = {
//   chlorine: {
//     title: "Chlorine Test",
//     beforeLabel: "High Chlorine",
//     afterLabel: "Filtered Water",
//     beforeImg: "/h6.jpeg", // Replace with your file paths in /public
//     afterImg: "/h7.jpeg",
//   },
//   hardWater: {
//     title: "Hard Water Test",
//     beforeLabel: "Mineral Scale",
//     afterLabel: "Softened Water",
//     beforeImg: "/hard1.jpeg",
//     afterImg: "/hard2.jpeg",
//   },
//   tds: {
//     title: "TDS Test",
//     beforeLabel: "High Dissolved Solids",
//     afterLabel: "Pure Water",
//     beforeImg: "/tds1.jpeg",
//     afterImg: "/tds2.jpeg",
//   },
//   phLevel: {
//     title: "pH Level Test",
//     beforeLabel: "Highly Acidic/Alkaline",
//     afterLabel: "Balanced 7.0 pH",
//     beforeImg: "/ph1.jpeg",
//     afterImg: "/ph2.jpeg",
//   }
// };

// // --- Styled Components ---

// const DynamicTabsSection = styled.section`
//   width: 100%;
//   background-color: #f8fafc; /* Clean crisp white/light gray background */
//   padding: 5rem 2rem;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (max-width: 768px) {
//     padding: 3.5rem 1.5rem;
//   }
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   margin-bottom: 3rem;
// `;

// const MainHeading = styled.h2`
//   font-family: 'Arial', sans-serif;
//   color: #0f172a; /* Deep charcoal dark blue tone */
//   font-size: 2.25rem;
//   font-weight: 700;
//   margin: 0 0 0.5rem 0;
//   letter-spacing: -0.5px;
// `;

// const Subtitle = styled.p`
//   color: #0c3366; /* Vibrant deep branding navy text color */
//   font-family: 'Arial', sans-serif;
//   font-size: 1.1rem;
//   font-weight: 700;
//   margin: 0;
//   letter-spacing: 0.5px;
// `;

// const TabsBarContainer = styled.div`
//   display: flex;
//   flex-wrap:wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 1.5rem;
//   margin-bottom: 3.5rem;
//   width: 100%;
//   max-width: 800px;
//   border-bottom: 1px solid #e2e8f0;
//   padding-bottom: 1rem;

//   @media (max-width: 768px) {
//     gap: 0.5rem;
//     overflow-x: auto;
//     justify-content: flex-start;
//     padding-bottom: 0.75rem;
    
//     /* Hide scrollbars for slick slider aesthetics */
//     &::-webkit-scrollbar { display: none; }
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `;

// const TabButton = styled.button`
//   background: ${({ $isActive }) => ($isActive ? '#0c3366' : 'transparent')};
//   color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#475569')};
//   font-family: 'Arial', sans-serif;
//   font-size: 0.9rem;
//   font-weight: 700;
//   padding: 0.65rem 1.25rem;
//   border: none;
//   border-radius: ${({ $isActive }) => ($isActive ? '6px' : '0px')};
//   cursor: pointer;
//   white-space: nowrap;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#0066cc')};
//   }
// `;

// const ComparisonGrid = styled.div`
//   width: 100%;
//   max-width: 950px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 2rem;

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//     gap: 2.5rem;
//   }
// `;

// const CardPane = styled.div`
//   background-color: #eef2f6; /* Soft muted container background matching cards */
//   border-radius: 16px;
//   padding: 3rem 2rem 2.5rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
// `;

// const FrameImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 280px;
//   aspect-ratio: 1.25;
//   margin-bottom: 2rem;
//   border-radius:20px;
//   overflow:hidden;
// `;

// const StateTitle = styled.h3`
//   font-family: 'Arial', sans-serif;
//   color: #1e293b;
//   font-size: 1.35rem;
//   font-weight: 700;
//   margin: 0 0 0.4rem 0;
// `;

// const StatusCaption = styled.span`
//   color: #475569;
//   font-family: 'Arial', sans-serif;
//   font-size: 1rem;
//   font-weight: 500;
// `;

// // --- Main Assembly Component ---

// export default function WaterDifferenceTabs() {
//   const [activeTab, setActiveTab] = useState('chlorine');
//   const currentTest = TEST_DATA[activeTab];

//   return (
//     <DynamicTabsSection>
      
//       {/* Structural Block Header Titles */}
//       <SectionHeader>
//         <MainHeading>See The Difference</MainHeading>
//         <Subtitle>Tested. Proven. Real Results.</Subtitle>
//       </SectionHeader>

//       {/* Interactive Tabs Menu Bar */}
//       <TabsBarContainer>
//         <TabButton 
//           $isActive={activeTab === 'chlorine'} 
//           onClick={() => setActiveTab('chlorine')}
//         >
//           Chlorine Test
//         </TabButton>
//         <TabButton 
//           $isActive={activeTab === 'hardWater'} 
//           onClick={() => setActiveTab('hardWater')}
//         >
//           Hard Water Test
//         </TabButton>
//         <TabButton 
//           $isActive={activeTab === 'tds'} 
//           onClick={() => setActiveTab('tds')}
//         >
//           TDS Test
//         </TabButton>
//         <TabButton 
//           $isActive={activeTab === 'phLevel'} 
//           onClick={() => setActiveTab('phLevel')}
//         >
//           pH Level Test
//         </TabButton>
//       </TabsBarContainer>

//       {/* Dynamic Content Switching Panels */}
//       <ComparisonGrid>
        
//         {/* Left Card Pane - "BEFORE" Status */}
//         <CardPane>
//           <FrameImageWrapper>
//             <Image 
//               src={currentTest.beforeImg} 
//               alt={`Unfiltered contaminated glass representation for ${currentTest.title}`}
//               fill
//               style={{ objectFit: 'cover' }}
//               priority
//             />
//           </FrameImageWrapper>
//           <StateTitle>Before</StateTitle>
//           <StatusCaption>{currentTest.beforeLabel}</StatusCaption>
//         </CardPane>

//         {/* Right Card Pane - "AFTER" Status */}
//         <CardPane>
//           <FrameImageWrapper>
//             <Image 
//               src={currentTest.afterImg} 
//               alt={`Pure clean drinking water glass representation for ${currentTest.title}`}
//               fill
//               style={{ objectFit: 'cover' }}
//               priority
//             />
//           </FrameImageWrapper>
//           <StateTitle>After</StateTitle>
//           <StatusCaption>{currentTest.afterLabel}</StatusCaption>
//         </CardPane>

//       </ComparisonGrid>

//     </DynamicTabsSection>
//   );
// }


'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// --- Interactive Data Layer ---

const TEST_DATA = {
  chlorine: {
    title: "Chlorine Test",
    beforeLabel: "High Chlorine",
    afterLabel: "Filtered Water",
    beforeImg: "/h6.jpeg", 
    afterImg: "/h7.jpeg",
  },
  hardWater: {
    title: "Hard Water Test",
    beforeLabel: "Mineral Scale",
    afterLabel: "Softened Water",
    beforeImg: "/hard1.jpeg",
    afterImg: "/hard2.jpeg",
  },
  tds: {
    title: "TDS Test",
    beforeLabel: "High Dissolved Solids",
    afterLabel: "Pure Water",
    beforeImg: "/tds1.jpeg",
    afterImg: "/tds2.jpeg",
  },
  phLevel: {
    title: "pH Level Test",
    beforeLabel: "Highly Acidic/Alkaline",
    afterLabel: "Balanced 7.0 pH",
    beforeImg: "/ph1.jpeg",
    afterImg: "/ph2.jpeg",
  }
};

// --- Styled Components ---

const DynamicTabsSection = styled.section`
  width: 100%;
  background-color: #f8fafc; 
  padding: 5rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem; /* Margins narrowed slightly on mobile */
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const MainHeading = styled.h2`
  font-family: 'Arial', sans-serif;
  color: #0f172a; 
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  color: #0c3366; 
  font-family: 'Arial', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const TabsBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  width: 100%;
  max-width: 800px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.75rem;
    flex-wrap: nowrap; /* Ensures smooth horizontal sliding swipe on mobile */
    
    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const TabButton = styled.button`
  background: ${({ $isActive }) => ($isActive ? '#0c3366' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#475569')};
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.65rem 1.25rem;
  border: none;
  border-radius: ${({ $isActive }) => ($isActive ? '6px' : '0px')};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#0066cc')};
  }
`;

const ComparisonGrid = styled.div`
  width: 100%;
  max-width: 950px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Default 2 columns desktop */
  gap: 2rem;

  /* Forces 2 columns to persist exactly across mobile viewports */
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr; 
    gap: 0.75rem; /* Tightened gap parameters so cards fit cleanly side-by-side */
  }
`;

const CardPane = styled.div`
  background-color: #eef2f6; 
  border-radius: 16px;
  padding: 3rem 2rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

  @media (max-width: 640px) {
    padding: 1.5rem 0.75rem; /* Scaled down paddings for small mobile displays */
    border-radius: 12px;
  }
`;

const FrameImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 1.25;
  margin-bottom: 2rem;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 640px) {
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`;

const StateTitle = styled.h3`
  font-family: 'Arial', sans-serif;
  color: #1e293b;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.4rem 0;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const StatusCaption = styled.span`
  color: #475569;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 640px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

// --- Main Assembly Component ---

export default function WaterDifferenceTabs() {
  const [activeTab, setActiveTab] = useState('chlorine');
  const currentTest = TEST_DATA[activeTab];

  return (
    <DynamicTabsSection>
      
      {/* Structural Block Header Titles */}
      <SectionHeader>
        <MainHeading>See The Difference</MainHeading>
        <Subtitle>Tested. Proven. Real Results.</Subtitle>
      </SectionHeader>

      {/* Interactive Tabs Menu Bar */}
      <TabsBarContainer>
        <TabButton 
          $isActive={activeTab === 'chlorine'} 
          onClick={() => setActiveTab('chlorine')}
        >
          Chlorine Test
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'hardWater'} 
          onClick={() => setActiveTab('hardWater')}
        >
          Hard Water Test
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'tds'} 
          onClick={() => setActiveTab('tds')}
        >
          TDS Test
        </TabButton>
        <TabButton 
          $isActive={activeTab === 'phLevel'} 
          onClick={() => setActiveTab('phLevel')}
        >
          pH Level Test
        </TabButton>
      </TabsBarContainer>

      {/* Dynamic Content Switching Panels */}
      <ComparisonGrid>
        
        {/* Left Card Pane - "BEFORE" Status */}
        <CardPane>
          <FrameImageWrapper>
            <Image 
              src={currentTest.beforeImg} 
              alt={`Unfiltered contaminated glass representation for ${currentTest.title}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </FrameImageWrapper>
          <StateTitle>Before</StateTitle>
          <StatusCaption>{currentTest.beforeLabel}</StatusCaption>
        </CardPane>

        {/* Right Card Pane - "AFTER" Status */}
        <CardPane>
          <FrameImageWrapper>
            <Image 
              src={currentTest.afterImg} 
              alt={`Pure clean drinking water glass representation for ${currentTest.title}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </FrameImageWrapper>
          <StateTitle>After</StateTitle>
          <StatusCaption>{currentTest.afterLabel}</StatusCaption>
        </CardPane>

      </ComparisonGrid>

    </DynamicTabsSection>
  );
}