import { MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-white">
      <div className="site-container"><div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><span className="inline-block rounded-panel bg-white px-3 py-1"><Logo /></span><p className="mt-5 max-w-sm text-sm leading-6 text-[#AFC0D2]">Location de voitures à Casablanca. Premium et accessible, avec la chaleur d’une agence locale.</p></div><div><h2 className="section-kicker text-bright-blue">Navigation</h2><div className="mt-4 grid gap-2 text-sm text-[#E4ECF4]"><a href="#flotte">Notre flotte</a><a href="#avis">Avis clients</a><a href="#pourquoi">Pourquoi Jidor Car</a></div></div><div><h2 className="section-kicker text-bright-blue">Contact</h2><div className="mt-4 grid gap-2 text-sm text-[#E4ECF4]"><a href="tel:+212661787903">+212 661-787903</a><a href="mailto:contact@jidorcar.ma">contact@jidorcar.ma</a><span className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> Casablanca, Maroc</span></div></div><div><h2 className="section-kicker text-bright-blue">Réseaux</h2><div className="mt-4 flex gap-3"><a className="motion-hover flex size-11 items-center justify-center rounded-card border border-white/20" href="#" aria-label="Instagram"><InstagramIcon size={19} /></a><a className="motion-hover flex size-11 items-center justify-center rounded-card border border-white/20" href="#" aria-label="Facebook"><FacebookIcon size={19} /></a></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs text-[#9DB2C8] sm:flex-row"><p>© 2026 Jidor Car. Tous droits réservés.</p><p>Mentions légales · Politique de confidentialité</p></div></div>
    </footer>
  );
}
