import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Users, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Organisations internationales & ONG — Mashini & Associés",
  description:
    "Mashini & Associés accompagne les ONG, agences des Nations Unies et entités à but non lucratif dans la structuration de leur fonction finance, la conformité SYSBNL et la maîtrise des exigences des bailleurs.",
};

const navLinks = [
  { id: "sysbnl", label: "Mise en œuvre du SYSBNL" },
  { id: "projets", label: "Comptabilité des projets" },
  { id: "subventions", label: "Gestion des subventions" },
  { id: "controle-interne", label: "Contrôle interne" },
  { id: "gouvernance", label: "Gouvernance" },
  { id: "audit", label: "Audit" },
  { id: "fiscalite", label: "Fiscalité" },
  { id: "reporting", label: "Reporting financier" },
];

const defisecteur = [
  "Des partenaires techniques et financiers",
  "Des conventions de financement",
  "Des autorités congolaises",
  "Du SYSBNL",
  "Du SYSCOHADA",
  "Des politiques financières des bailleurs",
  "Des normes de gouvernance et de contrôle interne",
];

const pourquoiItems = [
  "Expertise comptable",
  "Maîtrise du SYSBNL",
  "Maîtrise du SYSCOHADA",
  "Audit",
  "Contrôle interne",
  "Gouvernance",
  "Gestion des risques",
  "Fiscalité",
  "Accompagnement des projets financés",
];

const clients = [
  "ONG nationales",
  "ONG internationales",
  "Agences des Nations Unies",
  "Fondations",
  "Associations",
  "Institutions confessionnelles",
  "Projets financés par les partenaires techniques et financiers",
  "Organisations de développement",
];

const referentiels = [
  "SYSBNL (Système Comptable des Entités à But Non Lucratif)",
  "SYSCOHADA révisé",
  "Normes Internationales d'Audit (ISA)",
  "COSO pour le contrôle interne et la gestion des risques",
  "IFRS, lorsque requises par les partenaires ou les groupes internationaux",
  "Réglementation fiscale, sociale et parafiscale de la République Démocratique du Congo",
];

type SectorI18n = {
  heroTitle: string;
  heroDesc: string;
  eyebrow?: string;
  introH2: string;
  introP1: string;
  introP2: string;
  challengesBannerIntro: string;
  challengesBannerSummary: string;
  challengesBannerItems: string[];
  navLinks: { id: string; label: string }[];
  pourquoiItems: string[];
  clients: string[];
  clienteleEyebrow: string;
  nosClients: string;
  weAccompanyNotably: string;
  normesEyebrow: string;
  referentielsTitle: string;
  refDesc: string;
  referentiels: string[];
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
    heroTitle: "Strengthening financial transparency, compliance and the impact of your programmes.",
    heroDesc:
      "We support NGOs, United Nations agencies, foundations and associations in structuring their finance function and producing financial information that meets donor requirements.",
    eyebrow: "International Organisations & NGOs",
    introH2: "International Organisations, NGOs & Non-Profit Entities",
    introP1:
      "Non-governmental organisations, United Nations agencies, foundations, associations and donor-funded projects operate in an environment where transparency, accountability and good governance are essential.",
    introP2:
      "At Mashini & Associés, we support organisations in structuring their finance function, ensuring compliance with OHADA accounting standards, managing risks and producing financial information that meets the requirements of donors and national authorities.",
    challengesBannerIntro:
      "Non-profit organisations must simultaneously meet the requirements of:",
    challengesBannerSummary:
      "This diversity of requirements demands rigorous, documented and fully traceable financial management.",
    challengesBannerItems: [
      "Technical and financial partners",
      "Financing conventions",
      "Congolese authorities",
      "SYSBNL",
      "SYSCOHADA",
      "Donor financial policies",
      "Governance & internal control standards",
    ],
    navLinks: [
      { id: "sysbnl", label: "SYSBNL implementation" },
      { id: "projets", label: "Project accounting" },
      { id: "subventions", label: "Grant management" },
      { id: "controle-interne", label: "Internal controls" },
      { id: "gouvernance", label: "Governance" },
      { id: "audit", label: "Audit" },
      { id: "fiscalite", label: "Taxation" },
      { id: "reporting", label: "Financial reporting" },
    ],
    pourquoiItems: [
      "Accounting expertise",
      "SYSBNL mastery",
      "SYSCOHADA mastery",
      "Audit",
      "Internal controls",
      "Governance",
      "Risk management",
      "Taxation",
      "Funded project support",
    ],
    clients: [
      "National NGOs",
      "International NGOs",
      "United Nations agencies",
      "Foundations",
      "Associations",
      "Faith-based institutions",
      "Projects funded by technical and financial partners",
      "Development organisations",
    ],
    clienteleEyebrow: "Clientele",
    nosClients: "Our clients",
    weAccompanyNotably: "We support in particular:",
    normesEyebrow: "Standards",
    referentielsTitle: "Standards we master",
    refDesc: "Our teams operate in compliance with the principal applicable standards:",
    referentiels: [
      "SYSBNL (Accounting System for Non-Profit Entities)",
      "Revised SYSCOHADA",
      "International Standards on Auditing (ISA)",
      "COSO for internal control and risk management",
      "IFRS, where required by partners or international groups",
      "Tax, social and para-fiscal regulations of the Democratic Republic of Congo",
    ],
    domains: [
      {
        id: "sysbnl",
        title: "SYSBNL implementation",
        desc: "We support organisations in applying the Accounting System for Non-Profit Entities (SYSBNL). Our services include in particular:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Accounting compliance",
          "Project accounting organisation",
          "Preparation of financial statements in accordance with SYSBNL",
          "Assistance with first-time adoption",
          "Training of finance teams",
          "Support during audit missions",
        ],
      },
      {
        id: "projets",
        title: "Project accounting",
        desc: "Most NGOs simultaneously manage multiple projects funded by different donors. We implement systems enabling:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Financial tracking by project",
          "Tracking by donor",
          "Tracking by financing convention",
          "Adapted analytical accounting",
          "Ongoing budget monitoring",
        ],
      },
      {
        id: "subventions",
        title: "Grant management",
        desc: "We support organisations in:",
        gridClass: "space-y-2.5",
        items: [
          "Monitoring the use of funds",
          "Reconciling budget against actual expenditure",
          "Justifying expenditure",
          "Preparing financial reports for donors",
          "Monitoring unconsumed funds",
        ],
      },
      {
        id: "controle-interne",
        title: "Internal controls",
        desc: "Protecting resources is a priority. We strengthen in particular:",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "Financial procedures",
          "Segregation of duties",
          "Advances management",
          "Procurement",
          "Cash management",
          "Bank accounts",
          "Fixed assets",
          "Inventory",
          "Fraud prevention",
        ],
      },
      {
        id: "gouvernance",
        title: "Governance",
        desc: "We support organisations in:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Drafting procedures manuals",
          "Risk mapping",
          "Delegations of authority",
          "Financial policies",
          "Procurement policies",
          "Treasury policies",
        ],
      },
      {
        id: "audit",
        title: "Audit",
        desc: "Our engagements include:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Financial audit",
          "Project audit",
          "Compliance audit",
          "Procedures audit",
          "Internal control audit",
          "Preparation for donor audits",
        ],
      },
      {
        id: "fiscalite",
        title: "Taxation",
        desc: "Even where they benefit from exemptions, NGOs remain subject to various tax and regulatory obligations. We support our clients in particular on:",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "Personal income tax (IRPP)",
          "Tax withholdings",
          "Filing obligations",
          "Social obligations",
          "Para-fiscal obligations",
          "TVA where applicable",
          "Standardised invoice and SFE approval",
        ],
      },
      {
        id: "reporting",
        title: "Financial reporting",
        desc: "We produce reliable reporting meeting the expectations of:",
        gridClass: "grid-cols-2 gap-2 sm:grid-cols-3",
        items: [
          "Donors",
          "Boards of directors",
          "National authorities",
          "Statutory auditors",
          "Financial partners",
        ],
      },
    ],
  };

  const zh: SectorI18n = {
    heroTitle: "增强财务透明度、合规性并提升项目影响力。",
    heroDesc:
      "我们为非政府组织、联合国机构、基金会和协会提供支持，协助其构建财务职能并产出符合捐助方要求的财务信息。",
    eyebrow: "国际组织与非政府组织",
    introH2: "国际组织、非政府组织及非营利实体",
    introP1:
      "非政府组织、联合国机构、基金会、协会及捐助方资助项目在一个透明度、问责制和良好治理至关重要的环境中运营。",
    introP2:
      "在Mashini & Associés，我们协助各组织构建财务职能、确保符合OHADA会计准则、管理风险，并产出满足捐助方及国家主管机构要求的财务信息。",
    challengesBannerIntro: "非营利组织必须同时满足以下各方的要求：",
    challengesBannerSummary:
      "如此多元的要求必然要求严格、有据可查且完全可追溯的财务管理。",
    challengesBannerItems: [
      "技术与财务合作伙伴",
      "融资协议",
      "刚果当局",
      "SYSBNL",
      "SYSCOHADA",
      "捐助方财务政策",
      "治理与内部控制标准",
    ],
    navLinks: [
      { id: "sysbnl", label: "SYSBNL实施" },
      { id: "projets", label: "项目会计" },
      { id: "subventions", label: "补贴管理" },
      { id: "controle-interne", label: "内部控制" },
      { id: "gouvernance", label: "治理" },
      { id: "audit", label: "审计" },
      { id: "fiscalite", label: "税务" },
      { id: "reporting", label: "财务报告" },
    ],
    pourquoiItems: [
      "会计专业知识",
      "SYSBNL掌握",
      "SYSCOHADA掌握",
      "审计",
      "内部控制",
      "公司治理",
      "风险管理",
      "税务",
      "资助项目支持",
    ],
    clients: [
      "本国非政府组织",
      "国际非政府组织",
      "联合国机构",
      "基金会",
      "协会",
      "宗教机构",
      "技术和财务合作伙伴资助项目",
      "发展组织",
    ],
    clienteleEyebrow: "客户群体",
    nosClients: "我们的客户",
    weAccompanyNotably: "我们特别支持：",
    normesEyebrow: "标准",
    referentielsTitle: "我们掌握的标准",
    refDesc: "我们的团队在遵守以下主要适用标准的前提下开展工作：",
    referentiels: [
      "SYSBNL（非营利实体会计制度）",
      "修订版SYSCOHADA",
      "国际审计准则（ISA）",
      "用于内部控制和风险管理的COSO",
      "合作伙伴或国际集团要求时适用IFRS",
      "刚果民主共和国税务、社会及准税务法规",
    ],
    domains: [
      {
        id: "sysbnl",
        title: "SYSBNL实施",
        desc: "我们协助各组织应用非营利实体会计制度（SYSBNL），主要服务包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "会计合规",
          "项目会计组织",
          "按SYSBNL准备财务报表",
          "首次采用协助",
          "财务团队培训",
          "审计任务支持",
        ],
      },
      {
        id: "projets",
        title: "项目会计",
        desc: "大多数非政府组织同时管理多个由不同捐助方资助的项目。我们建立能够实现以下功能的系统：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "按项目进行财务跟踪",
          "按捐助方跟踪",
          "按融资协议跟踪",
          "适应性分析会计",
          "持续预算监控",
        ],
      },
      {
        id: "subventions",
        title: "补贴管理",
        desc: "我们协助各组织：",
        gridClass: "space-y-2.5",
        items: [
          "监控资金使用情况",
          "预算与实际支出对账",
          "支出证明",
          "为捐助方准备财务报告",
          "跟踪未消耗资金",
        ],
      },
      {
        id: "controle-interne",
        title: "内部控制",
        desc: "保护资源是首要任务。我们特别加强以下方面：",
        gridClass: "grid-cols-2 gap-2.5 sm:grid-cols-3",
        items: [
          "财务程序",
          "职责分离",
          "垫款管理",
          "采购",
          "现金管理",
          "银行账户",
          "固定资产",
          "库存",
          "预防欺诈",
        ],
      },
      {
        id: "gouvernance",
        title: "治理",
        desc: "我们协助各组织：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "编制程序手册",
          "风险图谱",
          "授权委托",
          "财务政策",
          "采购政策",
          "资金政策",
        ],
      },
      {
        id: "audit",
        title: "审计",
        desc: "我们的业务包括：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "财务审计",
          "项目审计",
          "合规审计",
          "程序审计",
          "内部控制审计",
          "捐助方审计准备",
        ],
      },
      {
        id: "fiscalite",
        title: "税务",
        desc: "即使享有免税待遇，非政府组织仍须履行各种税务和监管义务。我们就以下方面向客户提供支持：",
        gridClass: "grid-cols-1 gap-2.5 sm:grid-cols-2",
        items: [
          "个人所得税（IRPP）",
          "预扣税款",
          "申报义务",
          "社会义务",
          "准税务义务",
          "适用时的TVA",
          "规范发票及SFE审批",
        ],
      },
      {
        id: "reporting",
        title: "财务报告",
        desc: "我们提供满足以下各方期望的可靠报告：",
        gridClass: "grid-cols-2 gap-2 sm:grid-cols-3",
        items: [
          "捐助方",
          "董事会",
          "国家主管机构",
          "法定审计师",
          "财务合作伙伴",
        ],
      },
    ],
  };

  if (locale === "en") return en;
  if (locale === "zh") return zh;
  return null;
}

export default async function OrganisationsInternationalesPage({
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
        eyebrow={d?.eyebrow ?? "Organisations internationales & ONG"}
        title={d?.heroTitle ?? "Renforcer la transparence financière, la conformité et l'impact de vos programmes."}
        description={d?.heroDesc ?? "Nous accompagnons les ONG, agences des Nations Unies, fondations et associations dans la structuration de leur fonction finance et la production d'une information financière répondant aux exigences des bailleurs."}
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: t("title").replace("\n", " "), href: "/secteurs" },
          { label: "Organisations internationales & ONG" },
        ]}
        photo="/H Organisations Internationales.png"
        objectPosition="45% center"
        overlayClass="from-brand-ink/88 via-brand-ink/60 to-brand-ink/18"
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
                {d?.introH2 ?? "Organisations internationales, ONG & Entités à But Non Lucratif"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP1 ?? "Les organisations non gouvernementales, les agences des Nations Unies, les fondations, les associations et les projets financés par les partenaires techniques et financiers évoluent dans un environnement où la transparence, la redevabilité et la bonne gouvernance sont essentielles."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-light sm:text-base">
                {d?.introP2 ?? "Chez Mashini & Associés, nous accompagnons les organisations dans la structuration de leur fonction finance, la conformité aux référentiels comptables de l'OHADA, la maîtrise des risques et la production d'une information financière répondant aux exigences des bailleurs de fonds et des autorités nationales."}
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
                {d?.challengesBannerIntro ?? "Les organisations à but non lucratif doivent répondre simultanément aux exigences :"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:self-center xl:grid-cols-3">
              {(d?.challengesBannerItems ?? defisecteur).map((item) => (
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
            {d?.challengesBannerSummary ?? "Cette diversité d'exigences impose une gestion financière rigoureuse, documentée et parfaitement traçable."}
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
              {t("accompagnement")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">

              {/* 01 — SYSBNL */}
              <div id="sysbnl" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">01</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[0]?.title ?? "Mise en œuvre du SYSBNL"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[0]?.desc ?? "Nous accompagnons les organisations dans l'application du Système Comptable des Entités à But Non Lucratif (SYSBNL). Nos interventions comprennent notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[0]?.items ?? [
                    "Mise en conformité comptable",
                    "Organisation de la comptabilité des projets",
                    "Préparation des états financiers conformément au SYSBNL",
                    "Assistance lors de la première adoption",
                    "Formation des équipes financières",
                    "Accompagnement lors des missions d'audit",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02 — Comptabilité des projets */}
              <div id="projets" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">02</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[1]?.title ?? "Comptabilité des projets"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[1]?.desc ?? "La plupart des ONG gèrent simultanément plusieurs projets financés par différents bailleurs. Nous mettons en place des systèmes permettant :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[1]?.items ?? [
                    "Un suivi financier par projet",
                    "Un suivi par bailleur",
                    "Un suivi par convention de financement",
                    "Une comptabilité analytique adaptée",
                    "Un suivi budgétaire permanent",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03 — Gestion des subventions */}
              <div id="subventions" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">03</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[2]?.title ?? "Gestion des subventions"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[2]?.desc ?? "Nous accompagnons les organisations dans :"}
                </p>
                <div className="mt-5 space-y-2.5">
                  {(d?.domains?.[2]?.items ?? [
                    "Le suivi de l'utilisation des fonds",
                    "Le rapprochement entre budget et dépenses réelles",
                    "La justification des dépenses",
                    "La préparation des rapports financiers destinés aux bailleurs",
                    "Le suivi des fonds non consommés",
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
                  {d?.domains?.[3]?.desc ?? "La protection des ressources constitue une priorité. Nous renforçons notamment :"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {(d?.domains?.[3]?.items ?? [
                    "Procédures financières",
                    "Séparation des fonctions",
                    "Gestion des avances",
                    "Achats",
                    "Gestion de caisse",
                    "Comptes bancaires",
                    "Immobilisations",
                    "Stocks",
                    "Prévention de la fraude",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05 — Gouvernance */}
              <div id="gouvernance" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">05</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[4]?.title ?? "Gouvernance"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[4]?.desc ?? "Nous accompagnons les organisations dans :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[4]?.items ?? [
                    "La rédaction des manuels de procédures",
                    "La cartographie des risques",
                    "Les délégations de pouvoirs",
                    "Les politiques financières",
                    "Les politiques d'achats",
                    "Les politiques de trésorerie",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Audit */}
              <div id="audit" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">06</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[5]?.title ?? "Audit"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[5]?.desc ?? "Nos missions comprennent :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[5]?.items ?? [
                    "Audit financier",
                    "Audit des projets",
                    "Audit de conformité",
                    "Audit des procédures",
                    "Audit du contrôle interne",
                    "Préparation aux audits des bailleurs",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 07 — Fiscalité */}
              <div id="fiscalite" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">07</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[6]?.title ?? "Fiscalité"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[6]?.desc ?? "Même lorsqu'elles bénéficient d'exonérations, les ONG restent soumises à diverses obligations fiscales et réglementaires. Nous accompagnons nos clients notamment sur :"}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {(d?.domains?.[6]?.items ?? [
                    "L'Impôt sur le Revenu des Personnes Physiques (IRPP)",
                    "Les retenues fiscales",
                    "Les obligations déclaratives",
                    "Les obligations sociales",
                    "Les obligations parafiscales",
                    "La TVA lorsque applicable",
                    "La facture normalisée et l'homologation des SFE",
                  ]).map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="text-sm text-brand-ink-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 08 — Reporting */}
              <div id="reporting" className="scroll-mt-24 rounded-sm border border-black/10 bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">08</p>
                <h3 className="mt-2 font-serif-display text-xl font-semibold text-brand-ink">
                  {d?.domains?.[7]?.title ?? "Reporting financier"}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink-light">
                  {d?.domains?.[7]?.desc ?? "Nous produisons des reportings fiables répondant aux attentes :"}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {(d?.domains?.[7]?.items ?? [
                    "Bailleurs de fonds",
                    "Conseils d'administration",
                    "Autorités nationales",
                    "Commissaires aux comptes",
                    "Partenaires financiers",
                  ]).map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center rounded-sm border border-brand-orange/20 bg-brand-orange/[0.04] px-3 py-2.5 text-center text-[12px] font-medium text-brand-ink"
                    >
                      {item}
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

      {/* NOS CLIENTS & RÉFÉRENTIELS */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">

            {/* Nos clients */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-orange/10">
                  <Users size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    {d?.clienteleEyebrow ?? "Clientèle"}
                  </p>
                  <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                    {d?.nosClients ?? "Nos clients"}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light">
                {d?.weAccompanyNotably ?? "Nous accompagnons notamment :"}
              </p>
              <div className="mt-5 space-y-2">
                {(d?.clients ?? clients).map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-sm border border-black/[0.07] px-4 py-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span className="text-[13px] text-brand-ink-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Référentiels */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand-orange/10">
                  <BookOpen size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    {d?.normesEyebrow ?? "Normes"}
                  </p>
                  <h2 className="font-serif-display text-xl font-semibold text-brand-ink">
                    {d?.referentielsTitle ?? "Référentiels maîtrisés"}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink-light">
                {d?.refDesc ?? "Nos équipes interviennent dans le respect des principaux référentiels applicables :"}
              </p>
              <div className="mt-5 space-y-2">
                {(d?.referentiels ?? referentiels).map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-sm border border-black/[0.07] px-4 py-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    <span className="text-[13px] leading-snug text-brand-ink-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
