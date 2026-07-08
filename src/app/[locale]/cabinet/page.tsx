import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Award, ShieldCheck, TrendingUp, Globe2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

const valueIcons = [Award, ShieldCheck, TrendingUp, Globe2];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cabinet" });
  return { title: t("eyebrow") };
}

export default async function CabinetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cabinet" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const titleLines = t("title").split("\n");
  const values = t.raw("values") as { title: string; description: string }[];
  const certifications = t.raw("certifications") as string[];

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
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("eyebrow") }]}
        photo="/Hero Cabinet.png"
        objectPosition="right center"
        overlayClass="from-brand-ink via-brand-ink to-brand-ink/40"
      />

      {/* HISTOIRE */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image src="/histoire-cabinet.png" alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/25" />
        <Container className="relative flex justify-end">
          <div className="w-full max-w-md rounded-sm bg-white p-8 shadow-xl sm:p-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("historyEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              {t("historyTitle")}
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-brand-orange/70" />
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {t("historyText")}
            </p>
          </div>
        </Container>
      </section>

      {/* VISION & VALEURS */}
      <section className="bg-[#f7f7f8] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("visionEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink">
              {t("visionTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {t("visionText")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Ic = valueIcons[i];
              return (
                <div key={v.title} className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
                    <Ic size={26} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold uppercase tracking-wide text-brand-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* RÉFÉRENCES & CERTIFICATIONS */}
      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("refsEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("refsTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light">
              {t("refsText")}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("certEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("certTitle")}
            </h2>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-brand-ink-light">
                  <ShieldCheck size={18} className="shrink-0 text-brand-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-ink py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <h2 className="font-serif-display text-xl font-semibold sm:text-2xl">
            {t("ctaTitle")}
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
          >
            {t("ctaButton")}
            <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </>
  );
}
