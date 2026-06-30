/**
 * [FLEET_DATA]
 * ─────────────────────────────────────────────────────────────────────────────
 * Add one object per vehicle in the client's real fleet.
 * Keep the Vehicle interface — only fill in the data below.
 *
 * Vehicle images go in /public/images/vehicles/
 * Recommended: studio shot (front-left ¾ angle), WebP, 800×600px.
 *
 * Example entry (uncomment and duplicate):
 * {
 *   id: "make-model",
 *   name: "Make Model",
 *   category: "Citadine",          // "Citadine" | "Berline" | "SUV"
 *   image: "/images/vehicles/make-model.webp",
 *   seats: 5,
 *   transmission: "Manuelle",      // "Manuelle" | "Automatique"
 *   fuel: "Essence",               // "Essence" | "Diesel" | "Hybride"
 *   year: 2024,
 *   pricePerDay: 0,                // price in client's currency (agency.currency)
 * },
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { Vehicle } from "@/types";

export const vehicles: Vehicle[] = [
  // Add vehicles here
];
