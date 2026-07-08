import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { getSortedPosts, getCategoryBySlug } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Transport & Logistique — Driving Financial Performance Across the Supply Chain",
  description:
    "Mashini & Associés accompagne les entreprises du transport, de la logistique, du transit et de la distribution dans le renforcement de leur performance financière et de leur conformité réglementaire.",
};

const navLinks = [
  { id: "tresorerie", label: "Gestion de la trésorerie" },
  { id: "facturation", label: "Facturation & revenus" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "conformite", label: "Conformité réglementaire" },
  { id: "couts", label: "Gestion des coûts" },
  { id: "gouvernance", label: "Gouvernance & risques" },
];

const pourquoiItems = [
  "Expertise comptable",
  "Contrôle interne",
  "Fiscalité",
  "Reporting financier",
  "Gestion des risques",
  "Corporate Finance",
  "Gouvernance",
  "Accompagnement des filiales internationales",
];

const defis = [
  "Sécuriser les encaissements et les paiements",
  "Réduire les erreurs de facturation et accélérer le recouvrement",
  "Maîtriser les coûts d'exploitation et améliorer les marges",
  "Produire un reporting financier fiable pour les dirigeants et les groupes internationaux",
  "Renforcer les contrôles internes sur les opérations, la trésorerie et les actifs",
  "Respecter les exigences réglementaires, fiscales, sociales et douanières",
];


export default async function TransportLogistiquePage({
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
        eyebrow="Driving Financial Performance Across the Supply Chain"
        title={<>Transport &amp;<br />Logistique</>}
        description="Nous accompagnons les entreprises du transport, de la logistique, du transit et de la distribution dans le renforcement de leur performance financière, de leur contrôle interne et de leur conformité réglementaire."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Transport & Logistique" },
        ]}
        photo="/H Transport Logistique.png"
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

              <h2 className="mt-8 font-serif-display text-xl font-semibold text-brand-ink sm:text-2xl">
                Un secteur où la maîtrise financière est essentielle
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                Le transport et la logistique évoluent dans un environnement où les volumes de
                transactions sont élevés, les marges souvent limitées et les exigences
                réglementaires importantes.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                La rentabilité dépend d&apos;une information financière fiable, d&apos;une gestion
                rigoureuse de la trésorerie et d&apos;un contrôle permanent des opérations. Chez
                Mashini &amp; Associés, nous accompagnons les entreprises dans la sécurisation de
                leurs processus financiers et l&apos;amélioration de leur performance.
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

              {/* 01 — Trésorerie */}
              <div id="tresorerie" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion de la trésorerie
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les entreprises de transport manipulent quotidiennement d&apos;importants flux
                  de trésorerie. Nous aidons nos clients à renforcer :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Procédures de caisse",
                    "Contrôles sur les encaissements",
                    "Rapprochements bancaires",
                    "Suivi des avances aux chauffeurs",
                    "Gestion des dépenses de carburant",
                    "Contrôles des paiements",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Facturation */}
              <div id="facturation" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Facturation et gestion des revenus
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Chaque course, livraison ou prestation constitue une opération de facturation.
                  Nous accompagnons les entreprises dans :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Facturation par course",
                    "Facturation par mission",
                    "Facturation par contrat",
                    "Automatisation des contrôles de facturation",
                    "Réduction des erreurs de facturation",
                    "Suivi des créances clients",
                    "Amélioration du cycle Order-to-Cash",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                  Une facturation fiable contribue directement à la{" "}
                  <span className="font-semibold text-brand-ink">rentabilité</span> et à la
                  qualité de la relation client.
                </p>
              </div>

              {/* 03 — Comptabilité */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Comptabilité &amp; Reporting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous produisons une information financière conforme aux exigences des dirigeants,
                  des actionnaires et des groupes internationaux.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Comptabilité SYSCOHADA",
                    "Reporting IFRS",
                    "Reporting groupe",
                    "Clôtures mensuelles",
                    "Consolidation",
                    "Réconciliation comptable",
                    "Analyse financière",
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
                  Le secteur est exposé à de nombreux risques opérationnels. Nous aidons les
                  entreprises à renforcer leurs dispositifs de contrôle sur :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Recettes de transport",
                    "Dépenses de carburant",
                    "Frais de mission",
                    "Péages",
                    "Stocks de pièces de rechange",
                    "Immobilisations (camions, remorques, engins)",
                    "Achats",
                    "Paie",
                    "Contrats de transport",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                  Notre approche s&apos;appuie sur les meilleures pratiques internationales de
                  gouvernance et de contrôle interne.
                </p>
              </div>

              {/* 05 — Conformité */}
              <div id="conformite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Conformité réglementaire
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Les entreprises doivent respecter un cadre réglementaire complexe. Nous les
                  accompagnons notamment sur :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Obligations fiscales",
                    "Obligations sociales",
                    "Licences et autorisations d'exploitation",
                    "Obligations douanières (transitaires et opérations internationales)",
                    "Obligations comptables et documentaires",
                    "Conservation des pièces justificatives",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Gestion des coûts */}
              <div id="couts" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gestion des coûts
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Dans ce secteur, la maîtrise des coûts est un levier majeur de compétitivité.
                  Nous accompagnons nos clients dans l&apos;analyse et le pilotage :
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Coût par véhicule",
                    "Coût par trajet",
                    "Coût par client",
                    "Coût du carburant",
                    "Coûts de maintenance",
                    "Coûts de personnel",
                    "Marges par contrat",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  Gouvernance et gestion des risques
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  Nous aidons les entreprises à renforcer leur gouvernance et à limiter les risques
                  liés à leurs opérations.
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Cartographie des risques",
                    "Prévention de la fraude",
                    "Séparation des fonctions",
                    "Procédures opérationnelles",
                    "Gestion documentaire",
                    "Audit interne",
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
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand-ink">
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
