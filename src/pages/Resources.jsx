
import PageBanner from "../pages/ResuableFile/Reusable";
import { resourcesBanner } from "../pages/ResuableFile/bannerConfigs";
import GuidesSection from '../components/Resources/GuidesSection'
import WebinarsSection from '../components/Resources/WebinarsSection'
import NewsletterSection from '../components/Resources/NewsletterSection'
import ReadyToTalk from '../components/Resources/ReadyToTalk'
import LazySection from "../components/LazySection";


export default function Resources() {
  return (
    <>
      <PageBanner {...resourcesBanner} />

      <LazySection>
        <section className=" Guided-Section padd">
          <GuidesSection />
        </section>
      </LazySection>

      <LazySection>
        <section className=" Webinars-Section padd pt-0">
          <WebinarsSection />
        </section>
      </LazySection>

      <LazySection>
        <section className=" Newsletter-Section padd pt-0">
          <NewsletterSection />
        </section>
      </LazySection>

      <LazySection>
        <section className=" ReadyToTalk-Section ">
          <ReadyToTalk />
        </section>
      </LazySection>

    </>
  );
}