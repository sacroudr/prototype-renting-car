import { MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { SectionBackdrop } from "./SectionBackdrop";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";
import { agency } from "@/data/agency";
import { content } from "@/data/content";

const { footer } = content;

const socialLinks = [
  { label: "Instagram", href: agency.socialLinks.instagram, icon: InstagramIcon },
  { label: "Facebook", href: agency.socialLinks.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: agency.socialLinks.linkedin, icon: LinkedInIcon },
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
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate">{footer.tagline}</p>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-brand-deep">Navigation</h2>
            <div className="mt-4 grid gap-2 text-sm font-medium text-slate">
              {footer.navLinks.map((link) => (
                <a key={link.label} className="transition-colors duration-200 hover:text-brand-deep" href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-brand-deep">Contact</h2>
            <div className="mt-4 grid gap-2 text-sm font-medium text-slate">
              <a className="transition-colors duration-200 hover:text-brand-deep" href={agency.phoneHref}>{agency.phone}</a>
              <a className="transition-colors duration-200 hover:text-brand-deep" href={agency.emailHref}>{agency.email}</a>
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-brand" /> {agency.address}
              </span>
            </div>
          </div>

          <div data-stagger-item>
            <h2 className="section-kicker text-brand-deep">Réseaux</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  className="motion-hover flex size-11 items-center justify-center rounded-card border border-line bg-white/65 text-ink shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-brand/30 hover:text-brand-deep"
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
          <p>{footer.copyright}</p>
          <p>{footer.legalText}</p>
        </div>
      </div>
    </footer>
  );
}
