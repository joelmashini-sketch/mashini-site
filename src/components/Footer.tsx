"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "./Container";
import { Link } from "@/i18n/navigation";

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
      <path d="M18.24 3h3.1l-6.77 7.74L22.5 21h-6.23l-4.88-6.39L5.79 21H2.68l7.24-8.28L1.5 3h6.39l4.41 5.84L18.24 3zm-1.09 16.17h1.72L7.93 4.74H6.08l11.07 14.43z" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-brand-ink text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Mashini & Associés"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0"
            />
            <span className="leading-tight">
              <span className="block font-serif-display text-base font-semibold tracking-wide">
                MASHINI
              </span>
              <span className="block text-[11px] font-medium tracking-[0.2em] text-white/60">
                &amp; ASSOCIÉS
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {t("description")}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <XIcon />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/90">
            {t("navTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li><Link href="/" className="hover:text-brand-orange">{t("home")}</Link></li>
            <li><Link href="/cabinet" className="hover:text-brand-orange">{t("cabinet")}</Link></li>
            <li><Link href="/secteurs" className="hover:text-brand-orange">{t("sectors")}</Link></li>
            <li><Link href="/services" className="hover:text-brand-orange">{t("services")}</Link></li>
            <li><Link href="/growth-desk" className="hover:text-brand-orange">{t("growthDesk")}</Link></li>
            <li><Link href="/contact" className="hover:text-brand-orange">{t("contactLink")}</Link></li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/90">
            {t("expertiseTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li><Link href="/services/audit-assurance" className="hover:text-brand-orange">{t("audit")}</Link></li>
            <li><Link href="/services/comptabilite-reporting" className="hover:text-brand-orange">{t("accounting")}</Link></li>
            <li><Link href="/services/fiscalite-douanes" className="hover:text-brand-orange">{t("tax")}</Link></li>
            <li><Link href="/services/advisory" className="hover:text-brand-orange">{t("advisory")}</Link></li>
            <li><Link href="/services/due-diligence" className="hover:text-brand-orange">{t("dueDiligence")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/90">
            {t("contactTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>
                {t("addressLine1")}
                <br />
                {t("addressLine2")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-brand-orange" />
              <span>+243 85 066 57 08</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-brand-orange" />
              <span>contact@mashiniassocies.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="shrink-0 text-brand-orange" />
              <span>{t("hours")}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mashini &amp; Associés. {t("allRights")}</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white/80">{t("legal")}</Link>
            <Link href="/confidentialite" className="hover:text-white/80">{t("privacy")}</Link>
            <Link href="/politique-cookies" className="hover:text-white/80">{t("cookiesLink")}</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
