/**
 * [AGENCY_CONFIG]
 * ─────────────────────────────────────────────────────────────────────────────
 * Fill every __PLACEHOLDER__ field from the client's brand book and real
 * contact information before deploying. Keep this file as the single source
 * of truth for anything agency-specific.
 *
 * Fields consumed by:
 *   • Header (name, logo)
 *   • Hero (city, whatsapp)
 *   • Footer (name, phone, email, address, social links)
 *   • FAQ (phone, whatsapp, email)
 *   • ServiceExpert (whatsapp)
 *   • WhyUs (whatsapp)
 *   • VehicleCard (whatsapp)
 *   • ProspectionModal (developer contact — not the agency's)
 *   • Metadata in layout.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const agency = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: "__AGENCY_NAME__",          // e.g. "Jidor Car"
  tagline: "__AGENCY_TAGLINE__",    // e.g. "La route, en toute confiance"
  city: "__CITY__",                 // e.g. "Casablanca"
  country: "__COUNTRY__",           // e.g. "Maroc"
  currency: "__CURRENCY__",         // e.g. "DH" | "MAD" | "€"

  // ── Logo ────────────────────────────────────────────────────────────────────
  // [IMAGE_SLOT: logo]
  // Drop client logo at /public/images/logo.svg (preferred) or logo.png.
  // Recommended: SVG with transparent background, at least 200px wide.
  logoSrc: "/images/logo.png",

  // ── Contact ─────────────────────────────────────────────────────────────────
  phone: "__PHONE__",                    // e.g. "+212 661-787903"
  phoneHref: "__PHONE_HREF__",           // e.g. "tel:+212661787903"
  whatsapp: "__WHATSAPP_URL__",          // e.g. "https://wa.me/212661787903"
  whatsappDisplay: "__WHATSAPP_DISPLAY__", // e.g. "+212 661-787903"
  email: "__EMAIL__",                    // e.g. "contact@agency.ma"
  emailHref: "__EMAIL_HREF__",           // e.g. "mailto:contact@agency.ma"
  address: "__ADDRESS__",                // e.g. "Casablanca, Maroc"

  // ── Social ──────────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: "__INSTAGRAM_URL__",
    facebook: "__FACEBOOK_URL__",
    linkedin: "__LINKEDIN_URL__",
  },

  // ── Stats shown in the Hero ─────────────────────────────────────────────────
  // Update with real numbers from Google Maps, platform data, etc.
  stats: {
    rating: "__RATING__",           // e.g. "4,9/5"
    ratingLabel: "__RATING_LABEL__", // e.g. "Note moyenne"
    availability: "24/7",
    availabilityLabel: "__AVAIL_LABEL__", // e.g. "Assistance"
    hiddenFees: "0",
    hiddenFeesLabel: "__FEES_LABEL__",   // e.g. "Frais cachés"
  },
};
