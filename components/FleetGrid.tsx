"use client";

import { MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { Vehicle, VehicleCategory } from "@/types";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";
import { VehicleCard } from "./VehicleCard";
import { agency } from "@/data/agency";
import { content } from "@/data/content";

interface FleetGridProps {
  vehicles: Vehicle[];
}

type FleetFilter = "Tous" | VehicleCategory;

const filters: FleetFilter[] = ["Tous", "Citadine", "Berline", "SUV"];

const { fleet } = content;

export function FleetGrid({ vehicles }: FleetGridProps) {
  const [activeFilter, setActiveFilter] = useState<FleetFilter>("Tous");

  const filteredVehicles = useMemo(
    () => activeFilter === "Tous" ? vehicles : vehicles.filter((vehicle) => vehicle.category === activeFilter),
    [activeFilter, vehicles],
  );

  return (
    <section id="flotte" className="section-shell relative">
      <SectionBackdrop variant="center" />

      <div className="site-container relative z-10">
        <div data-reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            kicker={fleet.kicker}
            title={fleet.title}
            description={fleet.description}
          />
          <div className="hidden flex-wrap gap-2 md:flex" role="group" aria-label="Filtrer les véhicules par catégorie">
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
                      : "border-line bg-white text-ink hover:border-brand hover:text-brand-deep"
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
        <div
          data-fleet-card-group
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Véhicules disponibles, faites glisser pour voir plus"
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="w-[82%] shrink-0 snap-center sm:w-[60%]">
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
        <div data-fleet-card-group className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
        </div>

        {vehicles.length === 0 && (
          <p className="mt-12 text-center text-slate">
            [FLEET_DATA] — Ajoutez des véhicules dans <code>data/vehicles.ts</code> pour les afficher ici.
          </p>
        )}

        <div className="mx-auto mt-12 max-w-3xl rounded-card border border-white/80 bg-white/70 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl">
          <p className="font-display text-2xl font-semibold tracking-[-.02em] text-ink">{fleet.ctaSubtitle}</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate">{fleet.ctaDescription}</p>
          <div className="mt-5 flex justify-center">
            <a href={agency.whatsapp} className="button-primary motion-hover">
              <MessageCircle size={17} strokeWidth={1.6} /> {fleet.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
