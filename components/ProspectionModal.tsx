"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "+33780713808";
const WHATSAPP_URL = "https://wa.me/33780713808";
const EMAIL = "sacroudr@gmail.com";
const MODAL_TRANSITION_MS = 300;

const interactiveSelector = [
  ".header-nav-link",
  ".header-cta",
  ".header-mobile-link",
  ".button-primary",
  ".button-secondary",
  ".button-whatsapp",
  "a[href^='#']",
  "a[href^='tel:+212']",
  "a[href^='mailto:contact@jidorcar.ma']",
  "a[href*='wa.me/212']",
].join(", ");

export function ProspectionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const showModal = useCallback(() => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    setIsMounted(true);
    window.requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const hideModal = useCallback(() => {
    setIsOpen(false);

    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimerRef.current = window.setTimeout(
      () => {
        setIsMounted(false);
        closeTimerRef.current = null;
      },
      prefersReducedMotion ? 0 : MODAL_TRANSITION_MS,
    );
  }, []);

  useEffect(() => {
    const openModal = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-prospection-allow]")) return;
      if (target.closest(".skip-link")) return;

      if (event.type === "submit" && target instanceof HTMLFormElement && target.id === "reservation") {
        event.preventDefault();
        showModal();
        return;
      }

      const trigger = target.closest(interactiveSelector);
      if (!trigger) return;

      event.preventDefault();
      showModal();
    };

    document.addEventListener("click", openModal, true);
    document.addEventListener("submit", openModal, true);

    return () => {
      document.removeEventListener("click", openModal, true);
      document.removeEventListener("submit", openModal, true);
    };
  }, [showModal]);

  useEffect(() => {
    if (!isMounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") hideModal();
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [hideModal, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      data-prospection-modal
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/70 px-4 py-6 backdrop-blur-lg transition-opacity duration-200 ease-out motion-reduce:duration-0 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prospection-modal-title"
      aria-describedby="prospection-modal-description"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) hideModal();
      }}
    >
      <div
        className={`relative w-full max-w-2xl overflow-hidden rounded-card border border-white/85 bg-white/88 text-ink shadow-[0_34px_110px_rgba(10,30,54,.34)] ring-1 ring-jidor/10 backdrop-blur-2xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:duration-0 ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bright-blue/70 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-28 -top-28 size-72 rounded-full bg-jidor/18 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-36 -left-28 size-80 rounded-full bg-bright-blue/16 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.72),rgba(234,243,251,.42)_48%,rgba(255,255,255,.68))]" aria-hidden="true" />

        <div className="relative p-6 sm:p-8">
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-5 top-5 flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white/70 text-ink shadow-sm backdrop-blur-xl transition-colors duration-200 hover:border-jidor/30 hover:bg-white hover:text-deep-blue"
            aria-label="Fermer la fenêtre"
            onClick={hideModal}
          >
            <X size={18} strokeWidth={1.8} />
          </button>

          <div className="flex items-start gap-4 pr-12">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-card border border-jidor/15 bg-jidor/10 text-deep-blue shadow-sm">
              <MessageCircle size={24} strokeWidth={1.6} />
            </span>
            <div>
              <p className="section-kicker text-deep-blue">Démo commerciale</p>
              <p className="mt-1 text-sm font-semibold text-slate">Information avant navigation</p>
            </div>
          </div>

          <h2 id="prospection-modal-title" className="mt-7 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-.035em] text-ink sm:text-5xl">
            Ce site est une démonstration de prospection.
          </h2>
          <p id="prospection-modal-description" className="mt-5 max-w-xl text-sm leading-7 text-slate sm:text-base">
            Le projet présente une proposition de site web pour Jidor Car. Pour plus d’information ou pour échanger sur la création d’un site similaire, contactez-moi directement via WhatsApp ou par email.
          </p>

          <div className="mt-6 rounded-panel border border-line/80 bg-white/55 p-4 shadow-sm backdrop-blur-xl">
            <div className="speed-line mb-4" aria-hidden="true" />
            <p className="text-sm font-semibold text-ink">Contact rapide</p>
            <p className="mt-1 text-sm leading-6 text-slate">
              Je vous réponds avec les détails du projet, la démarche et les prochaines étapes possibles.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              data-prospection-allow
              href={WHATSAPP_URL}
              className="button-primary motion-hover shadow-[0_14px_30px_rgba(22,131,214,.22)]"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} strokeWidth={1.6} /> {WHATSAPP_NUMBER}
            </a>
            <a data-prospection-allow href={`mailto:${EMAIL}`} className="button-secondary motion-hover">
              <Mail size={17} strokeWidth={1.6} /> {EMAIL}
            </a>
          </div>

          <button
            type="button"
            className="mt-5 min-h-11 cursor-pointer rounded-pill px-4 text-sm font-semibold text-slate transition-colors duration-200 hover:text-deep-blue"
            onClick={hideModal}
          >
            Continuer à consulter la démonstration
          </button>
        </div>
      </div>
    </div>
  );
}
