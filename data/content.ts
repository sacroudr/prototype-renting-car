import type { FAQItem, Testimonial, Vehicle } from "@/types";

// PLACEHOLDER CONTENT: models and pricing still require client confirmation. Photos depict the named models.
export const vehicles: Vehicle[] = [
  { id: "dacia-sandero", name: "Dacia Sandero", category: "Citadine", image: "/vehicles/dacia-sandero-studio.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2023, pricePerDay: 280 },
  { id: "hyundai-accent", name: "Hyundai Accent", category: "Berline", image: "/vehicles/hyundai-accent-studio.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2022, pricePerDay: 350 },
  { id: "kia-sportage", name: "Kia Sportage", category: "SUV", image: "/vehicles/kia-sportage-studio.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2022, pricePerDay: 590 },
  { id: "peugeot-208", name: "Peugeot 208", category: "Citadine", image: "/vehicles/peugeot-208-studio.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2022, pricePerDay: 320 },
  { id: "volkswagen-troc", name: "Volkswagen T-Roc", category: "SUV", image: "/vehicles/volkswagen-troc-studio.jpg", seats: 5, transmission: "Automatique", fuel: "Diesel", year: 2023, pricePerDay: 650 },
  { id: "renault-clio", name: "Renault Clio", category: "Citadine", image: "/vehicles/renault-clio-studio.jpg", seats: 5, transmission: "Manuelle", fuel: "Essence", year: 2023, pricePerDay: 300 },
];

// Real customer reviews sourced from Google. Star ratings were not included in the
// source text and are assumed 5/5 from the overwhelmingly positive tone — confirm
// exact counts with the client before final publish.
export const testimonials: Testimonial[] = [
  { id: "tarik-adraoui", name: "Tarik Adraoui", role: "Avis Google · 3 avis", rating: 5, quote: "Excellente expérience avec Jidor Car ! Le service client est tout simplement exceptionnel : l'équipe est réactive, professionnelle et toujours prête à répondre à nos besoins. Les voitures proposées sont impeccables, bien entretenues et très confortables. La réservation est rapide et facile, avec des tarifs compétitifs qui offrent un très bon rapport qualité-prix. Je recommande vivement cette agence de location pour tous vos déplacements, que ce soit pour un voyage d'affaires ou une escapade personnelle." },
  { id: "mohamed-khali", name: "Mohamed khali", role: "Avis Google · 11 avis", rating: 5, quote: "M. Mohamed Rassify est très à l'écoute de ses clients et offre un service irréprochable. Il vous accueille toujours avec un sourire chaleureux, un cœur ouvert et une attitude aimable et polie." },
  { id: "youssef-youssef", name: "Youssef Youssef", role: "Avis Google · Local Guide, 77 avis", rating: 5, quote: "Le meilleur loueur du Maroc!\nService et prix impeccable!\nMerci à SI Mohamed pour son efficacité et son très grand professionnalisme!\nBravo et à très bientôt!" },
  { id: "otmane-azeroual", name: "Otmane Azeroual", role: "Avis Google · Local Guide, 14 avis", rating: 5, quote: "Je suis très satisfait de votre service, personnel très agréable et professionnel. J'ai encore bénéficié de ce meilleur service cette année 2023 comme les deux dernières années. Je recommanderai certainement cette société de location de voitures à tous ceux qui souhaitent louer une voiture au Maroc. Je vous remercie encore sincèrement et vous souhaite tout le meilleur!" },
  { id: "ham-gu", name: "Ham Gu", role: "Avis Google · Local Guide, 12 avis", rating: 5, quote: "EXCELLENT!!!\nLes voitures sont neuves et dans un état irréprochable. Les prix sont honnêtes et abordables pour la qualité de service.\nJ'ai eu l'occasion de louer la dernière C4, le nouveau Tiguan, le C5 aircross et aujourd'hui la 3008 et c'est à chaque fois un plaisir.\nLes voitures sont amenées au pied de la porte et l'équipe est top.\nUn énorme merci à Mohamed le gérant et Brahim le voiturier." },
  { id: "helene-gan", name: "Hélène Gan", role: "Avis Google · 5 avis", rating: 5, quote: "L'equipe de JIDOR CAR est tres compétente: disponible, s'adapte à mes besoins durant mes differents sejours. Je loue uniquement chez eux car ils ont su de part le professionalisme apporter une confiance mutuelle, un service de qualité en etant à l'ecoute. Il sont efficace et operationnelle. Je recommande car on sait a quoi s'attendre voir même mieux dans le service founis. Merci à tte l'équipe." },
];

// PLACEHOLDER CONTENT: confirm rental conditions, documents and cancellation policy with the client.
export const faqItems: FAQItem[] = [
  { id: "reservation", question: "Comment réserver une voiture ?", answer: "Choisissez vos dates dans le formulaire, sélectionnez votre véhicule puis confirmez la disponibilité avec notre équipe. La réservation est finalisée après validation des informations demandées." },
  { id: "documents", question: "Quels documents dois-je fournir ?", answer: "Un permis de conduire valide, une pièce d’identité ou un passeport et, selon le véhicule, une carte bancaire au nom du conducteur principal peuvent être demandés." },
  { id: "assurance", question: "L’assurance est-elle incluse ?", answer: "Oui, une couverture de base est incluse dans le tarif affiché. Les garanties exactes et les éventuelles options complémentaires sont précisées avant confirmation." },
  { id: "prolongation", question: "Puis-je prolonger ma location ?", answer: "Oui, sous réserve de disponibilité. Contactez-nous dès que possible sur WhatsApp afin que nous puissions prolonger le contrat et confirmer le nouveau tarif." },
  { id: "annulation", question: "Quelle est votre politique d’annulation ?", answer: "Les conditions varient selon le délai avant la prise en charge. Elles vous sont communiquées clairement au moment de la réservation, avant tout engagement." },
];
