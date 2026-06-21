"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";

interface MotionControllerProps {
  children: ReactNode;
}

export function MotionController({ children }: MotionControllerProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      let cancelled = false;

      async function setupMotion() {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled) return;
        gsap.registerPlugin(useGSAP, ScrollTrigger);

        context.add(() => {
          const header = document.querySelector<HTMLElement>("[data-site-header]");
          if (header) {
            // The glass surface only appears once the transparent header leaves the hero's opening frame.
            ScrollTrigger.create({
              start: 24,
              end: "max",
              onEnter: () => header.classList.add("is-scrolled"),
              onLeaveBack: () => header.classList.remove("is-scrolled"),
            });
          }

          const media = gsap.matchMedia();
          media.add(
            {
              reduceMotion: "(prefers-reduced-motion: reduce)",
              canHover: "(hover: hover) and (pointer: fine)",
              desktop: "(min-width: 768px)",
            },
            (mediaContext) => {
              const { reduceMotion, canHover, desktop } = mediaContext.conditions as {
                reduceMotion: boolean;
                canHover: boolean;
                desktop: boolean;
              };

              if (reduceMotion) return;

              // Content stays visible in server HTML; GSAP applies start states only after hydration.
              const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
              intro
                .fromTo("[data-nav-item]", { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.34, stagger: 0.035, clearProps: "transform,opacity" })
                .fromTo("[data-hero-image]", { scale: 1.055 }, { scale: 1, duration: 0.72, clearProps: "transform" }, 0)
                .fromTo("[data-hero-item]", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.44, stagger: 0.055, clearProps: "transform,opacity" }, 0.08);

              if (desktop) {
                gsap.to("[data-hero-media]", {
                  yPercent: 5,
                  ease: "none",
                  scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 0.7 },
                });
              }

              gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
                gsap.fromTo(
                  element,
                  { opacity: 0, y: 28 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.62,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: { trigger: element, start: "top 86%", once: true },
                  },
                );
              });

              gsap.utils.toArray<HTMLElement>("[data-stagger-group]").forEach((group) => {
                const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
                if (!items.length) return;
                gsap.fromTo(
                  items,
                  { opacity: 0, y: 22, scale: 0.988 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.52,
                    stagger: 0.055,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: { trigger: group, start: "top 84%", once: true },
                  },
                );
              });

              const cards = gsap.utils.toArray<HTMLElement>("[data-fleet-card]");
              if (cards.length) {
                gsap.fromTo(
                  cards,
                  { opacity: 0, y: 24, scale: 0.99 },
                  {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.045,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: { trigger: cards[0].parentElement, start: "top 82%", once: true },
                  },
                );
              }

              if (!canHover) return;
              const hoverTargets = gsap.utils.toArray<HTMLElement>(".motion-hover");
              const listeners = hoverTargets.map((target) => {
                const image = target.querySelector<HTMLElement>("[data-card-image]");
                const enter = () => {
                  gsap.to(target, { y: -4, scale: 1.01, duration: 0.18, ease: "power2.out", overwrite: true });
                  if (image) gsap.to(image, { scale: 1.035, duration: 0.28, ease: "power2.out", overwrite: true });
                };
                const leave = () => {
                  gsap.to(target, { y: 0, scale: 1, duration: 0.18, ease: "power2.out", overwrite: true });
                  if (image) gsap.to(image, { scale: 1, duration: 0.24, ease: "power2.out", overwrite: true });
                };
                target.addEventListener("mouseenter", enter);
                target.addEventListener("mouseleave", leave);
                return { target, enter, leave };
              });

              return () => listeners.forEach(({ target, enter, leave }) => {
                target.removeEventListener("mouseenter", enter);
                target.removeEventListener("mouseleave", leave);
              });
            },
          );

          return () => {
            media.revert();
            header?.classList.remove("is-scrolled");
          };
        });
      }

      void setupMotion();
      return () => {
        cancelled = true;
      };
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
