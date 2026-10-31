import React from 'react'

import PageBanner from "./ResuableFile/Reusable";
import { solutionsBanner } from "./ResuableFile/bannerConfigs";
import StartSomethingNew from '../components/Solution/StartSomethingNew';
import RunThingsBetter from '../components/Solution/RunThingsBetter';
import ProjectProcess from '../components/Solution/ProjectProcess';

const Solutions = () => {
  return (
    <>
          <PageBanner {...solutionsBanner} />

          <StartSomethingNew/>
          <RunThingsBetter/>
          <ProjectProcess/>
    
    
    </>
  )
}

export default Solutions