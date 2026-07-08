import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { services, getServiceContent } from "@/lib/data";

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

const methodologyAEn = [
  {
    label: "Step 0",
    title: "Engagement acceptance",
    items: [
      "Assessment of client integrity and engagement-related risks",
      "Independence check and absence of conflicts of interest",
      "Formalisation of engagement terms (engagement letter)",
    ],
  },
  {
    label: "Step 1",
    title: "Planning and risk assessment",
    items: [
      "In-depth understanding of the business, environment and internal controls",
      "Determination of materiality thresholds (overall and by nature of transactions)",
      "Identification and assessment of risks of material misstatement, including fraud risks",
      "Preparation of the engagement plan and detailed work programme",
    ],
  },
  {
    label: "Step 2",
    title: "Control procedures",
    items: [
      "Strategy combining tests of controls and substantive procedures",
      "Control tests on cycles assessed as high-risk",
      "Substantive procedures: tests of details, analytical procedures, statistical sampling",
      "Possible use of external experts or subsidiary auditors in a group context",
    ],
  },
  {
    label: "Step 3",
    title: "Review and synthesis",
    items: [
      "Evaluation of identified misstatements and their impact on the accounts",
      "Review of post-closing events",
      "Assessment of going concern",
      "Obtaining written representations from management",
      "Independent quality review and hierarchical review before issuance",
    ],
  },
  {
    label: "Step 4",
    title: "Reporting",
    items: [
      "Formulation of the audit opinion (unqualified, qualified, adverse, or disclaimer)",
      "Communication of key matters that structured the audit",
      "Presentation of conclusions to governance and issuance of the report",
    ],
  },
];

const methodologyBEn = [
  {
    label: "Step 1",
    title: "Strategic planning",
    items: [
      "Building the risk map and audit universe",
      "Preparation of the annual or multi-year audit plan, approved by the audit committee",
      "Prioritisation of engagements by risk level and resource allocation",
    ],
  },
  {
    label: "Step 2",
    title: "Engagement planning",
    items: [
      "Definition of objectives, scope and evaluation criteria",
      "Analysis of risks specific to the process or entity being audited",
      "Construction of a risk-control matrix and work programme",
    ],
  },
  {
    label: "Step 3",
    title: "Fieldwork",
    items: [
      "Testing of design and operational effectiveness of controls in place",
      "Collection of sufficient and reliable evidence",
      "Documentation in working papers and ongoing supervision of the engagement",
    ],
  },
  {
    label: "Step 4",
    title: "Reporting",
    items: [
      "Formalisation of findings, their causes, associated risks and recommendations",
      "Adversarial session with the auditee to validate the facts",
      "Final report incorporating action plans, responsible parties and deadlines",
      "Overall assessment (rating) of risk management for the audited process",
    ],
  },
  {
    label: "Step 5",
    title: "Follow-up of recommendations",
    items: [
      "Periodic monitoring of action plan implementation",
      "Regular reporting to the audit committee on progress",
      "Formal closure of recommendations once addressed",
    ],
  },
  {
    label: "Cross-cutting",
    title: "Quality assurance",
    items: [
      "Regular internal self-assessments of the audit function",
      "Independent external assessments at regular intervals",
      "Adherence to ethical principles: integrity, objectivity, confidentiality, competence",
    ],
  },
];

const methodologyAZh = [
  {
    label: "第0步",
    title: "接受业务委托",
    items: [
      "评估客户诚信度及业务相关风险",
      "独立性检查及无利益冲突确认",
      "正式确定业务条款（业务约定书）",
    ],
  },
  {
    label: "第1步",
    title: "计划与风险评估",
    items: [
      "深入了解业务、经营环境及内部控制",
      "确定重要性水平（整体及按交易性质）",
      "识别并评估重大错报风险，包括舞弊风险",
      "编制业务计划及详细工作方案",
    ],
  },
  {
    label: "第2步",
    title: "控制程序",
    items: [
      "综合运用控制测试和实质性程序的审计策略",
      "对高风险循环进行控制测试",
      "实质性程序：细节测试、分析性程序、统计抽样",
      "在集团背景下可能借助外部专家或子公司审计师",
    ],
  },
  {
    label: "第3步",
    title: "审核与综合",
    items: [
      "评估已识别错报及其对账目的影响",
      "审查期后事项",
      "评估持续经营假设",
      "获取管理层书面声明",
      "出具报告前进行独立质量复核和层级审核",
    ],
  },
  {
    label: "第4步",
    title: "汇报",
    items: [
      "出具审计意见（无保留、保留、否定或无法表示意见）",
      "沟通构成审计基础的关键事项",
      "向治理层提交结论并出具报告",
    ],
  },
];

const methodologyBZh = [
  {
    label: "第1步",
    title: "战略规划",
    items: [
      "建立风险图谱和审计范围",
      "编制年度或多年期审计计划，经审计委员会批准",
      "按风险等级确定审计优先顺序并分配资源",
    ],
  },
  {
    label: "第2步",
    title: "业务计划",
    items: [
      "确定目标、范围和评估标准",
      "分析被审计流程或实体的特定风险",
      "建立风险控制矩阵和工作方案",
    ],
  },
  {
    label: "第3步",
    title: "现场工作",
    items: [
      "测试已有控制的设计有效性和运行有效性",
      "收集充分、可靠的证据",
      "在工作底稿中记录并持续监督业务执行",
    ],
  },
  {
    label: "第4步",
    title: "沟通结果",
    items: [
      "正式记录发现、原因、相关风险和建议",
      "与被审计方进行对质以核实事实",
      "提交含行动计划、责任人和时限的最终报告",
      "对被审计流程的风险管控进行综合评估（评级）",
    ],
  },
  {
    label: "第5步",
    title: "跟进建议落实",
    items: [
      "定期监控行动计划的实施情况",
      "定期向审计委员会报告进展",
      "建议落实后正式关闭",
    ],
  },
  {
    label: "横向",
    title: "质量保证",
    items: [
      "审计职能的定期内部自我评估",
      "定期进行独立外部评估",
      "遵守职业道德原则：诚信、客观、保密、胜任能力",
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
  const sc = getServiceContent(service, locale);
  const mA = locale === "en" ? methodologyAEn : locale === "zh" ? methodologyAZh : methodologyA;
  const mB = locale === "en" ? methodologyBEn : locale === "zh" ? methodologyBZh : methodologyB;

  return (
    <>
      <PageHero
        eyebrow={t("available")}
        title={sc.name}
        description={sc.shortDescription}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title"), href: "/services" },
          { label: sc.name },
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
              {sc.presentation}
            </p>

            <h2 className="mt-12 font-serif-display text-2xl font-semibold text-brand-ink">
              {t("benefits")}
            </h2>
            <ul className="mt-5 space-y-3">
              {sc.benefits.map((b) => (
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
                {mA.map((step, i) => (
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
                {mB.map((step, i) => (
                  <MethodStep key={step.label} step={step} index={i + 1} />
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-black/10 bg-[#f7f7f8] p-7">
              <h3 className="font-serif-display text-lg font-semibold text-brand-ink">
                {t("sidebarCtaTitle", { name: sc.name })}
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
                {related.map((r) => {
                  const rsc = getServiceContent(r, locale);
                  return (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="flex items-center justify-between text-sm text-brand-ink-light hover:text-brand-orange"
                      >
                        {rsc.name}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
