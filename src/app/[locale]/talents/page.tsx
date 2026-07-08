import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight, Zap, Trophy, BookOpen, ShieldCheck,
  Star, Lightbulb, Users, Target, TrendingUp,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";

const pillarIcons = [Zap, Trophy, BookOpen, ShieldCheck];
const valueIcons = [ShieldCheck, Star, Lightbulb, Users, Target, TrendingUp];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "talents" });
  return {
    title: t("eyebrow"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/talents`,
      languages: { fr: "/fr/talents", en: "/en/talents", zh: "/zh/talents" },
    },
  };
}

export default async function TalentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "talents" });

  const pillars = t.raw("pillars") as { title: string; desc: string }[];
  const steps   = t.raw("steps")   as { num: string; title: string; desc: string }[];
  const skills  = t.raw("skills")  as string[];
  const values  = t.raw("values")  as { title: string; desc: string }[];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-brand-ink text-white">
        <div className="flex min-h-[calc(100vh-72px)] flex-col">
          <div className="absolute inset-0">
            <Image src="/H Talents 1.png" alt="" fill priority className="object-cover object-center" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/92 via-brand-ink/72 to-brand-ink/35" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-ink/70 to-transparent" />
          <div className="relative flex flex-1 items-center">
            <Container>
              <div className="max-w-xl py-20 sm:py-0 lg:max-w-2xl">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                  {t("eyebrow")}
                </p>
                <h1 className="font-serif-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {t("title").split("MASHINI")[0]}
                  <span className="text-brand-orange">MASHINI &amp; Associés</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                  {t("description")}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/talents/opportunites"
                    className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                  >
                    {t("ctaOpportunites")}
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/talents/candidature"
                    className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/60 hover:bg-white/5"
                  >
                    {t("ctaCandidature")}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("visionEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              {t("visionTitle").split("\n").map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h2>
            <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
            <p className="mt-8 text-base leading-relaxed text-brand-ink-light">{t("visionText1")}</p>
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-light">{t("visionText2")}</p>
            <p className="mt-5 text-sm font-semibold text-brand-ink">{t("visionText3")}</p>
          </div>
        </Container>
      </section>

      {/* ─── CE QUI NOUS DISTINGUE ─── */}
      <section className="bg-[#f7f7f8] py-20 sm:py-24">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {t("distinguishEyebrow")}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-px border border-black/[0.07] bg-black/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, desc }, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={title} className="flex flex-col gap-5 bg-white p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange/8 text-brand-orange">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-serif-display text-[17px] font-semibold text-brand-ink">{title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-ink-light">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── PARCOURS + COMPÉTENCES ─── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                {t("parcoursEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
                {t("parcoursTitle")}
              </h2>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
              <ol className="mt-10 space-y-0">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[13px] font-bold text-white">
                        {step.num}
                      </span>
                      {i < steps.length - 1 && (
                        <div className="mt-1 h-full w-px bg-brand-orange/20" style={{ minHeight: "2.5rem" }} />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-serif-display text-[17px] font-semibold text-brand-ink">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-ink-light">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                {t("skillsEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
                {t("skillsTitle")}
              </h2>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
              <p className="mt-6 text-sm leading-relaxed text-brand-ink-light">{t("skillsIntro")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-[#f7f7f8] px-4 py-1.5 text-[12px] font-medium text-brand-ink-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── VALEURS ─── */}
      <section className="bg-brand-ink py-20 text-white sm:py-24">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {t("cultureEyebrow")}
          </p>
          <h2 className="mt-3 font-serif-display text-2xl font-semibold sm:text-3xl">
            {t("cultureTitle")}
          </h2>
          <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, desc }, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-brand-orange">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-serif-display text-[16px] font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── ENGAGEMENT ─── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("engagementEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("engagementTitle")}
            </h2>
            <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
            <p className="mt-8 text-base leading-relaxed text-brand-ink-light">{t("engagementText1")}</p>
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-light">{t("engagementText2")}</p>
          </div>
        </Container>
      </section>

      {/* ─── REJOINDRE ─── */}
      <section id="opportunites" className="bg-[#f7f7f8] py-20 sm:py-24">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {t("joinEyebrow")}
          </p>
          <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
            {t("joinTitle")}
          </h2>
          <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-ink-light">{t("joinText1")}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-ink-light">{t("joinText2")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/talents/candidature"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("joinCtaCandidature")}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/talents/opportunites"
              className="inline-flex items-center gap-2 rounded-sm border border-brand-ink/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              {t("joinCtaOpportunites")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
