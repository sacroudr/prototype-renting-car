import { MotionController } from "@/components/MotionController";
import { ProspectionModal } from "@/components/ProspectionModal";
import { FleetGrid } from "@/components/FleetGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { ServiceExpert } from "@/components/ServiceExpert";
import { Testimonials } from "@/components/Testimonials";
import { WhyJidorCar } from "@/components/WhyJidorCar";
import { faqItems, testimonials, vehicles } from "@/data/content";

export default function Home() {
  return (
    <MotionController>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <div className="relative overflow-hidden bg-paper text-ink">
          <HowItWorks />
          <ServiceExpert />
          <FleetGrid vehicles={vehicles} />
          <Testimonials testimonials={testimonials} rating="4,9/5" />
          <WhyJidorCar />
          <FAQ items={faqItems} />
        </div>
      </main>
      <Footer />
      <ProspectionModal />
    </MotionController>
  );
}
