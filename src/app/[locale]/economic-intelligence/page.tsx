import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Bell, Globe2, BarChart3, FileText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

const previewIcons: LucideIcon[] = [FileText, BarChart3, Globe2, TrendingUp];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "economicIntelligence" });
  return {
    title: t("title").replace("\n", " "),
    description: t("description"),
  };
}

export default async function EconomicIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "economicIntelligence" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const previews = t.raw("previews") as { title: string; desc: string }[];

  const titleLines = t("title").split("\n");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={<>{titleLines[0]}{titleLines[1] && <><br />{titleLines[1]}</>}</>}
        description={t("description")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("breadcrumb") }]}
        overlayClass="from-[#0a1628]/92 via-[#0d1e38]/70 to-[#0d1e38]/25"
      />

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {t("launchBadge")}
            </span>
            <h2 className="mt-4 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              {t("comingTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {t("comingDesc")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previews.map((p, i) => {
              const Icon = previewIcons[i];
              return (
                <div
                  key={p.title}
                  className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink/5 text-brand-orange">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-serif-display text-[16px] font-semibold text-brand-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-ink-light">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Notification CTA */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex items-center gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange sm:flex">
                <Bell size={24} />
              </span>
              <div>
                <h2 className="font-serif-display text-xl font-semibold sm:text-2xl">
                  {t("ctaTitle")}
                </h2>
                <p className="mt-1 text-sm text-white/60">
                  {t("ctaDesc")}
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("ctaBtn")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
