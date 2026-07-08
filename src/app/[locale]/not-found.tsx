import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-white py-32">
      <Container className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
          Erreur 404
        </p>
        <h1 className="mt-4 font-serif-display text-4xl font-semibold text-brand-ink">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-brand-ink-light">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
        >
          Retour à l&apos;accueil
        </Link>
      </Container>
    </section>
  );
}
