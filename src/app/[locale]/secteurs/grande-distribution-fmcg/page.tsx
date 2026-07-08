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

type SectorI18n = {
  heroTitle: string;
  heroDesc: string;
  eyebrow?: string;
  introBreadcrumb: string;
  introP1: string;
  introP2: string;
  challengesBannerIntro: string;
  challengesBannerSummary: string;
  challengesBannerItems: string[];
  navLinks: { id: string; label: string }[];
  pourquoiItems: string[];
  defis: string[];
  domains: {
    id: string;
    title: string;
    desc: string;
    gridClass: string;
    items: string[];
  }[];
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    heroTitle:
      "Supporting your growth in a market where speed of execution and margin control make all the difference.",
    heroDesc:
      "We support manufacturers, importers, distributors and wholesalers in strengthening their financial performance, governance and regulatory compliance.",
    eyebrow: "Grande Distribution & FMCG",
    introBreadcrumb: "Grande Distribution & FMCG",
    introP1:
      "Companies operating in the fast-moving consumer goods sector face an environment characterised by high transaction volumes, rapid stock turnover, constant margin pressure and complex distribution networks.",
    introP2:
      "At Mashini & Associés, we support manufacturers, importers, distributors and wholesalers in strengthening their financial performance, governance and regulatory compliance.",
    challengesBannerIntro: "The FMCG sector demands perfect control of:",
    challengesBannerSummary:
      "Reliable financial information enables management to make swift, sound decisions in a highly competitive environment.",
    challengesBannerItems: [
      "Procurement costs",
      "Commercial margins",
      "Promotions & trade discounts",
      "Inventory",
      "Trade receivables",
      "Fraud risks",
      "Tax & para-fiscal obligations",
      "Standardised invoice compliance",
    ],
    navLinks: [
      { id: "marges", label: "Margin & profitability management" },
      { id: "stocks", label: "Inventory management" },
      { id: "controle-interne", label: "Internal controls" },
      { id: "facturation", label: "Billing & compliance" },
      { id: "fiscalite", label: "Taxation" },
      { id: "comptabilite", label: "Accounting & Reporting" },
      { id: "controle-gestion", label: "Management control" },
      { id: "tresorerie", label: "Cash management" },
      { id: "finance", label: "Corporate finance" },
    ],
    pourquoiItems: [
      "Accounting & Reporting",
      "Taxation",
      "Internal controls",
      "Management control",
      "Corporate finance",
      "Governance",
      "Risk management",
      "International subsidiary support",
    ],
    defis: [
      "Improve commercial margins.",
      "Reduce inventory-related losses.",
      "Secure sales and billing processes.",
      "Optimise working capital requirements.",
      "Strengthen internal controls.",
      "Meet tax, para-fiscal and regulatory obligations.",
      "Produce reliable financial information for management, shareholders and international groups.",
    ],
    domains: [
      {
        id: "marges",
        title: "Margin & profitability management",
        desc: "In a sector where margins are often slim, every decision has a direct impact on profitability. We support companies in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Margin analysis by product",
          "Margin analysis by distribution channel",
          "Margin analysis by customer",
          "Monitoring of trade discounts",
          "Evaluation of promotional profitability",
          "Measurement of commercial performance",
        ],
      },
      {
        id: "stocks",
        title: "Inventory management",
        desc: "Inventory is a strategic asset. We help companies strengthen:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Inventory control",
          "Inventory valuation",
          "Physical stock counts",
          "Shrinkage monitoring",
          "Expired goods control",
          "Inventory variance tracking",
          "Stock rotation analysis",
        ],
      },
      {
        id: "controle-interne",
        title: "Internal controls",
        desc: "FMCG companies face significant risks related to transaction volumes. We strengthen controls over:",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "Sales",
          "Collections",
          "Trade discounts",
          "Promotions",
          "Purchases",
          "Inventory",
          "Fixed assets",
          "Treasury",
          "Trade receivables",
        ],
      },
      {
        id: "facturation",
        title: "Billing & compliance",
        desc: "High sales volumes require rigorous management of billing processes. We support companies in:",
        gridClass: "space-y-2.5",
        items: [
          "Compliance with the standardised invoice",
          "Approval of Electronic Invoicing Systems (SFE)",
          "Organisation of billing processes",
          "Data quality control",
          "Securing billing flows",
        ],
      },
      {
        id: "fiscalite",
        title: "Taxation",
        desc: "We support companies in managing their tax obligations. Our services cover in particular:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Corporate income tax (IS)",
          "Personal income tax (IRPP)",
          "Value-added tax (TVA)",
          "Para-fiscal obligations",
          "Tax compliance",
          "Assistance during tax audits",
          "Tax optimisation within regulatory limits",
        ],
      },
      {
        id: "comptabilite",
        title: "Accounting & Reporting",
        desc: "We produce reliable financial information enabling management to steer their business effectively. Our services include:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "SYSCOHADA-compliant accounting",
          "Financial reporting",
          "Group reporting",
          "Conversion to IFRS standards",
          "Monthly closings",
          "Financial consolidation",
          "Financial analysis",
        ],
      },
      {
        id: "controle-gestion",
        title: "Management control",
        desc: "We help companies steer their performance using reliable indicators. Our services include:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Budgets",
          "Variance monitoring",
          "Management dashboards",
          "Profitability analysis",
          "Distribution cost monitoring",
          "Logistics cost analysis",
        ],
      },
      {
        id: "tresorerie",
        title: "Cash management",
        desc: "Sector growth requires proactive liquidity management. We support our clients in:",
        gridClass: "space-y-2.5",
        items: [
          "Working capital requirement management",
          "Trade receivables monitoring",
          "Supplier management",
          "Cash flow forecasting",
          "Optimisation of the cash conversion cycle",
        ],
      },
      {
        id: "finance",
        title: "Corporate finance",
        desc: "We support companies in their growth projects. Our services include:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Business plans",
          "Financial modelling",
          "Business valuation",
          "Due diligence",
          "Financing file preparation",
          "Support with banks and investors",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    heroTitle: "助力您在执行速度和利润管控至关重要的市场中实现增长。",
    heroDesc:
      "我们为制造商、进口商、分销商和批发商提供支持，帮助其提升财务绩效、完善公司治理并满足监管合规要求。",
    eyebrow: "大型零售与快消品",
    introBreadcrumb: "大型分销与快消品",
    introP1:
      "快速消费品行业的企业面临交易量大、库存周转快、利润压力持续以及分销网络复杂等特殊环境。",
    introP2:
      "在Mashini & Associés，我们为制造商、进口商、分销商和批发商提供支持，帮助其强化财务绩效、完善公司治理并满足监管合规要求。",
    challengesBannerIntro: "快消品行业要求对以下方面实现精准管控：",
    challengesBannerSummary:
      "可靠的财务信息使管理层能够在竞争激烈的环境中迅速做出正确决策。",
    challengesBannerItems: [
      "采购成本",
      "商业利润",
      "促销与商业折扣",
      "库存",
      "应收账款",
      "欺诈风险",
      "税务及准税务义务",
      "规范发票合规",
    ],
    navLinks: [
      { id: "marges", label: "利润与盈利能力管理" },
      { id: "stocks", label: "库存管理" },
      { id: "controle-interne", label: "内部控制" },
      { id: "facturation", label: "开票与合规" },
      { id: "fiscalite", label: "税务" },
      { id: "comptabilite", label: "会计与报告" },
      { id: "controle-gestion", label: "管理控制" },
      { id: "tresorerie", label: "现金管理" },
      { id: "finance", label: "企业融资" },
    ],
    pourquoiItems: [
      "会计与报告",
      "税务",
      "内部控制",
      "管理控制",
      "企业融资",
      "公司治理",
      "风险管理",
      "国际子公司支持",
    ],
    defis: [
      "提升商业利润。",
      "减少库存相关损失。",
      "确保销售和开票流程安全。",
      "优化营运资金需求。",
      "强化内部控制。",
      "遵守税务、准税务及监管义务。",
      "为管理层、股东和国际集团提供可靠的财务信息。",
    ],
    domains: [
      {
        id: "marges",
        title: "利润与盈利能力管理",
        desc: "在利润往往偏低的行业，每项决策都直接影响盈利能力。我们协助企业：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "按产品分析利润",
          "按分销渠道分析利润",
          "按客户分析利润",
          "跟踪商业折扣",
          "评估促销盈利能力",
          "衡量商业业绩",
        ],
      },
      {
        id: "stocks",
        title: "库存管理",
        desc: "库存是战略性资产。我们帮助企业强化：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "库存控制",
          "库存计价",
          "实物盘点",
          "损耗监控",
          "过期商品控制",
          "库存差异跟踪",
          "库存周转分析",
        ],
      },
      {
        id: "controle-interne",
        title: "内部控制",
        desc: "快消品企业因交易量大而面临重大风险。我们强化以下方面的控制：",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "销售",
          "收款",
          "商业折扣",
          "促销",
          "采购",
          "库存",
          "固定资产",
          "资金",
          "应收账款",
        ],
      },
      {
        id: "facturation",
        title: "开票与合规",
        desc: "高销量要求严格管理开票流程。我们协助企业：",
        gridClass: "space-y-2.5",
        items: [
          "符合规范发票要求",
          "电子开票系统（SFE）审批",
          "开票流程组织",
          "数据质量控制",
          "开票流程安全保障",
        ],
      },
      {
        id: "fiscalite",
        title: "税务",
        desc: "我们协助企业管理税务义务，服务内容主要包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "企业所得税（IS）",
          "个人所得税（IRPP）",
          "增值税（TVA）",
          "准税务义务",
          "税务合规",
          "税务稽查协助",
          "合规范围内的税务优化",
        ],
      },
      {
        id: "comptabilite",
        title: "会计与报告",
        desc: "我们提供可靠的财务信息，使管理层能够有效管理业务。服务内容包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "符合SYSCOHADA的会计处理",
          "财务报告",
          "集团报告",
          "转换为IFRS准则",
          "月度结账",
          "财务合并",
          "财务分析",
        ],
      },
      {
        id: "controle-gestion",
        title: "管理控制",
        desc: "我们通过可靠指标帮助企业管理绩效，服务内容包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "预算",
          "差异监控",
          "管理仪表盘",
          "盈利能力分析",
          "分销成本监控",
          "物流成本分析",
        ],
      },
      {
        id: "tresorerie",
        title: "现金管理",
        desc: "行业发展需要主动管理流动性。我们协助客户：",
        gridClass: "space-y-2.5",
        items: [
          "营运资金需求管理",
          "应收账款跟踪",
          "供应商管理",
          "现金流预测",
          "优化现金转换周期",
        ],
      },
      {
        id: "finance",
        title: "企业融资",
        desc: "我们协助企业开展增长项目，服务内容包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "商业计划书",
          "财务建模",
          "企业估值",
          "尽职调查",
          "融资文件准备",
          "银行与投资者沟通支持",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function GrandeDistributionFmcgPage({
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
        eyebrow={d?.eyebrow ?? "Grande Distribution & FMCG"}
        title={d?.heroTitle ?? "Accompagner votre croissance dans un marché où la rapidité d'exécution et la maîtrise des marges font la différence."}
        description={d?.heroDesc ?? "Nous accompagnons les fabricants, importateurs, distributeurs et grossistes dans le renforcement de leur performance financière, de leur gouvernance et de leur conformité réglementaire."}
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
                {d?.introP1 ?? "Les entreprises du secteur des biens de grande consommation évoluent dans un environnement caractérisé par des volumes de transactions élevés, une forte rotation des stocks, une pression permanente sur les marges et un réseau de distribution complexe."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Chez Mashini & Associés, nous accompagnons les fabricants, importateurs, distributeurs et grossistes dans le renforcement de leur performance financière, de leur gouvernance et de leur conformité réglementaire."}
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
                {t("challengesBannerEyebrow")}
              </p>
              <h2 className="mt-3 font-serif-display text-xl font-semibold text-white sm:text-2xl">
                {t("challengesBannerTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {d?.challengesBannerIntro ?? "Le secteur FMCG exige une parfaite maîtrise de :"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:self-center">
              {(d?.challengesBannerItems ?? defisSeceur).map((item) => (
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
            {d?.challengesBannerSummary ?? "Une information financière fiable permet aux dirigeants de prendre rapidement les bonnes décisions dans un environnement très concurrentiel."}
          </p>
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

              {/* 01 — Marges */}
              <div id="marges" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[0]?.title ?? "Gestion des marges et rentabilité"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Dans un secteur où les marges sont souvent faibles, chaque décision a un impact direct sur la rentabilité. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[0]?.items ?? [
                    "L'analyse des marges par produit",
                    "L'analyse des marges par canal de distribution",
                    "L'analyse des marges par client",
                    "Le suivi des remises commerciales",
                    "L'évaluation de la rentabilité des promotions",
                    "La mesure de la performance commerciale",
                  ]).map((item) => (
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
                  {d?.domains?.[1]?.title ?? "Gestion des stocks"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "Les stocks représentent un actif stratégique. Nous aidons les entreprises à renforcer :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[1]?.items ?? [
                    "Le contrôle des stocks",
                    "La valorisation des stocks",
                    "Les inventaires physiques",
                    "Le suivi des pertes",
                    "Le contrôle des produits périmés",
                    "Le suivi des écarts d'inventaire",
                    "La rotation des stocks",
                  ]).map((item) => (
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
                  {d?.domains?.[2]?.title ?? "Contrôle interne"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Les entreprises du secteur FMCG sont confrontées à des risques importants liés aux volumes de transactions. Nous renforçons les contrôles sur :"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {(d?.domains?.[2]?.items ?? [
                    "Ventes",
                    "Encaissements",
                    "Remises commerciales",
                    "Promotions",
                    "Achats",
                    "Stocks",
                    "Immobilisations",
                    "Trésorerie",
                    "Comptes clients",
                  ]).map((item) => (
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
                  {d?.domains?.[3]?.title ?? "Facturation et conformité"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[3]?.desc ?? "Le volume élevé des ventes impose une gestion rigoureuse des processus de facturation. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[3]?.items ?? [
                    "La mise en conformité avec la facture normalisée",
                    "L'homologation des Systèmes de Facturation Électronique (SFE)",
                    "L'organisation des processus de facturation",
                    "Le contrôle de la qualité des données",
                    "La sécurisation des flux de facturation",
                  ]).map((item) => (
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
                  {d?.domains?.[4]?.title ?? "Fiscalité"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales. Nos interventions couvrent notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "Impôt sur les Sociétés (IS)",
                    "Impôt sur le Revenu des Personnes Physiques (IRPP)",
                    "Taxe sur la Valeur Ajoutée (TVA)",
                    "Obligations parafiscales",
                    "Conformité fiscale",
                    "Assistance lors des contrôles fiscaux",
                    "Optimisation fiscale dans le respect de la réglementation",
                  ]).map((item) => (
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
                  {d?.domains?.[5]?.title ?? "Comptabilité & Reporting"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[5]?.desc ?? "Nous produisons une information financière fiable permettant aux dirigeants de piloter efficacement leur activité. Nos prestations comprennent :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[5]?.items ?? [
                    "Comptabilité conforme au SYSCOHADA",
                    "Reporting financier",
                    "Reporting groupe",
                    "Conversion vers les normes IFRS",
                    "Clôtures mensuelles",
                    "Consolidation financière",
                    "Analyse financière",
                  ]).map((item) => (
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
                  {d?.domains?.[6]?.title ?? "Contrôle de gestion"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Nous aidons les entreprises à piloter leur performance grâce à des indicateurs fiables. Nos interventions comprennent :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[6]?.items ?? [
                    "Budgets",
                    "Suivi des écarts",
                    "Tableaux de bord",
                    "Analyse de la rentabilité",
                    "Suivi des coûts de distribution",
                    "Analyse des coûts logistiques",
                  ]).map((item) => (
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
                  {d?.domains?.[7]?.title ?? "Gestion de la trésorerie"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[7]?.desc ?? "Le développement du secteur nécessite une gestion proactive des liquidités. Nous accompagnons nos clients dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[7]?.items ?? [
                    "La gestion du besoin en fonds de roulement",
                    "Le suivi des créances clients",
                    "La gestion des fournisseurs",
                    "Les prévisions de trésorerie",
                    "L'optimisation du cycle de conversion de trésorerie",
                  ]).map((item) => (
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
                  {d?.domains?.[8]?.title ?? "Finance d'entreprise"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[8]?.desc ?? "Nous accompagnons les entreprises dans leurs projets de croissance. Nos services comprennent :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[8]?.items ?? [
                    "Business Plans",
                    "Modélisation financière",
                    "Valorisation d'entreprise",
                    "Due Diligence",
                    "Préparation de dossiers de financement",
                    "Accompagnement auprès des banques et des investisseurs",
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
