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

type SectorI18n = {
  introH2: string;
  introP1: string;
  introP2: string;
  navLinks: { id: string; label: string }[];
  pourquoiItems: string[];
  defis: string[];
  domains: {
    id: string;
    title: string;
    desc: string;
    gridClass: string;
    items: string[];
    footnote?: string;
  }[];
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    introH2: "A sector where financial control is essential",
    introP1:
      "Transport and logistics operate in an environment characterised by high transaction volumes, often limited margins and significant regulatory requirements.",
    introP2:
      "Profitability depends on reliable financial information, rigorous cash management and ongoing operational control. At Mashini & Associés, we support companies in securing their financial processes and improving their performance.",
    navLinks: [
      { id: "tresorerie", label: "Cash management" },
      { id: "facturation", label: "Billing & revenue" },
      { id: "comptabilite", label: "Accounting & Reporting" },
      { id: "controle-interne", label: "Internal controls" },
      { id: "conformite", label: "Regulatory compliance" },
      { id: "couts", label: "Cost management" },
      { id: "gouvernance", label: "Governance & risks" },
    ],
    pourquoiItems: [
      "Accounting expertise",
      "Internal controls",
      "Taxation",
      "Financial reporting",
      "Risk management",
      "Corporate Finance",
      "Governance",
      "International subsidiary support",
    ],
    defis: [
      "Secure collections and payments.",
      "Reduce billing errors and accelerate collections.",
      "Control operating costs and improve margins.",
      "Produce reliable financial reporting for management and international groups.",
      "Strengthen internal controls over operations, treasury and assets.",
      "Meet regulatory, tax, social and customs requirements.",
    ],
    domains: [
      {
        id: "tresorerie",
        title: "Cash management",
        desc: "Transport companies handle significant cash flows daily. We help our clients strengthen:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Cash procedures",
          "Controls over collections",
          "Bank reconciliations",
          "Driver advances monitoring",
          "Fuel expenditure management",
          "Payment controls",
        ],
      },
      {
        id: "facturation",
        title: "Billing & revenue management",
        desc: "Every trip, delivery or service represents a billing operation. We support companies in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Billing by trip",
          "Billing by mission",
          "Billing by contract",
          "Billing control automation",
          "Billing error reduction",
          "Trade receivables monitoring",
          "Order-to-Cash cycle improvement",
        ],
        footnote: "Reliable billing contributes directly to profitability and client relationship quality.",
      },
      {
        id: "comptabilite",
        title: "Accounting & Reporting",
        desc: "We produce financial information compliant with the requirements of management, shareholders and international groups.",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "SYSCOHADA accounting",
          "IFRS reporting",
          "Group reporting",
          "Monthly closings",
          "Consolidation",
          "Accounting reconciliation",
          "Financial analysis",
        ],
      },
      {
        id: "controle-interne",
        title: "Internal controls",
        desc: "The sector is exposed to numerous operational risks. We help companies strengthen their control frameworks over:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Transport revenues",
          "Fuel expenditure",
          "Mission expenses",
          "Tolls",
          "Spare parts inventory",
          "Fixed assets (trucks, trailers, plant)",
          "Purchases",
          "Payroll",
          "Transport contracts",
        ],
        footnote: "Our approach is grounded in international best practices of governance and internal control.",
      },
      {
        id: "conformite",
        title: "Regulatory compliance",
        desc: "Companies must comply with a complex regulatory framework. We support them in particular on:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Tax obligations",
          "Social obligations",
          "Operating licences and authorisations",
          "Customs obligations (freight forwarders and international operations)",
          "Accounting and documentary obligations",
          "Retention of supporting documents",
        ],
      },
      {
        id: "couts",
        title: "Cost management",
        desc: "In this sector, cost control is a major lever of competitiveness. We support our clients in the analysis and management of:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Cost per vehicle",
          "Cost per route",
          "Cost per client",
          "Fuel cost",
          "Maintenance costs",
          "Personnel costs",
          "Margins per contract",
        ],
      },
      {
        id: "gouvernance",
        title: "Governance & risk management",
        desc: "We help companies strengthen their governance and mitigate risks related to their operations.",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Risk mapping",
          "Fraud prevention",
          "Segregation of duties",
          "Operational procedures",
          "Document management",
          "Internal audit",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    introH2: "财务管控至关重要的行业",
    introP1:
      "运输与物流业在交易量大、利润往往有限、监管要求繁重的环境中运营。",
    introP2:
      "盈利能力取决于可靠的财务信息、严格的现金管理和对业务的持续控制。在Mashini & Associés，我们协助企业确保财务流程安全并提升绩效。",
    navLinks: [
      { id: "tresorerie", label: "现金管理" },
      { id: "facturation", label: "开票与收入" },
      { id: "comptabilite", label: "会计与报告" },
      { id: "controle-interne", label: "内部控制" },
      { id: "conformite", label: "监管合规" },
      { id: "couts", label: "成本管理" },
      { id: "gouvernance", label: "治理与风险" },
    ],
    pourquoiItems: [
      "会计专业知识",
      "内部控制",
      "税务",
      "财务报告",
      "风险管理",
      "企业融资",
      "公司治理",
      "国际子公司支持",
    ],
    defis: [
      "确保收款和付款安全。",
      "减少开票错误并加快应收账款回收。",
      "管控运营成本并提升利润。",
      "为管理层和国际集团提供可靠财务报告。",
      "强化对业务、资金和资产的内部控制。",
      "满足监管、税务、社会和海关要求。",
    ],
    domains: [
      {
        id: "tresorerie",
        title: "现金管理",
        desc: "运输企业每日处理大量现金流。我们协助客户强化：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "现金程序",
          "收款控制",
          "银行对账",
          "司机垫款监控",
          "燃料支出管理",
          "付款控制",
        ],
      },
      {
        id: "facturation",
        title: "开票与收入管理",
        desc: "每次行程、交付或服务都构成一次开票业务。我们协助企业：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "按行程开票",
          "按任务开票",
          "按合同开票",
          "开票控制自动化",
          "减少开票错误",
          "应收账款监控",
          "订单到收款周期优化",
        ],
        footnote: "可靠的开票直接有助于盈利能力和客户关系质量。",
      },
      {
        id: "comptabilite",
        title: "会计与报告",
        desc: "我们产出符合管理层、股东和国际集团要求的财务信息。",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "SYSCOHADA会计",
          "IFRS报告",
          "集团报告",
          "月度结账",
          "合并",
          "会计调节",
          "财务分析",
        ],
      },
      {
        id: "controle-interne",
        title: "内部控制",
        desc: "该行业面临众多运营风险。我们协助企业强化以下方面的控制框架：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "运输收入",
          "燃料支出",
          "差旅费",
          "过路费",
          "备件库存",
          "固定资产（卡车、拖车、设备）",
          "采购",
          "薪资",
          "运输合同",
        ],
        footnote: "我们的方法以国际治理和内部控制最佳实践为基础。",
      },
      {
        id: "conformite",
        title: "监管合规",
        desc: "企业必须遵守复杂的监管框架。我们就以下方面提供支持：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "税务义务",
          "社会义务",
          "经营许可证和授权",
          "海关义务（货运代理和国际业务）",
          "会计和文件义务",
          "证明文件留存",
        ],
      },
      {
        id: "couts",
        title: "成本管理",
        desc: "在该行业，成本控制是竞争力的重要杠杆。我们协助客户分析和管理：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "单车成本",
          "单次路线成本",
          "单客户成本",
          "燃料成本",
          "维护成本",
          "人员成本",
          "合同利润",
        ],
      },
      {
        id: "gouvernance",
        title: "治理与风险管理",
        desc: "我们协助企业强化治理并降低业务相关风险。",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "风险图谱",
          "预防欺诈",
          "职责分离",
          "操作程序",
          "文件管理",
          "内部审计",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function TransportLogistiquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "secteurs" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const d = getSectorData(locale);
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
                {d?.introH2 ?? "Un secteur où la maîtrise financière est essentielle"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Le transport et la logistique évoluent dans un environnement où les volumes de transactions sont élevés, les marges souvent limitées et les exigences réglementaires importantes."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "La rentabilité dépend d'une information financière fiable, d'une gestion rigoureuse de la trésorerie et d'un contrôle permanent des opérations. Chez Mashini & Associés, nous accompagnons les entreprises dans la sécurisation de leurs processus financiers et l'amélioration de leur performance."}
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
              {t("expertiseEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("domainsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            {/* MAIN CONTENT */}
            <div className="space-y-10">

              {/* 01 — Trésorerie */}
              <div id="tresorerie" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[0]?.title ?? "Gestion de la trésorerie"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Les entreprises de transport manipulent quotidiennement d'importants flux de trésorerie. Nous aidons nos clients à renforcer :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[0]?.items ?? [
                    "Procédures de caisse",
                    "Contrôles sur les encaissements",
                    "Rapprochements bancaires",
                    "Suivi des avances aux chauffeurs",
                    "Gestion des dépenses de carburant",
                    "Contrôles des paiements",
                  ]).map((item) => (
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
                  {d?.domains?.[1]?.title ?? "Facturation et gestion des revenus"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "Chaque course, livraison ou prestation constitue une opération de facturation. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[1]?.items ?? [
                    "Facturation par course",
                    "Facturation par mission",
                    "Facturation par contrat",
                    "Automatisation des contrôles de facturation",
                    "Réduction des erreurs de facturation",
                    "Suivi des créances clients",
                    "Amélioration du cycle Order-to-Cash",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
                {d?.domains?.[1]?.footnote ? (
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    {d.domains[1].footnote}
                  </p>
                ) : (
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    Une facturation fiable contribue directement à la{" "}
                    <span className="font-semibold text-brand-ink">rentabilité</span> et à la
                    qualité de la relation client.
                  </p>
                )}
              </div>

              {/* 03 — Comptabilité */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[2]?.title ?? "Comptabilité & Reporting"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Nous produisons une information financière conforme aux exigences des dirigeants, des actionnaires et des groupes internationaux."}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[2]?.items ?? [
                    "Comptabilité SYSCOHADA",
                    "Reporting IFRS",
                    "Reporting groupe",
                    "Clôtures mensuelles",
                    "Consolidation",
                    "Réconciliation comptable",
                    "Analyse financière",
                  ]).map((item) => (
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
                  {d?.domains?.[3]?.title ?? "Contrôle interne"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[3]?.desc ?? "Le secteur est exposé à de nombreux risques opérationnels. Nous aidons les entreprises à renforcer leurs dispositifs de contrôle sur :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[3]?.items ?? [
                    "Recettes de transport",
                    "Dépenses de carburant",
                    "Frais de mission",
                    "Péages",
                    "Stocks de pièces de rechange",
                    "Immobilisations (camions, remorques, engins)",
                    "Achats",
                    "Paie",
                    "Contrats de transport",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
                {d?.domains?.[3]?.footnote ? (
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    {d.domains[3].footnote}
                  </p>
                ) : (
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    Notre approche s&apos;appuie sur les meilleures pratiques internationales de
                    gouvernance et de contrôle interne.
                  </p>
                )}
              </div>

              {/* 05 — Conformité */}
              <div id="conformite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[4]?.title ?? "Conformité réglementaire"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Les entreprises doivent respecter un cadre réglementaire complexe. Nous les accompagnons notamment sur :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "Obligations fiscales",
                    "Obligations sociales",
                    "Licences et autorisations d'exploitation",
                    "Obligations douanières (transitaires et opérations internationales)",
                    "Obligations comptables et documentaires",
                    "Conservation des pièces justificatives",
                  ]).map((item) => (
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
                  {d?.domains?.[5]?.title ?? "Gestion des coûts"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[5]?.desc ?? "Dans ce secteur, la maîtrise des coûts est un levier majeur de compétitivité. Nous accompagnons nos clients dans l'analyse et le pilotage :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[5]?.items ?? [
                    "Coût par véhicule",
                    "Coût par trajet",
                    "Coût par client",
                    "Coût du carburant",
                    "Coûts de maintenance",
                    "Coûts de personnel",
                    "Marges par contrat",
                  ]).map((item) => (
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
                  {d?.domains?.[6]?.title ?? "Gouvernance et gestion des risques"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Nous aidons les entreprises à renforcer leur gouvernance et à limiter les risques liés à leurs opérations."}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[6]?.items ?? [
                    "Cartographie des risques",
                    "Prévention de la fraude",
                    "Séparation des fonctions",
                    "Procédures opérationnelles",
                    "Gestion documentaire",
                    "Audit interne",
                  ]).map((item) => (
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
                    {(d?.navLinks ?? navLinks).map((link) => (
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
              {(d?.pourquoiItems ?? pourquoiItems).map((item) => (
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
              {t("challengesEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("challengesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(d?.defis ?? defis).map((defi) => (
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
