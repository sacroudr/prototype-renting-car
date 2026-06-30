interface SectionBackdropProps {
  variant?: "left" | "right" | "center";
}

const variantClasses = {
  left: {
    first: "-left-32 top-12",
    second: "-bottom-44 -right-24",
    center: "left-1/2 top-1/2",
  },
  right: {
    first: "-right-32 top-10",
    second: "-bottom-44 -left-24",
    center: "left-1/2 top-1/2",
  },
  center: {
    first: "left-8 top-8",
    second: "right-6 bottom-0",
    center: "left-1/2 top-1/2",
  },
};

export function SectionBackdrop({ variant = "left" }: SectionBackdropProps) {
  const classes = variantClasses[variant];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className={`absolute size-[460px] rounded-full bg-brand-light/14 blur-3xl ${classes.first}`} />
      <div className={`absolute size-[500px] rounded-full bg-brand/12 blur-3xl ${classes.second}`} />
      <div className={`absolute size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl ${classes.center}`} />
    </div>
  );
}
