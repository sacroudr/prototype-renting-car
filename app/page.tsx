import { MotionController } from "@/components/MotionController";
import { FleetGrid } from "@/components/FleetGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { PopularThisWeek } from "@/components/PopularThisWeek";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";
import { WhyJidorCar } from "@/components/WhyJidorCar";
import { faqItems, popularVehicles, testimonials, vehicles } from "@/data/content";

export default function Home() {
  return (
    <MotionController>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <TrustBadges />
        <FleetGrid vehicles={vehicles} />
        <PopularThisWeek vehicles={popularVehicles} />
        <Testimonials testimonials={testimonials} rating="4,9/5" />
        <WhyJidorCar />
        <FAQ items={faqItems} />
      </main>
      <Footer />
    </MotionController>
  );
}
