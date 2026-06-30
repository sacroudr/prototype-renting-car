# DESIGN SYSTEM

> Single source of truth for all UI development on this project.
> Every new component, section, or page must follow these conventions exactly.
> Do not introduce colors, fonts, spacings, radius values, or animation patterns not listed here.

---

## 1. DESIGN TOKENS

### 1.1 Color Palette

> **There is no `tailwind.config.ts`.** This project uses **Tailwind CSS v4** — all tokens are declared in `app/globals.css` inside `@theme inline { ... }`. Tailwind auto-generates utility classes (`bg-brand`, `text-brand`, `border-brand`, etc.) from those CSS custom property names.

| Token | Tailwind classes | Current placeholder | Usage |
|---|---|---|---|
| `--color-brand` | `bg-brand` / `text-brand` / `border-brand` | `#000000` | CTAs, active nav underline, price highlights, step badges, FAQ open border, button border |
| `--color-brand-hover` | `bg-brand-hover` / `hover:bg-brand-hover` | `#000000` | Hover/pressed state of primary button; ~10–15% darker than brand |
| `--color-brand-deep` | `text-brand-deep` / `bg-brand-deep` | `#000000` | Heading accent text, focused link states, icon tints in mist bubbles, form field focus ring color |
| `--color-brand-light` | `text-brand-light` / `bg-brand-light` | `#000000` | Decorative orbs, hero kicker text, nav underline on hover, `::selection` background, `speed-line` second line |
| `--color-accent` | `text-accent` / `bg-accent` | `#000000` | Reserved for badges and warm highlights — not yet used in components |
| `--color-ink` | `text-ink` / `bg-ink` | `#111111` | Main body text, dark section backgrounds (hero overlay, mobile nav), H1/H2 headings |
| `--color-paper` | `bg-paper` / `text-paper` | `#f5f7fa` | Page body background, section wrapper when light bg is needed |
| `--color-mist` | `bg-mist` / `text-mist` | `#f0f4f8` | Icon bubble backgrounds, step icon backgrounds, vehicle spec chip backgrounds |
| `--color-line` | `border-line` / `bg-line` | `#e2e8f0` | Card borders, dividers, input borders (unfocused), horizontal rules |
| `--color-slate` | `text-slate` | `#5c6b7a` | Secondary body text, descriptions, form labels, stat suffixes |
| `--color-white` | `text-white` / `bg-white` | `#ffffff` | Card backgrounds, button backgrounds, explicit white text on dark surfaces |

**Color usage rules:**

- **`brand`** → Use for every primary CTA (buttons, links that are the main action). Never for decorative backgrounds or passive text.
- **`brand-deep`** → Use for text that needs to be "clickable-looking" without being a full CTA. Never as a background fill.
- **`brand-light`** → Decorative only: glows, underlines, selection highlights. Never for primary CTA backgrounds.
- **`ink`** → Use for all heading text and dark surface backgrounds. Never mix it with `brand` as a background.
- **`paper`** → Page and section background. Use it to separate content sections from the white page.
- **`mist`** → Icon bubble fill, chip background. Never use it as text color.
- **`slate`** → Secondary text only. Never for headings or active states.
- **`line`** → Borders and dividers only. Never for text.
- **Never use arbitrary hex values** in component files. All colors must reference one of the tokens above.

**Additional fixed values (not tokenized, intentional):**

| Usage | Value | Where |
|---|---|---|
| WhatsApp button bg | `#e8f6ee` | `.button-whatsapp` in globals.css |
| WhatsApp button text | `#126c40` | `.button-whatsapp` in globals.css |
| WhatsApp button border | `rgba(25,135,84,.25)` | `.button-whatsapp` in globals.css |
| Shadow card | `0 1px 3px rgba(0,0,0,.08), 0 18px 42px rgba(0,0,0,.08)` | `--shadow-card` in `:root` |
| Shadow float | `0 16px 40px rgba(0,0,0,.16)` | `--shadow-float` in `:root` |

Use shadows via `shadow-[var(--shadow-card)]` and `shadow-[var(--shadow-float)]` in JSX — not as raw inline styles.

---

### 1.2 Typography

**Font stack (loaded in `app/layout.tsx`):**

| Role | Font | CSS variable (loader) | Tailwind class | Weights used |
|---|---|---|---|---|
| Heading / Display | Sora | `--font-heading` → `--font-display` | `font-display` | 400, 500, 600 |
| Body | Manrope | `--font-body` → `--font-sans` | `font-sans` (default) | 400, 500, 600, 700 |
| Mono / Labels | JetBrains Mono | `--font-mono-code` → `--font-mono` | `font-mono` | 600, 700 |

`font-sans` is the default body font and does not need to be applied explicitly — it applies to `<body>` via globals.css.

**Type scale (all sizes extracted from actual components):**

| Class | px equivalent | Semantic role | Font |
|---|---|---|---|
| `text-[10px]` | 10px | Stat labels, form field micro-labels | `font-mono` |
| `text-[10px]` + kicker CSS | 12px (via `.section-kicker`) | Section kickers | `font-mono` |
| `text-xs` | 12px | Legal text, metadata, progress counters | any |
| `text-sm` | 14px | Body copy in cards, descriptions, button labels | `font-sans` |
| `text-[1.02rem]` | ~16.3px | Section description paragraphs | `font-sans` |
| `text-base` / `text-lg` | 16–18px | Hero subheadline, section subtitle | `font-sans` |
| `text-xl` | 20px | Card names, testimonial info, step headings (desktop), reservation h2 | `font-display` |
| `text-2xl` | 24px | Fleet CTA subtitle, testimonial name | `font-display` |
| `text-3xl` | 30px | FAQ contact sidebar h3 | `font-display` |
| `text-4xl` | 36px | Satisfaction ring counter | `font-display` |
| `text-5xl` | 48px | ProspectionModal h2 (sm:) | `font-display` |
| `clamp(2.25rem,5vw,3.75rem)` | 36–60px | `.section-title` (all section h2) | `font-display` |
| `clamp(2.6rem,5.4vw,4.4rem)` | 42–70px | Hero h1 | `font-display` |
| `clamp(2.7rem,6vw,5rem)` | 43–80px | FAQ large heading | `font-display` |

**Letter-spacing conventions:**
- Section headings (`.section-title`): `tracking-[-.02em]` (tight)
- Hero h1: `tracking-[-.03em]`
- FAQ large heading: `tracking-[-.04em]`
- Display headings in cards: `tracking-[-.02em]` to `tracking-[-.035em]`
- Section kickers: `tracking-[.12em]` (wide, uppercase)
- Mono micro-labels: `tracking-[.1em]` to `tracking-[.16em]`

**Line-height conventions:**
- Body text: default 1.6 (set globally on `<body>`)
- Section descriptions: `leading-7` (1.75)
- Card body copy: `leading-6` (1.5)
- Hero h1 / section titles: `leading-[.98]` to `leading-[1.05]` (very tight)

```
TYPOGRAPHY RULES

* Never use a font weight not listed above (no 800, no 900, no 300).
* Headings always use font-display (Sora). Never apply font-display to paragraphs or labels.
* Mono labels and kickers always use font-mono (JetBrains Mono).
* Body copy defaults to font-sans (Manrope) — the browser applies it automatically.
* Never set font sizes with arbitrary pixel values (text-[17px]) — use the scale above.
* The .section-title class already sets size, weight, line-height, tracking — do not re-apply those properties in JSX.
* The .section-kicker class already sets font-family, size, tracking, weight, text-transform — do not re-apply those in JSX.
```

---

### 1.3 Spacing & Layout

**Content container:**
- Class: `.site-container` (defined in globals.css)
- Mobile: `width: min(100% - 2rem, 1200px)` → 1rem horizontal padding each side
- `md+`: `width: min(100% - 3rem, 1200px)` → 1.5rem horizontal padding each side
- Max width: **1200px**
- Never use `max-w-*` + `mx-auto` + `px-*` to replicate it — always use `.site-container`

**Section padding:**
- Class: `.section-shell` (defined in globals.css)
- Mobile: `padding-block: 4.5rem` (72px top and bottom)
- `md+`: `padding-block: 7rem` (112px top and bottom)
- Exception: Hero — uses explicit `pb-20 pt-32 lg:pb-24 lg:pt-40` (full-bleed, header overlaps)
- Exception: Footer — uses `pb-8 pt-16`

**Grid conventions:**

| Pattern | Used in |
|---|---|
| `lg:grid-cols-3 gap-7 lg:gap-8` | HowItWorks steps |
| `md:grid-cols-2 lg:grid-cols-3 gap-6` | Fleet grid (desktop) |
| `lg:grid-cols-[1.05fr_.95fr] gap-12` | ServiceExpert, WhyUs, FAQ |
| `md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10` | Footer |
| `lg:grid-cols-[290px_1fr] lg:gap-16` | Testimonials carousel layout |
| `grid-cols-2 gap-2` | Vehicle card specs |

**Standard gap values:** `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-7`, `gap-8`, `gap-10`, `gap-12`, `gap-14`. Do not use odd gaps not in this list.

**Card internal padding:** `p-6` (mobile) or `p-6 sm:p-8` (responsive). Never use padding smaller than `p-4` inside a card.

---

### 1.4 Border Radius & Shadows

| Token | Value | Tailwind class | Where it appears |
|---|---|---|---|
| `--radius-card` | 8px | `rounded-card` | Vehicle cards, FAQ items, fleet CTA box, modals, booking card, testimonial stage, WhyUs image, step containers |
| `--radius-button` | 8px | `rounded-button` | Buttons (same as card — use `rounded-card` in practice since both are 8px) |
| `--radius-panel` | 6px | `rounded-panel` | Form field labels, inner info boxes, logo badge in footer |
| `--radius-pill` | 999px | `rounded-pill` | Filter buttons, kicker badges in hero, header CTA, FAQ filter tags, speed-line, lang toggle |
| — | 9999px | `rounded-full` | Icon bubbles (size-9, size-11, size-12 circles), avatar initials, progress dots, step number badges |

**Shadow tokens (use via CSS var, not raw values):**

| Token | Value | Use for |
|---|---|---|
| `shadow-[var(--shadow-card)]` | dual-layer subtle | All cards (vehicle, testimonial, fleet CTA, FAQ aside, booking card) |
| `shadow-[var(--shadow-float)]` | stronger | Floating elements (header mobile nav, hero booking card) |
| `shadow-sm` | Tailwind default small | Small inline elements (logo badge, icon pill, form row icons) |

**Custom shadow not from tokens (document if used):**
- `shadow-[0_8px_28px_rgba(0,0,0,.12)]` — logo wrapper in header
- `shadow-[0_28px_80px_rgba(0,0,0,.11)] ring-1 ring-brand/5` — testimonial stage

---

### 1.5 Breakpoints

This project uses the standard **Tailwind v4 breakpoints** (mobile-first):

| Prefix | Min-width | Primary use |
|---|---|---|
| (none) | 0 | Mobile base styles — always define these first |
| `sm:` | 640px | Form fields side-by-side, card layout adjustments |
| `md:` | 768px | Section padding switches from mobile to desktop, footer grid |
| `lg:` | 1024px | 2-col section layouts, show desktop nav, hide mobile nav, fleet 3-col grid |
| `xl:` / `2xl:` | 1280/1536px | Not used — do not introduce |

**Rule:** Always write mobile style first, then add responsive overrides upward. Never write desktop-first.

---

## 2. COMPONENT PATTERNS

### SectionHeading

**File:** [`components/SectionHeading.tsx`](components/SectionHeading.tsx)

**Props interface:**
```ts
interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";  // default: "left"
  inverse?: boolean;           // default: false — use on dark backgrounds
}
```

**Visual pattern:** A stacked group of kicker + h2 + optional description + speed-line decoration. The `inverse` prop flips text colors for use on dark (`bg-ink`) backgrounds. Width is capped at `max-w-2xl`; `center` variant adds `mx-auto text-center`.

**Usage:**
```tsx
<SectionHeading
  kicker="Comment ça marche"
  title="Simple, rapide, sans surprise."
  description="Optional paragraph below the title."
/>
```

**Rules:**
- Never recreate a kicker + title block manually in another section — always use `<SectionHeading>`.
- The `speed-line` decoration is included automatically; do not add a second one in the parent.
- `description` is optional — omit for sections with a CTA or secondary content immediately following the heading.

---

### SectionBackdrop

**File:** [`components/SectionBackdrop.tsx`](components/SectionBackdrop.tsx)

**Props interface:**
```ts
interface SectionBackdropProps {
  variant?: "left" | "right" | "center";  // default: "left"
}
```

**Visual pattern:** Three absolutely-positioned blurred blobs (`bg-brand-light/14`, `bg-brand/12`, `bg-white/80`) that create a soft glassmorphic ambient glow behind section content. Positioned with `pointer-events-none absolute inset-0`.

**Usage:**
```tsx
<section className="section-shell relative">
  <SectionBackdrop variant="right" />
  <div className="site-container relative z-10">
    {/* content */}
  </div>
</section>
```

**Rules:**
- The parent section **must** have `position: relative` (Tailwind: `relative`) for the backdrop to be contained.
- Section content wrapper **must** have `relative z-10` to appear above the backdrop.
- `variant="left"` → blobs lean left (default for most sections)
- `variant="right"` → blobs lean right (FAQ, Footer, ServiceExpert)
- `variant="center"` → blobs centered (Fleet, WhyUs, Testimonials)

---

### Header

**File:** [`components/Header.tsx`](components/Header.tsx)

**Props:** None — pulls navigation from `content.footer.navLinks`.

**Visual pattern:** Fixed header, initially transparent with white text. After 24px scroll, `MotionController` adds `.is-scrolled` class which triggers a glassmorphic backdrop via `::before` pseudo-element. Desktop shows inline nav links + `LanguageToggle` + CTA. Mobile uses `<details>/<summary>` for the burger menu — no JavaScript state.

**Rules:**
- The `data-site-header` attribute on `<header>` is required — `MotionController` uses it to add/remove `.is-scrolled`.
- Navigation items get `data-nav-item` for the GSAP entrance animation.
- Never add JavaScript `onClick` to the mobile menu — it uses the native `<details>` toggle.
- The `header-cta` class handles all button style transitions between transparent and scrolled states via CSS — do not override with inline styles.
- The `<Logo>` in the header has a white `rounded-panel bg-white` badge wrapper — always keep this.

---

### Hero

**File:** [`components/Hero.tsx`](components/Hero.tsx)

**Props:** None — imports `agency` and `content.hero` directly.

**Visual pattern:** Full-bleed dark section (`bg-ink`). Background image via `next/image` with `fill priority`. Layered radial/linear gradient overlays for text readability. Split layout on `lg+`: left text column + right floating booking card. The booking card is hidden below `lg` (`hidden lg:block`). Stats row uses `font-display text-3xl font-semibold` + `font-mono text-[10px]` label below.

**Key classes:**
- Outer: `relative isolate overflow-hidden bg-ink text-white`
- Media wrapper: `absolute -inset-y-[5%] inset-x-0 will-change-transform` + `data-hero-media`
- Content layout: `site-container relative flex flex-col gap-12 pb-20 pt-32 lg:flex-row lg:items-center lg:gap-10 lg:pb-24 lg:pt-40`
- Booking card: `hidden w-full max-w-md overflow-hidden rounded-card border border-white/15 bg-white/95 text-ink shadow-[var(--shadow-float)] backdrop-blur-xl lg:block lg:w-[520px] lg:shrink-0`
- Top accent line on card: `absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-brand-light to-brand`

**Animation data attributes required:**
- `data-hero` on `<section>` (parallax trigger)
- `data-hero-media` on media wrapper div (parallax target)
- `data-hero-image` on `<Image>` (scale entrance)
- `data-hero-item` on each content block (stagger entrance)

**Rules:**
- Always `priority` on the hero background image.
- Always use `sizes="100vw"` for the hero background image.
- The booking card `<form>` must have `id="reservation"` — ProspectionModal listens for its submit event.
- Never remove `will-change-transform` from `data-hero-media` and `data-hero-image` elements — required for smooth parallax.

---

### HowItWorks

**File:** [`components/HowItWorks.tsx`](components/HowItWorks.tsx)

**Props:** None — imports `content.howItWorks`.

**Visual pattern:** Centered heading + 3-column step grid. Steps have icon circle (size-20 / lg:size-28), step number badge (absolute positioned top-right), h3, and p. A horizontal line (`absolute` positioned between columns) connects the icons on desktop. Uses `data-stagger-group` / `data-stagger-item` for the grid animation.

**Icon array:** `[CalendarRange, MapPinned, CarFront]` — hardcoded generic car rental icons. Do not change unless the step order changes.

---

### ServiceExpert

**File:** [`components/ServiceExpert.tsx`](components/ServiceExpert.tsx)

**Props:** None — imports `agency` and `content.serviceExpert`.

**Visual pattern:** 2-column layout (`lg:grid-cols-[1.05fr_.95fr]`). Left: heading + 2 feature rows + 2 CTAs. Right: hidden below `lg`, SVG ring counter card with satisfaction percentage. The ring is animated by `MotionController` via `data-satisfaction-stat`, `data-progress-ring`, `data-progress-value` attributes.

**Ring SVG spec:** `viewBox="0 0 200 200"`, outer circle `r=80`, stroke `#E2E8F0` width 14. Inner (progress) circle `stroke="var(--color-brand)"`, `strokeDasharray=CIRCUMFERENCE`, `strokeDashoffset` set by GSAP. `-rotate-90` on the SVG to start from top.

**Rules:**
- `satisfactionRate` in `content.serviceExpert` must be an integer 0–100.
- The demo notice paragraph (`Indicateur de démonstration…`) below the section must remain until the client confirms real data.

---

### FleetGrid

**File:** [`components/FleetGrid.tsx`](components/FleetGrid.tsx)

**Props:**
```ts
interface FleetGridProps {
  vehicles: Vehicle[];
}
```

**Visual pattern:** Heading row with filter buttons (desktop only). Mobile: horizontal snap-scroll carousel (`overflow-x-auto snap-x snap-mandatory`, cards at `w-[82%]`). Desktop (`md+`): CSS grid `md:grid-cols-2 lg:grid-cols-3`. Both the carousel and the grid have `data-fleet-card-group` for GSAP grouping. Bottom CTA card with glassmorphic treatment.

**Filter state:** Client component. Filters: `["Tous", "Citadine", "Berline", "SUV"]`. Active filter button: `border-ink bg-ink text-white`. Inactive: `border-line bg-white text-ink hover:border-brand hover:text-brand-deep`.

**Rules:**
- Both the mobile carousel container and the desktop grid div **must** have `data-fleet-card-group` — MotionController uses `card.closest("[data-fleet-card-group]")` to group cards correctly.
- Mobile carousel always shows ALL vehicles (not filtered); desktop grid respects the active filter.
- Always show the empty state paragraph when `vehicles.length === 0`.

---

### VehicleCard

**File:** [`components/VehicleCard.tsx`](components/VehicleCard.tsx)

**Props:**
```ts
interface VehicleCardProps {
  vehicle: Vehicle;
}
```

**Visual pattern:** White card (`rounded-card border border-line bg-white shadow-[var(--shadow-card)]`). Top: `aspect-[4/3]` image with category badge (absolute, top-left, white pill). Content area `p-6`: name + price row, 4 spec chips in `grid-cols-2`, full-width CTA link. The `data-fleet-card` attribute is required. The `data-card-image` attribute on `<Image>` enables the hover zoom in MotionController.

**WhatsApp CTA:** Appends vehicle name as pre-encoded URL param to `agency.whatsapp`. Button label from `content.fleet.vehicleCta`.

**Rules:**
- Always `motion-hover` class on the `<article>` wrapper — this triggers the GSAP hover lift.
- Always `data-card-image` on the `<Image>` — this triggers the GSAP hover zoom.
- Never hardcode the WhatsApp URL — always derive from `agency.whatsapp`.
- `sizes="(max-width: 768px) 100vw, 33vw"` on the vehicle image — keep this for LCP.

---

### Testimonials

**File:** [`components/Testimonials.tsx`](components/Testimonials.tsx)

**Props:**
```ts
interface TestimonialsProps {
  testimonials: Testimonial[];
  rating: string;
}
```

**Visual pattern:** Centered heading block, then `<TestimonialsCarousel>`, then a row of avatar initials + review count + star rating. The avatar row and rating are conditionally hidden when `testimonials.length === 0`. Section uses `data-reveal` for entrance animation.

---

### TestimonialsCarousel

**File:** [`components/TestimonialsCarousel.tsx`](components/TestimonialsCarousel.tsx)

**Props:**
```ts
interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}
```

**Visual pattern:** Glassmorphic card (`bg-white/55 backdrop-blur-2xl`). Two-column layout on `lg+`: left has avatar initials, name, role, stars; right has large quote + attribution. Bottom control bar: dot indicators + prev/next buttons. Progress bar autoplay (`AUTOPLAY_MS = 6000ms`) pauses on hover/focus via CSS. Returns `null` when `testimonials` is empty.

**Progress bar:** `testimonial-progress` CSS class + `onAnimationEnd` callback. Pause handled entirely in CSS via `.testimonial-stage:hover .testimonial-progress { animation-play-state: paused }`.

**Reduced motion:** Uses `useSyncExternalStore` to subscribe to `prefers-reduced-motion`. When active, the progress bar is not rendered (no `<div>` in DOM).

---

### WhyUs

**File:** [`components/WhyUs.tsx`](components/WhyUs.tsx)

**Props:** None — imports `agency` and `content.whyUs`.

**Visual pattern:** 2-column `lg:grid-cols-[1.05fr_.95fr]`. Left (on desktop): photo with dark gradient overlay + caption text. Right: heading + 3 reason rows (icon bubble + title + description) + 2 CTAs. Order reverses on mobile via `order-2 lg:order-1` / `order-1 lg:order-2`.

**Icon array:** `[MapPin, BadgeCheck, MessageCircle]` — maps to `content.whyUs.reasons[0,1,2]`. Always 3 reasons.

---

### FAQ

**File:** [`components/FAQ.tsx`](components/FAQ.tsx)

**Props:**
```ts
interface FAQProps {
  items: FAQItem[];
}
```

**Visual pattern:** 2-column `lg:grid-cols-[1.05fr_.95fr]`. Left: section heading + `<FAQAccordion>`. Right: sticky sidebar card (`lg:sticky lg:top-28`) with contact options. Contact options come from `content.faq.contactOptions` (icon names mapped via `const iconMap = { MessageCircle, Phone, Mail }`). Primary contact option uses `border-brand/35 bg-brand/5`.

---

### FAQAccordion

**File:** [`components/FAQAccordion.tsx`](components/FAQAccordion.tsx)

**Props:**
```ts
interface FAQAccordionProps {
  items: FAQItem[];
}
```

**Visual pattern:** Controlled accordion — only one item open at a time. Open item: `border-brand/30`, question text `text-brand-deep`, icon `rotate-45`. CSS `grid-rows-[0fr]/[1fr]` transition for smooth open/close (no JS height measurement). Open state initialized to `items[0]?.id` — first item starts open. Uses `data-stagger-group`/`data-stagger-item` for entrance animation.

---

### Footer

**File:** [`components/Footer.tsx`](components/Footer.tsx)

**Props:** None — imports `agency` and `content.footer`.

**Visual pattern:** Light `bg-paper` footer, 4-column grid (`md:grid-cols-[1.4fr_1fr_1fr_1fr]`) with logo/tagline, navigation links, contact info, social icons. Social icons use custom `SocialIcons.tsx` components (inline SVG via `dangerouslySetInnerHTML`). Uses `data-stagger-group`/`data-stagger-item` for entrance animation.

---

### Logo

**File:** [`components/Logo.tsx`](components/Logo.tsx)

**Props:**
```ts
interface LogoProps {
  className?: string;
}
```

**Visual pattern:** Fixed-size container `h-[42px] w-[168px]` with `next/image` centered inside. Image source from `agency.logoSrc`. Always `priority` since it appears in the header above the fold.

**Rules:**
- Never set an `alt` text manually in `<Logo>` — it reads `agency.name` automatically.
- The `className` prop is only for scaling transforms (`scale-[.88]` in the header) — do not use it for layout.

---

### DateField

**File:** [`components/DateField.tsx`](components/DateField.tsx)

**Props:**
```ts
interface DateFieldProps {
  label: string;
  name: string;
  ariaLabel: string;
}
```

**Visual pattern:** Styled `<label>` wrapper (not an input standalone). Min-height 68px. Icon bubble + stacked label text + date input. Clicking anywhere on the label calls `inputRef.current?.showPicker()`. Focus-within border: `border-brand`.

**Rules:**
- Always use `DateField` for date pickers — never a raw `<input type="date">` without this wrapper.
- The `onClick` on the label (to trigger `showPicker`) is why this is a `"use client"` component.

---

### ProspectionModal

**File:** [`components/ProspectionModal.tsx`](components/ProspectionModal.tsx)

**Props:** None.

**Behavior:** Intercepts ALL clicks on interactive elements site-wide (delegated to `document`). Elements excluded: `[data-prospection-allow]`, `.skip-link`. Form submit on `#reservation` is also intercepted. When triggered, shows a glassmorphic modal explaining this is a sales demo. Developer contact info is shown (not the agency's).

**Rules:**
- Add `data-prospection-allow` to any link inside the modal that should open without re-triggering the modal.
- The `interactiveSelector` list in the component must stay generic (no agency-specific URLs) — currently uses `a[href^='tel:']` and `a[href^='mailto:']` (not agency-specific).
- Replace `__DEVELOPER_WHATSAPP__`, `__DEVELOPER_WHATSAPP_URL__`, `__DEVELOPER_EMAIL__` before deploying a new prospection demo.
- Remove or disable this component entirely before handing the live site to the client.

---

### MotionController

**File:** [`components/MotionController.tsx`](components/MotionController.tsx)

**Props:**
```ts
interface MotionControllerProps {
  children: ReactNode;
}
```

**Pattern:** Wraps the entire page in a `<div ref={scope}>`. All GSAP animations for the entire site are defined here — no component has its own GSAP code. GSAP and ScrollTrigger are dynamically imported async inside `setupMotion()` so they never run on the server.

---

## 3. SECTION CONVENTIONS

**Every full-page section follows this anatomy:**

1. `<section>` with `section-shell relative` (+ optional `id`, `data-reveal`, `aria-labelledby`)
2. `<SectionBackdrop>` as first child
3. `<div className="site-container relative z-10">` as content wrapper
4. Inside: `<SectionHeading>` + body content

**Section shell template (copy and adapt):**

```tsx
import { SectionBackdrop } from "./SectionBackdrop";
import { SectionHeading } from "./SectionHeading";
import { content } from "@/data/content";

const { mySection } = content;

export function MySection() {
  return (
    <section id="my-section" data-reveal className="section-shell relative">
      <SectionBackdrop variant="left" />

      <div className="site-container relative z-10">
        <SectionHeading
          kicker={mySection.kicker}
          title={mySection.title}
          description={mySection.description}
        />

        {/* Section body — use data-stagger-group if children should stagger */}
        <div data-stagger-group className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* data-stagger-item on each child */}
        </div>
      </div>
    </section>
  );
}
```

**Rules:**
- Sections with grid content use `mt-10` or `mt-12` between heading and body grid.
- Sections with a closing CTA place it in a centered div: `<div className="mt-8 flex justify-center">`.
- Never add `overflow-hidden` to a section that uses `SectionBackdrop` — the blobs are clipped by the parent `<div className="relative overflow-hidden bg-paper text-ink">` in `page.tsx`.

---

## 4. ANIMATION CONVENTIONS (GSAP)

### 4.1 Architecture

**All animation logic lives exclusively in `components/MotionController.tsx`.** No other component file imports or uses GSAP directly. This is a hard rule.

**Setup pattern:**
```ts
// GSAP and ScrollTrigger are dynamically imported async (never server-side)
const [{ gsap }, { ScrollTrigger }] = await Promise.all([
  import("gsap"),
  import("gsap/ScrollTrigger"),
]);
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Responsive + reduced-motion gating via gsap.matchMedia()
const media = gsap.matchMedia();
media.add(
  {
    reduceMotion: "(prefers-reduced-motion: reduce)",
    canHover: "(hover: hover) and (pointer: fine)",
    desktop: "(min-width: 768px)",
  },
  (context) => {
    const { reduceMotion, canHover, desktop } = context.conditions;
    if (reduceMotion) return;  // ← reduced-motion guard is always first
    // ... animations
  },
);
```

**Cleanup:** `media.revert()` is called in the `context.add()` cleanup. `cancelled` flag prevents async race.

---

### 4.2 Animation Catalogue

All animations use **`ease: "power3.out"`** unless noted. All use **`clearProps: "transform,opacity"`** so the element returns to its natural CSS state after animation completes.

#### Nav Entrance (on page load, no ScrollTrigger)
- **Selector:** `[data-nav-item]`
- **From:** `{ opacity: 0, y: -14 }`
- **To:** `{ opacity: 1, y: 0, duration: 0.34, stagger: 0.035 }`
- **Timeline position:** default (sequential)

#### Hero Image Scale (on page load, no ScrollTrigger)
- **Selector:** `[data-hero-image]`
- **From:** `{ scale: 1.055 }`
- **To:** `{ scale: 1, duration: 0.72 }`
- **Timeline position:** `0` (runs simultaneously with nav)

#### Hero Content Stagger (on page load, no ScrollTrigger)
- **Selector:** `[data-hero-item]`
- **From:** `{ opacity: 0, y: 22 }`
- **To:** `{ opacity: 1, y: 0, duration: 0.44, stagger: 0.055 }`
- **Timeline position:** `0.08`

#### Hero Parallax (desktop only, ScrollTrigger scrub)
- **Selector:** `[data-hero-media]`
- **To:** `{ yPercent: 5, ease: "none" }`
- **ScrollTrigger:** `{ trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 0.7 }`
- **Condition:** `desktop` only

#### Section Reveal (most sections)
- **Selector:** `[data-reveal]`
- **From:** `{ opacity: 0, y: 28 }`
- **To:** `{ opacity: 1, y: 0, duration: 0.62, clearProps }`
- **ScrollTrigger:** `{ trigger: element, start: "top 86%", once: true }`

#### Stagger Group (footer columns, FAQ accordion items)
- **Selector:** `[data-stagger-group]` → children `[data-stagger-item]`
- **From:** `{ opacity: 0, y: 22, scale: 0.988 }`
- **To:** `{ opacity: 1, y: 0, scale: 1, duration: 0.52, stagger: 0.055, clearProps }`
- **ScrollTrigger:** `{ trigger: group, start: "top 84%", once: true }`

#### Fleet Cards Reveal
- **Selector:** `[data-fleet-card]` grouped by `[data-fleet-card-group]`
- **From:** `{ opacity: 0, y: 24, scale: 0.99 }`
- **To:** `{ opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.045, clearProps }`
- **ScrollTrigger:** `{ trigger: group, start: "top 82%", once: true }`
- **Note:** MotionController groups cards by closest `[data-fleet-card-group]` parent. Both the mobile carousel container and the desktop grid must have this attribute.

#### Satisfaction Ring Counter
- **Selector:** `[data-satisfaction-stat]` → `[data-progress-ring]` + `[data-progress-value]`
- **From:** `{ value: 0 }`
- **To:** `{ value: target, duration: 1.5, ease: "power2.out" }` (proxy tween)
- **onUpdate:** Sets `strokeDashoffset` on SVG circle + updates text content
- **ScrollTrigger:** `{ trigger: stat, start: "top 80%", once: true }`

#### Hover Lift (pointer: fine devices only)
- **Selector:** `.motion-hover`
- **Enter:** `{ y: -4, scale: 1.01, duration: 0.18, ease: "power2.out", overwrite: true }`
- **Leave:** `{ y: 0, scale: 1, duration: 0.18, ease: "power2.out", overwrite: true }`
- **Image child enter:** `{ scale: 1.035, duration: 0.28, ease: "power2.out" }`
- **Image child leave:** `{ scale: 1, duration: 0.24, ease: "power2.out" }`
- **Condition:** `canHover` only (desktop pointer devices — never touch)

---

### 4.3 Animation Rules

```
ANIMATION RULES — follow all of these without exception:

1.  Animate only `transform` and `opacity`. Never animate width, height, top, left, margin, padding, color.
2.  All GSAP code goes in MotionController.tsx. No other component file may import or call gsap directly.
3.  Always pass `once: true` to every ScrollTrigger — sections reveal once, never re-animate on scroll back.
4.  Always check for reduceMotion first inside gsap.matchMedia() context — `if (reduceMotion) return;`
5.  Always `clearProps: "transform,opacity"` at the end of entrance animations so elements return to natural CSS state.
6.  Never set `opacity: 0` in CSS/Tailwind as an initial animation state — content must be readable if JS fails.
7.  Add `data-` attribute markers to HTML for animation targeting — never target by CSS class alone (class names can change).
8.  GSAP is dynamically imported async — keep this pattern, never static-import at the top of MotionController.
9.  The `useGSAP` hook must always be called with `{ scope }` ref — prevents selector leakage across components.
10. Do not import GSAP plugins other than ScrollTrigger without updating this file.
11. Keep total entrance animation duration under 0.8s. Hover micro-interactions: under 200ms.
12. Use `overwrite: true` on hover animations to prevent stuttering on rapid mouse movement.
```

---

## 5. UI PATTERNS & STATES

### Buttons

**Primary CTA** (`.button-primary` — defined in globals.css):
```css
display: inline-flex; min-height: 48px; align-items: center; justify-content: center;
gap: 0.55rem; border-radius: 8px; padding: 0.75rem 1.25rem;
font-size: 0.875rem; font-weight: 700; line-height: 1; cursor: pointer; touch-action: manipulation;
border: 1px solid var(--color-brand); background: var(--color-brand); color: #ffffff;
```
Focus: `outline: 3px solid var(--color-brand-light); outline-offset: 3px`

**Secondary** (`.button-secondary`): Same sizing. `border: 1px solid #cbd5e1; background: #ffffff; color: var(--color-ink)`.

**WhatsApp** (`.button-whatsapp`): Same sizing. `background: #e8f6ee; border: 1px solid rgba(25,135,84,.25); color: #126c40`.

**Icon in button pattern:** `<Icon size={16-17} strokeWidth={1.6-1.8} />` as first child before label text. Arrow icons get `transition-transform group-hover:translate-x-1` when the button has class `group`.

**Header CTA** (`.header-cta`): Pill shape (`border-radius: 999px`), 48px min-height. Transparent/white border by default; transitions to `bg-brand border-brand text-white` when `.is-scrolled` class is present on the header.

**Rules:**
- Never create a new button variant without adding it to globals.css and this file.
- `motion-hover` class goes on the anchor/button element, not a wrapper — the GSAP hover lift applies to the element itself.
- Minimum target size is 48px height (already set by `.button-*` classes) and 44px width.

---

### Form Inputs (Hero Booking Card)

**Field wrapper:**
```tsx
<label className="flex min-h-[68px] items-center gap-3 rounded-panel border border-line px-4 transition-colors focus-within:border-brand">
```

**Icon bubble inside field:**
```tsx
<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-brand-deep">
  <Icon size={17} strokeWidth={1.7} />
</span>
```

**Label text + input stack:**
```tsx
<span className="grid min-w-0 flex-1">
  <span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">FIELD LABEL</span>
  <input ... className="min-w-0 cursor-pointer bg-transparent text-sm font-semibold outline-none" />
</span>
```

**Rules:**
- Use `DateField` component for date inputs, not raw `<input type="date">`.
- `select` elements inside fields must have `appearance-none` and `bg-transparent` — styled by the wrapper.
- The `ChevronDown` icon for selects sits at the end of the label, `size={16} strokeWidth={1.8} className="shrink-0 text-slate"`.

---

### Cards

**Vehicle card (see `VehicleCard.tsx`):**
- Outer: `overflow-hidden rounded-card border border-line bg-white shadow-[var(--shadow-card)]`
- Image area: `aspect-[4/3] overflow-hidden bg-paper` + category badge pill
- Content: `p-6`
- Spec chips: `flex items-center gap-2 rounded-panel bg-paper px-3 py-2.5 text-xs font-semibold text-ink`

**Glassmorphic card (fleet CTA, FAQ aside, booking card):**
- `rounded-card border border-white/80 bg-white/70 backdrop-blur-xl shadow-[var(--shadow-card)]`
- More opaque variant: `bg-white/88` or `bg-white/95`

**Step card (HowItWorks):**
- No card border/shadow — just `flex flex-col items-center text-center`
- Icon: `size-20 lg:size-28 rounded-full border border-brand/25 bg-mist text-brand-deep shadow-[0_0_0_6px_var(--color-paper)] lg:shadow-[0_0_0_10px_var(--color-paper)]`

---

### Icons

**Library:** Lucide React (`from "lucide-react"`) for all interface icons.

**Exception:** Social icons (Instagram, Facebook, LinkedIn) use inline SVG via `SocialIcons.tsx` — never use Lucide for these.

**Size conventions:**
- Button icons: `size={16}` or `size={17}`
- Medium field/bubble icons: `size={17}` to `size={20}`
- Large section icons: `size={23}` to `size={28}`
- Header burger/close: `size={22}`

**Stroke width:**
- Default: `strokeWidth={1.6}`
- Arrows and chevrons: `strokeWidth={1.8}` or `strokeWidth={2}`
- Never use default Lucide strokeWidth (2) for section icons — always explicit

**Color:** Always `currentColor` (via Tailwind text class on parent or the icon itself). Common: `text-brand`, `text-brand-deep`, `text-slate`, `text-ink`.

---

## 6. DATA & CONTENT INTEGRATION

| File | Role | Consumed by |
|---|---|---|
| `data/agency.ts` | Agency identity, contact, social, stats | Header (via Logo), Hero, Footer, VehicleCard, FAQ, ServiceExpert, WhyUs, ProspectionModal, layout.tsx metadata |
| `data/vehicles.ts` | `Vehicle[]` array | `page.tsx` → `FleetGrid`, Hero (`<select>` options) |
| `data/testimonials.ts` | `Testimonial[]` array | `page.tsx` → `Testimonials` |
| `data/faq.ts` | `FAQItem[]` array | `page.tsx` → `FAQ` |
| `data/content.ts` | All section copy (strings) + re-exports vehicles/testimonials/faqItems | All section components |
| `types/index.ts` | TypeScript interfaces: `Vehicle`, `Testimonial`, `FAQItem`, `VehicleCategory` | All data files and components |

**Data flow pattern:**
- `page.tsx` imports from `data/content` (the barrel), passes data arrays down as props to `<FleetGrid>`, `<Testimonials>`, `<FAQ>`.
- Section copy is imported directly inside each component from `data/content` — not passed as props.
- Agency config is imported directly in components that need it — not passed as props.

**Rules:**
- **Never hardcode a visible text string in a component file.** All copy comes from `data/content.ts`.
- **Never hardcode a contact URL, phone number, or email** in a component. Always use `agency.*`.
- When adding a new section, add its copy object to `data/content.ts` under a new key, then import `content.mySection` in the component.
- TypeScript interfaces for new data shapes go in `types/index.ts` — never inline in component files.

---

## 7. FILE & FOLDER CONVENTIONS

```
app/
  globals.css          ← ALL design tokens (Tailwind v4 @theme inline)
  layout.tsx           ← Font loading, metadata
  page.tsx             ← Page composition only — no layout logic
components/
  [ComponentName].tsx  ← PascalCase filename = PascalCase export
  MotionController.tsx ← ALL GSAP animations — touch nothing else for animation
data/
  agency.ts            ← Agency config
  content.ts           ← Section copy + re-exports
  vehicles.ts          ← Vehicle[] data
  testimonials.ts      ← Testimonial[] data
  faq.ts               ← FAQItem[] data
types/
  index.ts             ← All TypeScript interfaces and type unions
public/
  images/              ← Client images (logo, hero, vehicles, etc.)
```

**Naming rules:**
- Component files: `PascalCase.tsx`
- Data files: `camelCase.ts`
- Import alias: `@/` maps to project root (configured in tsconfig)
- No `index.ts` barrel files for components — import each component by full filename

**`"use client"` rules:**
- Add `"use client"` only to the smallest component that needs: state (`useState`), refs (`useRef`), effects (`useEffect`), browser APIs (`window`, `document`), or event handlers that can't be server-side.
- Current client components: `MotionController`, `FleetGrid`, `FAQAccordion`, `TestimonialsCarousel`, `DateField`, `LanguageToggle`, `ProspectionModal`.
- Everything else is a Server Component by default — keep it that way.

---

## 8. RULES SUMMARY (quick reference)

```
QUICK RULES — read before writing any code

1.  Colors: use only tokens from app/globals.css @theme. No arbitrary hex values in JSX or component CSS.
2.  Fonts: headings → font-display (Sora), body → font-sans (Manrope, default), labels/kickers → font-mono (JetBrains Mono).
3.  Spacing: sections use .section-shell (4.5rem/7rem vertical). Content max-width is 1200px via .site-container.
4.  Radius: cards/buttons → rounded-card (8px), form fields → rounded-panel (6px), pills → rounded-pill (999px), icon bubbles → rounded-full.
5.  Shadows: shadow-[var(--shadow-card)] for cards, shadow-[var(--shadow-float)] for floating elements.
6.  Animations: ALL GSAP code goes in MotionController.tsx only. Transform + opacity only. once: true on every ScrollTrigger. reduceMotion check first.
7.  Animation targeting: use data-* attributes (data-reveal, data-stagger-group, data-fleet-card, etc.). Never target by CSS class in GSAP.
8.  Content: all visible text strings come from data/content.ts. All contact info from data/agency.ts. Never hardcode either in component files.
9.  New sections: use the Section Shell Template from Section 3. Add copy to data/content.ts first.
10. New buttons: use .button-primary, .button-secondary, .button-whatsapp, or .header-cta. No new variants without updating globals.css and this file.
11. Images: always next/image. Hero bg → fill + priority + sizes="100vw". Vehicle photos → fill + sizes="(max-width: 768px) 100vw, 33vw". Logo → fixed width={1024} height={1024} + priority.
12. Types: all TypeScript interfaces in types/index.ts. No inline types in component files.
13. Server vs. client: default to Server Components. Add "use client" only to the smallest component that needs browser APIs.
14. Before any npm install: check if Lucide, GSAP, or the existing Tailwind utilities already cover the need.
15. Tailwind config: there is no tailwind.config.ts — token changes go in app/globals.css @theme inline only.
```

---

*Last updated: 2026-06-30. Reflects codebase state after template refactor (WhyUs, data/agency.ts, Tailwind v4 token rename from `jidor`→`brand`).*
