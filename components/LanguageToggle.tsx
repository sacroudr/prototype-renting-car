"use client";

import { useState } from "react";

const LANGUAGES = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["code"];

export function LanguageToggle() {
  const [active, setActive] = useState<LanguageCode>("fr");

  return (
    <div className="header-lang-toggle" role="group" aria-label="Choisir la langue">
      {LANGUAGES.map((language) => (
        <button
          key={language.code}
          type="button"
          aria-pressed={active === language.code}
          onClick={() => setActive(language.code)}
          className="header-lang-option"
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
