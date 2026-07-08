import type { MetadataRoute } from "next";
import { articles, services, sectors } from "@/lib/data";

export const dynamic = "force-static";

const siteUrl = "https://www.mashiniassocies.com";
const locales = ["fr", "en", "zh"] as const;

function forAllLocales(
  path: string,
  opts?: { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number; lastModified?: Date }
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}${path}`,
    lastModified: opts?.lastModified ?? new Date(),
    changeFrequency: opts?.changeFrequency ?? "monthly",
    priority: opts?.priority ?? 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...forAllLocales("", { priority: 1.0, changeFrequency: "weekly" }),
    ...forAllLocales("/cabinet"),
    ...forAllLocales("/services"),
    ...forAllLocales("/secteurs"),
    ...forAllLocales("/blog", { changeFrequency: "weekly" }),
    ...forAllLocales("/economic-intelligence", { changeFrequency: "weekly" }),
    ...forAllLocales("/investment-score"),
    ...forAllLocales("/growth-desk"),
    ...forAllLocales("/contact"),
    ...forAllLocales("/talents"),
    ...forAllLocales("/talents/opportunites"),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((s) =>
    forAllLocales(`/services/${s.slug}`, { priority: 0.7 })
  );

  const sectorRoutes: MetadataRoute.Sitemap = sectors.flatMap((s) =>
    forAllLocales(`/secteurs/${s.slug}`, { priority: 0.7 })
  );

  const articleRoutes: MetadataRoute.Sitemap = articles.flatMap((a) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/economic-intelligence/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...articleRoutes];
}
