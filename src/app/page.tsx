import FeaturesSection from '../components/FeaturesSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import MobileAppBenefitsSection from '../components/MobileAppBenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhoBenefitsSection from '../components/WhoBenefitsSection';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-gray-100 to-gray-200 min-h-screen font-sans">
      <HeroSection />
      <FeaturesSection />
      <MobileAppBenefitsSection />
      <HowItWorksSection />
      <WhoBenefitsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}