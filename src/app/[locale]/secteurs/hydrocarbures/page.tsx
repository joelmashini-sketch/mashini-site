import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hydrocarbures — Financial Intelligence for the Energy Sector",
  description:
    "Mashini & Associés accompagne les entreprises opérant dans le secteur des hydrocarbures dans la maîtrise de leurs enjeux financiers, réglementaires, fiscaux et de gouvernance.",
};

const navLinks = [
  { id: "investissements", label: "Investissements & infrastructures" },
  { id: "reglementation", label: "Réglementation" },
  { id: "produits", label: "Différenciation des produits" },
  { id: "devises", label: "Gestion des devises" },
  { id: "douanes", label: "Douanes & licences" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "controle", label: "Contrôle interne" },
  { id: "fiscalite", label: "Fiscalité" },
];

const pourquoiItems = [
  "Expertise comptable",
  "Fiscalité",
  "Reporting international",
  "Corporate Finance",
  "Contrôle interne",
  "Gouvernance",
  "Gestion des risques",
  "Accompagnement des filiales internationales",
];

const defis = [
  "Sécuriser les investissements dans les infrastructures de stockage",
  "Renforcer la conformité réglementaire et documentaire",
  "Maîtriser les risques de change liés aux opérations en CDF et en USD",
  "Produire un reporting financier fiable et conforme aux référentiels internationaux",
  "Renforcer les contrôles internes sur les achats, les importations, les stocks et la trésorerie",
  "Optimiser la gouvernance financière dans un environnement fortement réglementé",
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
  }[];
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    introH2: "A strategic, heavily regulated sector",
    introP1:
      "The hydrocarbons sector demands perfect mastery of investments, regulatory requirements and financial risks.",
    introP2:
      "Operators must reconcile significant infrastructure investments, a demanding regulatory framework, rigorous currency management and reliable financial information meeting the expectations of authorities, shareholders and financial partners. At Mashini & Associés, we support companies at every stage of their development.",
    navLinks: [
      { id: "investissements", label: "Investments & infrastructure" },
      { id: "reglementation", label: "Regulation" },
      { id: "produits", label: "Product differentiation" },
      { id: "devises", label: "Currency management" },
      { id: "douanes", label: "Customs & licences" },
      { id: "comptabilite", label: "Accounting & Reporting" },
      { id: "controle", label: "Internal controls" },
      { id: "fiscalite", label: "Taxation" },
    ],
    pourquoiItems: [
      "Accounting expertise",
      "Taxation",
      "International reporting",
      "Corporate Finance",
      "Internal controls",
      "Governance",
      "Risk management",
      "International subsidiary support",
    ],
    defis: [
      "Secure investments in storage infrastructure.",
      "Strengthen regulatory and documentary compliance.",
      "Manage foreign exchange risks related to CDF and USD operations.",
      "Produce reliable financial reporting compliant with international standards.",
      "Strengthen internal controls over purchases, imports, inventory and treasury.",
      "Optimise financial governance in a heavily regulated environment.",
    ],
    domains: [
      {
        id: "investissements",
        title: "Investments & infrastructure",
        desc: "Developing petroleum activities requires significant investment in logistics infrastructure. We support companies in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Financial structuring of investment projects",
          "Profitability analysis of depots and storage infrastructure",
          "Fixed assets monitoring",
          "Investment management (CAPEX)",
          "Financial modelling of projects",
        ],
      },
      {
        id: "reglementation",
        title: "Hydrocarbons sector regulation",
        desc: "The sector is subject to a specific regulatory framework that requires constant vigilance. We support our clients in meeting applicable requirements, including:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Petroleum product import authorisations",
          "Storage authorisations",
          "Transport authorisations",
          "Regulatory reporting obligations",
          "Documentary and administrative monitoring",
        ],
      },
      {
        id: "produits",
        title: "Petroleum product differentiation",
        desc: "Operators must ensure rigorous management of different product categories. We support them in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Distinction between domestic and industrial consumption products",
          "Stock movement control",
          "Operations traceability",
          "Accounting and financial tracking by product category",
        ],
      },
      {
        id: "devises",
        title: "Currency management & foreign exchange regulation",
        desc: "Companies operate in an environment where purchases are predominantly made in US dollars, whilst certain regulatory obligations must be settled in Congolese francs. We support companies in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Compliance with foreign exchange regulations",
          "Foreign currency operations monitoring",
          "Foreign exchange risk management",
          "Reconciliation of CDF and USD flows",
          "Documentation of financial operations",
        ],
      },
      {
        id: "douanes",
        title: "Customs & licence clearance",
        desc: "Import operations require rigorous monitoring of customs and administrative obligations. Our services cover in particular:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Import licence monitoring",
          "Licence clearance",
          "Documentary control",
          "Monitoring of duty and tax payments",
          "Analysis of financial impacts related to import operations",
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
        id: "controle",
        title: "Internal controls & governance",
        desc: "We help companies strengthen their internal control frameworks to secure their operations. Our services focus in particular on:",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "Purchases",
          "Imports",
          "Strategic inventory",
          "Treasury",
          "Fixed assets",
          "Sales",
          "Currency management",
          "Regulatory compliance",
        ],
      },
      {
        id: "fiscalite",
        title: "Taxation",
        desc: "We support companies in managing their tax and para-fiscal obligations.",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Tax compliance",
          "TVA",
          "Corporate income tax",
          "Taxation applicable to imports",
          "Assistance during tax audits",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    introH2: "战略性高度监管行业",
    introP1:
      "油气行业要求对投资、监管要求和财务风险实现精准掌控。",
    introP2:
      "运营商必须协调大量基础设施投资、严苛的监管框架、严格的货币管理，以及满足主管机构、股东和金融合作伙伴期望的可靠财务信息。在Mashini & Associés，我们在企业发展的每个阶段提供支持。",
    navLinks: [
      { id: "investissements", label: "投资与基础设施" },
      { id: "reglementation", label: "监管" },
      { id: "produits", label: "产品差异化" },
      { id: "devises", label: "货币管理" },
      { id: "douanes", label: "海关与许可证" },
      { id: "comptabilite", label: "会计与报告" },
      { id: "controle", label: "内部控制" },
      { id: "fiscalite", label: "税务" },
    ],
    pourquoiItems: [
      "会计专业知识",
      "税务",
      "国际报告",
      "企业融资",
      "内部控制",
      "公司治理",
      "风险管理",
      "国际子公司支持",
    ],
    defis: [
      "保障储存基础设施投资安全。",
      "强化监管和文件合规。",
      "管理刚果法郎和美元业务相关的汇率风险。",
      "产出符合国际标准的可靠财务报告。",
      "强化采购、进口、库存和资金方面的内部控制。",
      "在高度监管的环境中优化财务治理。",
    ],
    domains: [
      {
        id: "investissements",
        title: "投资与基础设施",
        desc: "石油业务的发展需要对物流基础设施进行大量投资。我们协助企业：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "投资项目财务结构化",
          "油库和储存基础设施盈利能力分析",
          "固定资产监控",
          "投资管理（CAPEX）",
          "项目财务建模",
        ],
      },
      {
        id: "reglementation",
        title: "油气行业监管",
        desc: "该行业须遵守特定的监管框架，需要持续关注。我们协助客户满足适用要求，主要包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "石油产品进口许可证",
          "储存许可证",
          "运输许可证",
          "监管报告义务",
          "文件和行政监控",
        ],
      },
      {
        id: "produits",
        title: "石油产品差异化",
        desc: "运营商必须严格管理不同类别的产品。我们协助其：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "区分国内消费与工业消费产品",
          "库存流动控制",
          "业务可追溯性",
          "按产品类别进行会计和财务跟踪",
        ],
      },
      {
        id: "devises",
        title: "货币管理与外汇监管",
        desc: "企业运营于采购主要以美元结算、而某些监管义务须以刚果法郎支付的环境中。我们协助企业：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "遵守外汇法规",
          "外币业务监控",
          "外汇风险管理",
          "刚果法郎与美元流量调节",
          "财务业务文件记录",
        ],
      },
      {
        id: "douanes",
        title: "海关与许可证清关",
        desc: "进口业务需要严格监控海关和行政义务。我们的服务主要涵盖：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "进口许可证监控",
          "许可证清关",
          "文件控制",
          "关税和税款支付监控",
          "进口业务财务影响分析",
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
        id: "controle",
        title: "内部控制与治理",
        desc: "我们协助企业强化内部控制框架，确保业务安全。主要介入领域：",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "采购",
          "进口",
          "战略库存",
          "资金",
          "固定资产",
          "销售",
          "货币管理",
          "监管合规",
        ],
      },
      {
        id: "fiscalite",
        title: "税务",
        desc: "我们协助企业管理税务和准税务义务。",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "税务合规",
          "TVA",
          "企业所得税",
          "进口适用税务",
          "税务稽查协助",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function HydrocarburesPage({
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
        eyebrow="Financial Intelligence for the Energy Sector"
        title="Hydrocarbures"
        description="Nous accompagnons les entreprises opérant dans le secteur des hydrocarbures dans la maîtrise de leurs enjeux financiers, réglementaires, fiscaux et de gouvernance afin de sécuriser leurs investissements et soutenir leur croissance."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Hydrocarbures" },
        ]}
        photo="/H Hydrocarbures.png"
        objectPosition="30% center"
        overlayClass="from-brand-ink/90 via-brand-ink/60 to-brand-ink/20"
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
                {d?.introH2 ?? "Un secteur stratégique, fortement réglementé"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Le secteur des hydrocarbures exige une parfaite maîtrise des investissements, des exigences réglementaires et des risques financiers."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Les opérateurs doivent concilier des investissements importants dans les infrastructures, un cadre réglementaire exigeant, une gestion rigoureuse des devises et une information financière fiable répondant aux attentes des autorités, des actionnaires et des partenaires financiers. Chez Mashini & Associés, nous accompagnons les entreprises à chaque étape de leur développement."}
              </p>
              <div className="mt-6 h-0.5 w-12 bg-brand-orange" />

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                >
                  {t("sidebarContact")}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-sm border border-black/15 px-6 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {t("sidebarServices")}
                </Link>
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
              {t("ourAnswers")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            {/* MAIN */}
            <div className="space-y-10">

              {/* 01 — Investissements */}
              <div id="investissements" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[0]?.title ?? "Investissements et infrastructures"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Le développement des activités pétrolières nécessite des investissements importants dans les infrastructures logistiques. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[0]?.items ?? [
                    "Structuration financière des projets d'investissement",
                    "Analyse de rentabilité des dépôts et infrastructures de stockage",
                    "Suivi des immobilisations",
                    "Gestion des investissements (CAPEX)",
                    "Modélisation financière des projets",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Réglementation */}
              <div id="reglementation" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[1]?.title ?? "Réglementation du secteur des hydrocarbures"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "Le secteur est soumis à un cadre réglementaire spécifique qui impose une vigilance permanente. Nous accompagnons nos clients dans le respect des exigences applicables, notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[1]?.items ?? [
                    "Autorisations d'importation des produits pétroliers",
                    "Autorisations de stockage",
                    "Autorisations de transport",
                    "Obligations de reporting réglementaire",
                    "Suivi documentaire et administratif",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Différenciation produits */}
              <div id="produits" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[2]?.title ?? "Différenciation des produits pétroliers"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Les opérateurs doivent assurer une gestion rigoureuse des différentes catégories de produits. Nous les accompagnons dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[2]?.items ?? [
                    "Distinction entre produits à consommation domestique et industrielle",
                    "Contrôle des mouvements de stocks",
                    "Traçabilité des opérations",
                    "Suivi comptable et financier par catégorie de produits",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — Devises */}
              <div id="devises" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[3]?.title ?? "Gestion des devises et réglementation de change"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[3]?.desc ?? "Les entreprises évoluent dans un environnement où les achats sont majoritairement réalisés en dollars américains, tandis que certaines obligations réglementaires doivent être acquittées en francs congolais. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[3]?.items ?? [
                    "Respect de la réglementation de change",
                    "Suivi des opérations en devises",
                    "Gestion du risque de change",
                    "Rapprochement des flux en CDF et en USD",
                    "Documentation des opérations financières",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Douanes */}
              <div id="douanes" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[4]?.title ?? "Douanes et apurement des licences"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Les opérations d'importation nécessitent un suivi rigoureux des obligations douanières et administratives. Nos interventions couvrent notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "Suivi des licences d'importation",
                    "Apurement des licences",
                    "Contrôle documentaire",
                    "Suivi des paiements des droits et taxes",
                    "Analyse des impacts financiers liés aux opérations d'importation",
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
                  {d?.domains?.[5]?.desc ?? "Nous produisons une information financière fiable répondant aux exigences :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[5]?.items ?? [
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

              {/* 07 — Contrôle interne */}
              <div id="controle" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[6]?.title ?? "Contrôle interne et gouvernance"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Nous aidons les entreprises à renforcer leurs dispositifs de contrôle interne afin de sécuriser leurs opérations. Nos interventions portent notamment sur :"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {(d?.domains?.[6]?.items ?? [
                    "Achats",
                    "Importations",
                    "Stocks stratégiques",
                    "Trésorerie",
                    "Immobilisations",
                    "Ventes",
                    "Gestion des devises",
                    "Conformité réglementaire",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">08</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[7]?.title ?? "Fiscalité"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[7]?.desc ?? "Nous accompagnons les entreprises dans la gestion de leurs obligations fiscales et parafiscales."}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[7]?.items ?? [
                    "Conformité fiscale",
                    "TVA",
                    "Impôt sur les sociétés",
                    "Fiscalité applicable aux importations",
                    "Assistance lors des contrôles fiscaux",
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
