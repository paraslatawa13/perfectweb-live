import React from 'react'

import PageBanner from "./ResuableFile/Reusable";
import { solutionsBanner } from "./ResuableFile/bannerConfigs";
import StartSomethingNew from '../components/Solution/StartSomethingNew';
import RunThingsBetter from '../components/Solution/RunThingsBetter';
import ProcessProject from '../components/Solution/ProcessProject';
import CaseSummary from '../components/Solution/CaseSummary';

const Solutions = () => {
  return (
    <>
          <PageBanner {...solutionsBanner} />

          <StartSomethingNew/>
          <RunThingsBetter/>
          <ProcessProject/>
          <div className="case-study">
            <CaseSummary/>
          </div>
    
    
    </>
  )
}

export default Solutions