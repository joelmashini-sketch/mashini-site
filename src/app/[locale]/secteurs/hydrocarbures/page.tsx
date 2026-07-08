import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hydrocarbures — Financial Intelligence for the Energy Sector",
  description:
    "Mashini & Associés accompagne les entreprises opérant dans le secteur des hydrocarbures dans la maîtrise de leurs enjeux financiers, réglementaires, fiscaux et de gouvernance.",
};

const navLinks = [
  { id: "investissements", label: "Investissements & infrastructures" },
  { id: "reglementation", label: "Réglementation" },
  { id: "produits", label: "Différenciation des produits" },
  { id: "devises", label: "Gestion des devises" },
  { id: "douanes", label: "Douanes & licences" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "controle", label: "Contrôle interne" },
  { id: "fiscalite", label: "Fiscalité" },
];

const pourquoiItems = [
  "Expertise comptable",
  "Fiscalité",
  "Reporting international",
  "Corporate Finance",
  "Contrôle interne",
  "Gouvernance",
  "Gestion des risques",
  "Accompagnement des filiales internationales",
];

const defis = [
  "Sécuriser les investissements dans les infrastructures de stockage",
  "Renforcer la conformité réglementaire et documentaire",
  "Maîtriser les risques de change liés aux opérations en CDF et en USD",
  "Produire un reporting financier fiable et conforme aux référentiels internationaux",
  "Renforcer les contrôles internes sur les achats, les importations, les stocks et la trésorerie",
  "Optimiser la gouvernance financière dans un environnement fortement réglementé",
];

export default async function HydrocarburesPage({
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
        eyebrow="Financial Intelligence for the Energy Sector"
        title="Hydrocarbures"
        description="Nous accompagnons les entreprises opérant dans le secteur des hydrocarbures dans la maîtrise de leurs enjeux financiers, réglementaires, fiscaux et de gouvernance afin de sécuriser leurs investissements et soutenir leur croissance."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Hydrocarbures" },
        ]}
        photo="/H Hydrocarbures.png"
        objectPosition="30% center"
        overlayClass="from-brand-ink/90 via-brand-ink/60 to-brand-ink/20"
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
                Un secteur stratégique, fortement réglementé
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Le secteur des hydrocarbures exige une parfaite maîtrise des investissements, des
                exigences réglementaires et des risques financiers.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Les opérateurs doivent concilier des investissements importants dans les
                infrastructures, un cadre réglementaire exigeant, une gestion rigoureuse des
                devises et une information financière fiable répondant aux attentes des autorités,
                des actionnaires et des partenaires financiers. Chez Mashini &amp; Associés, nous
                accompagnons les entreprises à chaque étape de leur développement.
              </p>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Échanger avec un expert
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-sm border border-black/15 px-6 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  Découvrir nos expertises
                </Link>
              </div>
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

      {/* DOMAINES D'INTERVENTION */}
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
            {/* MAIN */}
            <div className="space-y-10">

              {/* 01 — Investissements */}
              <div id="investissements" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Investissements et infrastructures
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le développement des activités pétrolières nécessite des investissements importants
                  dans les infrastructures logistiques. Nous accompagnons les entreprises dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Structuration financière des projets d'investissement",
                    "Analyse de rentabilité des dépôts et infrastructures de stockage",
                    "Suivi des immobilisations",
                    "Gestion des investissements (CAPEX)",
                    "Modélisation financière des projets",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Réglementation */}
              <div id="reglementation" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Réglementation du secteur des hydrocarbures
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le secteur est soumis à un cadre réglementaire spécifique qui impose une vigilance
                  permanente. Nous accompagnons nos clients dans le respect des exigences
                  applicables, notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Autorisations d'importation des produits pétroliers",
                    "Autorisations de stockage",
                    "Autorisations de transport",
                    "Obligations de reporting réglementaire",
                    "Suivi documentaire et administratif",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Différenciation produits */}
              <div id="produits" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Différenciation des produits pétroliers
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les opérateurs doivent assurer une gestion rigoureuse des différentes catégories
                  de produits. Nous les accompagnons dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Distinction entre produits à consommation domestique et industrielle",
                    "Contrôle des mouvements de stocks",
                    "Traçabilité des opérations",
                    "Suivi comptable et financier par catégorie de produits",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Devises */}
              <div id="devises" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des devises et réglementation de change
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les entreprises évoluent dans un environnement où les achats sont majoritairement
                  réalisés en dollars américains, tandis que certaines obligations réglementaires
                  doivent être acquittées en francs congolais. Nous accompagnons les entreprises
                  dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Respect de la réglementation de change",
                    "Suivi des opérations en devises",
                    "Gestion du risque de change",
                    "Rapprochement des flux en CDF et en USD",
                    "Documentation des opérations financières",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Douanes */}
              <div id="douanes" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Douanes et apurement des licences
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les opérations d&apos;importation nécessitent un suivi rigoureux des obligations
                  douanières et administratives. Nos interventions couvrent notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Suivi des licences d'importation",
                    "Apurement des licences",
                    "Contrôle documentaire",
                    "Suivi des paiements des droits et taxes",
                    "Analyse des impacts financiers liés aux opérations d'importation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Comptabilité */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Comptabilité &amp; Reporting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous produisons une information financière fiable répondant aux exigences :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "SYSCOHADA",
                    "IFRS",
                    "US GAAP",
                    "Reporting Groupe",
                    "Consolidation financière",
                    "Clôtures mensuelles",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Contrôle interne */}
              <div id="controle" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne et gouvernance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les entreprises à renforcer leurs dispositifs de contrôle interne afin
                  de sécuriser leurs opérations. Nos interventions portent notamment sur :
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    "Achats",
                    "Importations",
                    "Stocks stratégiques",
                    "Trésorerie",
                    "Immobilisations",
                    "Ventes",
                    "Gestion des devises",
                    "Conformité réglementaire",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">08</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Fiscalité
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales et
                  parafiscales.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Conformité fiscale",
                    "TVA",
                    "Impôt sur les sociétés",
                    "Fiscalité applicable aux importations",
                    "Assistance lors des contrôles fiscaux",
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
