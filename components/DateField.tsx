"use client";

import { useRef } from "react";
import { CalendarDays } from "lucide-react";

interface DateFieldProps {
  label: string;
  name: string;
  ariaLabel: string;
}

export function DateField({ label, name, ariaLabel }: DateFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      onClick={() => inputRef.current?.showPicker?.()}
      className="flex min-h-[68px] flex-1 cursor-pointer items-center gap-3 rounded-panel border border-line px-4 transition-colors focus-within:border-jidor"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep-blue">
        <CalendarDays size={17} strokeWidth={1.7} />
      </span>
      <span className="grid min-w-0 flex-1">
        <span className="font-mono text-[10px] font-semibold tracking-[.1em] text-slate">{label}</span>
        <input ref={inputRef} required type="date" name={name} aria-label={ariaLabel} className="min-w-0 cursor-pointer bg-transparent text-sm font-semibold outline-none" />
      </span>
    </label>
  );
}
