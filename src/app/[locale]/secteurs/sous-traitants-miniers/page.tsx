import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sous-traitants miniers — Empowering Mining Contractors to Meet International Standards",
  description:
    "Mashini & Associés accompagne les entreprises de sous-traitance minière dans le renforcement de leur gouvernance, de leur performance financière et de leur conformité.",
};

const navLinks = [
  { id: "gouvernance", label: "Renforcer votre gouvernance" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "kpis", label: "Indicateurs de performance (KPIs)" },
  { id: "developpement", label: "Développement de l'entreprise" },
  { id: "financement", label: "Accès au financement" },
  { id: "dispositifs-publics", label: "Dispositifs publics" },
];

const pourquoiItems = [
  "Comptabilité et reporting",
  "Contrôle interne",
  "Gouvernance",
  "Corporate Finance",
  "Structuration financière",
  "Préparation au financement",
  "Accompagnement des sous-traitants miniers",
];

const defis = [
  "Répondre aux exigences des grandes sociétés minières.",
  "Renforcer les contrôles internes et la gouvernance.",
  "Produire des états financiers fiables et crédibles.",
  "Suivre les indicateurs clés de performance (KPIs).",
  "Structurer l'entreprise pour accompagner sa croissance.",
  "Préparer des dossiers solides pour accéder au financement.",
  "Valoriser les dispositifs d'appui à l'entrepreneuriat local.",
];

export default async function SousTraitantsMinierPage({
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
        eyebrow="Sous-traitants miniers"
        title="Empowering Mining Contractors to Meet International Standards"
        description="Nous accompagnons les entreprises de sous-traitance minière dans le renforcement de leur gouvernance, de leur performance financière et de leur conformité afin de répondre aux exigences des grandes sociétés minières."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Sous-traitants miniers" },
        ]}
        photo="/H Sous-Traitants Miniers.png"
        objectPosition="30% center"
        overlayClass="from-brand-ink/90 via-brand-ink/65 to-brand-ink/25"
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
                Un environnement exigeant
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Les grandes sociétés minières appliquent des standards élevés en matière de
                gouvernance, de conformité, de sécurité financière et de performance opérationnelle.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Pour devenir ou rester un partenaire de confiance, les sous-traitants doivent
                démontrer une gestion rigoureuse, une information financière fiable et des contrôles
                internes efficaces.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Chez Mashini &amp; Associés, nous aidons les entreprises locales à franchir ce
                niveau d&apos;exigence.
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

      {/* DOMAINES */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Notre expertise
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("ourAnswers")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">

              {/* 01 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Renforcer votre gouvernance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les sociétés minières recherchent des partenaires fiables. Nous vous accompagnons dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "L'organisation de votre fonction finance",
                    "La formalisation des procédures",
                    "La mise en place de politiques financières",
                    "L'amélioration de la gouvernance",
                    "La préparation aux audits des clients",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Contrôle interne */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous mettons en place des dispositifs de contrôle adaptés aux activités de
                  sous-traitance. Nos interventions couvrent notamment :
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    "Gestion de la trésorerie",
                    "Achats",
                    "Gestion des stocks",
                    "Immobilisations",
                    "Paie",
                    "Facturation",
                    "Suivi des contrats",
                    "Prévention de la fraude",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Comptabilité & Reporting */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Comptabilité &amp; Reporting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous produisons une information financière fiable permettant de répondre aux
                  exigences :
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    "Des sociétés minières",
                    "Des banques",
                    "Des investisseurs",
                    "Des partenaires financiers",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-sm border border-brand-orange/20 bg-brand-orange/[0.04] px-3 py-2 text-center text-[12px] font-medium text-brand-ink"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-brand-ink-light">
                  Nos interventions couvrent :
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Comptabilité SYSCOHADA",
                    "Reporting financier",
                    "États financiers",
                    "Analyse financière",
                    "Préparation aux audits",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — KPIs */}
              <div id="kpis" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Indicateurs de performance (KPIs)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  La performance doit être mesurée pour être améliorée. Nous aidons les entreprises
                  à mettre en place des tableaux de bord comprenant notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Chiffre d'affaires par contrat",
                    "Marge par contrat",
                    "Rentabilité par client",
                    "Délai moyen de paiement",
                    "Rotation des stocks",
                    "Productivité des équipes",
                    "Suivi de la trésorerie",
                    "Performance financière",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Développement */}
              <div id="developpement" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Développement de l&apos;entreprise
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans leurs projets de croissance. Nos
                  interventions comprennent :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Business Plans",
                    "Modélisation financière",
                    "Prévisions de trésorerie",
                    "Études de rentabilité",
                    "Structuration financière",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Accès au financement */}
              <div id="financement" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Accès au financement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le développement des sous-traitants nécessite des financements adaptés. Nous
                  accompagnons les entreprises dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "La préparation des dossiers de financement",
                    "Les discussions avec les banques",
                    "La préparation des Business Plans",
                    "La préparation des informations financières demandées par les prêteurs",
                    "La mobilisation des dispositifs publics d'appui à l'entrepreneuriat",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Dispositifs publics */}
              <div id="dispositifs-publics" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Accompagnement des dispositifs publics
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans leurs relations avec les organismes de
                  soutien au développement de l&apos;entrepreneuriat et de l&apos;industrie. Selon
                  les besoins du projet, nous pouvons assister nos clients dans la préparation des
                  dossiers et des informations financières demandées par des organismes tels que :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "L'Autorité de Régulation de la Sous-traitance dans le secteur privé",
                    "Le Fonds de Promotion de l'Industrie",
                    "L'Agence Nationale pour la Promotion des Investissements",
                    "D'autres programmes de financement et d'appui au secteur privé",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
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

      {/* LES DÉFIS */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Enjeux sectoriels
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              Les défis que nous aidons à relever
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {defis.map((defi) => (
              <div
                key={defi}
                className="flex items-start gap-4 rounded-sm border border-black/[0.08] p-6"
              >
                <ShieldAlert size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                <p className="text-sm leading-snug text-brand-ink-light">{defi}</p>
              </div>
            ))}
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
