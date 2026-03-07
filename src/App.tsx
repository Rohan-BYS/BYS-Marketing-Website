import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ScrollToTop from './components/ScrollToTop';

// Global loading spinner for route transitions
const PageLoader = () => (
  <div className="flex w-full h-screen items-center justify-center bg-background dark:bg-[#111]">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FounderPortfolio = React.lazy(() => import('./pages/FounderPortfolio'));
const ServicesHub = React.lazy(() => import('./pages/ServicesHub'));
const PortfolioHub = React.lazy(() => import('./pages/PortfolioHub'));
const WebDevService = React.lazy(() => import('./pages/WebDevService'));
const PortfolioDemos = React.lazy(() => import('./pages/PortfolioDemos'));
const WebsiteDemos = React.lazy(() => import('./pages/WebsiteDemos'));
const BlogArticle = React.lazy(() => import('./pages/BlogArticle'));
const BlogList = React.lazy(() => import('./pages/BlogList'));
const ExclusiveOffers = React.lazy(() => import('./pages/ExclusiveOffers'));
const SponsorshipApplication = React.lazy(() => import('./pages/SponsorshipApplication'));
const BookingConfirmation = React.lazy(() => import('./pages/BookingConfirmation'));
const MediaProductionService = React.lazy(() => import('./pages/MediaProductionService'));
const DigitalMarketingService = React.lazy(() => import('./pages/DigitalMarketingService'));
const ITHardwareService = React.lazy(() => import('./pages/ITHardwareService'));
const CyberSecurityService = React.lazy(() => import('./pages/CyberSecurityService'));
const SocialMediaService = React.lazy(() => import('./pages/SocialMediaService'));
const ConsultationService = React.lazy(() => import('./pages/ConsultationService'));
const ContentStrategyService = React.lazy(() => import('./pages/ContentStrategyService'));
const SeoOptimizationService = React.lazy(() => import('./pages/SeoOptimizationService'));
const UiUxDesignService = React.lazy(() => import('./pages/UiUxDesignService'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const CaseStudyView = React.lazy(() => import('./pages/CaseStudyView'));
const Team = React.lazy(() => import('./pages/Team'));
const Careers = React.lazy(() => import('./pages/Careers'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const HostingerOffer = React.lazy(() => import('./pages/HostingerOffer'));
const StartupSupport = React.lazy(() => import('./pages/StartupSupport'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="founder" element={<FounderPortfolio />} />
            <Route path="services" element={<ServicesHub />} />
            <Route path="services/web-development" element={<WebDevService />} />
            <Route path="services/digital-marketing" element={<DigitalMarketingService />} />
            <Route path="services/media-production" element={<MediaProductionService />} />
            <Route path="services/it-hardware" element={<ITHardwareService />} />
            <Route path="services/security" element={<CyberSecurityService />} />
            <Route path="services/social" element={<SocialMediaService />} />
            <Route path="services/consultation" element={<ConsultationService />} />
            <Route path="services/content" element={<ContentStrategyService />} />
            <Route path="services/seo" element={<SeoOptimizationService />} />
            <Route path="services/design" element={<UiUxDesignService />} />
            <Route path="portfolio" element={<PortfolioHub />} />
            <Route path="portfolio/:id" element={<CaseStudyView />} />
            <Route path="demos" element={<PortfolioDemos />} />
            <Route path="website-demos" element={<WebsiteDemos />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogArticle />} />
            <Route path="offers" element={<ExclusiveOffers />} />
            <Route path="sponsorship" element={<SponsorshipApplication />} />
            <Route path="booking" element={<BookingConfirmation />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="hostinger-discount-code" element={<HostingerOffer />} />
            <Route path="startups" element={<StartupSupport />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
