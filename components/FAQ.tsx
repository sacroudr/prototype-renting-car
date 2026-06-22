import { ChevronRight, Mail, MessageCircle, Phone, Plus } from "lucide-react";
import type { FAQItem } from "@/types";

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
    <section id="faq" data-reveal className="section-shell relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(61,165,234,.22)_1px,transparent_0)] [background-size:28px_28px]" aria-hidden="true" />
      <div className="site-container relative grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <p className="section-kicker text-bright-blue">FAQ</p>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-.04em]">Des questions&nbsp;?</h2>
          <p className="mt-4 text-lg text-[#AFC0D2]">On a les réponses.</p>

          <div data-stagger-group className="mt-10 grid gap-3">
            {items.map((item, index) => (
              <details data-stagger-item key={item.id} className="faq-item group rounded-card border border-white/12 bg-white/[.025] transition-colors duration-200 open:border-bright-blue/30 open:bg-white/[.05]" open={index === 0}>
                <summary className="flex min-h-20 cursor-pointer items-center justify-between gap-4 px-5 py-4 font-medium text-[#E4ECF4] sm:px-6 group-open:text-white">
                  <span>{item.question}</span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-white/15 group-open:bg-jidor/20">
                    <Plus className="text-bright-blue transition-transform duration-200 group-open:rotate-45" size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </summary>
                <p className="px-5 pb-6 pr-14 text-sm leading-7 text-[#9DB2C8] sm:px-6 sm:pr-16">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-card border border-white/12 bg-white/[.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,.22)] sm:p-9 lg:sticky lg:top-28">
          <p className="section-kicker text-bright-blue">Contactez-nous</p>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-[-.03em]">Besoin d’aide&nbsp;?</h3>
          <p className="mt-4 leading-7 text-[#9DB2C8]">Notre équipe vous accompagne pour vos questions sur les véhicules, les réservations et la livraison.</p>
          <div className="mt-8 grid gap-3">
            {helpOptions.map(({ label, detail, href, icon: Icon, primary }) => (
              <a key={label} href={href} className={`motion-hover flex min-h-[76px] items-center gap-4 rounded-card border px-4 ${primary ? "border-jidor/45 bg-jidor/10 text-bright-blue" : "border-white/12 bg-white/[.025] text-white"}`}>
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${primary ? "bg-jidor/20" : "bg-white/10"}`}><Icon size={20} strokeWidth={1.6} /></span>
                <span className="min-w-0 flex-1"><strong className="block text-sm">{label}</strong><span className="block truncate text-xs text-[#9DB2C8]">{detail}</span></span>
                <ChevronRight size={18} strokeWidth={1.6} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[#9DB2C8]">Disponible 7 jours sur 7</p>
        </aside>
      </div>
    </section>
  );
}
