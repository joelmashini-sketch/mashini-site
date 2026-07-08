import type { MetadataRoute } from "next";
import { articles, services } from "@/lib/data";

export const dynamic = "force-static";

const siteUrl = "https://www.mashini-associes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cabinet",
    "/services",
    "/economic-intelligence",
    "/investment-score",
    "/growth-desk",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteUrl}/economic-intelligence/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
