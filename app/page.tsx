import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { TechSpecsBar } from '@/components/tech-specs-bar';
import { StickyScrollExpertise } from '@/components/sticky-scroll-expertise';
import { FeaturesSection } from '@/components/features-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { TechStack } from '@/components/tech-stack';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/custom-cursor';
import { ParallaxSection } from '@/components/parallax-section';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <CustomCursor />
      <Header />

      <Hero />

      <ParallaxSection shift={18}>
        <TechSpecsBar />
      </ParallaxSection>

      <div className="py-4 md:py-16" />

      <ParallaxSection shift={22}>
        <StickyScrollExpertise />
      </ParallaxSection>

      <ParallaxSection shift={32}>
        <FeaturesSection />
      </ParallaxSection>

      <ParallaxSection shift={26}>
        <PortfolioSection />
      </ParallaxSection>

      <ParallaxSection shift={24}>
        <TechStack />
      </ParallaxSection>

      <ParallaxSection shift={16}>
        <ContactForm />
      </ParallaxSection>

      <Footer />
    </main>
  );
}
