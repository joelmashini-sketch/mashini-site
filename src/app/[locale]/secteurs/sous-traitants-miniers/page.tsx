import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sous-traitants miniers — Empowering Mining Contractors to Meet International Standards",
  description:
    "Mashini & Associés accompagne les entreprises de sous-traitance minière dans le renforcement de leur gouvernance, de leur performance financière et de leur conformité.",
};

const navLinks = [
  { id: "gouvernance", label: "Renforcer votre gouvernance" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "comptabilite", label: "Comptabilité & Reporting" },
  { id: "kpis", label: "Indicateurs de performance (KPIs)" },
  { id: "developpement", label: "Développement de l'entreprise" },
  { id: "financement", label: "Accès au financement" },
  { id: "dispositifs-publics", label: "Dispositifs publics" },
];

const pourquoiItems = [
  "Comptabilité et reporting",
  "Contrôle interne",
  "Gouvernance",
  "Corporate Finance",
  "Structuration financière",
  "Préparation au financement",
  "Accompagnement des sous-traitants miniers",
];

const defis = [
  "Répondre aux exigences des grandes sociétés minières.",
  "Renforcer les contrôles internes et la gouvernance.",
  "Produire des états financiers fiables et crédibles.",
  "Suivre les indicateurs clés de performance (KPIs).",
  "Structurer l'entreprise pour accompagner sa croissance.",
  "Préparer des dossiers solides pour accéder au financement.",
  "Valoriser les dispositifs d'appui à l'entrepreneuriat local.",
];

type SectorI18n = {
  introH2: string;
  introP1: string;
  introP2: string;
  introP3: string;
  navLinks: { id: string; label: string }[];
  pourquoiItems: string[];
  defis: string[];
  domains: {
    id: string;
    title: string;
    desc: string;
    gridClass: string;
    items: string[];
    // domain 3 (comptabilite) has a special structure with badge items + checklist
    badgeItems?: string[];
    badgeDesc?: string;
    checkItems?: string[];
  }[];
};

function getSectorData(locale: string): SectorI18n | null {
  const en: SectorI18n = {
    introH2: "A demanding environment",
    introP1:
      "Major mining companies apply high standards in governance, compliance, financial security and operational performance.",
    introP2:
      "To become or remain a trusted partner, subcontractors must demonstrate rigorous management, reliable financial information and effective internal controls.",
    introP3: "At Mashini & Associés, we help local companies meet these requirements.",
    navLinks: [
      { id: "gouvernance", label: "Strengthen your governance" },
      { id: "controle-interne", label: "Internal controls" },
      { id: "comptabilite", label: "Accounting & Reporting" },
      { id: "kpis", label: "Performance indicators (KPIs)" },
      { id: "developpement", label: "Business development" },
      { id: "financement", label: "Access to financing" },
      { id: "dispositifs-publics", label: "Public schemes" },
    ],
    pourquoiItems: [
      "Accounting & reporting",
      "Internal controls",
      "Governance",
      "Corporate Finance",
      "Financial structuring",
      "Financing preparation",
      "Mining subcontractor support",
    ],
    defis: [
      "Meet the requirements of major mining companies.",
      "Strengthen internal controls and governance.",
      "Produce reliable and credible financial statements.",
      "Monitor key performance indicators (KPIs).",
      "Structure the company to support its growth.",
      "Prepare solid files to access financing.",
      "Leverage local entrepreneurship support schemes.",
    ],
    domains: [
      {
        id: "gouvernance",
        title: "Strengthen your governance",
        desc: "Mining companies seek reliable partners. We support you in:",
        gridClass: "space-y-2.5",
        items: [
          "Organising your finance function",
          "Formalising procedures",
          "Implementing financial policies",
          "Improving governance",
          "Preparing for client audits",
        ],
      },
      {
        id: "controle-interne",
        title: "Internal controls",
        desc: "We implement control frameworks adapted to subcontracting activities. Our services cover in particular:",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "Cash management",
          "Procurement",
          "Inventory management",
          "Fixed assets",
          "Payroll",
          "Billing",
          "Contract monitoring",
          "Fraud prevention",
        ],
      },
      {
        id: "comptabilite",
        title: "Accounting & Reporting",
        desc: "We produce reliable financial information to meet the requirements of:",
        gridClass: "grid-cols-2 gap-2 sm:grid-cols-4",
        items: [],
        badgeItems: [
          "Mining companies",
          "Banks",
          "Investors",
          "Financial partners",
        ],
        badgeDesc: "Our services cover:",
        checkItems: [
          "SYSCOHADA accounting",
          "Financial reporting",
          "Financial statements",
          "Financial analysis",
          "Audit preparation",
        ],
      },
      {
        id: "kpis",
        title: "Performance indicators (KPIs)",
        desc: "Performance must be measured to be improved. We help companies implement dashboards including in particular:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Revenue by contract",
          "Margin by contract",
          "Profitability by client",
          "Average payment period",
          "Stock rotation",
          "Team productivity",
          "Treasury monitoring",
          "Financial performance",
        ],
      },
      {
        id: "developpement",
        title: "Business development",
        desc: "We support companies in their growth projects. Our services include:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Business plans",
          "Financial modelling",
          "Cash flow forecasting",
          "Profitability studies",
          "Financial structuring",
        ],
      },
      {
        id: "financement",
        title: "Access to financing",
        desc: "Subcontractor development requires appropriate financing. We support companies in:",
        gridClass: "space-y-2.5",
        items: [
          "Financing file preparation",
          "Discussions with banks",
          "Business plan preparation",
          "Preparation of financial information requested by lenders",
          "Mobilisation of public entrepreneurship support schemes",
        ],
      },
      {
        id: "dispositifs-publics",
        title: "Support with public schemes",
        desc: "We support companies in their relations with organisations supporting the development of entrepreneurship and industry. Depending on project needs, we can assist our clients in preparing files and financial information requested by bodies such as:",
        gridClass: "space-y-2.5",
        items: [
          "The Regulatory Authority for Subcontracting in the Private Sector",
          "The Fonds de Promotion de l'Industrie",
          "The National Agency for Investment Promotion",
          "Other financing and private sector support programmes",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    introH2: "要求严苛的环境",
    introP1:
      "大型采矿公司在治理、合规、财务安全和运营绩效方面执行高标准。",
    introP2:
      "为成为或保持受信任的合作伙伴，分包商必须展示严格的管理、可靠的财务信息和有效的内部控制。",
    introP3: "在Mashini & Associés，我们协助本地企业达到这一要求水平。",
    navLinks: [
      { id: "gouvernance", label: "强化治理" },
      { id: "controle-interne", label: "内部控制" },
      { id: "comptabilite", label: "会计与报告" },
      { id: "kpis", label: "绩效指标（KPIs）" },
      { id: "developpement", label: "企业发展" },
      { id: "financement", label: "获取融资" },
      { id: "dispositifs-publics", label: "公共机制" },
    ],
    pourquoiItems: [
      "会计与报告",
      "内部控制",
      "公司治理",
      "企业融资",
      "财务结构化",
      "融资准备",
      "矿业分包商支持",
    ],
    defis: [
      "满足大型采矿公司的要求。",
      "强化内部控制和治理。",
      "产出可靠可信的财务报表。",
      "跟踪关键绩效指标（KPIs）。",
      "对企业进行结构化以支持其增长。",
      "准备完善文件以获得融资。",
      "充分利用本地创业支持机制。",
    ],
    domains: [
      {
        id: "gouvernance",
        title: "强化治理",
        desc: "采矿公司寻求可靠的合作伙伴。我们协助您：",
        gridClass: "space-y-2.5",
        items: [
          "组织财务职能",
          "规范程序",
          "建立财务政策",
          "改善治理",
          "为客户审计做准备",
        ],
      },
      {
        id: "controle-interne",
        title: "内部控制",
        desc: "我们建立适合分包活动的控制框架，主要服务涵盖：",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "现金管理",
          "采购",
          "库存管理",
          "固定资产",
          "薪资",
          "开票",
          "合同跟踪",
          "预防欺诈",
        ],
      },
      {
        id: "comptabilite",
        title: "会计与报告",
        desc: "我们产出可靠财务信息，满足以下各方的要求：",
        gridClass: "grid-cols-2 gap-2 sm:grid-cols-4",
        items: [],
        badgeItems: [
          "采矿公司",
          "银行",
          "投资者",
          "金融合作伙伴",
        ],
        badgeDesc: "我们的服务涵盖：",
        checkItems: [
          "SYSCOHADA会计",
          "财务报告",
          "财务报表",
          "财务分析",
          "审计准备",
        ],
      },
      {
        id: "kpis",
        title: "绩效指标（KPIs）",
        desc: "绩效必须加以衡量才能得到改善。我们协助企业建立仪表盘，主要包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "按合同计算收入",
          "按合同计算利润",
          "按客户计算盈利能力",
          "平均付款期",
          "库存周转",
          "团队生产力",
          "资金跟踪",
          "财务绩效",
        ],
      },
      {
        id: "developpement",
        title: "企业发展",
        desc: "我们协助企业开展增长项目，服务内容包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "商业计划书",
          "财务建模",
          "现金流预测",
          "盈利能力研究",
          "财务结构化",
        ],
      },
      {
        id: "financement",
        title: "获取融资",
        desc: "分包商发展需要适当的融资。我们协助企业：",
        gridClass: "space-y-2.5",
        items: [
          "准备融资文件",
          "与银行洽谈",
          "准备商业计划书",
          "准备贷款方要求的财务信息",
          "调动公共创业支持机制",
        ],
      },
      {
        id: "dispositifs-publics",
        title: "公共机制支持",
        desc: "我们协助企业与支持创业和工业发展的机构建立关系。根据项目需求，我们可协助客户准备以下机构要求的文件和财务信息：",
        gridClass: "space-y-2.5",
        items: [
          "私营部门分包监管机构",
          "工业促进基金",
          "国家投资促进局",
          "其他融资和私营部门支持计划",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function SousTraitantsMinierPage({
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
        eyebrow="Sous-traitants miniers"
        title="Empowering Mining Contractors to Meet International Standards"
        description="Nous accompagnons les entreprises de sous-traitance minière dans le renforcement de leur gouvernance, de leur performance financière et de leur conformité afin de répondre aux exigences des grandes sociétés minières."
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Sous-traitants miniers" },
        ]}
        photo="/H Sous-Traitants Miniers.png"
        objectPosition="30% center"
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
                {d?.introH2 ?? "Un environnement exigeant"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Les grandes sociétés minières appliquent des standards élevés en matière de gouvernance, de conformité, de sécurité financière et de performance opérationnelle."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Pour devenir ou rester un partenaire de confiance, les sous-traitants doivent démontrer une gestion rigoureuse, une information financière fiable et des contrôles internes efficaces."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP3 ?? "Chez Mashini & Associés, nous aidons les entreprises locales à franchir ce niveau d'exigence."}
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

              {/* 01 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[0]?.title ?? "Renforcer votre gouvernance"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Les sociétés minières recherchent des partenaires fiables. Nous vous accompagnons dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[0]?.items ?? [
                    "L'organisation de votre fonction finance",
                    "La formalisation des procédures",
                    "La mise en place de politiques financières",
                    "L'amélioration de la gouvernance",
                    "La préparation aux audits des clients",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Contrôle interne */}
              <div id="controle-interne" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[1]?.title ?? "Contrôle interne"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "Nous mettons en place des dispositifs de contrôle adaptés aux activités de sous-traitance. Nos interventions couvrent notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {(d?.domains?.[1]?.items ?? [
                    "Gestion de la trésorerie",
                    "Achats",
                    "Gestion des stocks",
                    "Immobilisations",
                    "Paie",
                    "Facturation",
                    "Suivi des contrats",
                    "Prévention de la fraude",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Comptabilité & Reporting (special structure) */}
              <div id="comptabilite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[2]?.title ?? "Comptabilité & Reporting"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Nous produisons une information financière fiable permettant de répondre aux exigences :"}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {(d?.domains?.[2]?.badgeItems ?? [
                    "Des sociétés minières",
                    "Des banques",
                    "Des investisseurs",
                    "Des partenaires financiers",
                  ]).map((item) => (
                    <div
                      key={item}
                      className="rounded-sm border border-brand-orange/20 bg-brand-orange/[0.04] px-3 py-2 text-center text-[12px] font-medium text-brand-ink"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.badgeDesc ?? "Nos interventions couvrent :"}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[2]?.checkItems ?? [
                    "Comptabilité SYSCOHADA",
                    "Reporting financier",
                    "États financiers",
                    "Analyse financière",
                    "Préparation aux audits",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04 — KPIs */}
              <div id="kpis" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">04</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[3]?.title ?? "Indicateurs de performance (KPIs)"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[3]?.desc ?? "La performance doit être mesurée pour être améliorée. Nous aidons les entreprises à mettre en place des tableaux de bord comprenant notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[3]?.items ?? [
                    "Chiffre d'affaires par contrat",
                    "Marge par contrat",
                    "Rentabilité par client",
                    "Délai moyen de paiement",
                    "Rotation des stocks",
                    "Productivité des équipes",
                    "Suivi de la trésorerie",
                    "Performance financière",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Développement */}
              <div id="developpement" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[4]?.title ?? "Développement de l'entreprise"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Nous accompagnons les entreprises dans leurs projets de croissance. Nos interventions comprennent :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "Business Plans",
                    "Modélisation financière",
                    "Prévisions de trésorerie",
                    "Études de rentabilité",
                    "Structuration financière",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Accès au financement */}
              <div id="financement" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[5]?.title ?? "Accès au financement"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[5]?.desc ?? "Le développement des sous-traitants nécessite des financements adaptés. Nous accompagnons les entreprises dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[5]?.items ?? [
                    "La préparation des dossiers de financement",
                    "Les discussions avec les banques",
                    "La préparation des Business Plans",
                    "La préparation des informations financières demandées par les prêteurs",
                    "La mobilisation des dispositifs publics d'appui à l'entrepreneuriat",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Dispositifs publics */}
              <div id="dispositifs-publics" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[6]?.title ?? "Accompagnement des dispositifs publics"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Nous accompagnons les entreprises dans leurs relations avec les organismes de soutien au développement de l'entrepreneuriat et de l'industrie. Selon les besoins du projet, nous pouvons assister nos clients dans la préparation des dossiers et des informations financières demandées par des organismes tels que :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[6]?.items ?? [
                    "L'Autorité de Régulation de la Sous-traitance dans le secteur privé",
                    "Le Fonds de Promotion de l'Industrie",
                    "L'Agence Nationale pour la Promotion des Investissements",
                    "D'autres programmes de financement et d'appui au secteur privé",
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
