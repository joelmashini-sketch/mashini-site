import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import { Link } from "@/i18n/navigation";
import {
  posts,
  getCategoryBySlug,
  getPostBySlug,
  getSortedPosts,
  type Block,
} from "@/lib/blog-data";

export function generateStaticParams() {
  return posts.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) return {};
  return {
    title: `${post.title} — MASHINI & Associés`,
    description: post.excerpt,
  };
}

function renderBlock(block: Block, idx: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2
          key={idx}
          className="mt-10 font-serif-display text-xl font-semibold text-brand-ink sm:text-2xl"
        >
          {block.c}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="mt-7 font-serif-display text-base font-semibold text-brand-ink sm:text-lg"
        >
          {block.c}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-5 text-[15px] leading-[1.8] text-brand-ink-light">
          {block.c}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="mt-5 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
              <span className="text-[14px] leading-relaxed text-brand-ink-light">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="mt-5 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                {i + 1}
              </span>
              <span className="text-[14px] leading-relaxed text-brand-ink-light">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 border-l-4 border-brand-orange bg-brand-orange/5 py-4 pl-6 pr-4"
        >
          <p className="font-serif-display text-base italic leading-relaxed text-brand-ink sm:text-lg">
            &ldquo;{block.c}&rdquo;
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const post = getPostBySlug(category, slug);
  if (!post) notFound();

  const cat = getCategoryBySlug(post.categorySlug);
  const allPosts = getSortedPosts();
  const currentIdx = allPosts.findIndex(
    (p) => p.slug === post.slug && p.categorySlug === post.categorySlug
  );
  const prevPost = allPosts[currentIdx + 1] ?? null;
  const nextPost = allPosts[currentIdx - 1] ?? null;

  return (
    <main className="bg-white">
      {/* ARTICLE HEADER */}
      <div className="border-b border-black/10 bg-[#f7f7f8] py-12 sm:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[11px] text-brand-ink-light/50">
            <Link href="/" className="hover:text-brand-orange">{tc("home")}</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-orange">Blog</Link>
            <span>/</span>
            {cat && (
              <>
                <Link href={`/blog/${cat.slug}`} className="hover:text-brand-orange">{cat.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="line-clamp-1 max-w-[200px] text-brand-ink-light/70">{post.title}</span>
          </nav>

          {/* Category badge */}
          {cat && (
            <div className="mb-4 flex items-center gap-2">
              <Tag size={12} className="text-brand-orange" />
              <Link
                href={`/blog/${cat.slug}`}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange hover:underline"
              >
                {cat.name}
              </Link>
            </div>
          )}

          <h1 className="max-w-3xl font-serif-display text-2xl font-semibold leading-snug text-brand-ink sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-[12px] text-brand-ink-light/60">
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {post.dateLabel}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-ink-light">
            {post.excerpt}
          </p>
        </Container>
      </div>

      {/* ARTICLE BODY */}
      <div className="py-14 sm:py-18">
        <Container>
          <div className="mx-auto max-w-2xl lg:max-w-3xl">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-ink-light/50 transition-colors hover:text-brand-orange"
              >
                <ArrowLeft size={12} />
                {t("backToBlog")}
              </Link>
            </div>

            <article>{post.blocks.map((block, idx) => renderBlock(block, idx))}</article>

            {/* CTA */}
            <div className="mt-14 rounded-sm bg-brand-ink px-7 py-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {t("needHelp")}
              </p>
              <h3 className="mt-2 font-serif-display text-xl font-semibold sm:text-2xl">
                {t("ctaTitle")}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                {t("ctaDesc")}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                {t("ctaBtn")}
              </Link>
            </div>

            {/* INTER-ARTICLE NAVIGATION */}
            {(prevPost || nextPost) && (
              <div className="mt-10 flex items-center justify-between gap-4 border-t border-black/10 pt-8">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.categorySlug}/${prevPost.slug}`}
                    className="group flex items-start gap-2 text-[13px] font-medium text-brand-ink-light transition-colors hover:text-brand-orange"
                  >
                    <ArrowLeft size={14} className="mt-0.5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-wide text-brand-ink-light/40">
                        {t("prevArticle")}
                      </span>
                      <span className="line-clamp-2">{prevPost.title}</span>
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.categorySlug}/${nextPost.slug}`}
                    className="group flex items-start gap-2 text-right text-[13px] font-medium text-brand-ink-light transition-colors hover:text-brand-orange"
                  >
                    <span>
                      <span className="block text-[10px] uppercase tracking-wide text-brand-ink-light/40">
                        {t("nextArticle")}
                      </span>
                      <span className="line-clamp-2">{nextPost.title}</span>
                    </span>
                    <ArrowLeft
                      size={14}
                      className="mt-0.5 shrink-0 rotate-180 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </div>
        </Container>
      </div>
    </main>
  );
}
