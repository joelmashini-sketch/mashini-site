import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { Link } from "@/i18n/navigation";
import { services, getServiceContent } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

const heroPhotos: Record<string, { photo: string; objectPosition?: string; overlayClass?: string }> = {
  "comptabilite-reporting":  { photo: "/H Comptabilite Reporting.png",  objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "fiscalite-douanes":       { photo: "/H Fiscalite Douanes.png",        objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "controle-interne":        { photo: "/H Controle Interne.png",         objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "advisory":                { photo: "/H Advisory.png",                  objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "corporate-finance":       { photo: "/H Corporate Finance.png",         objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "investment-advisory":     { photo: "/H Investment Advisory.png",       objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
  "due-diligence":           { photo: "/H Due Diligence.png",             objectPosition: "50% center",  overlayClass: "from-brand-ink/92 via-brand-ink/70 to-brand-ink/30" },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const sc = getServiceContent(service, locale);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const hero = heroPhotos[slug];

  return (
    <>
      <PageHero
        eyebrow={service.available ? t("available") : t("comingSoonBadge")}
        title={sc.name}
        description={sc.shortDescription}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title"), href: "/services" },
          { label: sc.name },
        ]}
        photo={hero?.photo}
        objectPosition={hero?.objectPosition}
        overlayClass={hero?.overlayClass}
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink text-white">
                <Icon name={service.icon} size={24} />
              </span>
              {!service.available && (
                <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  {t("comingSoon")}
                </span>
              )}
            </div>

            <h2 className="mt-7 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("presentation")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {sc.presentation}
            </p>

            <h2 className="mt-12 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("benefits")}
            </h2>
            <ul className="mt-5 space-y-3">
              {sc.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-ink-light sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                  {b}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("methodology")}
            </h2>
            <ol className="mt-5 space-y-6 border-l border-black/10 pl-6">
              {sc.methodology.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-[11px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-brand-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-brand-ink-light">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
              <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                {t("sidebarCtaTitle", { name: sc.name })}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-light">
                {t("sidebarCtaDesc")}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                {t("sidebarCtaBtn")}
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-sm border border-black/10 p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
                {t("otherServices")}
              </h3>
              <ul className="mt-4 space-y-3">
                {related.map((r) => {
                  const rsc = getServiceContent(r, locale);
                  return (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="flex items-center justify-between text-sm text-brand-ink-light hover:text-brand-orange"
                      >
                        {rsc.name}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
