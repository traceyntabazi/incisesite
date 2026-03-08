import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import ProductTicker from "@/components/ProductTicker";
import AboutSection from "@/components/AboutSection";
import ProductLines from "@/components/ProductLines";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ApplicationsSection from "@/components/ApplicationsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import AcademySection from "@/components/AcademySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductTicker />
      <AboutSection />
      <ProductLines />
      <ProjectGallery />
      <ProcessSection />
      <FeaturedProjects />
      <ApplicationsSection />
      <StatsSection />
      <TestimonialsSection />
      <InsightsSection />
      <AcademySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
