import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { services, getServiceContent } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const corporate = services.filter((s) => s.category === "corporate");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title") },
        ]}
        photo="/H Services.png"
        objectPosition="50% center"
        overlayClass="from-brand-ink/90 via-brand-ink/62 to-brand-ink/22"
      />

      <section className="bg-white py-20">
        <Container>
          <h2 className="font-serif-display text-2xl font-semibold text-brand-ink">
            {t("corporateTitle")}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporate.map((service) => {
              const sc = getServiceContent(service, locale);
              return (
                <ServiceCard key={service.slug} service={service} name={sc.name} shortDescription={sc.shortDescription} learnMore={t("learnMore")} comingSoon={t("comingSoon")} />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function ServiceCard({
  service,
  name,
  shortDescription,
  learnMore,
  comingSoon,
}: {
  service: (typeof services)[number];
  name: string;
  shortDescription: string;
  learnMore: string;
  comingSoon: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-sm border border-black/10 bg-white p-7 transition-colors hover:border-brand-orange/40 hover:bg-[#fbf7f5]"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink/5 text-brand-ink transition-colors group-hover:bg-brand-orange group-hover:text-white">
          <Icon name={service.icon} size={22} />
        </span>
        {!service.available && (
          <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-orange">
            {comingSoon}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-serif-display text-lg font-semibold text-brand-ink">
        {name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink-light">
        {shortDescription}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-orange">
        {learnMore}
        <ArrowRight size={13} />
      </span>
    </Link>
  );
}
