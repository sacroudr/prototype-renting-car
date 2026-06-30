"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const AUTOPLAY_MS = 6000;

const initials = (name: string) => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();

function subscribeReduceMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

const getReduceMotionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getReduceMotionServerSnapshot = () => false;

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSyncExternalStore(subscribeReduceMotion, getReduceMotionSnapshot, getReduceMotionServerSnapshot);

  if (!testimonials.length) return null;

  const goTo = (next: number) => setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);
  const active = testimonials[index];

  return (
    <div
      className="testimonial-stage relative overflow-hidden rounded-card border border-white/90 bg-white/55 shadow-[0_28px_80px_rgba(0,0,0,.11)] ring-1 ring-brand/5 backdrop-blur-2xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Avis clients"
    >
      <p className="sr-only" aria-live="polite">{`Avis ${index + 1} sur ${testimonials.length}, de ${active.name}.`}</p>

      <div className="grid gap-10 p-8 sm:p-12 lg:min-h-[430px] lg:grid-cols-[290px_1fr] lg:gap-16 lg:p-16">
        <div className="flex flex-col items-start">
          <span className="flex size-20 items-center justify-center rounded-card bg-brand font-display text-xl font-semibold text-white sm:size-24">{initials(active.name)}</span>
          <strong className="mt-7 block font-display text-xl text-ink sm:text-2xl">{active.name}</strong>
          <span className="mt-2 text-base text-slate">{active.role}</span>
          <div className="mt-6 inline-flex gap-1 text-brand" aria-label={`${active.rating} étoiles sur 5`}>
            {Array.from({ length: active.rating }).map((_, star) => <Star key={star} size={15} fill="currentColor" />)}
          </div>
        </div>

        <div className="flex flex-col">
          <Quote size={42} strokeWidth={1.2} className="text-brand/25" aria-hidden="true" />
          <p className="mt-6 flex-1 whitespace-pre-line text-lg leading-8 text-ink/90 sm:text-xl sm:leading-9">&ldquo;{active.quote}&rdquo;</p>
          <div className="mt-8 border-t border-ink/10 pt-5 text-right">
            <span className="font-mono text-[10px] uppercase tracking-[.16em] text-brand-deep">Avis Google</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-white/80 bg-white/30 px-8 py-5 backdrop-blur-md sm:px-12 lg:px-16">
        <div className="flex flex-1 items-center gap-3">
          <div className="flex gap-1.5">
            {testimonials.map((testimonial, i) => (
              <span key={testimonial.id} className={`h-1.5 rounded-pill transition-all duration-300 ${i === index ? "w-6 bg-brand" : "w-1.5 bg-ink/15"}`} />
            ))}
          </div>
          <span className="font-mono text-[11px] text-slate">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" aria-label="Avis précédent" onClick={() => goTo(index - 1)} className="motion-hover flex size-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-white/55 text-ink hover:border-brand/30 hover:bg-white/90 hover:text-brand-deep">
            <ChevronLeft size={16} strokeWidth={1.8} />
          </button>
          <button type="button" aria-label="Avis suivant" onClick={() => goTo(index + 1)} className="motion-hover flex size-11 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-white/55 text-ink hover:border-brand/30 hover:bg-white/90 hover:text-brand-deep">
            <ChevronRight size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="h-[3px] bg-ink/10">
        {!reduceMotion && (
          <div
            key={index}
            className="testimonial-progress h-full w-full bg-brand"
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
            onAnimationEnd={() => goTo(index + 1)}
          />
        )}
      </div>
    </div>
  );
}
