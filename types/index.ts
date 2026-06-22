export type VehicleCategory = "Citadine" | "Berline" | "SUV";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  seats: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel" | "Hybride";
  year: number;
  pricePerDay: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
