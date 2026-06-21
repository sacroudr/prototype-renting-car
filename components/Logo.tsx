import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`relative block h-[42px] w-[168px] overflow-hidden ${className}`} aria-label="Jidor Car">
      <Image
        src="/jidor-logo.png"
        alt="Jidor Car"
        width={1024}
        height={1024}
        priority
        className="absolute left-0 top-1/2 h-auto w-[168px] -translate-y-1/2"
      />
    </span>
  );
}
