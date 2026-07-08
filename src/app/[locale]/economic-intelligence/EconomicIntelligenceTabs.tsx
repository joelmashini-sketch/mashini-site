"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { SkylineThumb } from "@/components/Skyline";
import { articleCategories, type Article } from "@/lib/data";
import { useTranslations, useLocale } from "next-intl";

export default function EconomicIntelligenceTabs({ articles }: { articles: Article[] }) {
  const t = useTranslations("economicIntelligence");
  const locale = useLocale();
  const [active, setActive] = useState(articleCategories[0].slug);
  const filtered = articles.filter((a) => a.category === active);

  const dateLocale = locale === "zh" ? "zh-CN" : locale === "en" ? "en-GB" : "fr-FR";

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-black/10">
        {articleCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={`border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
              active === cat.slug
                ? "border-brand-orange text-brand-orange"
                : "border-transparent text-brand-ink-light hover:text-brand-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <p className="text-sm text-brand-ink-light">
            {t("noPublications")}
          </p>
        )}
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/economic-intelligence/${article.slug}`}
            className="group overflow-hidden rounded-sm border border-black/10 transition-shadow hover:shadow-md"
          >
            <div className="h-44 w-full overflow-hidden">
              <SkylineThumb className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-brand-ink-light">
                {new Date(article.date).toLocaleDateString(dateLocale, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 font-serif-display text-lg font-semibold text-brand-ink">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                {t("readMore")}
                <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
