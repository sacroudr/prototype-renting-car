<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Jidor Car — Project Context

## Purpose

This repository contains a polished single-page marketing website for **Jidor Car**, a car-rental agency in Casablanca, Morocco. It is a sales demo intended to convince the business owner to commission the final website. The experience must therefore feel premium immediately while remaining fast and practical on Moroccan mobile connections.

The public-facing language is French. Keep copy concise, reassuring, local, and transparent rather than overly luxurious or promotional.

## Technology

- Next.js 16.2.9 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 through `app/globals.css` and `@theme`
- GSAP 3 with `@gsap/react` and ScrollTrigger
- `next/image` for images and `next/font` for fonts
- Lucide React for interface icons

Before modifying Next.js behavior, read the relevant documentation in `node_modules/next/dist/docs/` as required above.

## Brand and visual direction

- Display font: Sora
- Body font: Manrope
- Small technical labels: JetBrains Mono
- Primary navy: `#0A1E36`
- Brand blue: `#1683D6`
- Deep blue: `#0E5C9E`
- Bright blue: `#3DA5EA`
- Sand accent: `#C98A3C`
- Paper: `#F5F7FA`
- Mist: `#EAF3FB`
- Slate text: `#5C6B7A`
- Borders: `#E2E8F0`
- Main radii: cards/buttons `8px`, panels `6px`

The full reusable token definitions live in `app/globals.css`. Reuse those tokens instead of introducing arbitrary colors, shadows, spacing, or radii.

The intended style is premium automotive minimalism: strong photography, generous spacing, dark navy surfaces, restrained glass effects, crisp typography, and subtle motion. Avoid flashy 3D effects, excessive gradients, generic agency aesthetics, or animation for its own sake.

## Page structure

The homepage is assembled in `app/page.tsx` in this order:

1. Header integrated over the hero
2. Hero with two-date reservation search
3. “Comment ça marche”
4. Trust badges
5. Filterable fleet
6. Most requested vehicles
7. Testimonials
8. Why Jidor Car
9. FAQ with contact methods
10. Footer

Do not reintroduce the former standalone “À votre écoute” contact section; contact actions are deliberately consolidated inside the FAQ.

## Important files

- `app/page.tsx`: homepage composition
- `app/globals.css`: brand tokens and global component styles
- `app/layout.tsx`: fonts and metadata
- `components/`: one reusable component per homepage section
- `components/MotionController.tsx`: dynamically loaded GSAP and ScrollTrigger behavior
- `data/content.ts`: placeholder vehicles, testimonials, FAQ, and prices
- `types/index.ts`: shared content interfaces
- `public/vehicles/`: locally stored vehicle photographs and attribution notes
- `public/jidor-logo.png`: current client logo asset

Original planning references, when available on the same machine:

- `/Users/soucroud/Downloads/Brand Book.dc.html`
- `/Users/soucroud/Downloads/Wireframe.dc.html`

## Content status

Vehicle names and their displayed photographs currently match, but prices, availability, testimonials, contact information, social links, and some photography remain demo content. Do not present placeholder testimonials or business claims as verified facts. Keep comments or visible demo notices where already present until the client supplies final material.

Vehicle filters in `components/FleetGrid.tsx` are interactive and must remain functional. Both fleet sections should reuse the vehicle data from `data/content.ts` so names, prices, and images do not drift.

## Animation rules

- Use GSAP through `components/MotionController.tsx`.
- Dynamically import GSAP and ScrollTrigger on the client only.
- Use `useGSAP` or a scoped GSAP context with proper cleanup.
- Animate only `transform` and `opacity`.
- Keep entrance animations short and understated.
- Use ScrollTrigger reveals once rather than replaying them repeatedly.
- Respect `prefers-reduced-motion` with a static final state.
- Never hide meaningful content in CSS before hydration; the page must remain usable without JavaScript.
- Avoid continuous decorative animation and expensive effects on mobile.

## UX and implementation rules

- Preserve visible keyboard focus states and semantic HTML.
- Keep interactive targets at least 44×44px.
- Verify desktop and 375px mobile layouts without horizontal overflow.
- Use Server Components by default; add `"use client"` only to the smallest component that needs state, events, lifecycle logic, or browser APIs.
- Use `next/image` with correct `sizes` and reserved aspect ratios.
- Keep the navbar transparent over the opening hero and apply its dark glass surface after scrolling.
- Keep the site usable and content visible while GSAP is still loading.

## Validation before handoff

Run:

```bash
npm run lint
npm run build
git diff --check
```

When changing layout or interactions, also inspect the page in a real browser at desktop and 375px widths, check the console for errors, and test any affected controls.
