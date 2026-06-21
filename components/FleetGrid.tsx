"use client";

import { useMemo, useState } from "react";
import type { Vehicle, VehicleCategory } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { VehicleCard } from "./VehicleCard";

interface FleetGridProps {
  vehicles: Vehicle[];
}

type FleetFilter = "Tous" | VehicleCategory;

const filters: FleetFilter[] = ["Tous", "Citadine", "Berline", "SUV"];

export function FleetGrid({ vehicles }: FleetGridProps) {
  const [activeFilter, setActiveFilter] = useState<FleetFilter>("Tous");

  const filteredVehicles = useMemo(
    () => activeFilter === "Tous" ? vehicles : vehicles.filter((vehicle) => vehicle.category === activeFilter),
    [activeFilter, vehicles],
  );

  return (
    <section id="flotte" className="section-shell bg-white">
      <div className="site-container">
        <div data-reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            kicker="Notre flotte"
            title="Choisissez votre prochaine route."
            description="Citadine agile, berline confortable ou SUV spacieux : trouvez le véhicule adapté à votre séjour."
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les véhicules par catégorie">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-11 cursor-pointer rounded-pill border px-4 py-2 text-xs font-bold transition-colors duration-200 ${
                    isActive
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-ink hover:border-jidor hover:text-deep-blue"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? "s" : ""} affiché{filteredVehicles.length > 1 ? "s" : ""}.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
        </div>
      </div>
    </section>
  );
}
