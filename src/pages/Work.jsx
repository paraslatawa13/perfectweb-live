import { lazy, } from "react";
import LazySection from "../components/LazySection";

import CaseStudies from '../components/Work/CaseStudies'
const ConsultationCta = lazy(() => import("../components/ConsultationCta"));

import PageBanner from "../pages/ResuableFile/Reusable";
import { workBanner } from "../pages/ResuableFile/bannerConfigs";


export default function Work() {
  return (
    <>

      <PageBanner {...workBanner} />

     


      <LazySection>
        <CaseStudies />
      </LazySection>
      <LazySection>
        <ConsultationCta />
      </LazySection>

    </>
  );
}