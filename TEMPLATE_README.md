# Car Rental Agency — Template Onboarding Checklist

This project is a reusable marketing website template for a car rental agency.
Every `__PLACEHOLDER__` in the codebase must be replaced with real client content
before going live.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # must pass before handoff
npm run build     # must pass before handoff
```

---

## Step 1 — Agency Config `[AGENCY_CONFIG]`

Open **`data/agency.ts`** and fill in every `"__PLACEHOLDER__"` field.

| Field | Description |
|---|---|
| `name` | Full agency name displayed site-wide |
| `tagline` | One-line footer blurb |
| `city` / `country` | Used in metadata, hero kicker, footer |
| `currency` | Price suffix on vehicle cards (e.g. `"MAD"`) |
| `logoSrc` | Path to logo — see Step 4 |
| `phone` / `phoneHref` | Display string + `tel:` URI |
| `whatsapp` / `whatsappDisplay` | Full `https://wa.me/…` URL + display number |
| `email` / `emailHref` | Address + `mailto:` URI |
| `address` | Short address for footer |
| `socialLinks.instagram/facebook/linkedin` | Full profile URLs |
| `stats.*` | Hero stat block labels + values |

---

## Step 2 — Brand Tokens `[BRAND_TOKEN]`

Open **`app/globals.css`** and search for `[BRAND_TOKEN]`.
Every comment marks a color that must be replaced with the client's brand value.

| Token | Role | Placeholder |
|---|---|---|
| `--color-brand` | Primary CTA color | `#000000` |
| `--color-brand-hover` | Hover state of brand | `#000000` |
| `--color-brand-deep` | Dark variant (text accents) | `#000000` |
| `--color-brand-light` | Light/bright variant | `#000000` |
| `--color-accent` | Sand/gold accent | `#000000` |
| `--color-ink` | Body text / dark surfaces | `#111111` |

Also update any `rgba(0, 0, 0, …)` values in custom CSS rules that were
previously `rgba(10, 30, 54, …)` (the old navy) — search for `rgba(0, 0, 0` in
`globals.css` to find them.

---

## Step 3 — Fonts `[FONT_SETUP]`

Open **`app/layout.tsx`**.

The `[FONT_SETUP]` comment block at the top documents which Google Font imports
to swap. Replace `Sora`, `Manrope`, and `JetBrains_Mono` with the client's
chosen typefaces. The CSS variable names (`--font-heading`, `--font-body`,
`--font-mono-code`) must stay the same — they map to Tailwind's
`--font-display`, `--font-sans`, `--font-mono` in `globals.css`.

---

## Step 4 — Images `[IMAGE_SLOT]`

| Slot | Component / file | Recommended size |
|---|---|---|
| `logo` | `data/agency.ts → logoSrc`, rendered in `Logo.tsx` | SVG or 2× PNG, max 140 px wide |
| `hero-bg` | `data/content.ts → hero.imageSrc` | 1920×1080 px, WebP, dark subject |
| `why-us-photo` | `data/content.ts → whyUs.imageSrc` | 900×700 px, WebP |
| `vehicle-photo` | Each `Vehicle.image` in `data/vehicles.ts` | 800×600 px, WebP, front-left 3/4 angle |

Place local images under `/public/images/` and update the `src` paths in the
data files. The `[IMAGE_SLOT: …]` JSDoc comments in components mark exactly
where the images are consumed.

---

## Step 5 — Fleet Data `[FLEET_DATA]`

Open **`data/vehicles.ts`** and add the client's vehicles.

Each `Vehicle` must match the `Vehicle` interface in `types/index.ts`:

```ts
{
  id: string;          // unique slug, e.g. "dacia-sandero-2024"
  name: string;        // display name
  category: "Citadine" | "Berline" | "SUV";
  image: string;       // path to vehicle photo (see Step 4)
  pricePerDay: number;
  seats: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel" | "Hybride" | "Électrique";
  year: number;
  available: boolean;
}
```

---

## Step 6 — Testimonials `[TESTIMONIALS_DATA]`

Open **`data/testimonials.ts`** and add verified client reviews.

Each `Testimonial` must match the `Testimonial` interface:

```ts
{
  id: string;
  name: string;
  role: string;       // e.g. "Client Google", "Professionnel"
  quote: string;
  rating: number;     // integer 1–5; confirm exact star count from source
}
```

> Star ratings are not always available in Google review exports — confirm
> exact counts before publishing. Do not assume 5/5.

---

## Step 7 — FAQ `[FAQ_DATA]`

Open **`data/faq.ts`** and replace the five `__FAQ_Q*__` / `__FAQ_A*__`
placeholders with the client's actual questions and answers.

---

## Step 8 — Section Copy `[COPY_DATA]`

Open **`data/content.ts`** and replace every remaining `__PLACEHOLDER__` string
with the client's real copy. Each section is clearly commented.

Key areas to fill:
- `hero.*` — headline, subheadline, trust line, location options
- `howItWorks.*` — 3-step labels and descriptions
- `serviceExpert.*` — satisfaction rate (real number 0–100), feature list
- `fleet.*` — section headings, CTA labels
- `testimonials.*` — section headings, labels
- `whyUs.*` — 3-reason titles and descriptions, image caption
- `faq.*` — section headings, contact sidebar labels
- `footer.*` — tagline, legal text, nav labels

---

## Step 9 — Metadata

Open **`app/layout.tsx`** and replace `"__META_DESCRIPTION__"` with a
50–160 character description for SEO.

---

## Step 10 — Prospection Modal `[DEVELOPER_CONTACT]`

Open **`components/ProspectionModal.tsx`** and replace:

| Constant | Replace with |
|---|---|
| `__DEVELOPER_WHATSAPP__` | Your WhatsApp display number |
| `__DEVELOPER_WHATSAPP_URL__` | Your `https://wa.me/…` URL |
| `__DEVELOPER_EMAIL__` | Your email address |

This modal intercepts all clicks on the demo and redirects visitors to the
developer's contact. Remove or disable it entirely before handing the live
site to the client.

---

## Validation Before Handoff

Run the following and confirm all three pass:

```bash
npm run lint
npm run build
git diff --check
```

Then open the site in a browser at both **desktop** and **375 px mobile** width
and verify:
- [ ] Logo appears correctly
- [ ] Hero background image loads and is readable
- [ ] Vehicle cards display with correct photos and prices
- [ ] Testimonials carousel runs (or section is hidden if empty)
- [ ] FAQ accordion opens and closes
- [ ] All CTAs (WhatsApp, phone, email) point to the client's real contacts
- [ ] Footer copyright year and agency name are correct
- [ ] No `__PLACEHOLDER__` text is visible on the page
- [ ] No console errors
