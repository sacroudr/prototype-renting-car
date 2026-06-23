import { MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { SectionBackdrop } from "./SectionBackdrop";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Véhicules", href: "#flotte" },
  { label: "À Propos", href: "#pourquoi" },
  { label: "Contact", href: "#faq" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/jidorcar/", icon: InstagramIcon },
  { label: "Facebook", href: "https://web.facebook.com/jidor.car?_rdc=1&_rdr#", icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jidor-car/posts/", icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-paper pb-8 pt-16 text-ink">
      <SectionBackdrop variant="right" />

      <div className="site-container relative z-10">
        <div data-stagger-group className="grid gap-10 border-b border-line pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div data-stagger-item>
            <span className="inline-block rounded-panel border border-white/80 bg-white/80 px-3 py-1 shadow-sm backdrop-blur-xl">
              <Logo />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate">Location de voitures à Casablanca. Premium et accessible, avec la chaleur d’une agence locale.</p>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-deep-blue">Navigation</h2>
            <div className="mt-4 grid gap-2 text-sm font-medium text-slate">
              {navLinks.map((link) => (
                <a key={link.label} className="transition-colors duration-200 hover:text-deep-blue" href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-deep-blue">Contact</h2>
            <div className="mt-4 grid gap-2 text-sm font-medium text-slate">
              <a className="transition-colors duration-200 hover:text-deep-blue" href="tel:+212661787903">+212 661-787903</a>
              <a className="transition-colors duration-200 hover:text-deep-blue" href="mailto:contact@jidorcar.ma">contact@jidorcar.ma</a>
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-jidor" /> Casablanca, Maroc
              </span>
            </div>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-deep-blue">Réseaux</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  className="motion-hover flex size-11 items-center justify-center rounded-card border border-line bg-white/65 text-ink shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-jidor/30 hover:text-deep-blue"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-slate sm:flex-row">
          <p>© 2026 Jidor Car. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
