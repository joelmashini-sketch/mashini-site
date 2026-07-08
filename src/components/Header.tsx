"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Container from "./Container";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { services, sectors } from "@/lib/data";

const corporateServices = services.filter((s) => s.category === "corporate");

const industrieSectors = sectors.filter((s) =>
  ["secteur-minier", "sous-traitants-miniers", "hydrocarbures", "industrie-manufacturiere", "transport-logistique"].includes(s.slug)
);
const commerceSectors = sectors.filter((s) =>
  ["grande-distribution-fmcg", "organisations-internationales"].includes(s.slug)
);

const localeLabels: Record<string, string> = { fr: "FR", en: "EN", zh: "中" };

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectorCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 100);
  };

  const openSectors = () => {
    if (sectorCloseTimer.current) clearTimeout(sectorCloseTimer.current);
    setSectorsOpen(true);
  };
  const closeSectors = () => {
    sectorCloseTimer.current = setTimeout(() => setSectorsOpen(false), 100);
  };

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 relative border-b border-black/[0.07] bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo-icon.png"
            alt="Mashini & Associés"
            width={40}
            height={40}
            priority
            className="h-9 w-9 shrink-0"
          />
          <span className="leading-tight">
            <span className="block font-serif-display text-[15px] font-semibold tracking-wide text-brand-ink">
              MASHINI
            </span>
            <span className="block text-[10px] font-medium tracking-[0.22em] text-brand-ink-light">
              &amp; ASSOCIÉS
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center xl:flex">
          {/* Secteurs */}
          <div
            className="relative"
            onMouseEnter={openSectors}
            onMouseLeave={closeSectors}
          >
            <button
              type="button"
              aria-expanded={sectorsOpen}
              aria-haspopup="true"
              className={`relative flex items-center gap-1.5 px-4 py-5 text-[13px] font-medium transition-colors ${
                isActive("/secteurs")
                  ? "text-brand-ink"
                  : "text-brand-ink-light hover:text-brand-ink"
              }`}
            >
              {t("sectors")}
              <ChevronDown
                size={12}
                className={`mt-px transition-transform duration-200 ${
                  sectorsOpen ? "-rotate-180" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                  isActive("/secteurs") ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          </div>

          {/* Nos expertises */}
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`relative flex items-center gap-1.5 px-4 py-5 text-[13px] font-medium transition-colors ${
                isActive("/services")
                  ? "text-brand-ink"
                  : "text-brand-ink-light hover:text-brand-ink"
              }`}
            >
              {t("services")}
              <ChevronDown
                size={12}
                className={`mt-px transition-transform duration-200 ${
                  servicesOpen ? "-rotate-180" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                  isActive("/services") ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          </div>

          {/* Growth Desk */}
          <Link
            href="/growth-desk"
            className={`group relative flex items-center px-4 py-5 text-[13px] font-medium transition-colors ${
              isActive("/growth-desk")
                ? "text-brand-ink"
                : "text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {t("growthDesk")}
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                isActive("/growth-desk") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>

          {/* Cabinet */}
          <Link
            href="/cabinet"
            className={`group relative flex items-center px-4 py-5 text-[13px] font-medium transition-colors ${
              isActive("/cabinet")
                ? "text-brand-ink"
                : "text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {t("cabinet")}
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                isActive("/cabinet") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>

          {/* Insights */}
          <Link
            href="/blog"
            className={`group relative flex items-center px-4 py-5 text-[13px] font-medium transition-colors ${
              isActive("/blog")
                ? "text-brand-ink"
                : "text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {t("insights")}
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                isActive("/blog") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>

          {/* Talents */}
          <Link
            href="/talents"
            className={`group relative flex items-center px-4 py-5 text-[13px] font-medium transition-colors ${
              isActive("/talents")
                ? "text-brand-ink"
                : "text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {t("talents")}
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-brand-orange transition-transform duration-200 ${
                isActive("/talents") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        </nav>

        {/* Right actions */}
        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-[12px] font-medium text-brand-ink-light hover:text-brand-ink"
              aria-label={t("language")}
            >
              <span className="font-semibold text-brand-ink">{localeLabels[locale]}</span>
              <ChevronDown size={10} className={`mt-px transition-transform ${langOpen ? "-rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-20 rounded-sm border border-black/10 bg-white py-1 shadow-lg">
                {["fr", "en", "zh"].map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => switchLocale(l)}
                    className={`w-full px-4 py-2 text-left text-[12px] font-medium transition-colors hover:bg-black/[0.03] hover:text-brand-orange ${
                      l === locale ? "text-brand-orange" : "text-brand-ink-light"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="rounded-sm bg-brand-orange px-5 py-2 text-[12px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="p-1.5 text-brand-ink xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* ── MEGA MENU — SECTEURS ── */}
      <div
        className={`absolute left-0 top-full w-full border-t border-black/[0.06] bg-white shadow-xl transition-all duration-200 ${
          sectorsOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-1 opacity-0"
        }`}
        onMouseEnter={openSectors}
        onMouseLeave={closeSectors}
        role="region"
        aria-label={t("sectors")}
      >
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("industryResources")}
              </p>
              <ul className="space-y-0.5">
                {industrieSectors.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/secteurs/${s.slug}`}
                      onClick={() => setSectorsOpen(false)}
                      className="group flex items-center gap-2.5 rounded-sm px-3 py-2 text-[13px] text-brand-ink-light transition-colors hover:bg-black/[0.03] hover:text-brand-ink"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-ink/20 transition-colors group-hover:bg-brand-orange" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("commerceServices")}
              </p>
              <ul className="space-y-0.5">
                {commerceSectors.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/secteurs/${s.slug}`}
                      onClick={() => setSectorsOpen(false)}
                      className="group flex items-center gap-2.5 rounded-sm px-3 py-2 text-[13px] text-brand-ink-light transition-colors hover:bg-black/[0.03] hover:text-brand-ink"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-ink/20 transition-colors group-hover:bg-brand-orange" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-black/[0.06] pt-5">
            <Link
              href="/secteurs"
              onClick={() => setSectorsOpen(false)}
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:text-brand-orange"
            >
              {t("allSectors")}
              <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </div>

      {/* ── MEGA MENU — NOS EXPERTISES ── */}
      <div
        className={`absolute left-0 top-full w-full border-t border-black/[0.06] bg-white shadow-xl transition-all duration-200 ${
          servicesOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-1 opacity-0"
        }`}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        role="region"
        aria-label={t("services")}
      >
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-8">
            {corporateServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setServicesOpen(false)}
                className="group flex items-center gap-2.5 rounded-sm px-3 py-2 text-[13px] text-brand-ink-light transition-colors hover:bg-black/[0.03] hover:text-brand-ink"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-brand-ink/20 transition-colors group-hover:bg-brand-orange" />
                {s.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-black/[0.06] pt-5">
            <Link
              href="/services"
              onClick={() => setServicesOpen(false)}
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:text-brand-orange"
            >
              {t("allServices")}
              <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="border-t border-black/[0.07] bg-white xl:hidden">
          <Container className="flex flex-col gap-0.5 py-4">
            {/* Secteurs accordion */}
            <button
              type="button"
              onClick={() => setMobileSectorsOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-[14px] font-medium text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
            >
              {t("sectors")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileSectorsOpen ? "-rotate-180" : ""}`}
              />
            </button>

            {mobileSectorsOpen && (
              <div className="mb-1 ml-3 mt-0.5 space-y-0.5 border-l border-black/[0.08] pl-4">
                <p className="py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
                  {t("industryResources")}
                </p>
                {industrieSectors.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/secteurs/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[13px] text-brand-ink-light hover:text-brand-ink"
                  >
                    {s.name}
                  </Link>
                ))}
                <p className="pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
                  {t("commerceServices")}
                </p>
                {commerceSectors.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/secteurs/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[13px] text-brand-ink-light hover:text-brand-ink"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/secteurs"
                  onClick={() => setMobileOpen(false)}
                  className="block pt-2 text-[12px] font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
                >
                  {t("allSectors")}
                </Link>
              </div>
            )}

            {/* Services accordion */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-[14px] font-medium text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
            >
              {t("services")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "-rotate-180" : ""}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mb-1 ml-3 mt-0.5 space-y-0.5 border-l border-black/[0.08] pl-4">
                {corporateServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[13px] text-brand-ink-light hover:text-brand-ink"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block pt-2 text-[12px] font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
                >
                  {t("allServices")}
                </Link>
              </div>
            )}

            {/* Growth Desk */}
            <Link
              href="/growth-desk"
              onClick={() => setMobileOpen(false)}
              className={`rounded-sm px-3 py-3 text-[14px] font-medium transition-colors ${
                isActive("/growth-desk")
                  ? "bg-black/[0.02] text-brand-ink"
                  : "text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
              }`}
            >
              {t("growthDesk")}
            </Link>

            {/* Cabinet */}
            <Link
              href="/cabinet"
              onClick={() => setMobileOpen(false)}
              className={`rounded-sm px-3 py-3 text-[14px] font-medium transition-colors ${
                isActive("/cabinet")
                  ? "bg-black/[0.02] text-brand-ink"
                  : "text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
              }`}
            >
              {t("cabinet")}
            </Link>

            {/* Insights */}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className={`rounded-sm px-3 py-3 text-[14px] font-medium transition-colors ${
                isActive("/blog")
                  ? "bg-black/[0.02] text-brand-ink"
                  : "text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
              }`}
            >
              {t("insights")}
            </Link>

            {/* Talents */}
            <Link
              href="/talents"
              onClick={() => setMobileOpen(false)}
              className={`rounded-sm px-3 py-3 text-[14px] font-medium transition-colors ${
                isActive("/talents")
                  ? "bg-black/[0.02] text-brand-ink"
                  : "text-brand-ink-light hover:bg-black/[0.03] hover:text-brand-ink"
              }`}
            >
              {t("talents")}
            </Link>

            {/* Language switcher mobile */}
            <div className="mt-2 flex gap-2 border-t border-black/[0.07] pt-3">
              {["fr", "en", "zh"].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchLocale(l)}
                  className={`rounded-sm px-3 py-1.5 text-[12px] font-semibold transition-colors ${
                    l === locale
                      ? "bg-brand-orange text-white"
                      : "border border-black/10 text-brand-ink-light hover:border-brand-orange hover:text-brand-orange"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-sm bg-brand-orange px-4 py-3 text-center text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("contact")}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
