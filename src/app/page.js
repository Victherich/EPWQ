
import Hero from "./components/Hero";
import Contaminants from "./components/ContaminationSection";
import HeroUnder from "./components/HeroUnder";
import WaterTestBanner from "./components/WaterTestBanner";
import WaterStatsBar from "./components/WaterStatsBar";
import InspectionProcess from "./components/InspectionProcess";
import WaterDifferenceTabs from "./components/WaterDifferenceTabs";
import WaterAttentionSection from "./components/WaterAttentionSection";
import WaterFindOutCTA from "./components/WaterFindOutCta";
import TestingFeatures from "./components/TestingFeatures";
import Testimonials from "./components/Testimonials";
import CommunityGallery from "./components/CommunityGallery";
import ScheduleInspection from "./components/ScheduleInspection";



export default function Home() {
  return (
    <div>
      <Hero/>
      <HeroUnder/>
   <Contaminants/>
   <WaterTestBanner/>
   <WaterStatsBar/>
   <InspectionProcess/>
   <WaterDifferenceTabs/>
   <WaterAttentionSection/>
   <WaterFindOutCTA/>
   <TestingFeatures/>
  <Testimonials/>
  <CommunityGallery/>
  <ScheduleInspection/>

    </div>
  );
}


