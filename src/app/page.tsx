import FeaturesSection from '../components/FeaturesSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import MobileAppBenefitsSection from '../components/MobileAppBenefitsSection';
import Navbar from '../components/Navbar';
import TestimonialsSection from '../components/TestimonialsSection';
import WhoBenefitsSection from '../components/WhoBenefitsSection';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-gray-100 to-gray-200 min-h-screen font-sans">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="app-benefits">
        <MobileAppBenefitsSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="who-benefits">
        <WhoBenefitsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </main>
  );
}