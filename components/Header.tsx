import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { content } from "@/data/content";

const navigation = content.footer.navLinks;

export function Header() {
  return (
    <header data-site-header className="site-header fixed inset-x-0 top-0 z-50 text-white">
      <div className="site-container relative z-10 flex min-h-[84px] items-center justify-between gap-5 lg:min-h-[92px]">
        <a data-nav-item href="#" aria-label="Accueil" className="motion-hover shrink-0 rounded-panel bg-white px-2.5 py-1 shadow-[0_8px_28px_rgba(0,0,0,.12)]"><Logo className="scale-[.88]" /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => <a data-nav-item key={item.label} href={item.href} className="header-nav-link text-sm font-semibold text-white/85">{item.label}</a>)}
        </nav>
        <div data-nav-item className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a className="header-cta motion-hover" href="#reservation">Réserver</a>
        </div>
        <details data-nav-item className="group relative lg:hidden">
          <summary className="header-menu-button flex size-12 cursor-pointer list-none items-center justify-center rounded-button border border-white/25 bg-ink/20 text-white backdrop-blur-md" aria-label="Ouvrir le menu">
            <Menu size={22} strokeWidth={1.6} className="icon-menu" />
            <X size={22} strokeWidth={1.6} className="icon-x" />
          </summary>
          <nav className="header-mobile-nav absolute right-0 top-14 grid w-72 gap-1 rounded-card border border-white/15 bg-ink/95 p-3 text-white shadow-[var(--shadow-float)] backdrop-blur-xl" aria-label="Navigation mobile">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="header-mobile-link group flex items-center justify-between rounded-panel px-4 py-3.5 font-semibold text-white/85 hover:bg-white/10">
                {item.label}
                <ArrowRight size={15} strokeWidth={2} className="header-mobile-link-arrow transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-2 border-t border-white/10 px-4 pt-4">
              <span className="header-mobile-lang-label text-xs font-semibold uppercase tracking-[.1em] text-white/55">Langue</span>
              <LanguageToggle />
            </div>
            <a className="button-primary mt-3" href="#flotte">Réserver</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
