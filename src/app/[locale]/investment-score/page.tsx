import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Bell, ShieldCheck, BarChart3, FileSearch, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

const pillarIcons: LucideIcon[] = [FileSearch, BarChart3, ShieldCheck, TrendingUp];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investmentScore" });
  return {
    title: t("title").replace("\n", " "),
    description: t("description"),
  };
}

export default async function InvestmentScorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investmentScore" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const pillars = t.raw("pillars") as { title: string; desc: string }[];
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  const titleLines = t("title").split("\n");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={<>{titleLines[0]}{titleLines[1] && <><br />{titleLines[1]}</>}</>}
        description={t("description")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("breadcrumb") }]}
        overlayClass="from-[#0d1320]/93 via-brand-ink/72 to-brand-ink/30"
      />

      {/* Timeline badge */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {t("launchBadge")}
            </span>
            <h2 className="mt-4 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              {t("howTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {t("howDesc")}
            </p>
          </div>

          {/* 3 steps */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-sm border border-black/10 bg-[#f7f7f8] p-8 text-center">
                <p className="font-serif-display text-4xl font-semibold text-brand-orange/30">
                  {s.num}
                </p>
                <h3 className="mt-3 font-serif-display text-xl font-semibold text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Score gauge placeholder */}
          <div className="mt-14 overflow-hidden rounded-sm border border-black/10 bg-[#f7f7f8] p-8 sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {t("previewLabel")}
            </p>
            <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-16">
              <div className="text-center">
                <p className="font-serif-display text-7xl font-semibold text-brand-ink">78</p>
                <p className="mt-1 text-sm font-medium text-brand-ink-light">{t("scoreLabel")}</p>
              </div>
              <div className="flex-1 space-y-4">
                {pillars.map((p, i) => {
                  const Icon = pillarIcons[i];
                  return (
                    <div key={p.title} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
                        <Icon size={16} />
                      </span>
                      <div>
                        <h4 className="text-[13px] font-semibold text-brand-ink">{p.title}</h4>
                        <p className="text-[12px] text-brand-ink-light">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-8 h-2 overflow-hidden rounded-full bg-black/[0.08]">
              <div className="h-full w-[78%] rounded-full bg-brand-orange/70" />
            </div>
            <p className="mt-3 text-center text-[11px] text-brand-ink-light">
              {t("scoreNote")}
            </p>
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
