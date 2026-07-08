import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import { Link } from "@/i18n/navigation";
import { articleCategories, articles } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "economicIntelligence" });

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const categoryLabel =
    articleCategories.find((c) => c.slug === article.category)?.label ?? article.category;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const shareUrl = `https://www.mashiniassocies.com/economic-intelligence/${article.slug}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      {/* ARTICLE HERO */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <Image
          src="/hero-skyline.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-ink/94 via-brand-ink/78 to-brand-ink/45" />

        <Container className="relative py-20 sm:py-28">
          <Link
            href="/economic-intelligence"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/45 transition-colors hover:text-white/80"
          >
            <ArrowLeft size={12} />
            Economic Intelligence
          </Link>

          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {categoryLabel}
          </p>

          <h1 className="mt-3 max-w-3xl font-serif-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-5 h-0.5 w-12 bg-brand-orange/70" />

          <div className="mt-5 flex flex-wrap items-center gap-4 text-[12px] font-medium text-white/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-brand-orange" />
              {new Date(article.date).toLocaleDateString(locale === "zh" ? "zh-CN" : locale === "en" ? "en-GB" : "fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-white/25">·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-brand-orange" />
              6 {t("minutesRead")}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <article>
            <p className="text-base leading-relaxed text-brand-ink-light">
              {article.excerpt}
            </p>

            <div className="prose-mashini mt-8 space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-brand-ink-light sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-black/10 pt-8">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-ink-light">
                {t("share")}
              </span>
              <a
                href={linkedinShare}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-ink-light transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                LinkedIn
              </a>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
              <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                {t("sidebarTitle")}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-light">
                {t("sidebarDesc")}
              </p>
              <form className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder={t("placeholderName")}
                  className="w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
                />
                <input
                  type="email"
                  placeholder={t("placeholderEmail")}
                  className="w-full rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
                />
                <textarea
                  placeholder={t("placeholderMessage")}
                  rows={4}
                  className="w-full resize-none rounded-sm border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-brand-ink-light/60 focus:border-brand-orange"
                />
                <button
                  type="submit"
                  className="w-full rounded-sm bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                >
                  {t("sendBtn")}
                </button>
              </form>
            </div>

            {related.length > 0 && (
              <div className="rounded-sm border border-black/10 p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
                  {t("relatedTitle")}
                </h3>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/economic-intelligence/${r.slug}`}
                        className="text-sm text-brand-ink-light hover:text-brand-orange"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
