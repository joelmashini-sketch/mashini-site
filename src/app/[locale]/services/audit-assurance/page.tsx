import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { services } from "@/lib/data";

const service = services.find((s) => s.slug === "audit-assurance")!;
const related = services.filter((s) => s.slug !== "audit-assurance").slice(0, 3);

const methodologyA = [
  {
    label: "Étape 0",
    title: "Acceptation de la mission",
    items: [
      "Évaluation de l'intégrité du client et des risques associés à la mission",
      "Vérification de l'indépendance et de l'absence de conflits d'intérêts",
      "Formalisation des termes de la mission (lettre de mission)",
    ],
  },
  {
    label: "Étape 1",
    title: "Planification et évaluation des risques",
    items: [
      "Prise de connaissance approfondie de l'activité, de l'environnement et du contrôle interne",
      "Détermination des seuils de signification (global et par nature d'opérations)",
      "Identification et évaluation des risques d'anomalies significatives, y compris les risques de fraude",
      "Élaboration du plan de mission et du programme de travail détaillé",
    ],
  },
  {
    label: "Étape 2",
    title: "Travaux de contrôle",
    items: [
      "Définition d'une stratégie combinant tests de procédures et contrôles substantifs",
      "Tests de contrôles sur les cycles jugés à risque",
      "Procédures substantives : tests de détail, procédures analytiques, sondages statistiques",
      "Recours éventuel aux travaux d'experts externes ou d'auditeurs de filiales dans un contexte de groupe",
    ],
  },
  {
    label: "Étape 3",
    title: "Revue et synthèse",
    items: [
      "Évaluation des anomalies relevées et de leur incidence sur les comptes",
      "Revue des événements survenus après la clôture",
      "Appréciation de la continuité d'exploitation",
      "Obtention des déclarations écrites de la direction",
      "Revue qualité indépendante et revue hiérarchique avant émission",
    ],
  },
  {
    label: "Étape 4",
    title: "Restitution",
    items: [
      "Formulation de l'opinion d'audit (sans réserve, avec réserve, défavorable, ou impossibilité de se prononcer)",
      "Communication des points clés ayant structuré l'audit",
      "Présentation des conclusions à la gouvernance et émission du rapport",
    ],
  },
];

const methodologyB = [
  {
    label: "Étape 1",
    title: "Planification stratégique",
    items: [
      "Construction de la cartographie des risques et de l'univers d'audit",
      "Élaboration du plan d'audit annuel ou pluriannuel, validé par le comité d'audit",
      "Priorisation des missions selon le niveau de risque et allocation des ressources",
    ],
  },
  {
    label: "Étape 2",
    title: "Planification de la mission",
    items: [
      "Définition des objectifs, du périmètre et des critères d'évaluation",
      "Analyse des risques spécifiques au processus ou à l'entité auditée",
      "Construction d'une grille risques-contrôles et d'un programme de travail",
    ],
  },
  {
    label: "Étape 3",
    title: "Réalisation des travaux",
    items: [
      "Tests de conception et d'efficacité opérationnelle des contrôles en place",
      "Collecte d'éléments probants suffisants et fiables",
      "Documentation dans les papiers de travail et supervision continue de la mission",
    ],
  },
  {
    label: "Étape 4",
    title: "Communication des résultats",
    items: [
      "Formalisation des constats, de leurs causes, des risques associés et des recommandations",
      "Séance contradictoire avec l'audité pour valider les faits",
      "Rapport final intégrant les plans d'action, les responsables et les échéances",
      "Évaluation globale (notation) de la maîtrise des risques du processus audité",
    ],
  },
  {
    label: "Étape 5",
    title: "Suivi des recommandations",
    items: [
      "Suivi périodique de la mise en œuvre des plans d'action",
      "Reporting régulier au comité d'audit sur l'avancement",
      "Clôture formelle des recommandations une fois soldées",
    ],
  },
  {
    label: "Transverse",
    title: "Assurance qualité",
    items: [
      "Auto-évaluations internes régulières de la fonction d'audit",
      "Évaluations externes indépendantes à intervalles réguliers",
      "Respect des principes déontologiques : intégrité, objectivité, confidentialité, compétence",
    ],
  },
];

function MethodStep({
  step,
  index,
}: {
  step: { label: string; title: string; items: string[] };
  index: number;
}) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
        {index}
      </span>
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange">
          {step.label}
        </span>
        <h4 className="mt-0.5 text-sm font-semibold text-brand-ink">{step.title}</h4>
        <ul className="mt-2 space-y-1.5">
          {step.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] text-brand-ink-light">
              <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-orange/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Audit & Assurance — Nos Services",
    description: service.shortDescription,
  };
}

export default async function AuditAssurancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <PageHero
        eyebrow={t("available")}
        title={service.name}
        description={service.shortDescription}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title"), href: "/services" },
          { label: service.name },
        ]}
        photo="/H Audit Assurance.png"
        objectPosition="65% center"
        overlayClass="from-brand-ink/92 via-brand-ink/70 to-brand-ink/30"
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink text-white">
                <Icon name={service.icon} size={24} />
              </span>
            </div>

            <h2 className="mt-7 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("presentation")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
              {service.presentation}
            </p>

            <h2 className="mt-12 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("benefits")}
            </h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-brand-ink-light sm:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                  {b}
                </li>
              ))}
            </ul>

            {/* METHODOLOGY */}
            <h2 className="mt-12 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("methodology")}
            </h2>

            {/* Part A */}
            <div className="mt-8 rounded-sm border border-black/10 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                A.
              </p>
              <h3 className="mt-1 font-serif-display text-lg font-semibold text-brand-ink">
                {t("auditExternalTitle")}
              </h3>
              <ol className="mt-6 space-y-6">
                {methodologyA.map((step, i) => (
                  <MethodStep key={step.label} step={step} index={i} />
                ))}
              </ol>
            </div>

            {/* Part B */}
            <div className="mt-6 rounded-sm border border-black/10 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                B.
              </p>
              <h3 className="mt-1 font-serif-display text-lg font-semibold text-brand-ink">
                {t("auditInternalTitle")}
              </h3>
              <ol className="mt-6 space-y-6">
                {methodologyB.map((step, i) => (
                  <MethodStep key={step.label} step={step} index={i + 1} />
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
              <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                {t("sidebarCtaTitle", { name: service.name })}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-light">
                {t("sidebarCtaDesc")}
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                {t("sidebarCtaBtn")}
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-sm border border-black/10 p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
                {t("otherServices")}
              </h3>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="flex items-center justify-between text-sm text-brand-ink-light hover:text-brand-orange"
                    >
                      {r.name}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
