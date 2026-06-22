interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export function SectionHeading({ kicker, title, description, align = "left", inverse = false }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className={`section-kicker mb-3 ${inverse ? "text-bright-blue" : "text-deep-blue"}`}>{kicker}</p>
      <h2 className={`section-title ${inverse ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-[1.02rem] leading-7 ${inverse ? "text-[#AFC0D2]" : "text-slate"}`}>{description}</p> : null}
      <span className={`speed-line mt-6 ${align === "center" ? "mx-auto" : ""}`} aria-hidden="true" />
    </div>
  );
}
