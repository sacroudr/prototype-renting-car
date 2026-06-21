import Image from "next/image";
import { Calendar, Fuel, Settings2, Users } from "lucide-react";
import type { Vehicle } from "@/types";

interface VehicleCardProps {
  vehicle: Vehicle;
  compact?: boolean;
}

export function VehicleCard({ vehicle, compact = false }: VehicleCardProps) {
  return (
    <article data-fleet-card className="motion-hover overflow-hidden rounded-card border border-line bg-white shadow-[var(--shadow-card)]">
      <div className={`relative overflow-hidden bg-paper ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image data-card-image src={vehicle.image} alt={`${vehicle.name}, véhicule de location`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover will-change-transform" />
        {vehicle.rank ? <span className={`absolute left-4 top-4 rounded-panel px-3 py-1.5 text-xs font-extrabold text-white ${vehicle.rank === 1 ? "bg-sand" : "bg-ink/80"}`}>Top #{vehicle.rank}</span> : <span className="absolute left-4 top-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-bold text-deep-blue">{vehicle.category}</span>}
      </div>
      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex items-start justify-between gap-3"><div><p className="section-kicker mb-1 text-slate">{vehicle.category}</p><h3 className="font-display text-2xl font-semibold leading-tight text-ink">{vehicle.name}</h3></div><p className="shrink-0 text-right text-sm text-slate"><strong className="block text-xl text-jidor">{vehicle.pricePerDay} DH</strong>/ jour</p></div>
        {!compact ? <div className="mt-5 grid grid-cols-2 gap-3 border-y border-line py-4 text-xs text-slate"><span className="flex items-center gap-2"><Users size={16} strokeWidth={1.6} /> {vehicle.seats} places</span><span className="flex items-center gap-2"><Settings2 size={16} strokeWidth={1.6} /> {vehicle.transmission}</span><span className="flex items-center gap-2"><Fuel size={16} strokeWidth={1.6} /> {vehicle.fuel}</span><span className="flex items-center gap-2"><Calendar size={16} strokeWidth={1.6} /> {vehicle.year}</span></div> : null}
        <a className="button-secondary mt-5 w-full motion-hover" href={`https://wa.me/212661787903?text=${encodeURIComponent(`Bonjour, je souhaite réserver la ${vehicle.name}.`)}`}>Vérifier la disponibilité</a>
      </div>
    </article>
  );
}
