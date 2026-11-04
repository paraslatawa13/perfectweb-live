import { lazy, } from "react";
import LazySection from "../components/LazySection";

import SoundFamiliar from '../components/AI Code Rescue/SoundFamiliar'
import HowWeUnstuck from '../components/AI Code Rescue/HowWeUnstuck'
import ProofSection from '../components/AI Code Rescue/ProofSection'
import FreeFirstLook from '../components/AI Code Rescue/FreeFirstLook'
import Packages from '../components/AI Code Rescue/Packages'
const ConsultationCta = lazy(() => import("../components/ConsultationCta"));

import PageBanner from "../pages/ResuableFile/Reusable";
import { aicoderescue } from "../pages/ResuableFile/bannerConfigs";


export default function Work() {
  return (
    <>

      <PageBanner {...aicoderescue} />

     


      <LazySection>
        <section className="sound-section padd">
            <SoundFamiliar />
        </section>
      </LazySection>
      <LazySection>
         <section className="HowWeUnstuck-section padd pt-0">
            <HowWeUnstuck />
        </section>
      </LazySection>
      
       <LazySection> 
         <section className="Packages-Section padd pt-0">
          <Packages />
        </section>
      </LazySection>

      <LazySection>
         <section className="FreeFirstLook-Section padd">
            <FreeFirstLook />
        </section>
      </LazySection>

     

    </>
  );
}