import React from "react";

import PageBanner from "./ResuableFile/Reusable";
import { capabilitiesBanner } from "./ResuableFile/bannerConfigs";

import FeatureSection from "./ResuableFile/FeatureSection";

import ConsultationCta from "../components/ConsultationCta";


const Capabilities = () => {
  return (
    <>
      <PageBanner {...capabilitiesBanner} />
      <FeatureSection />
      <ConsultationCta />
    </>
  );
};

export default Capabilities;