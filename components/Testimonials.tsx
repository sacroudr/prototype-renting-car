import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
  rating: string;
}

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

export function Testimonials({ testimonials, rating }: TestimonialsProps) {
  return (
    <section data-reveal className="section-shell overflow-hidden bg-[#061427] text-white">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker text-bright-blue">Témoignages</p>
          <h2 className="mt-5 font-display text-[clamp(2.7rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-.045em]">La confiance se gagne sur la route.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#9DB2C8]">Ne nous croyez pas sur parole. Voici ce que nos clients disent de leur expérience avec Jidor Car.</p>
        </div>

        <div data-stagger-group className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article data-stagger-item key={testimonial.id} className="motion-hover flex min-h-[360px] flex-col rounded-card border border-white/10 bg-white/[.025] p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex gap-1 text-sand" aria-label={`${testimonial.rating} étoiles sur 5`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
                </span>
                <Quote size={30} strokeWidth={1.2} className="text-bright-blue/30" />
              </div>
              <p className="mt-8 flex-1 text-[1.02rem] leading-8 text-[#D7E2EE]">“{testimonial.quote}”</p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="flex size-12 items-center justify-center rounded-card bg-mist font-display text-sm font-semibold text-ink">{initials(testimonial.name)}</span>
                <span><strong className="block text-sm">{testimonial.name}</strong><span className="text-xs text-[#6B82A0]">{testimonial.role}</span></span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-3">
          <div className="bg-[#061427] px-6 py-8 text-center"><strong className="font-display text-4xl font-light">{rating}</strong><span className="mt-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#6B82A0]">Note moyenne</span></div>
          <div className="bg-[#061427] px-6 py-8 text-center"><strong className="font-display text-4xl font-light">24/7</strong><span className="mt-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#6B82A0]">Assistance</span></div>
          <div className="bg-[#061427] px-6 py-8 text-center"><strong className="font-display text-4xl font-light">0</strong><span className="mt-2 block font-mono text-[10px] uppercase tracking-[.16em] text-[#6B82A0]">Frais cachés</span></div>
        </div>
        <p className="mt-5 text-center text-xs text-[#6B82A0]">Avis de démonstration — à remplacer par des témoignages clients vérifiés avant publication.</p>
      </div>
    </section>
  );
}
