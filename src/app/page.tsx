import React from "react";
import Hero from './components/Hero'
import EventInfo from "./components/Info";
import ChallengesTable from './components/Fields'
import MentorshipStagesList from './components/Stages'
import Proceedings from './components/Proceedings'
import WhySponsor from './components/WhySponsor'
import SponsorsAndBenefits from './components/Sponsor'
import SponsorComponent from './components/Ideal'
import IdealSponsorComponent from './components/IdealSponsor'
import PanIndiaMap from './components/PanLocation'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Flow from './components/Flow'
export default function Home() {
  return (
   <div className="overflow-hidden space-y-16 " >
    <Hero/>
    <EventInfo/>
    <PanIndiaMap/>
    <ChallengesTable/>
    <MentorshipStagesList/>
    <Flow/>
    <Proceedings/>
    <Carousel/>
    <WhySponsor/>
    <SponsorsAndBenefits/>
    <SponsorComponent/>
    <IdealSponsorComponent/>
    <Footer/>
    {/* <AccountDetail/> */}
   </div>
  );
}
