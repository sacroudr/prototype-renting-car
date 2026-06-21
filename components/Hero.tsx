import Image from "next/image";
import { CalendarDays, Search } from "lucide-react";

export function Hero() {
  return (
    <section data-hero className="relative isolate min-h-[780px] overflow-hidden bg-ink text-white md:min-h-[760px]">
      <div data-hero-media className="absolute -inset-y-[5%] inset-x-0 will-change-transform">
        <Image data-hero-image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=2000&q=88" alt="Voiture sur une route baignée de lumière près de Casablanca" fill priority sizes="100vw" className="object-cover object-center will-change-transform" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,39,.96)_0%,rgba(10,30,54,.80)_48%,rgba(10,30,54,.34)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/35 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/45 to-transparent" aria-hidden="true" />
      <div className="site-container relative flex min-h-[780px] items-center pb-20 pt-32 md:min-h-[760px] md:pt-36">
        <div className="w-full max-w-3xl">
          <p data-hero-item className="section-kicker mb-5 inline-flex rounded-pill border border-white/20 bg-white/10 px-4 py-2 text-bright-blue">Agence locale · Casablanca</p>
          <h1 data-hero-item className="max-w-3xl font-display text-[clamp(3.15rem,8vw,6rem)] font-semibold leading-[.96] tracking-[-.035em]">Votre route commence à Casablanca.</h1>
          <p data-hero-item className="mt-6 max-w-xl text-lg leading-8 text-[#E4ECF4]">Des voitures impeccables, des prix limpides et une équipe disponible quand vous en avez besoin.</p>
          <form id="reservation" data-hero-item className="mt-9 grid max-w-3xl gap-2 rounded-card border border-white/20 bg-white/95 p-2 text-ink shadow-[var(--shadow-float)] backdrop-blur-xl md:grid-cols-[1fr_1fr_auto]" action="#flotte">
            <label className="flex min-h-[76px] items-center gap-3 rounded-panel px-4 focus-within:bg-paper">
              <CalendarDays className="shrink-0 text-jidor" size={21} strokeWidth={1.6} />
              <span className="grid flex-1"><span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">DATE DE DÉPART</span><input required type="date" name="depart" aria-label="Date de départ" className="mt-1 min-w-0 bg-transparent font-semibold outline-none" /></span>
            </label>
            <label className="flex min-h-[76px] items-center gap-3 rounded-panel border-t border-line px-4 focus-within:bg-paper md:border-l md:border-t-0">
              <CalendarDays className="shrink-0 text-jidor" size={21} strokeWidth={1.6} />
              <span className="grid flex-1"><span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">DATE DE RETOUR</span><input required type="date" name="retour" aria-label="Date de retour" className="mt-1 min-w-0 bg-transparent font-semibold outline-none" /></span>
            </label>
            <button className="button-primary motion-hover min-h-[64px] md:min-h-0" type="submit"><Search size={18} strokeWidth={1.6} /> Rechercher</button>
          </form>
          <p data-hero-item className="mt-4 text-sm text-[#AFC0D2]">Assurance incluse · Confirmation rapide sur WhatsApp</p>
        </div>
      </div>
    </section>
  );
}
