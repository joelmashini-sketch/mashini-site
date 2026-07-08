import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import Container from "./Container";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  photo = "/hero-skyline.jpg",
  overlayClass = "from-brand-ink/92 via-brand-ink/68 to-brand-ink/30",
  objectPosition = "center",
  cta,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumbs: Crumb[];
  photo?: string | null;
  overlayClass?: string;
  objectPosition?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      {photo && (
        <Image
          src={photo}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="100vw"
        />
      )}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${overlayClass}`}
      />

      <Container className="relative py-24 sm:py-32">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-[11px] text-white/40">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/25">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white/70"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/55">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-3 max-w-3xl font-serif-display text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>

        <div className="mt-5 h-0.5 w-12 bg-brand-orange/70" />

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        )}

        {cta && (
          <div className="mt-8">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {cta.label}
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
