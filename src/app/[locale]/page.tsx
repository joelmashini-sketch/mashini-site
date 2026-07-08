export const dynamic = "force-dynamic";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Building2,
  Trophy,
  ShieldCheck,
  TrendingUp,
  Globe2,
  CalendarClock,
  BarChart3,
  Users,
  Target,
  MapPin,
} from "lucide-react";
import Container from "@/components/Container";
import Icon from "@/components/Icon";
import { services, values, getServiceContent } from "@/lib/data";
import { getSortedPosts, getCategoryBySlug } from "@/lib/blog-data";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const corporateServices = services.filter((s) => s.category === "corporate").slice(0, 6);
  const latestPosts = getSortedPosts().slice(0, 3);
  const featuredPost = latestPosts[0];
  const secondaryPosts = latestPosts.slice(1);
  const categoryColorMap: Record<string, string> = {
    "comptabilite-2": "text-brand-ink",
    "consulting-5": "text-brand-orange",
    "tax-4": "text-brand-orange",
  };

  const titleLines = t("hero.title").split("\n");

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#080d1a] text-white">
        <div className="flex min-h-[calc(100vh-72px)] flex-col">

          <div className="absolute inset-0">
            <Image src="/Image Hero 3.png" alt="" fill priority className="object-cover object-top" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d1a]/82 via-[#080d1a]/68 to-[#080d1a]/30" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080d1a]/65 to-transparent" />

          <div className="relative flex flex-1 items-center">
            <Container>
              <div className="max-w-xl py-20 sm:py-0 lg:max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-hero-gold">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="mt-5 font-serif-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                  {titleLines.map((line, i) => (
                    <span key={i}>
                      {i > 0 && <><br className="hidden sm:block" />{" "}</>}
                      {line}
                    </span>
                  ))}
                  <span className="text-hero-gold">{t("hero.titleHighlight")}</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                  {t("hero.description")}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-hero-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:bg-hero-gold-dark"
                  >
                    {t("hero.ctaPrimary")}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/5"
                  >
                    {t("hero.ctaSecondary")}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Container>
          </div>

          {/* BARRE STATS */}
          <div className="relative border-t border-white/[0.08] bg-black/30">
            <Container>
              <div className="grid grid-cols-2 divide-x divide-white/[0.08]">
                {[
                  { Icon: MapPin,  value: t("hero.stat1Value"), desc: t("hero.stat1Desc") },
                  { Icon: Globe2,  value: t("hero.stat2Value"), desc: t("hero.stat2Desc") },
                ].map((s) => (
                  <div key={s.value} className="flex items-start gap-3 px-4 py-5 sm:gap-4 sm:px-6">
                    <s.Icon size={18} className="mt-0.5 shrink-0 text-hero-gold" />
                    <div>
                      <p className="font-serif-display text-sm font-semibold text-hero-gold sm:text-base">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-white/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      {featuredPost && (
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                  {t("blog.eyebrow")}
                </p>
                <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                  {t("blog.title")}
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange sm:inline-flex"
              >
                {t("blog.viewAll")} <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="relative flex min-h-[320px] flex-col justify-between rounded-sm bg-brand-ink p-8 lg:col-span-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-hero-gold">
                    {getCategoryBySlug(featuredPost.categorySlug)?.name ?? featuredPost.categorySlug}
                  </p>
                  <h3 className="mt-4 font-serif-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[11px] uppercase tracking-widest text-white/40">
                    {featuredPost.dateLabel} · {featuredPost.author}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.categorySlug}/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-hero-gold transition-colors hover:text-white"
                  >
                    {t("blog.readMore")} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {secondaryPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="flex flex-1 flex-col justify-between rounded-sm border border-black/10 bg-white p-7 transition-colors hover:border-brand-orange/40 hover:bg-[#fbf7f5]"
                  >
                    <div>
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${categoryColorMap[post.categorySlug] ?? "text-brand-orange"}`}>
                        {getCategoryBySlug(post.categorySlug)?.name ?? post.categorySlug}
                      </p>
                      <h3 className="mt-3 font-serif-display text-base font-semibold leading-snug text-brand-ink sm:text-lg">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-ink-light">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-4">
                      <span className="text-[11px] uppercase tracking-widest text-brand-ink-light">
                        {post.dateLabel}
                      </span>
                      <Link
                        href={`/blog/${post.categorySlug}/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
                      >
                        {t("blog.readMore")} <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
              >
                {t("blog.viewAll")} <ArrowRight size={15} />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* DOUBLE EXPERTISE */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
              {t("dualExpertise.eyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
              {t("dualExpertise.title")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-black/10 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink text-white">
                <Building2 size={24} />
              </span>
              <h3 className="mt-6 font-serif-display text-xl font-semibold text-brand-ink">
                {t("dualExpertise.corporateTitle")}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-ink-light">
                {t("dualExpertise.corporateSubtitle")}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-ink-light">
                {(t.raw("dualExpertise.corporateItems") as string[]).map((item: string) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
              >
                {t("dualExpertise.learnMore")}
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-sm border border-brand-orange/30 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white">
                <TrendingUp size={24} />
              </span>
              <h3 className="mt-6 font-serif-display text-xl font-semibold text-brand-orange">
                Growth Desk
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-ink-light">
                {t("dualExpertise.growthDeskSubtitle")}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-ink-light">
                {(t.raw("dualExpertise.growthDeskItems") as string[]).map((item: string) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
              <Link
                href="/growth-desk"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange hover:text-brand-orange-dark"
              >
                {t("dualExpertise.learnMore")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* POURQUOI */}
      <section className="bg-[#f7f7f8] py-20 sm:py-28">
        <Container>
          <h2 className="text-center font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
            {t("why.title")}
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: values[0], icon: Trophy },
              { value: values[1], icon: ShieldCheck },
              { value: values[2], icon: TrendingUp },
              { value: values[3], icon: Globe2 },
            ].map(({ value: v, icon: IconComp }) => {
              const vTitle = locale === "en" ? (v.titleEn ?? v.title) : locale === "zh" ? (v.titleZh ?? v.title) : v.title;
              const vDesc = locale === "en" ? (v.descriptionEn ?? v.description) : locale === "zh" ? (v.descriptionZh ?? v.description) : v.description;
              return (
                <div key={v.title} className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
                    <IconComp size={26} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold uppercase tracking-wide text-brand-ink">
                    {vTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                    {vDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* NOS SERVICES */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                {t("servicesList.eyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                {t("servicesList.title")}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
            >
              {t("servicesList.viewAll")}
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateServices.map((service) => {
              const sc = getServiceContent(service, locale);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-sm border border-black/10 p-7 transition-colors hover:border-brand-orange/40 hover:bg-[#fbf7f5]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-serif-display text-lg font-semibold text-brand-ink">
                    {sc.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                    {sc.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f8] pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-sm bg-brand-ink px-8 py-10 text-white sm:flex-row sm:px-12">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange sm:flex">
                <CalendarClock size={24} />
              </span>
              <div>
                <h2 className="font-serif-display text-xl font-semibold sm:text-2xl">
                  {t("cta.title")}
                </h2>
                <p className="mt-1 text-sm text-white/65">
                  {t("cta.description")}
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("cta.primary")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
