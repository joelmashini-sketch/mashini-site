import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, User } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { getSortedPosts, categories } from "@/lib/blog-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("eyebrow"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { fr: "/fr/blog", en: "/en/blog", zh: "/zh/blog" },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const posts = getSortedPosts();

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("eyebrow") }]}
        photo="/H Blog.png"
        objectPosition="50% 35%"
        overlayClass="from-brand-ink/90 via-brand-ink/65 to-brand-ink/25"
      />

      {/* CATÉGORIES */}
      <div className="border-b border-black/10 bg-white">
        <Container>
          <div className="flex items-center gap-1 overflow-x-auto py-4">
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center rounded-full bg-brand-orange px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white"
            >
              {t("allArticles")}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/${cat.slug}`}
                className="inline-flex shrink-0 items-center rounded-full border border-black/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-brand-ink-light transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* ARTICLES */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
              const cat = categories.find((c) => c.slug === post.categorySlug);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.categorySlug}/${post.slug}`}
                  className="group flex flex-col rounded-sm border border-black/10 bg-white transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between border-b border-black/10 px-6 py-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                      {cat?.name ?? post.categorySlug}
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
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
