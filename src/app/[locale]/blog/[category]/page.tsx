import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import {
  categories,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/blog-data";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Blog & Insights — MASHINI & Associés`,
    description: `Articles et analyses en ${cat.name.toLowerCase()} par les experts MASHINI & Associés.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={cat.name}
        description={`${cat.name} — ${t("description")}`}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("eyebrow"), href: "/blog" },
          { label: cat.name },
        ]}
        overlayClass="from-brand-ink/93 via-brand-ink/70 to-brand-ink/28"
      />

      {/* CATEGORY TABS */}
      <div className="border-b border-black/10 bg-white">
        <Container>
          <div className="flex items-center gap-1 overflow-x-auto py-4">
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center rounded-full border border-black/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-brand-ink-light transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              {t("allArticles")}
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/${c.slug}`}
                className={`inline-flex shrink-0 items-center rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
                  c.slug === category
                    ? "bg-brand-orange text-white"
                    : "border border-black/10 text-brand-ink-light hover:border-brand-orange hover:text-brand-orange"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* ARTICLES */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-ink-light/60 transition-colors hover:text-brand-orange"
            >
              <ArrowLeft size={12} />
              {t("backToAll")}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.categorySlug}/${post.slug}`}
                className="group flex flex-col rounded-sm border border-black/10 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between border-b border-black/10 px-6 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    {cat.name}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-brand-ink-light/40 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-orange"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <h2 className="font-serif-display text-base font-semibold leading-snug text-brand-ink transition-colors group-hover:text-brand-orange sm:text-[17px]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-brand-ink-light">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-[11px] text-brand-ink-light/60">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.dateLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={11} />
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
