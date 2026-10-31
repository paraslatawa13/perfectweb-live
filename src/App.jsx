import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import  WhatsAppWidget  from './components/WhatsAppWidget'
import AutoModal from './components/AutoModal'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./reusablecomponents/ScrollToTop";
import  CookieConsent  from './components/CookieConsent'


/**WEB DEVELOPMENT */
import WebDevelopment from "./pages/Services/WebDevelopment";
import CustomWordpressDevelopment from "./pages/Services/WebDevelopmentServices/CustomWordpressDevelopment";
import ShopifyWebsiteDevelopment from "./pages/Services/WebDevelopmentServices/ShopifyWebsiteDevelopment"; 
import CMSDevelopment from "./pages/Services/WebDevelopmentServices/CMSDevelopment";
import CustomApiDevelopment from "./pages/Services/WebDevelopmentServices/CustomApiDevelopment";
import WebsiteSupportMaintenance from "./pages/Services/WebDevelopmentServices/WebsiteSupportMaintenance";

/**DIGITAL MARKETTING */
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import SEOServices from "./pages/Services/DigitalMarketingServices/SEOServices";
import PPCServices from "./pages/Services/DigitalMarketingServices/PPCServices";
import SMOServices from "./pages/Services/DigitalMarketingServices/SMOServices";

/**WEB DESIGN */
import WebDesigns from "./pages/Services/WebDesigns";
import UIUXDesignServices from "./pages/Services/WebDesignServices/UIUXDesignServices";

/**Mobile App Development */
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment";
import IOSAppDevelopmentServices from "./pages/Services/MobileAppDevelopmentServices/IOSAppDevelopmentServices";
import AndroidAppDevelopmentServices from "./pages/Services/MobileAppDevelopmentServices/AndroidAppDevelopmentServices";

import RealEstateWebSolutionsDubai from "./pages/RealEstateWebSolutionsDubai";
import SeoForPlumbers from "./pages/SeoForPlumbers";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ContactUs from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductCostCalulator from "./pages/ProductCostCalulator";
import HireWebDeveloper from "./pages/Hire/HireWebDeveloper";
import HireWordpressDeveloper from "./pages/Hire/HireWordpressDeveloper";
import HireShopifyExpert from "./pages/Hire/HireShopifyExpert";
import HireCMSDevelopers from "./pages/Hire/HireCMSDevelopers";
import HireAPIDevelopers from "./pages/Hire/HireAPIDevelopers";
import HireDigitalMarketingExpert from "./pages/Hire/HireDigitalMarketingExpert";
import HireSEOExpert from "./pages/Hire/HireSEOExpert";
import HirePPCExpert from "./pages/Hire/HirePPCExpert";
import HireSocialMediaMarketingExpert from "./pages/Hire/HireSocialMediaMarketingExpert";
import HireWebDesigner from "./pages/Hire/HireWebDesigner";
import HireUIUXDesigner from "./pages/Hire/HireUIUXDesigner";
import HireAppDeveloper from "./pages/Hire/HireAppDeveloper";
import HireIOSAppDeveloper from "./pages/Hire/HireIOSAppDeveloper";
import HireAndroidDeveloper from "./pages/Hire/HireAndroidDeveloper";
import NotFound from "./pages/NotFound";
import AuthorDetails from "./pages/AuthorDetails"
import DocumentPage from "./pages/DocumentPage";
import ThankYou from "./pages/ThankYou";
import LandingPage from "./pages/LandingPage";

import Career from './pages/Career'
import Solutions from './pages/SolutionsPage'
import Capabilities from './pages/Capabilities'


import Work from './pages/Work'
import Resources from './pages/Resources'
import AICodeRescue from './pages/AICodeRescue'

function App() {
  return (
    <>
           {/* <AutoModal /> */}
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/web-development-services" element={<WebDevelopment />} />
              <Route path="/custom-wordpress-development-services" element={<CustomWordpressDevelopment />} />
              <Route path="/shopify-website-development-services" element={<ShopifyWebsiteDevelopment />} />
              <Route path="/cms-development-services" element={<CMSDevelopment />} />
              <Route path="/custom-api-development-services" element={<CustomApiDevelopment />} />
              <Route path="/website-maintenance-services" element={<WebsiteSupportMaintenance />} />
              <Route path="/affordable-digital-marketing-services" element={<DigitalMarketing />} />
              <Route path="/expert-seo-services" element={<SEOServices />} />
              <Route path="/ppc-marketing-services" element={<PPCServices />} />
              <Route path="/smo-services" element={<SMOServices />} />
              <Route path="/web-design-services" element={<WebDesigns />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ui-ux-design-services" element={<UIUXDesignServices />} />
              <Route path="/mobile-app-development-services" element={<MobileAppDevelopment />} />
              <Route path="/ios-app-development-services" element={<IOSAppDevelopmentServices />} />
              <Route path="/android-app-development-services" element={<AndroidAppDevelopmentServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/author/:name" element={<AuthorDetails />} />
              <Route path="/case-studies" element={<CaseStudy />} />
              <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/hire-dedicated-web-developer" element={< HireWebDeveloper />} />
              <Route path="/hire-wordpress-developer" element={< HireWordpressDeveloper />} />
              <Route path="/hire-shopify-developer" element={< HireShopifyExpert />} />
              <Route path="/hire-cms-developers" element={< HireCMSDevelopers />} />
              <Route path="/hire-api-developers" element={< HireAPIDevelopers />} />
              <Route path="/hire-digital-marketing-experts" element={< HireDigitalMarketingExpert />} />
              <Route path="/hire-seo-experts" element={< HireSEOExpert />} />
              <Route path="/hire-ppc-expert" element={< HirePPCExpert />} />
              <Route path="/hire-social-media-expert" element={< HireSocialMediaMarketingExpert />} />
              <Route path="/hire-a-web-designer" element={< HireWebDesigner />} />
              <Route path="/hire-ui-ux-designer" element={< HireUIUXDesigner />} />
              <Route path="/hire-mobile-app-developer" element={<  HireAppDeveloper />} />
              <Route path="/hire-ios-app-developers" element={<  HireIOSAppDeveloper />} />
              <Route path="/hire-android-app-developer" element={<  HireAndroidDeveloper />} />
              <Route path="/real-estate-web-solutions-dubai" element={<  RealEstateWebSolutionsDubai />} />
              <Route path="/seo-for-plumbers" element={<  SeoForPlumbers />} />
              <Route path="/product-cost-calculator" element={<ProductCostCalulator />} />    
              <Route path="/career" element={<Career />} />
              <Route path="/affordable-development-solutions" element={<LandingPage />} />


              <Route path="/work" element={<Work />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/aicoderescue" element={<AICodeRescue />} />

              
              {/* <Route path="/business-guide" element={<DocumentPage />} /> */}
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <CookieConsent />
              <DocumentPage />
              <WhatsAppWidget />
    </>
  );
}

export default App;