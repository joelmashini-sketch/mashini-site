import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("eyebrow") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const tf = await getTranslations({ locale, namespace: "footer" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: t("eyebrow") }]}
        photo="/H Contact.png"
        objectPosition="50% center"
        overlayClass="from-brand-ink/93 via-[#0d1730]/72 to-[#0d1730]/28"
        cta={{ label: t("ctaLabel"), href: "https://bookings.cloud.microsoft/book/EntretiensCommercial@mashiniassocies.com/?ismsaljsauthenabled", external: true }}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
              {t("infoTitle")}
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3 text-sm text-brand-ink-light">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>
                  {tf("addressLine1")}
                  <br />
                  {tf("addressLine2")}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-ink-light">
                <Phone size={18} className="shrink-0 text-brand-orange" />
                +243 85 066 57 08
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-ink-light">
                <Mail size={18} className="shrink-0 text-brand-orange" />
                contact@mashiniassocies.com
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-ink-light">
                <Clock size={18} className="shrink-0 text-brand-orange" />
                {tf("hours")}
              </li>
            </ul>

            <div className="mt-8 h-64 overflow-hidden rounded-sm border border-black/10">
              <iframe
                title="Localisation Mashini & Associés"
                src="https://www.openstreetmap.org/export/embed.html?bbox=27.44%2C-11.70%2C27.52%2C-11.62&layer=mapnik&marker=-11.664%2C27.479"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-sm border border-black/10 p-7 sm:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
