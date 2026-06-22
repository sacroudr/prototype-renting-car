import Image from "next/image";
import { ArrowRight, Calendar, Fuel, Settings2, Users } from "lucide-react";
import type { Vehicle } from "@/types";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article data-fleet-card className="motion-hover overflow-hidden rounded-card border border-line bg-white shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
        <Image data-card-image src={vehicle.image} alt={`${vehicle.name}, véhicule de location`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover will-change-transform" />
        <span className="absolute left-4 top-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-bold text-deep-blue">{vehicle.category}</span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3"><div><p className="section-kicker mb-1 text-slate">{vehicle.category}</p><h3 className="font-display text-2xl font-semibold leading-tight text-ink">{vehicle.name}</h3></div><p className="shrink-0 text-right text-sm text-slate"><strong className="block text-xl text-jidor">{vehicle.pricePerDay} DH</strong>/ jour</p></div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <span className="flex items-center gap-2 rounded-panel bg-paper px-3 py-2.5 text-xs font-semibold text-ink"><Users size={16} strokeWidth={1.6} className="shrink-0 text-jidor" /> {vehicle.seats} places</span>
          <span className="flex items-center gap-2 rounded-panel bg-paper px-3 py-2.5 text-xs font-semibold text-ink"><Settings2 size={16} strokeWidth={1.6} className="shrink-0 text-jidor" /> {vehicle.transmission}</span>
          <span className="flex items-center gap-2 rounded-panel bg-paper px-3 py-2.5 text-xs font-semibold text-ink"><Fuel size={16} strokeWidth={1.6} className="shrink-0 text-jidor" /> {vehicle.fuel}</span>
          <span className="flex items-center gap-2 rounded-panel bg-paper px-3 py-2.5 text-xs font-semibold text-ink"><Calendar size={16} strokeWidth={1.6} className="shrink-0 text-jidor" /> {vehicle.year}</span>
        </div>
        <a className="button-primary group mt-5 w-full motion-hover" href={`https://wa.me/212661787903?text=${encodeURIComponent(`Bonjour, je souhaite réserver la ${vehicle.name}.`)}`}>
          Vérifier la disponibilité
          <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
