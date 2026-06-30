import Image from "next/image";
import { ArrowRight, BadgeCheck, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";
import { agency } from "@/data/agency";
import { content } from "@/data/content";

const reasonIcons = [MapPin, BadgeCheck, MessageCircle];

const { whyUs } = content;

export function WhyUs() {
  return (
    <section id="pourquoi" data-reveal className="section-shell relative text-ink">
      <SectionBackdrop variant="center" />

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative order-2 min-h-[440px] overflow-hidden rounded-card lg:order-1">
          {/* [IMAGE_SLOT: why-us-photo] — drop in /public/images/why-us.jpg and update src + alt */}
          <Image src={whyUs.imageSrc} alt={whyUs.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-medium text-white">{whyUs.imageCaption}</p>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading kicker={whyUs.kicker} title={whyUs.title} description={whyUs.description} />
          <div className="mt-9 grid gap-6">
            {whyUs.reasons.map(({ title, text }, i) => {
              const Icon = reasonIcons[i] ?? BadgeCheck;
              return (
                <div key={title} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-card bg-mist text-brand-deep"><Icon size={23} strokeWidth={1.6} /></span>
                  <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate">{text}</p></div>
                </div>
              );
            })}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#faq" className="button-primary motion-hover group">
              {whyUs.ctaContactLabel}
              <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href={agency.whatsapp} className="button-secondary motion-hover">
              <MessageCircle size={17} strokeWidth={1.6} /> {whyUs.ctaWhatsAppLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
