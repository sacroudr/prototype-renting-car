"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div data-stagger-group className="mt-10 grid gap-3">
      {items.map((item) => {
        const isOpen = openItemId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <article
            data-stagger-item
            key={item.id}
            className={`faq-item rounded-card border bg-white shadow-sm transition-colors duration-200 ${
              isOpen ? "border-brand/30" : "border-line"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenItemId((current) => current === item.id ? null : item.id)}
              className={`flex min-h-20 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors duration-200 sm:px-6 ${
                isOpen ? "text-brand-deep" : "text-ink"
              }`}
            >
              <span>{item.question}</span>
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                isOpen ? "bg-brand/15" : "bg-mist"
              }`}>
                <Plus
                  className={`text-brand transition-transform duration-200 ease-out ${isOpen ? "rotate-45" : "rotate-0"}`}
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className={`px-5 pb-6 pr-14 text-sm leading-7 text-slate transition-transform duration-300 ease-out sm:px-6 sm:pr-16 ${
                  isOpen ? "translate-y-0" : "-translate-y-1"
                }`}>
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
