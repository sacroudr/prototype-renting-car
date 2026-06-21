import { Headphones, Plane, ReceiptText, ShieldCheck } from "lucide-react";
import type { TrustBadge } from "@/types";

const badges: TrustBadge[] = [
  { label: "Assurance incluse", detail: "Roulez l’esprit tranquille", icon: "shield" },
  { label: "Assistance 24/7", detail: "Une équipe toujours joignable", icon: "headphones" },
  { label: "Livraison aéroport", detail: "À votre arrivée à Casablanca", icon: "plane" },
  { label: "Sans frais cachés", detail: "Le prix annoncé, tout compris", icon: "receipt" },
];

const icons = { shield: ShieldCheck, headphones: Headphones, plane: Plane, receipt: ReceiptText };

export function TrustBadges() {
  return (
    <section data-reveal aria-label="Nos garanties" className="border-b border-line bg-paper py-8">
      <div data-stagger-group className="site-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge) => { const Icon = icons[badge.icon]; return <div data-stagger-item key={badge.label} className="flex items-center gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist text-deep-blue"><Icon size={23} strokeWidth={1.6} /></span><span><strong className="block text-sm text-ink">{badge.label}</strong><span className="text-xs text-slate">{badge.detail}</span></span></div>; })}
      </div>
    </section>
  );
}
