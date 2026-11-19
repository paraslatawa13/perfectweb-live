import React from "react";

import PageBanner from "./ResuableFile/Reusable";
import { capabilitiesBanner } from "./ResuableFile/bannerConfigs";

import FeatureSection from "./ResuableFile/FeatureSection";

import ConsultationCta from "../components/ConsultationCta";
import CustomerJourney from "../components/Capabilities/CustomerJourney";
import AutomationAgentsOrML from "../components/Capabilities/AutomationAgentsOrML";
import BuildAroundYourTools from "../components/Capabilities/BuildAroundYourTools";


const Capabilities = () => {
  return (
    <>
      <PageBanner {...capabilitiesBanner} />
      <FeatureSection />
      <CustomerJourney/>
      <AutomationAgentsOrML/>
      <BuildAroundYourTools/>
      <ConsultationCta />
    </>
  );
};

export default Capabilities;