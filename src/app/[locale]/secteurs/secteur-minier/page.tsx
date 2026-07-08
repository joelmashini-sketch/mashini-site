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

type FiscaliteSubsections = {
  codeMinier: { title: string; intro: string; items: string[] };
  superProfitTax: { title: string; intro: string; items: string[] };
  fiscaliteIndirecte: { title: string; items: string[] };
};

type SectorI18n = {
  heroTitle: string;
  heroDesc: string;
  introH2: string;
  introP1: string;
  introP2: string;
  pillars: string[];
  navLinks: { id: string; label: string }[];
  pourquoiItems: string[];
  approche: string[];
  domains: {
    id: string;
    title: string;
    desc: string;
    gridClass: string;
    items?: string[];
    subLabel?: string;
    subItems?: string[];
  }[];
  fiscaliteSubsections: FiscaliteSubsections;
  provisions: { title: string; desc: string; items: string[] };
  reporting: {
    title: string;
    desc: string;
    subLabel: string;
    items: string[];
  };
  controleInterne: {
    title: string;
    desc: string;
    cyclesLabel: string;
    items: string[];
    cossoNote: string;
  };
  hydrocarbures: {
    title: string;
    desc: string;
    autorisationsLabel: string;
    items: string[];
  };
  investissements: { title: string; desc: string; items: string[] };
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    heroTitle: "Mining sector",
    heroDesc:
      "We support mining companies and investors in mastering their financial, fiscal, regulatory and strategic challenges throughout the mining cycle.",
    introH2: "Expertise adapted to the requirements of the DRC Mining Code",
    introP1:
      "The mining sector operates within one of Africa's most demanding legal and fiscal environments. Our teams support companies in applying the provisions of the Mining Code and its regulations, whilst ensuring compliance with international accounting standards and the requirements of international groups.",
    introP2: "We intervene in particular on:",
    pillars: [
      "Financial governance",
      "Regulatory compliance",
      "Financial reporting",
      "Mining taxation",
      "Internal controls",
      "Risk management",
      "Financial performance",
    ],
    navLinks: [
      { id: "gouvernance", label: "Financial governance" },
      { id: "fiscalite", label: "Mining taxation" },
      { id: "provisions", label: "Regulated provisions" },
      { id: "reporting", label: "Group reporting" },
      { id: "controle-interne", label: "Internal controls" },
      { id: "hydrocarbures", label: "Transport & logistics" },
      { id: "investissements", label: "Investment management" },
    ],
    pourquoiItems: [
      "Accounting expertise",
      "Tax expertise",
      "Corporate Finance",
      "Internal controls",
      "Governance",
      "International reporting",
      "Digitalisation",
      "Strategic vision",
    ],
    approche: [
      "Understand mining operations",
      "Assess risks",
      "Secure compliance",
      "Optimise performance",
      "Create lasting value",
    ],
    domains: [],
    fiscaliteSubsections: {
      codeMinier: {
        title: "Mining Code",
        intro: "Our support covers all tax obligations specific to the sector.",
        items: [
          "Mining royalty",
          "Corporate income tax",
          "Mining tax regime",
          "Filing obligations",
          "Tax stabilisation",
          "Applicable tax incentives",
        ],
      },
      superProfitTax: {
        title: "Super Profit Tax",
        intro: "We support companies in:",
        items: [
          "Analysis of application conditions",
          "Calculation",
          "Documentation",
          "Financial impact simulations",
        ],
      },
      fiscaliteIndirecte: {
        title: "Indirect taxation",
        items: ["TVA", "Customs duties", "Local taxation", "Para-fiscal obligations"],
      },
    },
    provisions: {
      title: "Regulated provisions",
      desc: "We support companies in the financial and accounting treatment of regulatory obligations, including:",
      items: [
        "Environmental rehabilitation provision",
        "Mine closure provision",
        "Plant decommissioning provision",
        "Environmental obligations",
        "Reconciliation between regulatory requirements and accounting standards",
      ],
    },
    reporting: {
      title: "Group Reporting",
      desc: "We support international subsidiaries in producing reporting that complies with parent company requirements.",
      subLabel: "Standards",
      items: [
        "Revised SYSCOHADA",
        "IFRS",
        "US GAAP",
        "Group reporting",
        "Consolidation packages",
        "Monthly closings",
        "OHADA to IFRS conversion",
        "OHADA to US GAAP conversion",
      ],
    },
    controleInterne: {
      title: "Internal controls",
      desc: "We design robust control frameworks adapted to mining activities.",
      cyclesLabel: "Cycles covered",
      items: [
        "Purchases", "Inventory", "Fixed assets",
        "Production", "Treasury", "Payroll",
        "Investments", "Contracts", "Exports",
      ],
      cossoNote: "Our approach is grounded in the COSO framework and international best practices.",
    },
    hydrocarbures: {
      title: "Hydrocarbons transport & logistics",
      desc: "Mining companies are heavily dependent on fuel supplies. We support companies in managing the administrative and financial requirements related to this activity.",
      autorisationsLabel: "Authorisations",
      items: [
        "Petroleum product transport authorisation",
        "Storage authorisation",
        "Import authorisation",
        "Regulatory obligations monitoring",
        "Logistics cost control",
      ],
    },
    investissements: {
      title: "Investment management",
      desc: "We support companies in structuring and evaluating their investments.",
      items: [
        "CAPEX",
        "Profitability studies",
        "Valuation",
        "Financial modelling",
        "Due diligence",
        "Business plans",
      ],
    },
  };

  const zh: SectorI18n = {
    heroTitle: "采矿业",
    heroDesc:
      "我们在整个采矿周期内为采矿公司和投资者提供支持，帮助其掌握财务、税务、监管和战略方面的挑战。",
    introH2: "适应刚果民主共和国矿业法典要求的专业知识",
    introP1:
      "采矿业在非洲最严格的法律和税务环境之一中运营。我们的团队协助企业执行《矿业法典》及其法规的规定，同时确保符合国际会计准则和国际集团的要求。",
    introP2: "我们的主要介入领域：",
    pillars: [
      "财务治理",
      "监管合规",
      "财务报告",
      "矿业税务",
      "内部控制",
      "风险管理",
      "财务绩效",
    ],
    navLinks: [
      { id: "gouvernance", label: "财务治理" },
      { id: "fiscalite", label: "矿业税务" },
      { id: "provisions", label: "法定准备金" },
      { id: "reporting", label: "集团报告" },
      { id: "controle-interne", label: "内部控制" },
      { id: "hydrocarbures", label: "运输与物流" },
      { id: "investissements", label: "投资管理" },
    ],
    pourquoiItems: [
      "会计专业知识",
      "税务专业知识",
      "企业融资",
      "内部控制",
      "公司治理",
      "国际报告",
      "数字化",
      "战略视野",
    ],
    approche: [
      "了解采矿业务",
      "评估风险",
      "确保合规",
      "优化绩效",
      "创造持久价值",
    ],
    domains: [],
    fiscaliteSubsections: {
      codeMinier: {
        title: "矿业法典",
        intro: "我们的支持涵盖行业特定的所有税务义务。",
        items: [
          "矿业特许权使用费",
          "企业所得税",
          "矿业税收制度",
          "申报义务",
          "税收稳定",
          "适用税收优惠",
        ],
      },
      superProfitTax: {
        title: "超额利润税",
        intro: "我们协助企业：",
        items: [
          "适用条件分析",
          "计算",
          "文件整理",
          "财务影响模拟",
        ],
      },
      fiscaliteIndirecte: {
        title: "间接税",
        items: ["TVA", "关税", "地方税", "准税务义务"],
      },
    },
    provisions: {
      title: "法定准备金",
      desc: "我们协助企业进行监管义务的财务和会计处理，主要包括：",
      items: [
        "环境修复准备金",
        "矿山关闭准备金",
        "设施拆除准备金",
        "环境义务",
        "监管要求与会计准则的调节",
      ],
    },
    reporting: {
      title: "集团报告",
      desc: "我们协助国际子公司产出符合母公司要求的报告。",
      subLabel: "适用准则",
      items: [
        "修订版SYSCOHADA",
        "IFRS",
        "US GAAP",
        "集团报告",
        "合并报表包",
        "月度结账",
        "OHADA转换为IFRS",
        "OHADA转换为US GAAP",
      ],
    },
    controleInterne: {
      title: "内部控制",
      desc: "我们设计适合采矿活动的强健控制体系。",
      cyclesLabel: "涵盖周期",
      items: [
        "采购", "库存", "固定资产",
        "生产", "资金", "薪资",
        "投资", "合同", "出口",
      ],
      cossoNote: "我们的方法以COSO框架和国际最佳实践为基础。",
    },
    hydrocarbures: {
      title: "油气运输与物流",
      desc: "采矿公司严重依赖燃料供应。我们协助企业管理与此活动相关的行政和财务要求。",
      autorisationsLabel: "许可证",
      items: [
        "石油产品运输许可证",
        "储存许可证",
        "进口许可证",
        "监管义务跟踪",
        "物流成本控制",
      ],
    },
    investissements: {
      title: "投资管理",
      desc: "我们协助企业对投资进行结构化和评估。",
      items: [
        "资本支出（CAPEX）",
        "盈利能力研究",
        "估值",
        "财务建模",
        "尽职调查",
        "商业计划书",
      ],
    },
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function SecteurMinierPage({
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
        eyebrow="Financial Intelligence for Mining Excellence"
        title={d?.heroTitle ?? "Secteur minier"}
        description={d?.heroDesc ?? "Nous accompagnons les sociétés minières et les investisseurs dans la maîtrise de leurs enjeux financiers, fiscaux, réglementaires et stratégiques tout au long du cycle minier."}
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
                {d?.introH2 ?? "Une expertise adaptée aux exigences du Code Minier de la RDC"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Le secteur minier évolue dans un environnement juridique et fiscal parmi les plus exigeants d'Afrique. Nos équipes accompagnent les entreprises dans l'application des dispositions du Code minier et de son règlement, tout en assurant la conformité aux normes comptables internationales et aux exigences des groupes internationaux."}
              </p>
              <p className="mt-3 text-sm text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Nous intervenons notamment sur :"}
              </p>
              <div className="mt-5 h-0.5 w-12 bg-brand-orange" />
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {(d?.pillars ?? pillars).map((p) => (
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
              {t("expertiseEyebrow")}
            </p>
            <h2 className="mt-3 font-serif-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              {t("domainsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            {/* MAIN CONTENT */}
            <div className="space-y-10">

              {/* 01 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.navLinks?.[0]?.label ?? "Gouvernance financière"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {locale === "en"
                    ? "We help finance departments strengthen their organisation to meet the requirements of shareholders, investors and regulatory authorities."
                    : locale === "zh"
                    ? "我们协助财务部门强化其组织架构，以满足股东、投资者和监管机构的要求。"
                    : "Nous aidons les directions financières à renforcer leur organisation afin de répondre aux exigences des actionnaires, des investisseurs et des autorités de régulation."}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(locale === "en"
                    ? ["Financial governance", "Finance function organisation", "Policies and procedures", "Delegations of authority", "Internal controls", "Risk management"]
                    : locale === "zh"
                    ? ["财务治理", "财务职能组织", "政策与程序", "授权委托", "内部控制", "风险管理"]
                    : ["Gouvernance financière", "Organisation de la fonction finance", "Politiques et procédures", "Délégation des pouvoirs", "Contrôle interne", "Gestion des risques"]
                  ).map((item) => (
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
                  {d?.navLinks?.[1]?.label ?? "Fiscalité minière"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.fiscaliteSubsections?.codeMinier?.intro ?? "Notre accompagnement couvre l'ensemble des obligations fiscales spécifiques au secteur."}
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      {d?.fiscaliteSubsections?.codeMinier?.title ?? "Code Minier"}
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {(d?.fiscaliteSubsections?.codeMinier?.items ?? [
                        "Redevance minière",
                        "Impôt sur les sociétés",
                        "Régime fiscal minier",
                        "Obligations déclaratives",
                        "Stabilisation fiscale",
                        "Avantages fiscaux applicables",
                      ]).map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                          <span className="text-sm text-brand-ink-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-sm bg-[#f7f7f8] p-5">
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      {d?.fiscaliteSubsections?.superProfitTax?.title ?? "Super Profit Tax"}
                    </p>
                    <p className="mt-2 text-sm text-brand-ink-light">
                      {d?.fiscaliteSubsections?.superProfitTax?.intro ?? "Nous accompagnons les entreprises dans :"}
                    </p>
                    <div className="mt-3 space-y-2">
                      {(d?.fiscaliteSubsections?.superProfitTax?.items ?? [
                        "L'analyse des conditions d'application",
                        "Le calcul",
                        "La documentation",
                        "Les simulations d'impact financier",
                      ]).map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <ChevronRight size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                          <span className="text-sm text-brand-ink-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                      {d?.fiscaliteSubsections?.fiscaliteIndirecte?.title ?? "Fiscalité indirecte"}
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {(d?.fiscaliteSubsections?.fiscaliteIndirecte?.items ?? ["TVA", "Droits de douane", "Fiscalité locale", "Obligations parafiscales"]).map((item) => (
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
                  {d?.provisions?.title ?? "Provisions réglementées"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.provisions?.desc ?? "Nous accompagnons les entreprises dans le traitement financier et comptable des obligations réglementaires, notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.provisions?.items ?? [
                    "Provision pour réhabilitation environnementale",
                    "Provision de fermeture de mine",
                    "Provision pour démantèlement des installations",
                    "Obligations environnementales",
                    "Réconciliation entre exigences réglementaires et normes comptables",
                  ]).map((item) => (
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
                  {d?.reporting?.title ?? "Reporting Groupe"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.reporting?.desc ?? "Nous accompagnons les filiales internationales dans la production d'un reporting conforme aux exigences de leurs maisons mères."}
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    {d?.reporting?.subLabel ?? "Référentiels"}
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {(d?.reporting?.items ?? [
                      "SYSCOHADA révisé",
                      "IFRS",
                      "US GAAP",
                      "Reporting groupe",
                      "Packages de consolidation",
                      "Clôtures mensuelles",
                      "Conversion OHADA vers IFRS",
                      "Conversion OHADA vers US GAAP",
                    ]).map((item) => (
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
                  {d?.controleInterne?.title ?? "Contrôle interne"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.controleInterne?.desc ?? "Nous concevons des dispositifs robustes adaptés aux activités minières."}
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    {d?.controleInterne?.cyclesLabel ?? "Cycles couverts"}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {(d?.controleInterne?.items ?? [
                      "Achats", "Stocks", "Immobilisations",
                      "Production", "Trésorerie", "Paie",
                      "Investissements", "Contrats", "Exportations",
                    ]).map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                        <span className="text-sm text-brand-ink-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-sm bg-[#f7f7f8] px-4 py-3 text-sm text-brand-ink-light">
                    {d?.controleInterne?.cossoNote
                      ? d.controleInterne.cossoNote
                      : <>Notre approche s&apos;appuie sur le référentiel{" "}
                          <span className="font-semibold text-brand-ink">COSO</span> et les meilleures pratiques internationales.</>}
                  </p>
                </div>
              </div>

              {/* 06 — Hydrocarbures */}
              <div id="hydrocarbures" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.hydrocarbures?.title ?? "Transport et logistique des hydrocarbures"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.hydrocarbures?.desc ?? "Les sociétés minières sont fortement dépendantes de l'approvisionnement en carburants. Nous accompagnons les entreprises dans la gestion des exigences administratives et financières liées à cette activité."}
                </p>
                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-brand-ink">
                    {d?.hydrocarbures?.autorisationsLabel ?? "Autorisations"}
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {(d?.hydrocarbures?.items ?? [
                      "Autorisation de transport des produits pétroliers",
                      "Autorisation de stockage",
                      "Autorisation d'importation",
                      "Suivi des obligations réglementaires",
                      "Contrôle des coûts logistiques",
                    ]).map((item) => (
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
                  {d?.investissements?.title ?? "Gestion des investissements"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.investissements?.desc ?? "Nous accompagnons les entreprises dans la structuration et l'évaluation de leurs investissements."}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.investissements?.items ?? [
                    "CAPEX",
                    "Études de rentabilité",
                    "Valorisation",
                    "Modélisation financière",
                    "Due Diligence",
                    "Business Plans",
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
            {(d?.approche ?? approche).map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex w-40 flex-col items-center text-center xl:w-48">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-brand-orange/8 text-brand-orange">
                    <span className="font-serif-display text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 px-2 text-[13px] leading-snug text-brand-ink">{step}</p>
                </div>
                {i < (d?.approche ?? approche).length - 1 && (
                  <ArrowRight size={15} className="mb-6 shrink-0 text-brand-orange/25" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-10 space-y-0 lg:hidden">
            {(d?.approche ?? approche).map((step, i) => (
              <div key={step} className="flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange/20 bg-brand-orange/8 text-brand-orange">
                    <span className="text-xs font-semibold">{i + 1}</span>
                  </div>
                  {i < (d?.approche ?? approche).length - 1 && (
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
