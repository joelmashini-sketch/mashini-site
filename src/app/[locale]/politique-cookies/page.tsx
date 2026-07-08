import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique des cookies",
  description: "Informations sur l'utilisation des cookies sur le site Mashini & Associés.",
};

export default async function PolitiqueCookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookies" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const sections = [
    {
      title: t("policy.whatAre.title"),
      content: t("policy.whatAre.desc"),
    },
    {
      title: t("policy.technical.title"),
      content: t("policy.technical.desc"),
    },
    {
      title: t("policy.locale.title"),
      content: t("policy.locale.desc"),
    },
    {
      title: t("policy.noTracking.title"),
      content: t("policy.noTracking.desc"),
    },
    {
      title: t("policy.contact.title"),
      content: t("policy.contact.desc"),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("policy.eyebrow")}
        title={t("policy.title")}
        description={t("policy.intro")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("policy.title") }]}
      />

      <Container className="py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-sm text-gray-500">{t("policy.updated")}</p>

          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-3 font-serif-display text-xl font-semibold text-brand-ink">
                {s.title}
              </h2>
              <p className="text-base leading-relaxed text-gray-600">{s.content}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-3 font-serif-display text-xl font-semibold text-brand-ink">
              {t("policy.manage.title")}
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {t("policy.manage.desc")}
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc list-inside">
              {(t.raw("policy.manage.browsers") as string[]).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
