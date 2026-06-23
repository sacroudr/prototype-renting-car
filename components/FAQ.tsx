import { ChevronRight, Mail, MessageCircle, Phone } from "lucide-react";
import type { FAQItem } from "@/types";
import { FAQAccordion } from "./FAQAccordion";
import { SectionBackdrop } from "./SectionBackdrop";

interface FAQProps {
  items: FAQItem[];
}

const helpOptions = [
  { label: "Discuter sur WhatsApp", detail: "+212 661-787903", href: "https://wa.me/212661787903", icon: MessageCircle, primary: true },
  { label: "Appelez-nous", detail: "+212 661-787903", href: "tel:+212661787903", icon: Phone },
  { label: "Envoyer un email", detail: "contact@jidorcar.ma", href: "mailto:contact@jidorcar.ma", icon: Mail },
];

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" data-reveal className="section-shell relative text-ink">
      <SectionBackdrop variant="right" />

      <div className="site-container relative z-10 grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="section-kicker text-deep-blue">FAQ</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-.04em] text-ink">Des questions&nbsp;?</h2>
          <p className="mt-4 text-lg text-slate">On a les réponses.</p>

          <FAQAccordion items={items} />
        </div>

        <aside className="rounded-card border border-white/80 bg-white/70 p-6 text-ink shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-9 lg:sticky lg:top-28 lg:mt-[12.25rem]">
          <p className="section-kicker text-deep-blue">Contactez-nous</p>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-[-.03em] text-ink">Besoin d’aide&nbsp;?</h3>
          <p className="mt-4 leading-7 text-slate">Notre équipe vous accompagne pour vos questions sur les véhicules, les réservations et la livraison.</p>
          <div className="mt-8 grid gap-3">
            {helpOptions.map(({ label, detail, href, icon: Icon, primary }) => (
              <a key={label} href={href} className={`motion-hover flex min-h-[76px] items-center gap-4 rounded-card border px-4 ${primary ? "border-jidor/35 bg-jidor/5 text-deep-blue hover:bg-jidor/10" : "border-line bg-white/50 text-ink hover:bg-mist/30 hover:border-jidor/30"}`}>
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${primary ? "bg-jidor/15" : "bg-mist"}`}><Icon size={20} strokeWidth={1.6} /></span>
                <span className="min-w-0 flex-1"><strong className="block text-sm">{label}</strong><span className="block truncate text-xs text-slate">{detail}</span></span>
                <ChevronRight size={18} strokeWidth={1.6} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate">Disponible 7 jours sur 7</p>
        </aside>
      </div>
    </section>
  );
}
