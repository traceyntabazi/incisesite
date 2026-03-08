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
      <SEOHead
        title="INCISE — Premium Microcement & Decorative Coatings | East Africa"
        description="INCISE is East Africa's leading manufacturer of microcement, microtopping, and cement-based wall and floor finishes. Seamless decorative coatings manufactured in Uganda for architects, designers, and developers."
        canonical="https://incisesite.lovable.app/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "INCISE Uganda Limited",
          url: "https://incisesite.lovable.app",
          description: "East Africa's leading manufacturer of premium microcement, microtopping, and cement-based decorative wall and floor coatings.",
          foundingDate: "2020",
          foundingLocation: { "@type": "Place", name: "Kampala, Uganda" },
          areaServed: [
            { "@type": "Country", name: "Uganda" },
            { "@type": "Country", name: "Kenya" },
          ],
          knowsAbout: [
            "Microcement", "Microtopping", "Decorative coatings", "Cement-based wall finishes",
            "Cement-based floor finishes", "Seamless flooring", "Cementitious coatings",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot 2490 YK Hameid Road, Luzira Industrial Park",
            addressLocality: "Kampala",
            addressCountry: "UG",
          },
        }}
      />
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
