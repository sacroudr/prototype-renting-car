import Image from "next/image";
import { ArrowRight, BadgeCheck, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const reasons = [
  { icon: MapPin, title: "Vraiment locale", text: "Une équipe basée à Casablanca, qui connaît vos trajets et vos contraintes." },
  { icon: BadgeCheck, title: "Claire du début à la fin", text: "Des conditions lisibles, des prix annoncés et aucune surprise au retour." },
  { icon: MessageCircle, title: "Toujours humaine", text: "Une réponse rapide sur WhatsApp, avant, pendant et après la location." },
];

export function WhyJidorCar() {
  return (
    <section id="pourquoi" data-reveal className="section-shell relative text-ink">
      <SectionBackdrop variant="center" />

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative order-2 min-h-[440px] overflow-hidden rounded-card lg:order-1"><Image src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=84" alt="Architecture marocaine à Casablanca" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" /><p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-medium text-white">Une agence internationale dans l’exigence. Casablancaine dans l’accueil.</p></div>
        <div className="order-1 lg:order-2">
          <SectionHeading kicker="Pourquoi Jidor Car" title="La sérénité d’un service local bien fait." description="Louer une voiture devrait être simple. Nous avons retiré le bruit pour garder l’essentiel : une bonne voiture, un prix clair et quelqu’un qui répond." />
          <div className="mt-9 grid gap-6">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-card bg-mist text-deep-blue"><Icon size={23} strokeWidth={1.6} /></span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate">{text}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#faq" className="button-primary motion-hover group">
              Contacter l’équipe
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/212661787903" className="button-secondary motion-hover">
              <MessageCircle size={17} strokeWidth={1.6} /> WhatsApp direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
