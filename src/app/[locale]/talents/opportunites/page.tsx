import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, SearchX } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "talents" });
  return {
    title: `${t("opportunitiesTitle")} — MASHINI & Associés`,
    description: t("opportunitiesDesc"),
  };
}

export default async function OpportunitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "talents" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
        eyebrow={t("opportunitiesEyebrow")}
        title={t("opportunitiesTitle")}
        description={t("opportunitiesDesc")}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("eyebrow"), href: "/talents" },
          { label: t("opportunitiesTitle") },
        ]}
        photo="/H Talents 1.png"
        objectPosition="50% 30%"
        overlayClass="from-brand-ink/92 via-brand-ink/70 to-brand-ink/30"
      />

      <section className="bg-[#f7f7f8] py-20 sm:py-28">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink-light">
              <SearchX size={28} />
            </span>
            <div>
              <h2 className="font-serif-display text-2xl font-semibold text-brand-ink">
                {t("noPositions")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                {t("noPositionsDesc")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                {t("noPositionsDesc2")}
              </p>
            </div>
            <Link
              href="/talents/candidature"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("joinCtaCandidature")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
