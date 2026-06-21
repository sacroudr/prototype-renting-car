import type { Vehicle } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { VehicleCard } from "./VehicleCard";

interface PopularThisWeekProps { vehicles: Vehicle[] }

export function PopularThisWeek({ vehicles }: PopularThisWeekProps) {
  return (
    <section id="populaires" data-reveal className="section-shell border-y border-line bg-paper">
      <div className="site-container"><SectionHeading kicker="Les plus demandées" title="Les favorites de la semaine." description="Les trois modèles les plus réservés en ce moment, classés sans fausse urgence ni promesse exagérée." /><div data-stagger-group className="mt-12 grid gap-6 md:grid-cols-3">{vehicles.map((vehicle) => <div data-stagger-item key={vehicle.id}><VehicleCard vehicle={vehicle} compact /></div>)}</div></div>
    </section>
  );
}
