import { ArrowRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { SectionBackdrop } from "./SectionBackdrop";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { content } from "@/data/content";

interface TestimonialsProps {
  testimonials: Testimonial[];
  rating: string;
}

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

const { testimonials: copy } = content;

export function Testimonials({ testimonials, rating }: TestimonialsProps) {
  return (
    <section id="avis" data-reveal className="section-shell relative text-ink">
      <SectionBackdrop />

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker text-brand-deep">{copy.kicker}</p>
          <h2 className="section-title mt-5 text-ink">
            {copy.headline} <span className="text-brand">{copy.headlineHighlight}</span>
          </h2>
          <p className="mt-5 text-[1.02rem] leading-7 text-slate">{copy.description}</p>
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
          {testimonials.length > 0 && (
            <>
              <span className="text-sm text-slate">{testimonials.length} {copy.reviewsLabel}</span>
              <span className="h-4 w-px bg-ink/15" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 text-sm text-slate">
                <span className="inline-flex gap-0.5 text-brand" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={14} fill="currentColor" />)}
                </span>
                {rating} {copy.ratingLabel}
              </span>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#reservation" className="button-primary motion-hover group">
            {copy.ctaLabel}
            <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
