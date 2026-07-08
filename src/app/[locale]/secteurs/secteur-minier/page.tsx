import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { getSortedPosts, getCategoryBySlug } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Secteur minier — Financial Intelligence for Mining Excellence",
  description:
    "Mashini & Associés accompagne les sociétés minières et les investisseurs dans la maîtrise de leurs enjeux financiers, fiscaux, réglementaires et stratégiques tout au long du cycle minier.",
};

const pillars = [
  "Gouvernance financière",
  "Conformité réglementaire",
  "Reporting financier",
  "Fiscalité minière",
  "Contrôle interne",
  "Gestion des risques",
  "Performance financière",
];

const navLinks = [
  { id: "gouvernance", label: "Gouvernance financière" },
  { id: "fiscalite", label: "Fiscalité minière" },
  { id: "provisions", label: "Provisions réglementées" },
  { id: "reporting", label: "Reporting Groupe" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "hydrocarbures", label: "Transport & logistique" },
  { id: "investissements", label: "Gestion des investissements" },
];

const pourquoiItems = [
  "Expertise comptable",
  "Expertise fiscale",
  "Corporate Finance",
  "Contrôle interne",
  "Gouvernance",
  "Reporting international",
  "Digitalisation",
  "Vision stratégique",
];

const approche = [
  "Comprendre les opérations minières",
  "Évaluer les risques",
  "Sécuriser la conformité",
  "Optimiser la performance",
  "Créer de la valeur durable",
];


export default async function SecteurMinierPage({
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
        eyebrow="Financial Intelligence for Mining Excellence"
        title="Secteur minier"
        description="Nous accompagnons les sociétés minières et les investisseurs dans la maîtrise de leurs enjeux financiers, fiscaux, réglementaires et stratégiques tout au long du cycle minier."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Secteur minier" },
        ]}
        photo="/H Secteur Minier.png"
        objectPosition="60% center"
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
                Une expertise adaptée aux exigences du Code Minier de la RDC
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Le secteur minier évolue dans un environnement juridique et fiscal parmi les plus
                exigeants d&apos;Afrique. Nos équipes accompagnent les entreprises dans
                l&apos;application des dispositions du Code minier et de son règlement, tout en
                assurant la conformité aux normes comptables internationales et aux exigences des
                groupes internationaux.
              </p>
              <p className="mt-3 text-sm text-brand-ink-light sm:text-base">
                Nous intervenons notamment sur :
              </p>
              <div className="mt-5 h-0.5 w-12 bg-brand-orange" />
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {pillars.map((p) => (
                  <div key={p} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span className="text-sm font-medium text-brand-ink">{p}</span>
                  </div>
                ))}
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
              Nos domaines d&apos;intervention
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            {/* MAIN CONTENT */}
            <div className="space-y-10">

              {/* 01 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gouvernance financière
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les directions financières à renforcer leur organisation afin de
                  répondre aux exigences des actionnaires, des investisseurs et des autorités de
                  régulation.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Gouvernance financière",
                    "Organisation de la fonction finance",
                    "Politiques et procédures",
                    "Délégation des pouvoirs",
                    "Contrôle interne",
                    "Gestion des risques",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Fiscalité minière
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Notre accompagnement couvre l&apos;ensemble des obligations fiscales spécifiques
                  au secteur.
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      Code Minier
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        "Redevance minière",
                        "Impôt sur les sociétés",
                        "Régime fiscal minier",
                        "Obligations déclaratives",
                        "Stabilisation fiscale",
                        "Avantages fiscaux applicables",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                          <span className="text-sm text-brand-ink-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-sm bg-[#f7f7f8] p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      Super Profit Tax
                    </p>
                    <p className="mt-2 text-sm text-brand-ink-light">
                      Nous accompagnons les entreprises dans :
                    </p>
                    <div className="mt-3 space-y-2">
                      {[
                        "L'analyse des conditions d'application",
                        "Le calcul",
                        "La documentation",
                        "Les simulations d'impact financier",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <ChevronRight size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                          <span className="text-sm text-brand-ink-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      Fiscalité indirecte
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {["TVA", "Droits de douane", "Fiscalité locale", "Obligations parafiscales"].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                          <span className="text-sm text-brand-ink-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 03 — Provisions */}
              <div id="provisions" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Provisions réglementées
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans le traitement financier et comptable des
                  obligations réglementaires, notamment :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Provision pour réhabilitation environnementale",
                    "Provision de fermeture de mine",
                    "Provision pour démantèlement des installations",
                    "Obligations environnementales",
                    "Réconciliation entre exigences réglementaires et normes comptables",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Reporting */}
              <div id="reporting" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Reporting Groupe
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les filiales internationales dans la production d&apos;un
                  reporting conforme aux exigences de leurs maisons mères.
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    Référentiels
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "SYSCOHADA révisé",
                      "IFRS",
                      "US GAAP",
                      "Reporting groupe",
                      "Packages de consolidation",
                      "Clôtures mensuelles",
                      "Conversion OHADA vers IFRS",
                      "Conversion OHADA vers US GAAP",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="text-sm text-brand-ink-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 05 — Contrôle interne */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Contrôle interne
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous concevons des dispositifs robustes adaptés aux activités minières.
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    Cycles couverts
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {[
                      "Achats", "Stocks", "Immobilisations",
                      "Production", "Trésorerie", "Paie",
                      "Investissements", "Contrats", "Exportations",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="text-sm text-brand-ink-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    Notre approche s&apos;appuie sur le référentiel{" "}
                    <span className="font-semibold text-brand-ink">COSO</span> et les meilleures
                    pratiques internationales.
                  </p>
                </div>
              </div>

              {/* 06 — Hydrocarbures */}
              <div id="hydrocarbures" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Transport et logistique des hydrocarbures
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les sociétés minières sont fortement dépendantes de l&apos;approvisionnement en
                  carburants. Nous accompagnons les entreprises dans la gestion des exigences
                  administratives et financières liées à cette activité.
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    Autorisations
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      "Autorisation de transport des produits pétroliers",
                      "Autorisation de stockage",
                      "Autorisation d'importation",
                      "Suivi des obligations réglementaires",
                      "Contrôle des coûts logistiques",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="text-sm text-brand-ink-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 07 — Investissements */}
              <div id="investissements" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des investissements
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous accompagnons les entreprises dans la structuration et l&apos;évaluation de
                  leurs investissements.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "CAPEX",
                    "Études de rentabilité",
                    "Valorisation",
                    "Modélisation financière",
                    "Due Diligence",
                    "Business Plans",
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

      {/* NOTRE APPROCHE */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              {t("methodologyEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("methodologyTitle")}
            </h2>
          </div>

          {/* Desktop */}
          <div className="mt-12 hidden items-start justify-center lg:flex">
            {approche.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex w-40 flex-col items-center text-center xl:w-48">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-brand-orange/8 text-brand-orange">
                    <span className="font-serif-display text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 px-2 text-[13px] leading-snug text-brand-ink">{step}</p>
                </div>
                {i < approche.length - 1 && (
                  <ArrowRight size={15} className="mb-6 shrink-0 text-brand-orange/25" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-10 space-y-0 lg:hidden">
            {approche.map((step, i) => (
              <div key={step} className="flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-brand-orange/8 text-brand-orange">
                    <span className="text-xs font-semibold">{i + 1}</span>
                  </div>
                  {i < approche.length - 1 && (
                    <div className="my-1 w-px flex-1 bg-brand-orange/15" />
                  )}
                </div>
                <p className="pb-6 pt-1.5 text-sm text-brand-ink">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* INSIGHTS */}
      <section className="bg-[#f7f7f8] py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                {t("insightsEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
                {t("insightsTitle")}
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange sm:inline-flex"
            >
              {tc("allArticles")} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getSortedPosts().slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.categorySlug}/${post.slug}`}
                className="flex flex-col justify-between rounded-sm border border-black/10 bg-white p-7 transition-colors hover:border-brand-orange/40 hover:bg-[#fbf7f5]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                    {getCategoryBySlug(post.categorySlug)?.name ?? post.categorySlug}
                  </p>
                  <h3 className="mt-3 font-serif-display text-base font-semibold leading-snug text-brand-ink sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-ink-light">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-4">
                  <span className="text-[11px] uppercase tracking-widest text-brand-ink-light">
                    {post.dateLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-ink group-hover:text-brand-orange">
                    {t("read")} <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:text-brand-orange"
            >
              {tc("allArticles")} <ArrowRight size={15} />
            </Link>
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
