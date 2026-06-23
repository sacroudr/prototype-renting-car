import { ArrowRight, CalendarRange, CarFront, MapPinned } from "lucide-react";
import { SectionBackdrop } from "./SectionBackdrop";

interface RentalStep {
  number: string;
  title: string;
  description: string;
  icon: typeof CalendarRange;
}

const steps: RentalStep[] = [
  {
    number: "01",
    title: "Choisissez vos dates",
    description: "Indiquez votre date de départ et de retour. Deux champs suffisent pour commencer.",
    icon: CalendarRange,
  },
  {
    number: "02",
    title: "Précisez le lieu",
    description: "Aéroport, centre-ville ou adresse à Casablanca : choisissez le point qui vous arrange.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Réservez votre voiture",
    description: "Sélectionnez le véhicule, confirmez sur WhatsApp et nous nous occupons du reste.",
    icon: CarFront,
  },
];

export function HowItWorks() {
  return (
    <section data-reveal className="section-shell relative" aria-labelledby="how-it-works-title">
      <SectionBackdrop />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker mb-3 text-deep-blue">Simple, du début à la fin</p>
          <h2 id="how-it-works-title" className="section-title text-ink">Comment ça marche</h2>
          <p className="mt-5 text-[1.02rem] leading-7 text-slate">Réservez votre voiture à Casablanca en trois étapes claires, sans formulaire interminable.</p>
        </div>

        <div data-stagger-group className="relative mt-10 grid gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-[16.5%] right-[16.5%] top-14 hidden h-px bg-line lg:block" aria-hidden="true" />
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article data-stagger-item key={number} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex size-20 items-center justify-center rounded-full border border-jidor/25 bg-mist text-deep-blue shadow-[0_0_0_6px_var(--color-paper)] lg:size-28 lg:shadow-[0_0_0_10px_var(--color-paper)]">
                <Icon size={28} strokeWidth={1.6} className="lg:size-9" />
                <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-jidor font-mono text-[9px] font-bold text-white lg:size-8 lg:text-[10px]">{number}</span>
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-[-.02em] text-ink lg:mt-8">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#reservation" className="button-primary motion-hover group">
            Commencer ma réservation
            <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
