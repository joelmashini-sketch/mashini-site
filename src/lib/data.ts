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
  shortDescription: string;
  category: "corporate" | "intelligence";
  icon: string;
  presentation: string;
  benefits: string[];
  methodology: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  available: boolean;
};

export const services: Service[] = [
  {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    shortDescription: "Commissariat aux comptes, audit légal et contractuel.",
    category: "corporate",
    icon: "ShieldCheck",
    presentation:
      "Nos missions d'audit et d'assurance offrent aux directions financières, conseils d'administration et actionnaires une opinion indépendante et fiable sur la qualité de l'information financière. Nous intervenons en commissariat aux comptes statutaire ainsi qu'en audit contractuel pour les groupes internationaux opérant en Afrique centrale.",
    benefits: [
      "Une opinion indépendante reconnue par les standards internationaux (ISA, normes CRIPP)",
      "Une meilleure maîtrise des risques financiers et de conformité",
      "Un renforcement de la crédibilité auprès des actionnaires et bailleurs de fonds",
      "Une restitution claire et exploitable par la direction",
    ],
    methodology: [
      { title: "Planification & évaluation des risques", description: "Compréhension de l'activité, du contrôle interne et des zones de risque significatives." },
      { title: "Travaux de contrôle", description: "Tests de procédures et contrôles substantifs sur les cycles significatifs." },
      { title: "Revue & synthèse", description: "Analyse des résultats, revue qualité indépendante et formalisation des conclusions." },
      { title: "Restitution", description: "Présentation des conclusions à la direction et émission du rapport d'opinion." },
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
    shortDescription: "Tenue comptable, reporting groupe et consolidation.",
    category: "corporate",
    icon: "FileSpreadsheet",
    presentation:
      "Nous assurons la tenue comptable conforme au référentiel SYSCOHADA ainsi que la production de reportings périodiques harmonisés avec les exigences de votre groupe, permettant une consolidation rapide et fiable.",
    benefits: [
      "Une comptabilité tenue dans les délais et conforme aux normes locales",
      "Un reporting groupe standardisé et livré dans vos délais de clôture",
      "Une équipe dédiée parlant le langage financier de votre maison-mère",
      "Une réduction du risque opérationnel et des écarts de consolidation",
    ],
    methodology: [
      { title: "Mise en place", description: "Paramétrage du plan comptable et des circuits de validation." },
      { title: "Production mensuelle", description: "Tenue comptable, rapprochements bancaires et contrôles de cohérence." },
      { title: "Reporting groupe", description: "Production des liasses de reporting selon le calendrier et le format du groupe." },
      { title: "Clôture & analyse", description: "Situations intermédiaires, clôtures annuelles et analyses de variance." },
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
    shortDescription: "Conseil fiscal, optimisation et assistance douanière.",
    category: "corporate",
    icon: "Landmark",
    presentation:
      "Notre équipe fiscale accompagne les entreprises locales et filiales internationales dans la gestion de leurs obligations fiscales et douanières, ainsi que dans l'optimisation de leur structure fiscale en conformité avec la réglementation en vigueur.",
    benefits: [
      "Une sécurisation des positions fiscales et une réduction du risque de redressement",
      "Une optimisation légale de la charge fiscale",
      "Une veille réglementaire continue sur la fiscalité locale et régionale",
      "Un accompagnement lors des contrôles fiscaux et douaniers",
    ],
    methodology: [
      { title: "Diagnostic fiscal", description: "Revue de la situation fiscale et identification des risques et opportunités." },
      { title: "Conformité déclarative", description: "Préparation et dépôt des déclarations fiscales périodiques." },
      { title: "Optimisation", description: "Recommandations sur la structuration fiscale et les régimes applicables." },
      { title: "Accompagnement contrôle", description: "Assistance lors des contrôles fiscaux et douaniers." },
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
    shortDescription: "Mise en place de dispositifs de contrôle performants.",
    category: "corporate",
    icon: "ListChecks",
    presentation:
      "Nous concevons et déployons des dispositifs de contrôle interne adaptés à la taille et aux enjeux de votre organisation, afin de sécuriser vos processus clés et de répondre aux exigences de votre groupe en matière de gouvernance.",
    benefits: [
      "Une cartographie claire des risques opérationnels et financiers",
      "Des procédures de contrôle alignées sur les standards du groupe",
      "Une réduction des erreurs, fraudes et anomalies opérationnelles",
      "Une meilleure préparation aux audits internes et externes",
    ],
    methodology: [
      { title: "Cartographie des risques", description: "Identification et hiérarchisation des risques par processus." },
      { title: "Conception des contrôles", description: "Définition des points de contrôle clés et des procédures associées." },
      { title: "Déploiement", description: "Mise en œuvre opérationnelle et formation des équipes." },
      { title: "Suivi & amélioration continue", description: "Tests périodiques et ajustement du dispositif." },
    ],
    faq: [
      { question: "Intervenez-vous sur des référentiels type COSO ?", answer: "Oui, nous nous appuyons sur le référentiel COSO adapté au contexte et à la taille de votre structure." },
    ],
    available: true,
  },
  {
    slug: "advisory",
    name: "Advisory",
    shortDescription: "Conseil stratégique, fusion-acquisition & restructuration.",
    category: "corporate",
    icon: "Briefcase",
    presentation:
      "Notre pôle Advisory accompagne les directions générales et financières dans leurs décisions stratégiques : restructuration, croissance externe, optimisation organisationnelle et accompagnement au changement.",
    benefits: [
      "Une analyse indépendante des options stratégiques",
      "Un accompagnement structuré des opérations de croissance externe",
      "Une expertise sectorielle adaptée au contexte d'Afrique centrale",
      "Une exécution rigoureuse, du diagnostic à la mise en œuvre",
    ],
    methodology: [
      { title: "Diagnostic", description: "Analyse de la situation et des enjeux stratégiques de l'organisation." },
      { title: "Cadrage des options", description: "Modélisation et évaluation des scénarios envisageables." },
      { title: "Recommandation", description: "Présentation d'une recommandation argumentée à la direction." },
      { title: "Mise en œuvre", description: "Accompagnement opérationnel jusqu'à la réalisation des objectifs." },
    ],
    faq: [
      { question: "Accompagnez-vous des opérations transfrontalières ?", answer: "Oui, notamment pour les filiales de groupes internationaux opérant dans plusieurs pays de la zone CEMAC." },
    ],
    available: true,
  },
  {
    slug: "corporate-finance",
    name: "Corporate Finance",
    shortDescription: "Structuration financière et accompagnement transactionnel.",
    category: "corporate",
    icon: "TrendingUp",
    presentation:
      "Nous accompagnons les entreprises dans la structuration de leurs opérations financières : levées de fonds, financement de croissance, montages d'opérations et évaluation d'entreprise.",
    benefits: [
      "Une structuration financière adaptée à votre stratégie de croissance",
      "Un accès facilité aux financements bancaires et institutionnels",
      "Une évaluation rigoureuse et défendable de votre entreprise",
      "Un accompagnement de bout en bout des opérations transactionnelles",
    ],
    methodology: [
      { title: "Analyse financière", description: "Revue de la structure financière actuelle et des besoins de financement." },
      { title: "Structuration", description: "Conception du montage financier optimal." },
      { title: "Mise en relation", description: "Identification et approche des partenaires financiers pertinents." },
      { title: "Closing", description: "Accompagnement jusqu'à la finalisation de l'opération." },
    ],
    faq: [
      { question: "Travaillez-vous avec des institutions financières internationales ?", answer: "Oui, nous avons l'habitude de structurer des dossiers présentables à des bailleurs et institutions financières internationales." },
    ],
    available: true,
  },
  {
    slug: "investment-advisory",
    name: "Investment Advisory",
    shortDescription: "Conseil en investissement pour entreprises et investisseurs.",
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
    shortDescription: "Audits d'acquisition selon notre référentiel propriétaire.",
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
  tagline: string;
  intro: string[];
  icon: string;
  items: string[];
};

export const sectors: Sector[] = [
  {
    slug: "secteur-minier",
    name: "Secteur minier",
    tagline: "Accompagner les acteurs de l'industrie minière vers l'excellence financière",
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
    tagline: "Aider les entreprises locales à répondre aux exigences des grandes sociétés minières",
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
    tagline: "Accompagner un secteur stratégique fortement réglementé",
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
    tagline: "Renforcer la compétitivité par une meilleure maîtrise des coûts",
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
    tagline: "Sécuriser les opérations dans un environnement à forte intensité de transactions",
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
    tagline: "Optimiser la performance dans un secteur à forts volumes",
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
    tagline: "Garantir la transparence et la bonne gouvernance",
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
    description: "Des standards internationaux au service de la performance.",
    icon: "Award",
  },
  {
    title: "Fiabilité",
    description: "Une approche rigoureuse, indépendante et transparente.",
    icon: "ShieldCheck",
  },
  {
    title: "Impact",
    description: "Nous transformons les données financières en décisions stratégiques.",
    icon: "TrendingUp",
  },
  {
    title: "Vision locale",
    description: "Une connaissance approfondie des marchés africains.",
    icon: "Globe2",
  },
];
