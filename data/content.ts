import type { FAQItem, Testimonial, Vehicle } from "@/types";

// PLACEHOLDER CONTENT: models and pricing still require client confirmation. Photos depict the named models.
export const vehicles: Vehicle[] = [
  { id: "dacia-sandero", name: "Dacia Sandero", category: "Citadine", image: "/vehicles/dacia-sandero.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2023, pricePerDay: 280 },
  { id: "hyundai-accent", name: "Hyundai Accent", category: "Berline", image: "/vehicles/hyundai-accent.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2022, pricePerDay: 350 },
  { id: "kia-sportage", name: "Kia Sportage", category: "SUV", image: "/vehicles/kia-sportage.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2022, pricePerDay: 590 },
  { id: "peugeot-208", name: "Peugeot 208", category: "Citadine", image: "/vehicles/peugeot-208.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2022, pricePerDay: 320 },
  { id: "volkswagen-troc", name: "Volkswagen T-Roc", category: "SUV", image: "/vehicles/volkswagen-troc.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2023, pricePerDay: 650 },
  { id: "renault-clio", name: "Renault Clio", category: "Citadine", image: "/vehicles/renault-clio.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2023, pricePerDay: 300 },
];

export const popularVehicles: Vehicle[] = vehicles.slice(0, 3).map((vehicle, index) => ({
  ...vehicle,
  rank: index + 1,
}));

// PLACEHOLDER CONTENT: publish only after the client supplies verifiable customer reviews.
export const testimonials: Testimonial[] = [
  { id: "amina", name: "Amina B.", role: "Consultante à Casablanca", rating: 5, quote: "Réservation simple, voiture impeccable et livraison exactement à l’heure. Une équipe vraiment disponible." },
  { id: "youssef", name: "Youssef L.", role: "Entrepreneur", rating: 5, quote: "Le prix annoncé était le prix payé. Aucun frais caché, et une réponse rapide sur WhatsApp." },
  { id: "claire", name: "Claire M.", role: "Voyageuse française", rating: 5, quote: "Accueil chaleureux à l’aéroport et conseils très utiles pour notre trajet jusqu’à Essaouira." },
];

// PLACEHOLDER CONTENT: confirm rental conditions, documents and cancellation policy with the client.
export const faqItems: FAQItem[] = [
  { id: "reservation", question: "Comment réserver une voiture ?", answer: "Choisissez vos dates dans le formulaire, sélectionnez votre véhicule puis confirmez la disponibilité avec notre équipe. La réservation est finalisée après validation des informations demandées." },
  { id: "documents", question: "Quels documents dois-je fournir ?", answer: "Un permis de conduire valide, une pièce d’identité ou un passeport et, selon le véhicule, une carte bancaire au nom du conducteur principal peuvent être demandés." },
  { id: "assurance", question: "L’assurance est-elle incluse ?", answer: "Oui, une couverture de base est incluse dans le tarif affiché. Les garanties exactes et les éventuelles options complémentaires sont précisées avant confirmation." },
  { id: "prolongation", question: "Puis-je prolonger ma location ?", answer: "Oui, sous réserve de disponibilité. Contactez-nous dès que possible sur WhatsApp afin que nous puissions prolonger le contrat et confirmer le nouveau tarif." },
  { id: "annulation", question: "Quelle est votre politique d’annulation ?", answer: "Les conditions varient selon le délai avant la prise en charge. Elles vous sont communiquées clairement au moment de la réservation, avant tout engagement." },
];
