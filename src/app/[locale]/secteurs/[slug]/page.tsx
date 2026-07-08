import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { sectors } from "@/lib/data";

const dedicatedPages = new Set(["secteur-minier", "transport-logistique", "hydrocarbures", "industrie-manufacturiere", "sous-traitants-miniers", "grande-distribution-fmcg", "organisations-internationales"]);

export function generateStaticParams() {
  return sectors
    .filter((s) => !dedicatedPages.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};
  return {
    title: `${sector.name} — Secteurs d'activité`,
    description: sector.tagline,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "secteurs" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const currentIndex = sectors.findIndex((s) => s.slug === slug);
  const prev = sectors[currentIndex - 1] ?? null;
  const next = sectors[currentIndex + 1] ?? null;

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={sector.name}
        description={sector.tagline}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: sector.name },
        ]}
        overlayClass="from-brand-ink/93 via-brand-ink/70 to-brand-ink/28"
      />

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <Link
                href="/secteurs"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-ink-light/60 transition-colors hover:text-brand-orange"
              >
                <ArrowLeft size={12} />
                {t("allSectors")}
              </Link>

              <div className="mt-8 space-y-5">
                {sector.intro.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed text-brand-ink-light ${
                      i === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
            </div>

            {/* Sidebar */}
            <div className="lg:pt-8">
              <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
                <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                  {t("sidebarTitle")}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-ink-light">
                  {t("sidebarDesc")}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                >
                  {t("sidebarContact")}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-black/10 px-5 py-2.5 text-sm font-medium text-brand-ink-light transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {t("sidebarServices")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NOS RÉPONSES */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              {t("ourApproach")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold sm:text-3xl">
              {t("ourAnswers")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sector.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-sm border border-white/[0.07] bg-white/[0.04] px-5 py-4"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-orange"
                />
                <span className="text-[13px] leading-snug text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NAVIGATION INTER-SECTEURS */}
      <section className="bg-[#f7f7f8] py-10">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/secteurs/${prev.slug}`}
                className="group flex items-center gap-2 text-[13px] font-medium text-brand-ink-light transition-colors hover:text-brand-orange"
              >
                <ArrowLeft size={14} className="shrink-0 transition-transform group-hover:-translate-x-0.5" />
                <span>
                  <span className="block text-[10px] uppercase tracking-wide text-brand-ink-light/50">
                    {t("prevSector")}
                  </span>
                  {prev.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/secteurs"
              className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink-light/50 transition-colors hover:text-brand-orange"
            >
              {t("allSectors")}
            </Link>

            {next ? (
              <Link
                href={`/secteurs/${next.slug}`}
                className="group flex items-center gap-2 text-right text-[13px] font-medium text-brand-ink-light transition-colors hover:text-brand-orange"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-wide text-brand-ink-light/50">
                    {t("nextSector")}
                  </span>
                  {next.name}
                </span>
                <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
