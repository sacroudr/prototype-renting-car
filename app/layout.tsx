/*
 * [FONT_SETUP]
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Open the brand book → find the "Typographie" section.
 * 2. Replace the three imports below with the client's actual Google Font names.
 * 3. Update the variable names passed to className (--font-heading, --font-body,
 *    --font-mono-code) if you change the variable= strings below.
 * 4. globals.css @theme reads these variables as --font-display, --font-sans,
 *    --font-mono — nothing else needs to change there.
 *
 * Current placeholder fonts (Sora / Manrope / JetBrains Mono) are a solid
 * premium default for automotive / mobility brands. Keep them if the brand
 * book does not specify custom fonts.
 *
 * [BRAND_TOKEN: font-heading] — Display / heading font.
 *   Replace: import { Sora } from 'next/font/google'
 *   Update:  const headingFont = Sora({ variable: '--font-heading', ... })
 *
 * [BRAND_TOKEN: font-body] — Body copy font.
 *   Replace: import { Manrope } from 'next/font/google'
 *   Update:  const bodyFont = Manrope({ variable: '--font-body', ... })
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { agency } from "@/data/agency";

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

// [METADATA]
// Update after filling agency.ts and once the client supplies brand visuals.
// og:image → add /public/og-image.jpg (1200×630px) after brand visuals are ready.
export const metadata: Metadata = {
  title: `${agency.name} | Location de voitures à ${agency.city}`,
  description: "__META_DESCRIPTION__", // [METADATA: 150 chars max, include city name]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
