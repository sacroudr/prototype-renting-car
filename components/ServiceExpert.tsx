import { BadgeCheck, Headphones } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Headphones, title: "Assistance 24h/7j", text: "Une assistance disponible à tout moment pour répondre à vos besoins." },
  { icon: BadgeCheck, title: "Service expert", text: "Une équipe professionnelle dédiée à l'excellence et à votre satisfaction." },
];

const SATISFACTION_RATE = 100;
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DASH_OFFSET = CIRCUMFERENCE * (1 - SATISFACTION_RATE / 100);

export function ServiceExpert() {
  return (
    <section data-reveal className="section-shell overflow-hidden bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <SectionHeading
            kicker="Service expert"
            title="Le confort rencontre la fiabilité."
            description="Nous croyons qu'un bon service ne doit jamais compromettre la fiabilité. Chaque véhicule de notre flotte est sélectionné avec soin et suit des standards d'entretien rigoureux."
          />
          <div className="mt-9 grid gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist text-deep-blue">
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-satisfaction-stat className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-card border border-line bg-gradient-to-br from-mist via-white to-mist p-10 shadow-[var(--shadow-card)]">
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
                  stroke="#1683D6"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={DASH_OFFSET}
                />
              </svg>
              <strong data-progress-value className="absolute font-display text-4xl font-bold text-ink">{SATISFACTION_RATE}%</strong>
            </div>
            <p className="mt-6 text-center font-mono text-xs font-bold uppercase tracking-[.14em] text-slate">Taux de satisfaction<br />client</p>
          </div>
        </div>
      </div>
      <p className="site-container mt-6 text-xs text-slate">Indicateur de démonstration — à remplacer par vos données réelles avant publication.</p>
    </section>
  );
}
