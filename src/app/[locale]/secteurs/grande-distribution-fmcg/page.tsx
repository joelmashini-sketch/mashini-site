import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Grande Distribution & FMCG — Mashini & Associés",
  description:
    "Mashini & Associés accompagne les fabricants, importateurs, distributeurs et grossistes dans le renforcement de leur performance financière, de leur gouvernance et de leur conformité réglementaire.",
};

const navLinks = [
  { id: "marges", label: "Gestion des marges et rentabilité" },
  { id: "stocks", label: "Gestion des stocks" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "facturation", label: "Facturation et conformité" },
  { id: "fiscalite", label: "Fiscalité" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "controle-gestion", label: "Contrôle de gestion" },
  { id: "tresorerie", label: "Gestion de la trésorerie" },
  { id: "finance", label: "Finance d'entreprise" },
];

const defisSeceur = [
  "Coûts d'approvisionnement",
  "Marges commerciales",
  "Promotions et remises commerciales",
  "Stocks",
  "Créances clients",
  "Risques de fraude",
  "Obligations fiscales et parafiscales",
  "Conformité à la facture normalisée",
];

const pourquoiItems = [
  "Comptabilité & Reporting",
  "Fiscalité",
  "Contrôle interne",
  "Contrôle de gestion",
  "Finance d'entreprise",
  "Gouvernance",
  "Gestion des risques",
  "Accompagnement des filiales internationales",
];

const defis = [
  "Améliorer les marges commerciales.",
  "Réduire les pertes liées aux stocks.",
  "Sécuriser les processus de vente et de facturation.",
  "Optimiser le besoin en fonds de roulement.",
  "Renforcer le contrôle interne.",
  "Respecter les obligations fiscales, parafiscales et réglementaires.",
  "Produire une information financière fiable pour les dirigeants, les actionnaires et les groupes internationaux.",
];

export default async function GrandeDistributionFmcgPage({
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
        eyebrow="Grande Distribution & FMCG"
        title="Accompagner votre croissance dans un marché où la rapidité d'exécution et la maîtrise des marges font la différence."
        description="Nous accompagnons les fabricants, importateurs, distributeurs et grossistes dans le renforcement de leur performance financière, de leur gouvernance et de leur conformité réglementaire."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Grande Distribution & FMCG" },
        ]}
        photo="/H Grande Distribution FMCG.png"
        objectPosition="40% center"
        overlayClass="from-brand-ink/90 via-brand-ink/62 to-brand-ink/20"
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

              <p className="mt-8 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Les entreprises du secteur des biens de grande consommation évoluent dans un
                environnement caractérisé par des volumes de transactions élevés, une forte
                rotation des stocks, une pression permanente sur les marges et un réseau de
                distribution complexe.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Chez Mashini &amp; Associés, nous accompagnons les fabricants, importateurs,
                distributeurs et grossistes dans le renforcement de leur performance financière,
                de leur gouvernance et de leur conformité réglementaire.
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
                Le secteur FMCG exige une parfaite maîtrise de :
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:self-center">
              {defisSeceur.map((item) => (
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
            Une information financière fiable permet aux dirigeants de prendre rapidement les
            bonnes décisions dans un environnement très concurrentiel.
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
              {t("ourAnswers")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">

              {/* 01 — Marges */}
              <div id="marges" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des marges et rentabilité
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Dans un secteur où les marges sont souvent faibles, chaque décision a un impact
                  direct sur la rentabilité. Nous accompagnons les entreprises dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "L'analyse des marges par produit",
                    "L'analyse des marges par canal de distribution",
                    "L'analyse des marges par client",
                    "Le suivi des remises commerciales",
                    "L'évaluation de la rentabilité des promotions",
                    "La mesure de la performance commerciale",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Stocks */}
              <div id="stocks" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des stocks
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les stocks représentent un actif stratégique. Nous aidons les entreprises à
                  renforcer :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Le contrôle des stocks",
                    "La valorisation des stocks",
                    "Les inventaires physiques",
                    "Le suivi des pertes",
                    "Le contrôle des produits périmés",
                    "Le suivi des écarts d'inventaire",
                    "La rotation des stocks",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Contrôle interne */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les entreprises du secteur FMCG sont confrontées à des risques importants liés
                  aux volumes de transactions. Nous renforçons les contrôles sur :
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    "Ventes",
                    "Encaissements",
                    "Remises commerciales",
                    "Promotions",
                    "Achats",
                    "Stocks",
                    "Immobilisations",
                    "Trésorerie",
                    "Comptes clients",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Facturation */}
              <div id="facturation" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Facturation et conformité
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le volume élevé des ventes impose une gestion rigoureuse des processus de
                  facturation. Nous accompagnons les entreprises dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "La mise en conformité avec la facture normalisée",
                    "L'homologation des Systèmes de Facturation Électronique (SFE)",
                    "L'organisation des processus de facturation",
                    "Le contrôle de la qualité des données",
                    "La sécurisation des flux de facturation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Fiscalité
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales.
                  Nos interventions couvrent notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Impôt sur les Sociétés (IS)",
                    "Impôt sur le Revenu des Personnes Physiques (IRPP)",
                    "Taxe sur la Valeur Ajoutée (TVA)",
                    "Obligations parafiscales",
                    "Conformité fiscale",
                    "Assistance lors des contrôles fiscaux",
                    "Optimisation fiscale dans le respect de la réglementation",
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
                  Nous produisons une information financière fiable permettant aux dirigeants de
                  piloter efficacement leur activité. Nos prestations comprennent :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Comptabilité conforme au SYSCOHADA",
                    "Reporting financier",
                    "Reporting groupe",
                    "Conversion vers les normes IFRS",
                    "Clôtures mensuelles",
                    "Consolidation financière",
                    "Analyse financière",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Contrôle de gestion */}
              <div id="controle-gestion" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle de gestion
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les entreprises à piloter leur performance grâce à des indicateurs
                  fiables. Nos interventions comprennent :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Budgets",
                    "Suivi des écarts",
                    "Tableaux de bord",
                    "Analyse de la rentabilité",
                    "Suivi des coûts de distribution",
                    "Analyse des coûts logistiques",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 — Trésorerie */}
              <div id="tresorerie" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">08</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion de la trésorerie
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le développement du secteur nécessite une gestion proactive des liquidités.
                  Nous accompagnons nos clients dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "La gestion du besoin en fonds de roulement",
                    "Le suivi des créances clients",
                    "La gestion des fournisseurs",
                    "Les prévisions de trésorerie",
                    "L'optimisation du cycle de conversion de trésorerie",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 09 — Finance d'entreprise */}
              <div id="finance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">09</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Finance d&apos;entreprise
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans leurs projets de croissance. Nos services
                  comprennent :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Business Plans",
                    "Modélisation financière",
                    "Valorisation d'entreprise",
                    "Due Diligence",
                    "Préparation de dossiers de financement",
                    "Accompagnement auprès des banques et des investisseurs",
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
