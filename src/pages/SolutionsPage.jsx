import React from 'react'

import PageBanner from "./ResuableFile/Reusable";
import { solutionsBanner } from "./ResuableFile/bannerConfigs";
import StartSomethingNew from '../components/Solution/StartSomethingNew';
import RunThingsBetter from '../components/Solution/RunThingsBetter';
import ProcessProject from '../components/Solution/ProcessProject';
// import CaseSummary from '../components/Solution/CaseSummary';
import WhichOneSoundsLikeYou from '../components/Solution/WhichOneSoundsLikeYou ';
import ThreeWaysToGetStarted from '../components/Solution/ThreeWaysToGetStarted';
import BeforeWeStart from '../components/Solution/BeforeWeStart';
import ConsultationCta from '../components/ConsultationCta';

const Solutions = () => {
  return (
    <>
          <PageBanner {...solutionsBanner} />
          <WhichOneSoundsLikeYou/>
          <StartSomethingNew/>
          <RunThingsBetter/>
          <ThreeWaysToGetStarted/>
          <ProcessProject/>
          <BeforeWeStart/>
          {/* <div className="case-study">
            <CaseSummary/>
          </div> */}

          <ConsultationCta/>
    
    
    </>
  )
}

export default Solutions