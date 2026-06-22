import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

interface TestimonialsProps {
  testimonials: Testimonial[];
  rating: string;
}

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

export function Testimonials({ testimonials, rating }: TestimonialsProps) {
  return (
    <section id="avis" data-reveal className="section-shell relative overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-20 size-[460px] rounded-full bg-bright-blue/14 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 size-[500px] rounded-full bg-jidor/12 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker text-deep-blue">Témoignages</p>
          <h2 className="section-title mt-5 text-ink">
            La confiance se gagne sur <span className="text-jidor">la route</span>.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-7 text-slate">Ne nous croyez pas sur parole. Voici de vrais avis Google laissés par nos clients.</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <div className="flex items-center -space-x-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <span key={testimonial.id} className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-mist font-display text-xs font-semibold text-ink shadow-sm">
                {initials(testimonial.name)}
              </span>
            ))}
          </div>
          <span className="text-sm text-slate">{testimonials.length} avis Google</span>
          <span className="h-4 w-px bg-ink/15" aria-hidden="true" />
          <span className="inline-flex items-center gap-2 text-sm text-slate">
            <span className="inline-flex gap-0.5 text-jidor" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={14} fill="currentColor" />)}
            </span>
            {rating} note moyenne
          </span>
        </div>
      </div>
    </section>
  );
}
