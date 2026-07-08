import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <section className="bg-white py-32">
      <Container className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
          {t("error404")}
        </p>
        <h1 className="mt-4 font-serif-display text-4xl font-semibold text-brand-ink">
          {t("pageNotFound")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-brand-ink-light">
          {t("pageNotFoundDesc")}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
        >
          {t("backHome")}
        </Link>
      </Container>
    </section>
  );
}
