import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industrie manufacturière — Driving Industrial Performance Through Financial Excellence",
  description:
    "Mashini & Associés accompagne les entreprises industrielles dans l'optimisation de leur performance financière, leur conformité réglementaire, leur développement et leurs projets d'investissement.",
};

const navLinks = [
  { id: "cost-accounting", label: "Cost Accounting & Contrôle de gestion" },
  { id: "code-investissements", label: "Code des investissements" },
  { id: "fiscalite", label: "Fiscalité industrielle" },
  { id: "financement", label: "Financement des investissements" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "controle-interne", label: "Contrôle interne et gouvernance" },
  { id: "gestion-investissements", label: "Gestion des investissements" },
];

const pourquoiItems = [
  "Comptabilité analytique et contrôle de gestion",
  "Fiscalité industrielle",
  "Code des investissements",
  "Accompagnement des contrôles de l'ANAPI",
  "Corporate Finance",
  "Recherche de financements",
  "Contrôle interne",
  "Accompagnement des filiales internationales",
];

const defis = [
  "Réduire les coûts de production et améliorer les marges.",
  "Bénéficier des avantages prévus par le Code des investissements lorsque les conditions sont réunies.",
  "Se préparer efficacement aux contrôles de l'ANAPI.",
  "Renforcer la conformité fiscale, notamment en matière de droits d'accises.",
  "Structurer des dossiers solides pour obtenir des financements bancaires ou des appuis du Fonds de Promotion de l'Industrie (FPI).",
  "Produire une information financière fiable répondant aux attentes des dirigeants, des investisseurs et des groupes internationaux.",
  "Mettre en place un contrôle interne robuste favorisant une croissance durable.",
];

export default async function IndustrieManufacturierePage({
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
        eyebrow="Manufacturing & Industrial"
        title="Driving Industrial Performance Through Financial Excellence"
        description="Nous accompagnons les entreprises industrielles dans l'optimisation de leur performance financière, leur conformité réglementaire, leur développement et leurs projets d'investissement."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Industrie manufacturière" },
        ]}
        photo="/H Industrie Manufacturiere.png"
        objectPosition="35% center"
        overlayClass="from-brand-ink/92 via-brand-ink/65 to-brand-ink/22"
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
                Un partenaire stratégique pour les industriels
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Le secteur industriel évolue dans un environnement où la maîtrise des coûts, les
                investissements productifs, les exigences fiscales et les obligations réglementaires
                conditionnent directement la compétitivité.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Chez Mashini &amp; Associés, nous accompagnons les industriels à chaque étape de
                leur développement, de la création de valeur à la recherche de financement.
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

              {/* 01 — Cost Accounting */}
              <div id="cost-accounting" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Cost Accounting &amp; Contrôle de gestion
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les entreprises à piloter leur rentabilité grâce à :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Comptabilité analytique",
                    "Calcul du coût de revient",
                    "Calcul des coûts standards",
                    "Analyse des écarts de production",
                    "Analyse des marges",
                    "Budgets industriels",
                    "Tableaux de bord de performance",
                    "Analyse de rentabilité par produit, atelier ou ligne de production",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Code des investissements */}
              <div id="code-investissements" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Code des investissements
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les investissements industriels peuvent bénéficier de régimes d&apos;incitation
                  lorsqu&apos;ils répondent aux conditions prévues par la réglementation.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons nos clients dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "L'analyse de l'éligibilité aux avantages du Code des investissements",
                    "La préparation des dossiers de demande d'agrément",
                    "Le suivi des engagements pris dans le cadre des investissements agréés",
                    "L'accompagnement lors des missions de contrôle de l'ANAPI",
                    "Le respect des obligations de reporting liées aux avantages accordés",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Fiscalité industrielle */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Fiscalité industrielle
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales
                  et dans l&apos;amélioration de leur efficacité fiscale. Nos interventions couvrent
                  notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Impôt sur les Sociétés (IS)",
                    "TVA",
                    "Code des accises",
                    "Fiscalité des investissements",
                    "Revue de conformité fiscale",
                    "Assistance lors des contrôles fiscaux",
                    "Optimisation fiscale dans le respect de la réglementation",
                    "Gestion des risques fiscaux",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Financement des investissements */}
              <div id="financement" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Financement des investissements
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Le développement industriel nécessite des financements adaptés. Nous accompagnons
                  les entreprises dans :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "La préparation des dossiers de financement",
                    "L'élaboration de Business Plans",
                    "La modélisation financière",
                    "Les études de faisabilité",
                    "Les prévisions de trésorerie",
                    "Les discussions avec les banques commerciales",
                    "La mobilisation des dispositifs publics de soutien à l'industrie, notamment auprès du Fonds de Promotion de l'Industrie (FPI)",
                    "La préparation des informations financières demandées par les prêteurs et investisseurs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Comptabilité & Reporting */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
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

              {/* 06 — Contrôle interne et gouvernance */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne et gouvernance
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous renforçons les dispositifs de contrôle sur l&apos;ensemble de la chaîne
                  industrielle. Nos interventions portent notamment sur :
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    "Achats et approvisionnements",
                    "Production",
                    "Consommation des matières premières",
                    "Stocks",
                    "Immobilisations",
                    "Ventes",
                    "Trésorerie",
                    "Conformité réglementaire",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Gestion des investissements */}
              <div id="gestion-investissements" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des investissements
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les industriels à sécuriser leurs projets d&apos;investissement
                  grâce à :
                </p>
                <div className="mt-5 space-y-2.5">
                  {[
                    "L'évaluation financière des projets",
                    "Le suivi des investissements",
                    "Le contrôle des budgets d'investissement",
                    "Le suivi des immobilisations",
                    "L'analyse de rentabilité post-investissement",
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
