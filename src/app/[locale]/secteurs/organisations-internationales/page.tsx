import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Users, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Organisations internationales & ONG — Mashini & Associés",
  description:
    "Mashini & Associés accompagne les ONG, agences des Nations Unies et entités à but non lucratif dans la structuration de leur fonction finance, la conformité SYSBNL et la maîtrise des exigences des bailleurs.",
};

const navLinks = [
  { id: "sysbnl", label: "Mise en œuvre du SYSBNL" },
  { id: "projets", label: "Comptabilité des projets" },
  { id: "subventions", label: "Gestion des subventions" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "gouvernance", label: "Gouvernance" },
  { id: "audit", label: "Audit" },
  { id: "fiscalite", label: "Fiscalité" },
  { id: "reporting", label: "Reporting financier" },
];

const defisecteur = [
  "Des partenaires techniques et financiers",
  "Des conventions de financement",
  "Des autorités congolaises",
  "Du SYSBNL",
  "Du SYSCOHADA",
  "Des politiques financières des bailleurs",
  "Des normes de gouvernance et de contrôle interne",
];

const pourquoiItems = [
  "Expertise comptable",
  "Maîtrise du SYSBNL",
  "Maîtrise du SYSCOHADA",
  "Audit",
  "Contrôle interne",
  "Gouvernance",
  "Gestion des risques",
  "Fiscalité",
  "Accompagnement des projets financés",
];

const clients = [
  "ONG nationales",
  "ONG internationales",
  "Agences des Nations Unies",
  "Fondations",
  "Associations",
  "Institutions confessionnelles",
  "Projets financés par les partenaires techniques et financiers",
  "Organisations de développement",
];

const referentiels = [
  "SYSBNL (Système Comptable des Entités à But Non Lucratif)",
  "SYSCOHADA révisé",
  "Normes Internationales d'Audit (ISA)",
  "COSO pour le contrôle interne et la gestion des risques",
  "IFRS, lorsque requises par les partenaires ou les groupes internationaux",
  "Réglementation fiscale, sociale et parafiscale de la République Démocratique du Congo",
];

export default async function OrganisationsInternationalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "secteurs" });
  const tc = await getTranslations({ locale, namespace: "common" });
  return (
    <>
      <PageHero
        eyebrow="Organisations internationales & ONG"
        title="Renforcer la transparence financière, la conformité et l'impact de vos programmes."
        description="Nous accompagnons les ONG, agences des Nations Unies, fondations et associations dans la structuration de leur fonction finance et la production d'une information financière répondant aux exigences des bailleurs."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Organisations internationales & ONG" },
        ]}
        photo="/H Organisations Internationales.png"
        objectPosition="45% center"
        overlayClass="from-brand-ink/88 via-brand-ink/60 to-brand-ink/18"
      />

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <Link
                href="/secteurs"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-ink-light/60 transition-colors hover:text-brand-orange"
              >
                <ArrowLeft size={12} />
                {t("allSectors")}
              </Link>

              <h2 className="mt-8 font-serif-display text-xl font-semibold text-brand-ink sm:text-2xl">
                Organisations internationales, ONG &amp; Entités à But Non Lucratif
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Les organisations non gouvernementales, les agences des Nations Unies, les
                fondations, les associations et les projets financés par les partenaires techniques
                et financiers évoluent dans un environnement où la transparence, la redevabilité
                et la bonne gouvernance sont essentielles.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Chez Mashini &amp; Associés, nous accompagnons les organisations dans la
                structuration de leur fonction finance, la conformité aux référentiels comptables
                de l&apos;OHADA, la maîtrise des risques et la production d&apos;une information
                financière répondant aux exigences des bailleurs de fonds et des autorités
                nationales.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />
            </div>

            <div className="lg:pt-2">
              <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
                <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                  {t("sidebarTitle")}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-ink-light">
                  {t("sidebarDesc")}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                >
                  {t("sidebarContact")}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-sm border border-black/10 px-5 py-2.5 text-sm font-medium text-brand-ink-light transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {t("sidebarServices")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DÉFIS DU SECTEUR */}
      <section className="bg-brand-ink py-12 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
            <div className="lg:max-w-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Enjeux clés
              </p>
              <h2 className="mt-3 font-serif-display text-xl font-semibold text-white sm:text-2xl">
                Les défis du secteur
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Les organisations à but non lucratif doivent répondre simultanément aux
                exigences :
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:self-center xl:grid-cols-3">
              {defisecteur.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-sm border border-white/[0.08] bg-white/[0.04] px-4 py-3"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-[12px] leading-snug text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
            Cette diversité d&apos;exigences impose une gestion financière rigoureuse, documentée
            et parfaitement traçable.
          </p>
        </Container>
      </section>

      {/* DOMAINES */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Notre expertise
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              Notre accompagnement
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">

              {/* 01 — SYSBNL */}
              <div id="sysbnl" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Mise en œuvre du SYSBNL
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les organisations dans l&apos;application du Système Comptable
                  des Entités à But Non Lucratif (SYSBNL). Nos interventions comprennent notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Mise en conformité comptable",
                    "Organisation de la comptabilité des projets",
                    "Préparation des états financiers conformément au SYSBNL",
                    "Assistance lors de la première adoption",
                    "Formation des équipes financières",
                    "Accompagnement lors des missions d'audit",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Comptabilité des projets */}
              <div id="projets" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Comptabilité des projets
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  La plupart des ONG gèrent simultanément plusieurs projets financés par différents
                  bailleurs. Nous mettons en place des systèmes permettant :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Un suivi financier par projet",
                    "Un suivi par bailleur",
                    "Un suivi par convention de financement",
                    "Une comptabilité analytique adaptée",
                    "Un suivi budgétaire permanent",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Gestion des subventions */}
              <div id="subventions" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des subventions
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les organisations dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "Le suivi de l'utilisation des fonds",
                    "Le rapprochement entre budget et dépenses réelles",
                    "La justification des dépenses",
                    "La préparation des rapports financiers destinés aux bailleurs",
                    "Le suivi des fonds non consommés",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Contrôle interne */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  La protection des ressources constitue une priorité. Nous renforçons notamment :
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    "Procédures financières",
                    "Séparation des fonctions",
                    "Gestion des avances",
                    "Achats",
                    "Gestion de caisse",
                    "Comptes bancaires",
                    "Immobilisations",
                    "Stocks",
                    "Prévention de la fraude",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gouvernance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les organisations dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "La rédaction des manuels de procédures",
                    "La cartographie des risques",
                    "Les délégations de pouvoirs",
                    "Les politiques financières",
                    "Les politiques d'achats",
                    "Les politiques de trésorerie",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Audit */}
              <div id="audit" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Audit
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nos missions comprennent :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Audit financier",
                    "Audit des projets",
                    "Audit de conformité",
                    "Audit des procédures",
                    "Audit du contrôle interne",
                    "Préparation aux audits des bailleurs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Fiscalité
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Même lorsqu&apos;elles bénéficient d&apos;exonérations, les ONG restent soumises
                  à diverses obligations fiscales et réglementaires. Nous accompagnons nos clients
                  notamment sur :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "L'Impôt sur le Revenu des Personnes Physiques (IRPP)",
                    "Les retenues fiscales",
                    "Les obligations déclaratives",
                    "Les obligations sociales",
                    "Les obligations parafiscales",
                    "La TVA lorsque applicable",
                    "La facture normalisée et l'homologation des SFE",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 — Reporting */}
              <div id="reporting" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">08</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Reporting financier
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous produisons des reportings fiables répondant aux attentes :
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    "Bailleurs de fonds",
                    "Conseils d'administration",
                    "Autorités nationales",
                    "Commissaires aux comptes",
                    "Partenaires financiers",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center rounded-sm border border-brand-orange/20 bg-brand-orange/[0.04] px-3 py-2.5 text-center text-[12px] font-medium text-brand-ink"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-sm border border-black/10 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    {t("quickNav")}
                  </p>
                  <ul className="mt-4 space-y-0.5">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className="flex items-center gap-2.5 rounded-sm px-2 py-2 text-[12px] text-brand-ink-light transition-colors hover:bg-black/[0.03] hover:text-brand-orange"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-brand-orange/40" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm bg-brand-orange p-6 text-white">
                  <h3 className="font-serif-display text-[15px] font-semibold leading-snug">
                    {t("expertsTitle")}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/80">
                    {t("expertsDesc")}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-brand-orange transition-colors hover:bg-white/90"
                  >
                    {t("scheduleBtn")}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* POURQUOI MASHINI */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                {t("whyEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-2xl font-semibold sm:text-3xl">
                {t("whyTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {t("whyDesc")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {pourquoiItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-sm border border-white/[0.08] bg-white/[0.04] px-4 py-3"
                >
                  <Check size={15} className="shrink-0 text-brand-orange" />
                  <span className="text-[13px] font-medium text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* NOS CLIENTS & RÉFÉRENTIELS */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">

            {/* Nos clients */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-orange/10">
                  <Users size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    Clientèle
                  </p>
                  <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                    Nos clients
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light">
                Nous accompagnons notamment :
              </p>
              <div className="mt-5 space-y-2">
                {clients.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-sm border border-black/[0.07] px-4 py-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span className="text-[13px] text-brand-ink-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Référentiels */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-orange/10">
                  <BookOpen size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    Normes
                  </p>
                  <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                    Référentiels maîtrisés
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light">
                Nos équipes interviennent dans le respect des principaux référentiels applicables :
              </p>
              <div className="mt-5 space-y-2">
                {referentiels.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-sm border border-black/[0.07] px-4 py-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span className="text-[13px] leading-snug text-brand-ink-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-serif-display text-xl font-semibold sm:text-2xl">
                {t("ctaFinal")}
              </h2>
              <p className="mt-2 text-sm text-white/60">
                {t("ctaFinalSub")}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
            >
              {t("scheduleBtn")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
