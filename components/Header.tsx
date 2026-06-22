import { Menu, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const navigation = [
  { label: "La flotte", href: "#flotte" },
  { label: "Avis", href: "#avis" },
  { label: "À propos", href: "#pourquoi" },
  { label: "Contact", href: "#faq" },
];

export function Header() {
  return (
    <header data-site-header className="site-header fixed inset-x-0 top-0 z-50 text-white">
      <div className="site-container relative z-10 flex min-h-[84px] items-center justify-between gap-5 lg:min-h-[92px]">
        <a data-nav-item href="#" aria-label="Jidor Car — accueil" className="shrink-0 rounded-panel bg-white px-2.5 py-1 shadow-[0_8px_28px_rgba(0,0,0,.12)]"><Logo className="scale-[.88]" /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => <a data-nav-item key={item.href} href={item.href} className="header-nav-link text-sm font-semibold text-white/85">{item.label}</a>)}
        </nav>
        <div data-nav-item className="hidden items-center gap-2 sm:flex">
          <a className="header-whatsapp motion-hover" href="https://wa.me/212661787903" aria-label="Contacter Jidor Car sur WhatsApp"><MessageCircle size={17} strokeWidth={1.6} /> WhatsApp</a>
          <a className="header-cta motion-hover" href="#reservation">Réserver</a>
        </div>
        <details data-nav-item className="group relative sm:hidden">
          <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-button border border-white/25 bg-ink/20 text-white backdrop-blur-md" aria-label="Ouvrir le menu"><Menu size={22} strokeWidth={1.6} /></summary>
          <nav className="absolute right-0 top-14 grid w-64 gap-1 rounded-card border border-white/15 bg-ink/95 p-3 text-white shadow-[var(--shadow-float)] backdrop-blur-xl" aria-label="Navigation mobile">
            {navigation.map((item) => <a key={item.href} href={item.href} className="rounded-panel px-3 py-3 font-semibold text-white/85 hover:bg-white/10">{item.label}</a>)}
            <a className="button-whatsapp mt-2" href="https://wa.me/212661787903"><MessageCircle size={17} /> WhatsApp</a>
            <a className="button-primary" href="#reservation">Réserver</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
