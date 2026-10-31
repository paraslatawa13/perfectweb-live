import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import ContactForm from "../components/contact/contactForm";
import NextStep from "../components/contact/NextStep";
import CalProjectCost from "../components/contact/CalProjectCost";
import blogHeader from "../assets/images/Blogs/blogHeader.webp";
import Map from "../components/contact/Map";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";


function Contact() {
  const { meta } = useMeta();
  return (
    <main> 
        <MetaHelmet meta={meta} />
        <section className="contactUsbanner padd">
          <CommonHeroSection
              subtitle="Contact us"
              title="Get In Touch"
              /> 
          </section>
          <ContactForm />
          <NextStep />
          <CalProjectCost />
           <Map />
    </main>
  );
}

export default Contact;
