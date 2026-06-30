/**
 * [COPY_DATA]
 * ─────────────────────────────────────────────────────────────────────────────
 * All visible section copy. Replace every __PLACEHOLDER__ with the client's
 * real text. Translate to the client's preferred language.
 *
 * Tone-of-voice guidance: refer to the brand book's "Ton de voix" section.
 * Keep copy concise, reassuring, and local rather than overly promotional.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { agency } from "./agency";

// Re-export split data files so page.tsx can import from a single barrel
export { faqItems } from "./faq";
export { testimonials } from "./testimonials";
export { vehicles } from "./vehicles";

export const content = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    kicker: `Agence locale · ${agency.city}`,
    headline: "__HERO_HEADLINE__",
    subheadline: "__HERO_SUBHEADLINE__",
    // [IMAGE_SLOT: hero-bg]
    // Full-width hero background. Recommended: 1920×1080px, WebP, dark subject
    // for text readability. Drop in /public/images/hero.jpg and update path.
    imageSrc: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=2000",
    imageAlt: "__HERO_IMAGE_ALT__",
    pickupLocations: [
      "__PICKUP_LOCATION_1__",
      "__PICKUP_LOCATION_2__",
      "__PICKUP_LOCATION_3__",
    ],
    reservationTitle: "__RESERVATION_CARD_TITLE__",
    reservationSubtitle: "__RESERVATION_CARD_SUBTITLE__",
    reservationNote: "__RESERVATION_CARD_NOTE__",
    trustLine: "__HERO_TRUST_LINE__",
    ctaFleetLabel: "__CTA_FLEET_LABEL__",
    ctaWhatsAppLabel: "__CTA_WHATSAPP_LABEL__",
  },

  // ── How It Works ────────────────────────────────────────────────────────────
  howItWorks: {
    kicker: "__HOW_KICKER__",
    title: "__HOW_TITLE__",
    subtitle: "__HOW_SUBTITLE__",
    ctaLabel: "__HOW_CTA_LABEL__",
    steps: [
      {
        number: "01",
        title: "__STEP_1_TITLE__",
        description: "__STEP_1_DESC__",
      },
      {
        number: "02",
        title: "__STEP_2_TITLE__",
        description: "__STEP_2_DESC__",
      },
      {
        number: "03",
        title: "__STEP_3_TITLE__",
        description: "__STEP_3_DESC__",
      },
    ],
  },

  // ── Service Expert ──────────────────────────────────────────────────────────
  serviceExpert: {
    kicker: "__SERVICE_KICKER__",
    title: "__SERVICE_TITLE__",
    description: "__SERVICE_DESC__",
    // [PLACEHOLDER: replace with real satisfaction percentage (0-100).
    //  Source from client's platform data or verified survey results.]
    satisfactionRate: 0,
    satisfactionLabel: "__SATISFACTION_LABEL__",
    features: [
      {
        title: "__SERVICE_FEATURE_1_TITLE__",
        text: "__SERVICE_FEATURE_1_DESC__",
      },
      {
        title: "__SERVICE_FEATURE_2_TITLE__",
        text: "__SERVICE_FEATURE_2_DESC__",
      },
    ],
    ctaFleetLabel: "__SERVICE_CTA_FLEET__",
    ctaContactLabel: "__SERVICE_CTA_CONTACT__",
  },

  // ── Fleet ────────────────────────────────────────────────────────────────────
  fleet: {
    kicker: "__FLEET_KICKER__",
    title: "__FLEET_TITLE__",
    description: "__FLEET_DESC__",
    ctaLabel: "__FLEET_CTA_LABEL__",
    ctaSubtitle: "__FLEET_CTA_SUBTITLE__",
    ctaDescription: "__FLEET_CTA_DESC__",
    vehicleCta: "__VEHICLE_CTA_LABEL__",
  },

  // ── Testimonials ─────────────────────────────────────────────────────────────
  testimonials: {
    kicker: "__TESTIMONIALS_KICKER__",
    headline: "__TESTIMONIALS_HEADLINE__",
    headlineHighlight: "__TESTIMONIALS_HIGHLIGHT__",
    description: "__TESTIMONIALS_DESC__",
    ctaLabel: "__TESTIMONIALS_CTA__",
    reviewsLabel: "__REVIEWS_LABEL__",
    ratingLabel: "__RATING_SUFFIX_LABEL__",
  },

  // ── Why Us ───────────────────────────────────────────────────────────────────
  whyUs: {
    kicker: "__WHY_KICKER__",
    title: "__WHY_TITLE__",
    description: "__WHY_DESC__",
    // [IMAGE_SLOT: why-us-photo]
    // Half-width section image. Recommended: 900×700px, WebP.
    // Drop in /public/images/why-us.jpg and update path + alt text.
    imageSrc: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=84",
    imageAlt: "__WHY_IMAGE_ALT__",
    imageCaption: "__WHY_IMAGE_CAPTION__",
    reasons: [
      {
        title: "__REASON_1_TITLE__",
        text: "__REASON_1_DESC__",
      },
      {
        title: "__REASON_2_TITLE__",
        text: "__REASON_2_DESC__",
      },
      {
        title: "__REASON_3_TITLE__",
        text: "__REASON_3_DESC__",
      },
    ],
    ctaContactLabel: "__WHY_CTA_CONTACT__",
    ctaWhatsAppLabel: "__WHY_CTA_WHATSAPP__",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    kicker: "FAQ",
    title: "__FAQ_TITLE__",
    subtitle: "__FAQ_SUBTITLE__",
    contactKicker: "__FAQ_CONTACT_KICKER__",
    contactTitle: "__FAQ_CONTACT_TITLE__",
    contactDescription: "__FAQ_CONTACT_DESC__",
    contactNote: "__FAQ_CONTACT_NOTE__",
    contactOptions: [
      {
        label: "__CONTACT_WHATSAPP_LABEL__",
        detail: agency.whatsappDisplay,
        href: agency.whatsapp,
        icon: "MessageCircle" as const,
        primary: true,
      },
      {
        label: "__CONTACT_PHONE_LABEL__",
        detail: agency.phone,
        href: agency.phoneHref,
        icon: "Phone" as const,
        primary: false,
      },
      {
        label: "__CONTACT_EMAIL_LABEL__",
        detail: agency.email,
        href: agency.emailHref,
        icon: "Mail" as const,
        primary: false,
      },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: "__FOOTER_TAGLINE__",
    copyright: `© ${new Date().getFullYear()} ${agency.name}. Tous droits réservés.`,
    legalText: "__LEGAL_TEXT__",
    navLinks: [
      { label: "__NAV_HOME__", href: "#" },
      { label: "__NAV_FLEET__", href: "#flotte" },
      { label: "__NAV_ABOUT__", href: "#pourquoi" },
      { label: "__NAV_CONTACT__", href: "#faq" },
    ],
  },
};
