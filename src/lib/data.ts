export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Cabinet", href: "/cabinet" },
  { label: "Services", href: "/services" },
  { label: "Economic Intelligence", href: "/economic-intelligence" },
  { label: "Investment Score", href: "/investment-score" },
  { label: "Growth Desk", href: "/growth-desk" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  name: string;
  nameEn?: string;
  nameZh?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  shortDescriptionZh?: string;
  category: "corporate" | "intelligence";
  icon: string;
  presentation: string;
  presentationEn?: string;
  presentationZh?: string;
  benefits: string[];
  benefitsEn?: string[];
  benefitsZh?: string[];
  methodology: { title: string; description: string }[];
  methodologyEn?: { title: string; description: string }[];
  methodologyZh?: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  available: boolean;
};

export const services: Service[] = [
  {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    nameZh: "审计与鉴证",
    shortDescription: "Commissariat aux comptes, audit légal et contractuel.",
    shortDescriptionEn: "Statutory audit, legal and contractual audit.",
    shortDescriptionZh: "法定审计、法律和合同审计。",
    category: "corporate",
    icon: "ShieldCheck",
    presentation:
      "Nos missions d'audit et d'assurance offrent aux directions financières, conseils d'administration et actionnaires une opinion indépendante et fiable sur la qualité de l'information financière. Nous intervenons en commissariat aux comptes statutaire ainsi qu'en audit contractuel pour les groupes internationaux opérant en Afrique centrale.",
    presentationEn:
      "Our audit and assurance engagements provide financial directors, boards and shareholders with an independent and reliable opinion on the quality of financial information. We provide statutory audit services as well as contractual audit for international groups operating in Central Africa.",
    presentationZh:
      "我们的审计和鉴证业务为财务总监、董事会和股东提供有关财务信息质量的独立可靠意见。我们为在中非运营的国际集团提供法定审计和合同审计服务。",
    benefits: [
      "Une opinion indépendante reconnue par les standards internationaux (ISA, normes CRIPP)",
      "Une meilleure maîtrise des risques financiers et de conformité",
      "Un renforcement de la crédibilité auprès des actionnaires et bailleurs de fonds",
      "Une restitution claire et exploitable par la direction",
    ],
    benefitsEn: [
      "An independent opinion recognised under international standards (ISA, CRIPP standards)",
      "Better management of financial and compliance risks",
      "Strengthened credibility with shareholders and financiers",
      "Clear and actionable reporting to management",
    ],
    benefitsZh: [
      "符合国际准则（ISA、CRIPP准则）的独立意见",
      "更好地管理财务和合规风险",
      "提升对股东和资助方的公信力",
      "向管理层提供清晰可操作的报告",
    ],
    methodology: [
      { title: "Planification & évaluation des risques", description: "Compréhension de l'activité, du contrôle interne et des zones de risque significatives." },
      { title: "Travaux de contrôle", description: "Tests de procédures et contrôles substantifs sur les cycles significatifs." },
      { title: "Revue & synthèse", description: "Analyse des résultats, revue qualité indépendante et formalisation des conclusions." },
      { title: "Restitution", description: "Présentation des conclusions à la direction et émission du rapport d'opinion." },
    ],
    methodologyEn: [
      { title: "Planning & risk assessment", description: "Understanding of the business, internal controls and significant risk areas." },
      { title: "Control procedures", description: "Testing of procedures and substantive controls over significant cycles." },
      { title: "Review & synthesis", description: "Analysis of results, independent quality review and formal conclusions." },
      { title: "Reporting", description: "Presentation of conclusions to management and issuance of the opinion report." },
    ],
    methodologyZh: [
      { title: "计划与风险评估", description: "了解业务、内部控制和重大风险领域。" },
      { title: "控制程序", description: "对重要循环进行程序测试和实质性控制。" },
      { title: "审核与综合", description: "分析结果、独立质量审核和正式化结论。" },
      { title: "汇报", description: "向管理层提交结论并出具意见报告。" },
    ],
    faq: [
      { question: "Travaillez-vous avec des filiales de groupes internationaux ?", answer: "Oui, c'est notre cœur de métier. Nous accompagnons des filiales locales de groupes internationaux en coordination avec les auditeurs du groupe." },
      { question: "Quels référentiels appliquez-vous ?", answer: "Nous appliquons les normes ISA ainsi que les référentiels OHADA/SYSCOHADA, et pouvons adapter nos travaux aux exigences de reporting du groupe (IFRS, US GAAP)." },
    ],
    available: true,
  },
  {
    slug: "comptabilite-reporting",
    name: "Comptabilité & Reporting",
    nameEn: "Accounting & Reporting",
    nameZh: "会计与报告",
    shortDescription: "Tenue comptable, reporting groupe et consolidation.",
    shortDescriptionEn: "Bookkeeping, group reporting and consolidation.",
    shortDescriptionZh: "记账、集团报告及合并报表。",
    category: "corporate",
    icon: "FileSpreadsheet",
    presentation:
      "Nous assurons la tenue comptable conforme au référentiel SYSCOHADA ainsi que la production de reportings périodiques harmonisés avec les exigences de votre groupe, permettant une consolidation rapide et fiable.",
    presentationEn:
      "We handle bookkeeping compliant with the SYSCOHADA framework and produce periodic reports aligned with your group's requirements, enabling fast and reliable consolidation.",
    presentationZh:
      "我们按照SYSCOHADA框架进行记账，并按照集团要求定期提供报告，实现快速可靠的合并。",
    benefits: [
      "Une comptabilité tenue dans les délais et conforme aux normes locales",
      "Un reporting groupe standardisé et livré dans vos délais de clôture",
      "Une équipe dédiée parlant le langage financier de votre maison-mère",
      "Une réduction du risque opérationnel et des écarts de consolidation",
    ],
    benefitsEn: [
      "Bookkeeping completed on time and in compliance with local standards",
      "Standardised group reporting delivered within your closing deadlines",
      "A dedicated team speaking the financial language of your parent company",
      "Reduced operational risk and consolidation discrepancies",
    ],
    benefitsZh: [
      "按时完成并符合当地标准的账务",
      "在结算截止日期内交付标准化集团报告",
      "与母公司使用相同财务语言的专职团队",
      "降低运营风险和合并差异",
    ],
    methodology: [
      { title: "Mise en place", description: "Paramétrage du plan comptable et des circuits de validation." },
      { title: "Production mensuelle", description: "Tenue comptable, rapprochements bancaires et contrôles de cohérence." },
      { title: "Reporting groupe", description: "Production des liasses de reporting selon le calendrier et le format du groupe." },
      { title: "Clôture & analyse", description: "Situations intermédiaires, clôtures annuelles et analyses de variance." },
    ],
    methodologyEn: [
      { title: "Set-up", description: "Configuration of the chart of accounts and approval workflows." },
      { title: "Monthly production", description: "Bookkeeping, bank reconciliations and consistency checks." },
      { title: "Group reporting", description: "Production of reporting packages on the group's schedule and format." },
      { title: "Closing & analysis", description: "Interim statements, annual closings and variance analyses." },
    ],
    methodologyZh: [
      { title: "设置", description: "配置科目表和审批流程。" },
      { title: "月度生产", description: "记账、银行对账和一致性检查。" },
      { title: "集团报告", description: "按集团的时间表和格式生产报告包。" },
      { title: "结账与分析", description: "中期报表、年度结账和差异分析。" },
    ],
    faq: [
      { question: "Pouvez-vous reporter dans notre outil de consolidation groupe ?", answer: "Oui, nous nous adaptons aux outils existants (SAP, Hyperion, Cegid, etc.) ou à vos formats Excel propriétaires." },
      { question: "Intervenez-vous en délégation comptable complète ?", answer: "Oui, en mode externalisation totale ou en appui à une équipe comptable locale existante." },
    ],
    available: true,
  },
  {
    slug: "fiscalite-douanes",
    name: "Fiscalité & Douanes",
    nameEn: "Tax & Customs",
    nameZh: "税务与海关",
    shortDescription: "Conseil fiscal, optimisation et assistance douanière.",
    shortDescriptionEn: "Tax advisory, optimisation and customs assistance.",
    shortDescriptionZh: "税务咨询、优化及海关协助。",
    category: "corporate",
    icon: "Landmark",
    presentation:
      "Notre équipe fiscale accompagne les entreprises locales et filiales internationales dans la gestion de leurs obligations fiscales et douanières, ainsi que dans l'optimisation de leur structure fiscale en conformité avec la réglementation en vigueur.",
    presentationEn:
      "Our tax team supports local companies and international subsidiaries in managing their tax and customs obligations, as well as in optimising their tax structure in compliance with applicable regulations.",
    presentationZh:
      "我们的税务团队协助本地企业和国际子公司管理其税务和海关义务，并在符合现行法规的前提下优化其税务结构。",
    benefits: [
      "Une sécurisation des positions fiscales et une réduction du risque de redressement",
      "Une optimisation légale de la charge fiscale",
      "Une veille réglementaire continue sur la fiscalité locale et régionale",
      "Un accompagnement lors des contrôles fiscaux et douaniers",
    ],
    benefitsEn: [
      "Secured tax positions and reduced risk of reassessment",
      "Legal optimisation of the tax burden",
      "Ongoing regulatory monitoring on local and regional taxation",
      "Support during tax and customs audits",
    ],
    benefitsZh: [
      "巩固税务立场，降低重新评估风险",
      "合法优化税负",
      "持续监控当地及区域税务法规",
      "税务和海关审查期间的支持",
    ],
    methodology: [
      { title: "Diagnostic fiscal", description: "Revue de la situation fiscale et identification des risques et opportunités." },
      { title: "Conformité déclarative", description: "Préparation et dépôt des déclarations fiscales périodiques." },
      { title: "Optimisation", description: "Recommandations sur la structuration fiscale et les régimes applicables." },
      { title: "Accompagnement contrôle", description: "Assistance lors des contrôles fiscaux et douaniers." },
    ],
    methodologyEn: [
      { title: "Tax diagnostic", description: "Review of the tax situation and identification of risks and opportunities." },
      { title: "Declaratory compliance", description: "Preparation and filing of periodic tax returns." },
      { title: "Optimisation", description: "Recommendations on tax structuring and applicable regimes." },
      { title: "Audit support", description: "Assistance during tax and customs audits." },
    ],
    methodologyZh: [
      { title: "税务诊断", description: "审查税务状况并识别风险和机遇。" },
      { title: "申报合规", description: "准备并提交定期税务申报。" },
      { title: "优化", description: "就税务结构和适用制度提出建议。" },
      { title: "审计支持", description: "协助进行税务和海关审查。" },
    ],
    faq: [
      { question: "Gérez-vous la fiscalité des groupes ayant plusieurs filiales en Afrique centrale ?", answer: "Oui, nous coordonnons la conformité fiscale multi-juridictions au sein de la zone CEMAC." },
      { question: "Accompagnez-vous les opérations douanières ?", answer: "Oui, en lien avec les régimes douaniers applicables à l'import-export et aux zones franches." },
    ],
    available: true,
  },
  {
    slug: "controle-interne",
    name: "Contrôle interne",
    nameEn: "Internal Controls",
    nameZh: "内部控制",
    shortDescription: "Mise en place de dispositifs de contrôle performants.",
    shortDescriptionEn: "Implementation of efficient control frameworks.",
    shortDescriptionZh: "实施高效的内部控制体系。",
    category: "corporate",
    icon: "ListChecks",
    presentation:
      "Nous concevons et déployons des dispositifs de contrôle interne adaptés à la taille et aux enjeux de votre organisation, afin de sécuriser vos processus clés et de répondre aux exigences de votre groupe en matière de gouvernance.",
    presentationEn:
      "We design and deploy internal control frameworks adapted to the size and challenges of your organisation, securing your key processes and meeting your group's governance requirements.",
    presentationZh:
      "我们设计并部署适应贵组织规模和挑战的内部控制体系，保障关键流程安全，并满足集团治理要求。",
    benefits: [
      "Une cartographie claire des risques opérationnels et financiers",
      "Des procédures de contrôle alignées sur les standards du groupe",
      "Une réduction des erreurs, fraudes et anomalies opérationnelles",
      "Une meilleure préparation aux audits internes et externes",
    ],
    benefitsEn: [
      "A clear mapping of operational and financial risks",
      "Control procedures aligned with group standards",
      "Reduction of errors, fraud and operational anomalies",
      "Better preparation for internal and external audits",
    ],
    benefitsZh: [
      "清晰的运营和财务风险图谱",
      "与集团标准一致的控制程序",
      "减少错误、欺诈和运营异常",
      "更好地为内外部审计做准备",
    ],
    methodology: [
      { title: "Cartographie des risques", description: "Identification et hiérarchisation des risques par processus." },
      { title: "Conception des contrôles", description: "Définition des points de contrôle clés et des procédures associées." },
      { title: "Déploiement", description: "Mise en œuvre opérationnelle et formation des équipes." },
      { title: "Suivi & amélioration continue", description: "Tests périodiques et ajustement du dispositif." },
    ],
    methodologyEn: [
      { title: "Risk mapping", description: "Identification and prioritisation of risks by process." },
      { title: "Control design", description: "Definition of key control points and associated procedures." },
      { title: "Deployment", description: "Operational implementation and team training." },
      { title: "Monitoring & continuous improvement", description: "Periodic testing and adjustment of the framework." },
    ],
    methodologyZh: [
      { title: "风险图谱", description: "按流程识别和排列风险优先级。" },
      { title: "控制设计", description: "界定关键控制点及相关程序。" },
      { title: "部署", description: "运营实施和团队培训。" },
      { title: "监控与持续改进", description: "定期测试和调整控制体系。" },
    ],
    faq: [
      { question: "Intervenez-vous sur des référentiels type COSO ?", answer: "Oui, nous nous appuyons sur le référentiel COSO adapté au contexte et à la taille de votre structure." },
    ],
    available: true,
  },
  {
    slug: "advisory",
    name: "Advisory",
    nameZh: "战略咨询",
    shortDescription: "Conseil stratégique, fusion-acquisition & restructuration.",
    shortDescriptionEn: "Strategic advisory, mergers & acquisitions, and restructuring.",
    shortDescriptionZh: "战略咨询、并购与重组。",
    category: "corporate",
    icon: "Briefcase",
    presentation:
      "Notre pôle Advisory accompagne les directions générales et financières dans leurs décisions stratégiques : restructuration, croissance externe, optimisation organisationnelle et accompagnement au changement.",
    presentationEn:
      "Our Advisory practice supports management and financial teams in their strategic decisions: restructuring, external growth, organisational optimisation and change management.",
    presentationZh:
      "我们的咨询部门协助总经理和财务团队做出战略决策：重组、外部增长、组织优化和变革管理。",
    benefits: [
      "Une analyse indépendante des options stratégiques",
      "Un accompagnement structuré des opérations de croissance externe",
      "Une expertise sectorielle adaptée au contexte d'Afrique centrale",
      "Une exécution rigoureuse, du diagnostic à la mise en œuvre",
    ],
    benefitsEn: [
      "An independent analysis of strategic options",
      "Structured support for external growth operations",
      "Sector expertise adapted to the Central African context",
      "Rigorous execution, from diagnosis to implementation",
    ],
    benefitsZh: [
      "对战略选项进行独立分析",
      "外部增长业务的结构化支持",
      "适应中非背景的行业专业知识",
      "从诊断到实施的严格执行",
    ],
    methodology: [
      { title: "Diagnostic", description: "Analyse de la situation et des enjeux stratégiques de l'organisation." },
      { title: "Cadrage des options", description: "Modélisation et évaluation des scénarios envisageables." },
      { title: "Recommandation", description: "Présentation d'une recommandation argumentée à la direction." },
      { title: "Mise en œuvre", description: "Accompagnement opérationnel jusqu'à la réalisation des objectifs." },
    ],
    methodologyEn: [
      { title: "Diagnostic", description: "Analysis of the organisation's situation and strategic challenges." },
      { title: "Options scoping", description: "Modelling and evaluation of possible scenarios." },
      { title: "Recommendation", description: "Presentation of a substantiated recommendation to management." },
      { title: "Implementation", description: "Operational support through to achievement of objectives." },
    ],
    methodologyZh: [
      { title: "诊断", description: "分析组织现状和战略挑战。" },
      { title: "选项范围界定", description: "对可能情景进行建模和评估。" },
      { title: "建议", description: "向管理层提出有依据的建议。" },
      { title: "实施", description: "运营支持直至实现目标。" },
    ],
    faq: [
      { question: "Accompagnez-vous des opérations transfrontalières ?", answer: "Oui, notamment pour les filiales de groupes internationaux opérant dans plusieurs pays de la zone CEMAC." },
    ],
    available: true,
  },
  {
    slug: "corporate-finance",
    name: "Corporate Finance",
    nameZh: "企业融资",
    shortDescription: "Structuration financière et accompagnement transactionnel.",
    shortDescriptionEn: "Financial structuring and transactional support.",
    shortDescriptionZh: "财务结构化及交易支持。",
    category: "corporate",
    icon: "TrendingUp",
    presentation:
      "Nous accompagnons les entreprises dans la structuration de leurs opérations financières : levées de fonds, financement de croissance, montages d'opérations et évaluation d'entreprise.",
    presentationEn:
      "We support companies in structuring their financial operations: fundraising, growth financing, transaction structuring and business valuation.",
    presentationZh:
      "我们协助企业规划其财务运作：融资、增长融资、交易结构设计和企业估值。",
    benefits: [
      "Une structuration financière adaptée à votre stratégie de croissance",
      "Un accès facilité aux financements bancaires et institutionnels",
      "Une évaluation rigoureuse et défendable de votre entreprise",
      "Un accompagnement de bout en bout des opérations transactionnelles",
    ],
    benefitsEn: [
      "Financial structuring adapted to your growth strategy",
      "Facilitated access to bank and institutional financing",
      "A rigorous and defensible valuation of your company",
      "End-to-end support for transactional operations",
    ],
    benefitsZh: [
      "适应增长战略的财务结构",
      "便利获得银行和机构融资",
      "严谨且可论证的企业估值",
      "交易业务的全程支持",
    ],
    methodology: [
      { title: "Analyse financière", description: "Revue de la structure financière actuelle et des besoins de financement." },
      { title: "Structuration", description: "Conception du montage financier optimal." },
      { title: "Mise en relation", description: "Identification et approche des partenaires financiers pertinents." },
      { title: "Closing", description: "Accompagnement jusqu'à la finalisation de l'opération." },
    ],
    methodologyEn: [
      { title: "Financial analysis", description: "Review of the current financial structure and financing needs." },
      { title: "Structuring", description: "Design of the optimal financial arrangement." },
      { title: "Networking", description: "Identification and approach of relevant financial partners." },
      { title: "Closing", description: "Support through to completion of the transaction." },
    ],
    methodologyZh: [
      { title: "财务分析", description: "审查当前财务结构和融资需求。" },
      { title: "结构化", description: "设计最优财务安排。" },
      { title: "联系", description: "识别并接触相关金融合作伙伴。" },
      { title: "结案", description: "支持直至完成交易。" },
    ],
    faq: [
      { question: "Travaillez-vous avec des institutions financières internationales ?", answer: "Oui, nous avons l'habitude de structurer des dossiers présentables à des bailleurs et institutions financières internationales." },
    ],
    available: true,
  },
  {
    slug: "investment-advisory",
    name: "Investment Advisory",
    nameZh: "投资咨询",
    shortDescription: "Conseil en investissement pour entreprises et investisseurs.",
    shortDescriptionEn: "Investment advisory for companies and investors.",
    shortDescriptionZh: "为企业和投资者提供投资咨询。",
    category: "intelligence",
    icon: "LineChart",
    presentation:
      "Service en cours de structuration. Investment Advisory accompagnera les investisseurs et entreprises dans l'identification, l'évaluation et le suivi d'opportunités d'investissement en Afrique centrale, en s'appuyant sur notre intelligence économique sectorielle.",
    benefits: [
      "Une analyse d'opportunités fondée sur une connaissance fine des marchés locaux",
      "Une évaluation rigoureuse du risque pays et sectoriel",
      "Un accompagnement dans la structuration des opérations d'investissement",
      "Un accès privilégié à notre réseau de partenaires régionaux",
    ],
    methodology: [
      { title: "Sourcing", description: "Identification d'opportunités alignées avec votre thèse d'investissement." },
      { title: "Analyse", description: "Évaluation financière, sectorielle et de risque pays." },
      { title: "Structuration", description: "Accompagnement dans le montage de l'opération." },
      { title: "Suivi", description: "Suivi post-investissement et reporting de performance." },
    ],
    faq: [
      { question: "Ce service est-il disponible dès maintenant ?", answer: "Investment Advisory est en cours de déploiement. Contactez-nous pour être informé de son lancement et discuter de vos besoins en amont." },
    ],
    available: false,
  },
  {
    slug: "due-diligence",
    name: "Due Diligence",
    nameZh: "尽职调查",
    shortDescription: "Audits d'acquisition selon notre référentiel propriétaire.",
    shortDescriptionEn: "Acquisition audits using our proprietary framework.",
    shortDescriptionZh: "使用我们专有框架进行收购审计。",
    category: "intelligence",
    icon: "SearchCheck",
    presentation:
      "Service en cours de structuration. Nos missions de Due Diligence s'appuieront sur le Mashini Due Diligence Framework (MDDF), un référentiel propriétaire combinant analyse financière, opérationnelle et d'intelligence économique pour sécuriser vos opérations d'acquisition ou d'investissement.",
    benefits: [
      "Une revue exhaustive financière, fiscale, juridique et opérationnelle",
      "Une grille de lecture propriétaire (MDDF) adaptée au contexte régional",
      "Une identification précoce des risques cachés",
      "Un rapport synthétique et actionnable pour la prise de décision",
    ],
    methodology: [
      { title: "Cadrage", description: "Définition du périmètre et des enjeux clés de l'opération." },
      { title: "Investigation", description: "Revue documentaire, entretiens et vérifications terrain." },
      { title: "Analyse MDDF", description: "Application du référentiel Mashini Due Diligence Framework." },
      { title: "Restitution", description: "Rapport de synthèse et présentation des risques et recommandations." },
    ],
    faq: [
      { question: "Ce service est-il disponible dès maintenant ?", answer: "Due Diligence est en cours de déploiement. Contactez-nous pour anticiper vos besoins sur une opération à venir." },
    ],
    available: false,
  },
];

export type ArticleCategory = {
  slug: string;
  label: string;
};

export const articleCategories: ArticleCategory[] = [
  { slug: "economic-briefs", label: "Economic Briefs" },
  { slug: "investment-insights", label: "Investment Insights" },
  { slug: "sector-analysis", label: "Sector Analysis" },
  { slug: "company-intelligence", label: "Company Intelligence" },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "economic-brief-12",
    title: "Mashini Economic Brief #12",
    category: "economic-briefs",
    date: "2026-05-24",
    excerpt: "Croissance en Afrique centrale : opportunités, risques et perspectives.",
    content: [
      "La zone CEMAC enregistre une dynamique de croissance contrastée selon les secteurs, portée par les ressources extractives mais de plus en plus diversifiée vers les services et l'agro-industrie.",
      "Pour les filiales de groupes internationaux, cette période ouvre des fenêtres d'investissement sélectives, notamment dans les infrastructures, l'énergie et la logistique régionale.",
      "Notre analyse identifie trois facteurs de risque à surveiller à court terme : la volatilité des matières premières, l'évolution du cadre réglementaire des changes, et la disponibilité du financement bancaire local.",
    ],
  },
  {
    slug: "economic-brief-11",
    title: "Mashini Economic Brief #11",
    category: "economic-briefs",
    date: "2026-05-17",
    excerpt: "Financement des PME : pourquoi les entreprises restent non finançables.",
    content: [
      "Une majorité de PME en Afrique centrale rencontre des difficultés d'accès au financement bancaire, non pas par manque de viabilité économique, mais par absence d'une information financière fiable et structurée.",
      "La mise en conformité comptable et la transparence du reporting demeurent les leviers les plus rapides pour améliorer la finançabilité d'une entreprise.",
      "Le Mashini Investment Score a été conçu pour objectiver cette finançabilité auprès des partenaires financiers.",
    ],
  },
  {
    slug: "economic-brief-10",
    title: "Mashini Economic Brief #10",
    category: "economic-briefs",
    date: "2026-05-10",
    excerpt: "Investissement privé en RDC : état des lieux et dynamiques sectorielles.",
    content: [
      "L'investissement privé en République Démocratique du Congo connaît une diversification progressive au-delà du secteur minier, avec une montée en puissance des secteurs des télécommunications, de l'agro-industrie et de l'énergie.",
      "Cette analyse dresse un panorama des dynamiques sectorielles à surveiller pour les investisseurs et directions financières de groupes internationaux.",
    ],
  },
  {
    slug: "investment-insight-financabilite-pme",
    title: "Structurer une PME pour devenir finançable en 12 mois",
    category: "investment-insights",
    date: "2026-04-28",
    excerpt: "Les leviers concrets pour transformer le profil financier d'une entreprise en vue d'une levée de fonds ou d'un financement bancaire.",
    content: [
      "La finançabilité d'une entreprise repose sur trois piliers : la fiabilité de l'information financière, la solidité de la gouvernance, et la qualité du contrôle interne.",
      "Notre accompagnement combine diagnostic, mise en conformité comptable et structuration du dossier de financement.",
    ],
  },
  {
    slug: "sector-analysis-agro-industrie",
    title: "Agro-industrie en Afrique centrale : la prochaine frontière d'investissement",
    category: "sector-analysis",
    date: "2026-04-15",
    excerpt: "Panorama du secteur agro-industriel et des opportunités de transformation locale.",
    content: [
      "L'agro-industrie représente un potentiel de création de valeur encore largement sous-exploité dans la sous-région.",
      "Cette analyse sectorielle détaille les chaînes de valeur les plus prometteuses pour les investisseurs internationaux.",
    ],
  },
  {
    slug: "company-intelligence-veille-concurrentielle",
    title: "Mettre en place une veille concurrentielle structurée pour votre filiale",
    category: "company-intelligence",
    date: "2026-03-30",
    excerpt: "Méthodologie pour structurer une intelligence économique actionnable au niveau local.",
    content: [
      "Les filiales internationales bénéficient d'une intelligence économique locale pour anticiper les évolutions de marché et de la concurrence.",
      "Nous présentons une méthodologie simple de mise en place d'une veille structurée et actionnable.",
    ],
  },
];

export type ScorePillar = {
  name: string;
  weight: number;
};

export const investmentScorePillars: ScorePillar[] = [
  { name: "Santé financière", weight: 18 },
  { name: "Rentabilité", weight: 14 },
  { name: "Trésorerie", weight: 12 },
  { name: "Croissance", weight: 10 },
  { name: "Gouvernance", weight: 10 },
  { name: "Management", weight: 9 },
  { name: "Conformité", weight: 9 },
  { name: "Risques", weight: 8 },
  { name: "Digitalisation", weight: 5 },
  { name: "ESG", weight: 5 },
];

export const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "100+", label: "Clients accompagnés" },
  { value: "50+", label: "Experts" },
  { value: "5", label: "Pays d'intervention" },
];

export type Sector = {
  slug: string;
  name: string;
  nameEn?: string;
  nameZh?: string;
  tagline: string;
  taglineEn?: string;
  taglineZh?: string;
  intro: string[];
  icon: string;
  items: string[];
};

export const sectors: Sector[] = [
  {
    slug: "secteur-minier",
    name: "Secteur minier",
    nameEn: "Mining sector",
    nameZh: "矿业",
    tagline: "Accompagner les acteurs de l'industrie minière vers l'excellence financière",
    taglineEn: "Guiding mining industry players towards financial excellence",
    taglineZh: "引领矿业参与者走向财务卓越",
    intro: [
      "Le secteur minier constitue l'un des principaux moteurs de l'économie congolaise. Son environnement est caractérisé par des exigences élevées en matière de gouvernance, de conformité, de fiscalité, de contrôle interne et de reporting financier.",
      "Nous accompagnons les sociétés minières tout au long de leur développement.",
    ],
    icon: "Gem",
    items: [
      "Code minier et règlement minier",
      "Redevances minières",
      "Super Profit Tax",
      "Provisions réglementées",
      "Fiscalité minière",
      "Réforme de l'IS et de l'IRPP",
      "Facture normalisée",
      "Homologation des Systèmes de Facturation Électronique (SFE)",
      "Obligations parafiscales",
      "Reporting SYSCOHADA, IFRS et US GAAP",
      "Contrôle interne",
      "Gouvernance financière",
      "Due Diligence",
      "Finance d'entreprise",
    ],
  },
  {
    slug: "sous-traitants-miniers",
    name: "Sous-traitants miniers",
    nameEn: "Mining subcontractors",
    nameZh: "矿业分包商",
    tagline: "Aider les entreprises locales à répondre aux exigences des grandes sociétés minières",
    taglineEn: "Helping local companies meet the standards of major mining groups",
    taglineZh: "助力本地企业达到大型矿业集团的要求",
    intro: [
      "Les entreprises de sous-traitance doivent démontrer une organisation solide, une gestion transparente et une information financière fiable afin de répondre aux standards imposés par les grandes sociétés minières.",
    ],
    icon: "Wrench",
    items: [
      "Renforcement du contrôle interne",
      "Tableaux de bord et indicateurs de performance (KPIs)",
      "Structuration de la fonction finance",
      "Comptabilité et reporting",
      "Préparation aux audits des clients",
      "Business Plans",
      "Recherche de financements",
      "Accompagnement auprès de l'ARSP",
      "Accompagnement auprès du FPI",
      "Accompagnement auprès de l'ANAPI",
      "Fiscalité",
      "Facture normalisée",
      "Homologation SFE",
      "Parafiscalité",
    ],
  },
  {
    slug: "hydrocarbures",
    name: "Hydrocarbures",
    nameEn: "Hydrocarbons",
    nameZh: "石油与天然气",
    tagline: "Accompagner un secteur stratégique fortement réglementé",
    taglineEn: "Supporting a strategic, highly regulated sector",
    taglineZh: "支持高度监管的战略性行业",
    intro: [
      "Le secteur des hydrocarbures nécessite des investissements importants et évolue dans un environnement réglementaire particulièrement exigeant.",
    ],
    icon: "Flame",
    items: [
      "Investissements dans les infrastructures de stockage",
      "Autorisations de transport",
      "Autorisations de stockage",
      "Autorisations d'importation",
      "Réglementation de change",
      "Gestion des opérations en USD et en CDF",
      "Risque de change",
      "Apurement des licences",
      "Reporting financier",
      "Contrôle interne",
      "Fiscalité",
      "Facture normalisée",
      "Homologation SFE",
    ],
  },
  {
    slug: "industrie-manufacturiere",
    name: "Industrie manufacturière",
    nameEn: "Manufacturing industry",
    nameZh: "制造业",
    tagline: "Renforcer la compétitivité par une meilleure maîtrise des coûts",
    taglineEn: "Strengthening competitiveness through better cost management",
    taglineZh: "通过强化成本管控提升竞争力",
    intro: [
      "Dans l'industrie, la rentabilité repose sur une parfaite maîtrise des coûts de production et une gestion efficace des investissements.",
    ],
    icon: "Factory",
    items: [
      "Comptabilité analytique",
      "Calcul du coût de revient",
      "Contrôle de gestion",
      "Code des investissements",
      "Accompagnement lors des contrôles de l'ANAPI",
      "Code des accises",
      "Optimisation fiscale",
      "Accompagnement dans l'obtention de financements bancaires",
      "Accompagnement auprès du Fonds de Promotion de l'Industrie (FPI)",
      "Contrôle interne",
      "Reporting financier",
      "Facture normalisée",
      "Homologation SFE",
    ],
  },
  {
    slug: "transport-logistique",
    name: "Transport & Logistique",
    nameEn: "Transport & Logistics",
    nameZh: "运输与物流",
    tagline: "Sécuriser les opérations dans un environnement à forte intensité de transactions",
    taglineEn: "Securing operations in a high-volume transaction environment",
    taglineZh: "保障高交易量环境下的运营安全",
    intro: [
      "Les entreprises de transport réalisent quotidiennement un grand nombre d'opérations financières et commerciales nécessitant un contrôle rigoureux.",
    ],
    icon: "Truck",
    items: [
      "Gestion intensive de la trésorerie",
      "Contrôle des encaissements",
      "Facturation par course",
      "Facturation par prestation",
      "Gestion des créances",
      "Contrôle interne",
      "Contrôle des dépenses de carburant",
      "Gestion de flotte",
      "Indicateurs de performance",
      "Reporting financier",
      "Facture normalisée",
      "Homologation SFE",
      "Fiscalité",
    ],
  },
  {
    slug: "grande-distribution-fmcg",
    name: "Grande distribution & FMCG",
    nameEn: "Distribution & FMCG",
    nameZh: "大型零售与快消品",
    tagline: "Optimiser la performance dans un secteur à forts volumes",
    taglineEn: "Optimising performance in a high-volume sector",
    taglineZh: "优化高产量行业的绩效",
    intro: [
      "Le secteur des biens de consommation exige une gestion rigoureuse des marges, des stocks et des réseaux de distribution.",
    ],
    icon: "ShoppingBag",
    items: [
      "Comptabilité analytique",
      "Gestion des marges",
      "Rotation des stocks",
      "Contrôle des remises commerciales",
      "Gestion des distributeurs",
      "Reporting financier",
      "Contrôle interne",
      "Fiscalité",
      "Facture normalisée",
      "Homologation SFE",
    ],
  },
  {
    slug: "organisations-internationales",
    name: "Organisations internationales & ONG",
    nameEn: "International organisations & NGOs",
    nameZh: "国际组织与非政府组织",
    tagline: "Garantir la transparence et la bonne gouvernance",
    taglineEn: "Ensuring transparency and good governance",
    taglineZh: "保障透明度与良好治理",
    intro: [
      "Nous accompagnons les organisations dans la gestion rigoureuse des ressources mises à leur disposition.",
    ],
    icon: "Heart",
    items: [
      "Audit",
      "Contrôle interne",
      "Gestion des risques",
      "Reporting aux bailleurs",
      "Gestion des subventions",
      "Gouvernance",
      "Conformité",
    ],
  },
];

export const values = [
  {
    title: "Excellence",
    titleEn: "Excellence",
    titleZh: "卓越",
    description: "Des standards internationaux au service de la performance.",
    descriptionEn: "International standards at the service of performance.",
    descriptionZh: "以国际标准服务于绩效。",
    icon: "Award",
  },
  {
    title: "Fiabilité",
    titleEn: "Reliability",
    titleZh: "可靠",
    description: "Une approche rigoureuse, indépendante et transparente.",
    descriptionEn: "A rigorous, independent and transparent approach.",
    descriptionZh: "严谨、独立、透明的方法。",
    icon: "ShieldCheck",
  },
  {
    title: "Impact",
    titleEn: "Impact",
    titleZh: "影响力",
    description: "Nous transformons les données financières en décisions stratégiques.",
    descriptionEn: "We transform financial data into strategic decisions.",
    descriptionZh: "我们将财务数据转化为战略决策。",
    icon: "TrendingUp",
  },
  {
    title: "Vision locale",
    titleEn: "Local insight",
    titleZh: "本土洞察",
    description: "Une connaissance approfondie des marchés africains.",
    descriptionEn: "In-depth knowledge of African markets.",
    descriptionZh: "对非洲市场的深入了解。",
    icon: "Globe2",
  },
];

export function getServiceContent(service: Service, locale: string) {
  if (locale === "en") return {
    name: service.nameEn ?? service.name,
    shortDescription: service.shortDescriptionEn ?? service.shortDescription,
    presentation: service.presentationEn ?? service.presentation,
    benefits: service.benefitsEn ?? service.benefits,
    methodology: service.methodologyEn ?? service.methodology,
  };
  if (locale === "zh") return {
    name: service.nameZh ?? service.name,
    shortDescription: service.shortDescriptionZh ?? service.shortDescription,
    presentation: service.presentationZh ?? service.presentation,
    benefits: service.benefitsZh ?? service.benefits,
    methodology: service.methodologyZh ?? service.methodology,
  };
  return {
    name: service.name,
    shortDescription: service.shortDescription,
    presentation: service.presentation,
    benefits: service.benefits,
    methodology: service.methodology,
  };
}

export function getSectorName(sector: Sector, locale: string): string {
  if (locale === "en") return sector.nameEn ?? sector.name;
  if (locale === "zh") return sector.nameZh ?? sector.name;
  return sector.name;
}

export function getSectorTagline(sector: Sector, locale: string): string {
  if (locale === "en") return sector.taglineEn ?? sector.tagline;
  if (locale === "zh") return sector.taglineZh ?? sector.tagline;
  return sector.tagline;
}

export function getServiceName(service: Service, locale: string): string {
  if (locale === "en") return service.nameEn ?? service.name;
  if (locale === "zh") return service.nameZh ?? service.name;
  return service.name;
}
