import Image from "next/image";
import { agency } from "@/data/agency";

interface LogoProps {
  className?: string;
}

// [IMAGE_SLOT: logo]
// Drop client logo at /public/images/logo.svg (preferred) or logo.png.
// Update agency.logoSrc in data/agency.ts.
// Recommended: SVG with transparent background, at least 200px wide.
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`relative block h-[42px] w-[168px] overflow-hidden ${className}`} aria-label={agency.name}>
      <Image
        src={agency.logoSrc}
        alt={agency.name}
        width={1024}
        height={1024}
        priority
        className="absolute left-0 top-1/2 h-auto w-[168px] -translate-y-1/2"
      />
    </span>
  );
}
