/**
 * [FAQ_DATA]
 * ─────────────────────────────────────────────────────────────────────────────
 * Confirm ALL answers with the client before publishing — rental conditions,
 * insurance details, cancellation policy, and required documents vary by
 * agency and may change over time.
 *
 * Example entry (uncomment and duplicate):
 * {
 *   id: "topic-keyword",
 *   question: "__QUESTION__",
 *   answer: "__ANSWER__",
 * },
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "reservation",
    question: "__FAQ_Q1__",
    answer: "__FAQ_A1__",
  },
  {
    id: "documents",
    question: "__FAQ_Q2__",
    answer: "__FAQ_A2__",
  },
  {
    id: "assurance",
    question: "__FAQ_Q3__",
    answer: "__FAQ_A3__",
  },
  {
    id: "prolongation",
    question: "__FAQ_Q4__",
    answer: "__FAQ_A4__",
  },
  {
    id: "annulation",
    question: "__FAQ_Q5__",
    answer: "__FAQ_A5__",
  },
];
