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
import SupportUs from './components/Support'
import Footer from './components/Footer'
export default function Home() {
  return (
   <div className="overflow-hidden" >
    <Hero/>
    <EventInfo/>
    <ChallengesTable/>
    <MentorshipStagesList/>
    <Proceedings/>
    <WhySponsor/>
    <SponsorsAndBenefits/>
    <SponsorComponent/>
    <IdealSponsorComponent/>
    <SupportUs/>
    <Footer/>
   </div>
  );
}
