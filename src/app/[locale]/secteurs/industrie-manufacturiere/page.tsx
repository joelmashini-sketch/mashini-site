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
    desc2?: string;
    gridClass: string;
    items: string[];
  }[];
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    introH2: "A strategic partner for industrial companies",
    introP1:
      "The industrial sector operates in an environment where cost control, productive investment, tax obligations and regulatory requirements directly determine competitiveness.",
    introP2:
      "At Mashini & Associés, we support industrial companies at every stage of their development, from value creation to financing.",
    navLinks: [
      { id: "cost-accounting", label: "Cost Accounting & Management control" },
      { id: "code-investissements", label: "Investment Code" },
      { id: "fiscalite", label: "Industrial taxation" },
      { id: "financement", label: "Investment financing" },
      { id: "comptabilite", label: "Accounting & Reporting" },
      { id: "controle-interne", label: "Internal controls & governance" },
      { id: "gestion-investissements", label: "Investment management" },
    ],
    pourquoiItems: [
      "Cost accounting & management control",
      "Industrial taxation",
      "Investment Code",
      "ANAPI audit support",
      "Corporate Finance",
      "Financing research",
      "Internal controls",
      "International subsidiary support",
    ],
    defis: [
      "Reduce production costs and improve margins.",
      "Benefit from incentives under the Investment Code where conditions are met.",
      "Prepare effectively for ANAPI audits.",
      "Strengthen tax compliance, particularly regarding excise duties.",
      "Structure solid files to secure bank financing or support from the Fonds de Promotion de l'Industrie (FPI).",
      "Produce reliable financial information meeting the expectations of management, investors and international groups.",
      "Implement robust internal controls that support sustainable growth.",
    ],
    domains: [
      {
        id: "cost-accounting",
        title: "Cost Accounting & Management control",
        desc: "We help companies steer their profitability through:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Cost accounting",
          "Cost of goods calculation",
          "Standard cost calculation",
          "Production variance analysis",
          "Margin analysis",
          "Industrial budgets",
          "Performance dashboards",
          "Profitability analysis by product, workshop or production line",
        ],
      },
      {
        id: "code-investissements",
        title: "Investment Code",
        desc: "Industrial investments may benefit from incentive regimes where they meet the conditions set by regulations.",
        desc2: "We support our clients in:",
        gridClass: "space-y-2.5",
        items: [
          "Analysis of eligibility for Investment Code benefits",
          "Preparation of approval application files",
          "Monitoring of commitments made under approved investments",
          "Support during ANAPI audit missions",
          "Compliance with reporting obligations related to granted benefits",
        ],
      },
      {
        id: "fiscalite",
        title: "Industrial taxation",
        desc: "We support companies in managing their tax obligations and improving their tax efficiency. Our services cover in particular:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Corporate income tax (IS)",
          "TVA",
          "Excise duties",
          "Investment taxation",
          "Tax compliance review",
          "Assistance during tax audits",
          "Tax optimisation within regulatory limits",
          "Tax risk management",
        ],
      },
      {
        id: "financement",
        title: "Investment financing",
        desc: "Industrial development requires appropriate financing. We support companies in:",
        gridClass: "space-y-2.5",
        items: [
          "Financing file preparation",
          "Business plan development",
          "Financial modelling",
          "Feasibility studies",
          "Cash flow forecasting",
          "Discussions with commercial banks",
          "Mobilisation of public industrial support schemes, notably from the Fonds de Promotion de l'Industrie (FPI)",
          "Preparation of financial information requested by lenders and investors",
        ],
      },
      {
        id: "comptabilite",
        title: "Accounting & Reporting",
        desc: "We produce reliable financial information meeting the requirements of:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "SYSCOHADA",
          "IFRS",
          "US GAAP",
          "Group Reporting",
          "Financial consolidation",
          "Monthly closings",
        ],
      },
      {
        id: "controle-interne",
        title: "Internal controls & governance",
        desc: "We strengthen control frameworks across the entire industrial chain. Our services focus in particular on:",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "Procurement & supply chain",
          "Production",
          "Raw material consumption",
          "Inventory",
          "Fixed assets",
          "Sales",
          "Treasury",
          "Regulatory compliance",
        ],
      },
      {
        id: "gestion-investissements",
        title: "Investment management",
        desc: "We help industrial companies secure their investment projects through:",
        gridClass: "space-y-2.5",
        items: [
          "Financial evaluation of projects",
          "Investment monitoring",
          "Investment budget control",
          "Fixed assets monitoring",
          "Post-investment profitability analysis",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    introH2: "工业企业的战略合作伙伴",
    introP1:
      "工业领域在成本控制、生产性投资、税务义务和监管要求直接决定竞争力的环境中运营。",
    introP2:
      "在Mashini & Associés，我们在工业企业发展的每个阶段提供支持，从价值创造到融资搜寻。",
    navLinks: [
      { id: "cost-accounting", label: "成本会计与管理控制" },
      { id: "code-investissements", label: "投资法典" },
      { id: "fiscalite", label: "工业税务" },
      { id: "financement", label: "投资融资" },
      { id: "comptabilite", label: "会计与报告" },
      { id: "controle-interne", label: "内部控制与治理" },
      { id: "gestion-investissements", label: "投资管理" },
    ],
    pourquoiItems: [
      "成本会计与管理控制",
      "工业税务",
      "投资法典",
      "ANAPI审计支持",
      "企业融资",
      "融资搜寻",
      "内部控制",
      "国际子公司支持",
    ],
    defis: [
      "降低生产成本并提升利润。",
      "在条件具备时享受投资法典规定的优惠。",
      "有效准备ANAPI审计。",
      "强化税务合规，尤其是消费税合规。",
      "构建完善文件以获得银行融资或工业促进基金（FPI）支持。",
      "产出满足管理层、投资者和国际集团期望的可靠财务信息。",
      "建立支持可持续增长的健全内部控制。",
    ],
    domains: [
      {
        id: "cost-accounting",
        title: "成本会计与管理控制",
        desc: "我们通过以下方式帮助企业管理盈利能力：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "成本会计",
          "产品成本计算",
          "标准成本计算",
          "生产差异分析",
          "利润分析",
          "工业预算",
          "绩效仪表盘",
          "按产品、车间或生产线进行盈利能力分析",
        ],
      },
      {
        id: "code-investissements",
        title: "投资法典",
        desc: "工业投资可在满足法规规定条件时享受激励机制。",
        desc2: "我们协助客户：",
        gridClass: "space-y-2.5",
        items: [
          "分析享受投资法典优惠的资格",
          "准备审批申请文件",
          "跟踪已批准投资框架内的承诺履行",
          "ANAPI审计任务支持",
          "遵守与已获批优惠相关的报告义务",
        ],
      },
      {
        id: "fiscalite",
        title: "工业税务",
        desc: "我们协助企业管理税务义务并提升税务效率，服务主要涵盖：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "企业所得税（IS）",
          "TVA",
          "消费税",
          "投资税务",
          "税务合规审查",
          "税务稽查协助",
          "合规范围内的税务优化",
          "税务风险管理",
        ],
      },
      {
        id: "financement",
        title: "投资融资",
        desc: "工业发展需要适当的融资。我们协助企业：",
        gridClass: "space-y-2.5",
        items: [
          "准备融资文件",
          "编制商业计划书",
          "财务建模",
          "可行性研究",
          "现金流预测",
          "与商业银行洽谈",
          "调动公共工业支持机制，特别是工业促进基金（FPI）",
          "准备贷款方和投资者要求的财务信息",
        ],
      },
      {
        id: "comptabilite",
        title: "会计与报告",
        desc: "我们产出满足以下要求的可靠财务信息：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "SYSCOHADA",
          "IFRS",
          "US GAAP",
          "集团报告",
          "财务合并",
          "月度结账",
        ],
      },
      {
        id: "controle-interne",
        title: "内部控制与治理",
        desc: "我们强化整个工业链的控制框架，主要介入领域：",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "采购与供应链",
          "生产",
          "原材料消耗",
          "库存",
          "固定资产",
          "销售",
          "资金",
          "监管合规",
        ],
      },
      {
        id: "gestion-investissements",
        title: "投资管理",
        desc: "我们协助工业企业通过以下方式确保投资项目安全：",
        gridClass: "space-y-2.5",
        items: [
          "项目财务评估",
          "投资监控",
          "投资预算控制",
          "固定资产监控",
          "投资后盈利能力分析",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function IndustrieManufacturierePage({
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
                {d?.introH2 ?? "Un partenaire stratégique pour les industriels"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Le secteur industriel évolue dans un environnement où la maîtrise des coûts, les investissements productifs, les exigences fiscales et les obligations réglementaires conditionnent directement la compétitivité."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Chez Mashini & Associés, nous accompagnons les industriels à chaque étape de leur développement, de la création de valeur à la recherche de financement."}
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
              {t("expertiseEyebrow")}
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
                  {d?.domains?.[0]?.title ?? "Cost Accounting & Contrôle de gestion"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Nous aidons les entreprises à piloter leur rentabilité grâce à :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[0]?.items ?? [
                    "Comptabilité analytique",
                    "Calcul du coût de revient",
                    "Calcul des coûts standards",
                    "Analyse des écarts de production",
                    "Analyse des marges",
                    "Budgets industriels",
                    "Tableaux de bord de performance",
                    "Analyse de rentabilité par produit, atelier ou ligne de production",
                  ]).map((item) => (
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
                  {d?.domains?.[1]?.title ?? "Code des investissements"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "Les investissements industriels peuvent bénéficier de régimes d'incitation lorsqu'ils répondent aux conditions prévues par la réglementation."}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc2 ?? "Nous accompagnons nos clients dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[1]?.items ?? [
                    "L'analyse de l'éligibilité aux avantages du Code des investissements",
                    "La préparation des dossiers de demande d'agrément",
                    "Le suivi des engagements pris dans le cadre des investissements agréés",
                    "L'accompagnement lors des missions de contrôle de l'ANAPI",
                    "Le respect des obligations de reporting liées aux avantages accordés",
                  ]).map((item) => (
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
                  {d?.domains?.[2]?.title ?? "Fiscalité industrielle"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales et dans l'amélioration de leur efficacité fiscale. Nos interventions couvrent notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[2]?.items ?? [
                    "Impôt sur les Sociétés (IS)",
                    "TVA",
                    "Code des accises",
                    "Fiscalité des investissements",
                    "Revue de conformité fiscale",
                    "Assistance lors des contrôles fiscaux",
                    "Optimisation fiscale dans le respect de la réglementation",
                    "Gestion des risques fiscaux",
                  ]).map((item) => (
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
                  {d?.domains?.[3]?.title ?? "Financement des investissements"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[3]?.desc ?? "Le développement industriel nécessite des financements adaptés. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[3]?.items ?? [
                    "La préparation des dossiers de financement",
                    "L'élaboration de Business Plans",
                    "La modélisation financière",
                    "Les études de faisabilité",
                    "Les prévisions de trésorerie",
                    "Les discussions avec les banques commerciales",
                    "La mobilisation des dispositifs publics de soutien à l'industrie, notamment auprès du Fonds de Promotion de l'Industrie (FPI)",
                    "La préparation des informations financières demandées par les prêteurs et investisseurs",
                  ]).map((item) => (
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
                  {d?.domains?.[4]?.title ?? "Comptabilité & Reporting"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Nous produisons une information financière fiable répondant aux exigences :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "SYSCOHADA",
                    "IFRS",
                    "US GAAP",
                    "Reporting Groupe",
                    "Consolidation financière",
                    "Clôtures mensuelles",
                  ]).map((item) => (
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
                  {d?.domains?.[5]?.title ?? "Contrôle interne et gouvernance"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[5]?.desc ?? "Nous renforçons les dispositifs de contrôle sur l'ensemble de la chaîne industrielle. Nos interventions portent notamment sur :"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {(d?.domains?.[5]?.items ?? [
                    "Achats et approvisionnements",
                    "Production",
                    "Consommation des matières premières",
                    "Stocks",
                    "Immobilisations",
                    "Ventes",
                    "Trésorerie",
                    "Conformité réglementaire",
                  ]).map((item) => (
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
                  {d?.domains?.[6]?.title ?? "Gestion des investissements"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Nous aidons les industriels à sécuriser leurs projets d'investissement grâce à :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[6]?.items ?? [
                    "L'évaluation financière des projets",
                    "Le suivi des investissements",
                    "Le contrôle des budgets d'investissement",
                    "Le suivi des immobilisations",
                    "L'analyse de rentabilité post-investissement",
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
