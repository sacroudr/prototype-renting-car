import { ArrowRight, BadgeCheck, Headphones, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";
import { agency } from "@/data/agency";
import { content } from "@/data/content";

const featureIcons = [Headphones, BadgeCheck];

const { serviceExpert } = content;

const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DASH_OFFSET = CIRCUMFERENCE * (1 - serviceExpert.satisfactionRate / 100);

export function ServiceExpert() {
  return (
    <section data-reveal className="section-shell relative">
      <SectionBackdrop variant="right" />

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <SectionHeading
            kicker={serviceExpert.kicker}
            title={serviceExpert.title}
            description={serviceExpert.description}
          />
          <div className="mt-9 hidden gap-6 lg:grid">
            {serviceExpert.features.map(({ title, text }, i) => {
              const Icon = featureIcons[i] ?? BadgeCheck;
              return (
                <div key={title} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand-deep">
                    <Icon size={23} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#flotte" className="button-primary motion-hover group">
              {serviceExpert.ctaFleetLabel}
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href={agency.whatsapp} className="button-secondary motion-hover">
              <MessageCircle size={17} strokeWidth={1.6} /> {serviceExpert.ctaContactLabel}
            </a>
          </div>
        </div>

        <div data-satisfaction-stat className="relative hidden min-h-[360px] items-center justify-center overflow-hidden rounded-card border border-line bg-gradient-to-br from-mist via-white to-mist p-10 shadow-[var(--shadow-card)] lg:flex">
          <div className="flex flex-col items-center">
            <div className="relative flex size-44 items-center justify-center">
              <svg viewBox="0 0 200 200" className="size-44 -rotate-90" aria-hidden="true">
                <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="#E2E8F0" strokeWidth="14" />
                <circle
                  data-progress-ring
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={DASH_OFFSET}
                />
              </svg>
              <strong data-progress-value className="absolute font-display text-4xl font-bold text-ink">{serviceExpert.satisfactionRate}%</strong>
            </div>
            <p className="mt-6 text-center font-mono text-xs font-bold uppercase tracking-[.14em] text-slate">{serviceExpert.satisfactionLabel}</p>
          </div>
        </div>
      </div>
      <p className="site-container relative z-10 mt-6 hidden text-xs text-slate lg:block">Indicateur de démonstration — à remplacer par vos données réelles avant publication.</p>
    </section>
  );
}
