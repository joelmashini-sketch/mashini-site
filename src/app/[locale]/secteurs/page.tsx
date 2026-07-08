import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Gem, Wrench, Flame, Factory, Truck, ShoppingBag, Package2, Heart, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { sectors } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Gem, Wrench, Flame, Factory, Truck, ShoppingBag, Package2, Heart, Landmark,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "secteurs" });
  return { title: t("title").replace("\n", " ") };
}

export default async function SecteursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "secteurs" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const titleLines = t("title").split("\n");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={
          <>
            {titleLines[0]}
            {titleLines[1] && <><br />{titleLines[1]}</>}
          </>
        }
        description={t("description")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: tNav("sectors") }]}
        photo="/H Secteurs.png"
        objectPosition="center center"
        overlayClass="from-brand-ink/90 via-brand-ink/65 to-brand-ink/22"
      />

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-brand-ink-light sm:text-lg">
              {t("introText1")}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {t("introText2")}
            </p>
            <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
          </div>
        </Container>
      </section>

      {/* SECTOR GRID */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
            {t("gridLabel")}
          </p>
          <div className="grid grid-cols-1 gap-px border border-black/[0.07] bg-black/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => {
              const SectorIcon = iconMap[sector.icon] ?? Gem;
              return (
                <Link
                  key={sector.slug}
                  href={`/secteurs/${sector.slug}`}
                  className="group flex flex-col gap-5 bg-white p-8 transition-colors hover:bg-[#fafafa]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/8 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <SectorIcon size={20} />
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif-display text-[17px] font-semibold text-brand-ink">
                      {sector.name}
                    </h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-ink-light">
                      {sector.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-brand-orange transition-all group-hover:gap-3">
                    {t("explore")}
                    <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-serif-display text-xl font-semibold sm:text-2xl">
                {t("ctaTitle")}
              </h2>
              <p className="mt-1 text-sm text-white/60">{t("ctaSubtitle")}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("ctaButton")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
