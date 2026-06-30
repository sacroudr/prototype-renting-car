import { ArrowRight, CalendarRange, CarFront, MapPinned } from "lucide-react";
import { SectionBackdrop } from "./SectionBackdrop";
import { content } from "@/data/content";

const stepIcons = [CalendarRange, MapPinned, CarFront];

const { howItWorks } = content;

export function HowItWorks() {
  return (
    <section data-reveal className="section-shell relative" aria-labelledby="how-it-works-title">
      <SectionBackdrop />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker mb-3 text-brand-deep">{howItWorks.kicker}</p>
          <h2 id="how-it-works-title" className="section-title text-ink">{howItWorks.title}</h2>
          <p className="mt-5 text-[1.02rem] leading-7 text-slate">{howItWorks.subtitle}</p>
        </div>

        <div data-stagger-group className="relative mt-10 grid gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-[16.5%] right-[16.5%] top-14 hidden h-px bg-line lg:block" aria-hidden="true" />
          {howItWorks.steps.map(({ number, title, description }, i) => {
            const Icon = stepIcons[i] ?? CalendarRange;
            return (
              <article data-stagger-item key={number} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex size-20 items-center justify-center rounded-full border border-brand/25 bg-mist text-brand-deep shadow-[0_0_0_6px_var(--color-paper)] lg:size-28 lg:shadow-[0_0_0_10px_var(--color-paper)]">
                  <Icon size={28} strokeWidth={1.6} className="lg:size-9" />
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-brand font-mono text-[9px] font-bold text-white lg:size-8 lg:text-[10px]">{number}</span>
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-.02em] text-ink lg:mt-8">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate">{description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#reservation" className="button-primary motion-hover group">
            {howItWorks.ctaLabel}
            <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
