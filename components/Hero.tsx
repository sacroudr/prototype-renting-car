import Image from "next/image";
import { ArrowRight, CarFront, ChevronDown, MapPinned, MessageCircle, Search } from "lucide-react";
import { DateField } from "./DateField";
import { vehicles } from "@/data/content";

const pickupLocations = ["Aéroport Mohammed V", "Centre-ville de Casablanca", "Adresse personnalisée"];

export function Hero() {
  return (
    <section data-hero className="relative isolate overflow-hidden bg-ink text-white">
      <div data-hero-media className="absolute -inset-y-[5%] inset-x-0 will-change-transform">
        <Image data-hero-image src="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Route bordée de palmiers au coucher du soleil" fill priority sizes="100vw" className="object-cover object-center will-change-transform" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,30,54,.96)_0%,rgba(10,30,54,.86)_42%,rgba(10,30,54,.5)_72%,rgba(10,30,54,.34)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/35 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/45 to-transparent" aria-hidden="true" />

      <div className="site-container relative flex flex-col gap-12 pb-20 pt-32 lg:flex-row lg:items-center lg:gap-10 lg:pb-24 lg:pt-40">
        <div className="w-full max-w-xl lg:max-w-none lg:flex-1">
          <p data-hero-item className="section-kicker mb-5 inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-4 py-2 text-bright-blue">
            <span className="size-1.5 rounded-full bg-bright-blue" aria-hidden="true" />
            Agence locale · Casablanca
          </p>
          <h1 data-hero-item className="max-w-xl font-display text-[clamp(2.6rem,5.4vw,4.4rem)] font-semibold leading-[.98] tracking-[-.03em]">Votre route commence à Casablanca.</h1>
          <p data-hero-item className="mt-6 max-w-md text-lg leading-8 text-[#E4ECF4]">Des voitures impeccables, des prix limpides et une équipe disponible quand vous en avez besoin.</p>

          <div data-hero-item className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <strong className="font-display text-3xl font-semibold">4,9<span className="text-base font-medium text-bright-blue">/5</span></strong>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[.14em] text-[#9DB2C8]">Note moyenne</span>
            </div>
            <span className="h-9 w-px bg-white/15" aria-hidden="true" />
            <div>
              <strong className="font-display text-3xl font-semibold">24/7</strong>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[.14em] text-[#9DB2C8]">Assistance</span>
            </div>
            <span className="h-9 w-px bg-white/15" aria-hidden="true" />
            <div>
              <strong className="font-display text-3xl font-semibold">0 DH</strong>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[.14em] text-[#9DB2C8]">Frais cachés</span>
            </div>
          </div>

          <div data-hero-item className="mt-9 flex flex-wrap gap-3">
            <a href="#flotte" className="button-primary motion-hover group">
              Voir la flotte
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/212661787903" className="button-whatsapp motion-hover">
              <MessageCircle size={17} strokeWidth={1.6} /> Discuter sur WhatsApp
            </a>
          </div>

          <p data-hero-item className="mt-6 text-sm text-[#AFC0D2]">Assurance incluse · Livraison aéroport · Confirmation rapide sur WhatsApp</p>
        </div>

        <form id="reservation" data-hero-item action="#flotte" className="relative hidden w-full max-w-md overflow-hidden rounded-card border border-white/15 bg-white/95 text-ink shadow-[var(--shadow-float)] backdrop-blur-xl lg:block lg:w-[520px] lg:shrink-0">
          <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-jidor via-bright-blue to-jidor" aria-hidden="true" />
          <div className="p-6 lg:p-8">
            <p className="section-kicker text-deep-blue">Réservation rapide</p>
            <h2 className="mt-1.5 font-display text-xl font-semibold text-ink">Vérifiez la disponibilité</h2>
            <p className="mt-1.5 text-sm leading-6 text-slate">Réponse en moins d&apos;une heure, confirmée sur WhatsApp.</p>

            <div className="mt-6 flex flex-col gap-3.5">
              <label className="flex min-h-[68px] items-center gap-3 rounded-panel border border-line px-4 transition-colors focus-within:border-jidor">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep-blue">
                  <MapPinned size={17} strokeWidth={1.7} />
                </span>
                <span className="grid min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">LIEU DE PRISE EN CHARGE</span>
                  <select name="lieu" aria-label="Lieu de prise en charge" defaultValue={pickupLocations[0]} className="-ml-px mt-0.5 min-w-0 truncate appearance-none bg-transparent text-sm font-semibold outline-none">
                    {pickupLocations.map((location) => <option key={location} value={location}>{location}</option>)}
                  </select>
                </span>
                <ChevronDown size={16} strokeWidth={1.8} className="shrink-0 text-slate" aria-hidden="true" />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <DateField label="DÉPART" name="depart" ariaLabel="Date de départ" />
                <DateField label="RETOUR" name="retour" ariaLabel="Date de retour" />
              </div>

              <label className="flex min-h-[68px] items-center gap-3 rounded-panel border border-line px-4 transition-colors focus-within:border-jidor">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep-blue">
                  <CarFront size={17} strokeWidth={1.7} />
                </span>
                <span className="grid min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">VÉHICULE SOUHAITÉ</span>
                  <select name="vehicule" aria-label="Véhicule souhaité" defaultValue="" className="-ml-px mt-0.5 min-w-0 truncate appearance-none bg-transparent text-sm font-semibold outline-none">
                    <option value="">Peu importe — on vous conseille</option>
                    {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.name} — {vehicle.category}</option>)}
                  </select>
                </span>
                <ChevronDown size={16} strokeWidth={1.8} className="shrink-0 text-slate" aria-hidden="true" />
              </label>
            </div>

            <button type="submit" className="button-primary motion-hover mt-5 min-h-[56px] w-full text-[0.95rem]">
              <Search size={18} strokeWidth={1.6} /> Rechercher la disponibilité
            </button>
            <p className="mt-3 text-center text-xs text-slate">Assurance incluse · Réponse rapide sur WhatsApp</p>
          </div>
        </form>
      </div>
    </section>
  );
}
