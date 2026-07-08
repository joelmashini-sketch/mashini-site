export type Block =
  | { t: "p"; c: string }
  | { t: "h2"; c: string }
  | { t: "h3"; c: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; c: string };

export type Post = {
  slug: string;
  categorySlug: string;
  title: string;
  date: string;
  dateLabel: string;
  author: string;
  excerpt: string;
  blocks: Block[];
};

export type Category = {
  slug: string;
  name: string;
};

export const categories: Category[] = [
  { slug: "comptabilite-2", name: "Comptabilité" },
  { slug: "consulting-5", name: "Consulting" },
  { slug: "tax-4", name: "Tax" },
];

export const posts: Post[] = [
  {
    slug: "growth-desk-une-nouvelle-maniere-de-communiquer-avec-votre-expert-comptable",
    categorySlug: "consulting-5",
    title: "Growth Desk : une nouvelle manière de communiquer avec votre expert-comptable",
    date: "2026-07-07",
    dateLabel: "7 juillet 2026",
    author: "Joël MASHINI",
    excerpt: "Pendant longtemps, la relation entre un chef d'entreprise et son cabinet comptable a fonctionné selon un rituel bien établi. Chez MASHINI & Associés, nous avons fait le choix de rompre avec ce modèle.",
    blocks: [
      { t: "p", c: "Pendant longtemps, la relation entre un chef d'entreprise et son cabinet comptable a fonctionné selon un rituel bien établi : des échanges par email, des appels téléphoniques pour obtenir un chiffre, des réunions ponctuelles pour faire le point, et un bilan annuel remis bien après la clôture de l'exercice. L'information financière arrivait souvent trop tard pour vraiment changer une décision." },
      { t: "p", c: "Chez MASHINI & Associés, nous avons fait le choix de rompre avec ce modèle." },
      { t: "h2", c: "Votre entreprise, en temps réel" },
      { t: "p", c: "Growth Desk est la plateforme digitale que nous mettons à disposition de nos clients. Accessible depuis n'importe quel navigateur, elle vous donne une vue directe et permanente sur la santé financière de votre entreprise — sans avoir à attendre le prochain rendez-vous." },
      { t: "p", c: "Dès que nos équipes ont finalisé une période comptable, vos états financiers sont disponibles sur votre espace. Vous y trouvez non pas un document PDF figé, mais une synthèse structurée, lisible, commentée par les collaborateurs qui ont travaillé sur votre dossier." },
      { t: "h2", c: "La conformité, sans les surprises" },
      { t: "p", c: "L'environnement fiscal et réglementaire en RDC est exigeant. Les délais se suivent, les obligations s'accumulent, et une échéance manquée peut coûter cher." },
      { t: "p", c: "Growth Desk centralise l'ensemble de vos obligations fiscales et sociales :" },
      { t: "ul", items: ["TVA", "IS", "CNSS", "INPP", "ONEM", "Guichet unique", "Dépôt des états financiers"] },
      { t: "p", c: "Vous voyez en un coup d'œil ce qui a été traité, ce qui est en cours, et ce qui est à venir. Chaque événement est accompagné du cadre légal qui le justifie — les textes de loi, les articles applicables — pour que vous compreniez non seulement quoi payer, mais pourquoi." },
      { t: "h2", c: "Un canal direct avec votre cabinet" },
      { t: "p", c: "Fini les emails qui se perdent dans les fils de conversation. Growth Desk intègre un espace de messagerie structuré entre vous et votre équipe dédiée. Vous posez une question, elle est transmise au bon interlocuteur, et vous recevez une réponse tracée, archivée, retrouvable à tout moment." },
      { t: "p", c: "Vous avez besoin de transmettre des documents ? Votre cabinet génère une demande précise depuis la plateforme. Vous cochez les documents transmis, vous ajoutez une note si nécessaire. Votre équipe est notifiée instantanément. Le va-et-vient d'emails avec des pièces jointes en double appartient au passé." },
      { t: "h2", c: "La transparence comme standard" },
      { t: "p", c: "Nous croyons qu'un client bien informé prend de meilleures décisions. Growth Desk n'est pas un outil de reporting supplémentaire — c'est une façon de travailler ensemble différemment." },
      { t: "p", c: "Vos données restent les vôtres. L'accès est individuel, sécurisé, et strictement limité à votre dossier. Aucune information d'un autre client ne circule sur votre espace." },
      { t: "h2", c: "Ce que cela change concrètement" },
      { t: "ul", items: [
        "Vous consultez vos résultats financiers dès qu'une période est clôturée, pas trois mois après.",
        "Vous suivez vos obligations fiscales sans avoir à relancer votre cabinet.",
        "Vous échangez avec votre équipe sur des faits précis, pas sur des souvenirs d'une réunion.",
        "Vous prenez vos décisions avec des chiffres à jour, pas avec les chiffres de l'année dernière.",
      ]},
      { t: "p", c: "Growth Desk est disponible pour l'ensemble de nos clients. Si vous souhaitez activer votre accès ou en savoir plus, contactez votre responsable de dossier chez MASHINI & Associés." },
    ],
  },

  {
    slug: "la-comptabilite-n-est-pas-faite-pour-la-banque-elle-est-faite-pour-diriger-l-entreprise-8",
    categorySlug: "consulting-5",
    title: "La comptabilité n'est pas faite pour la banque. Elle est faite pour diriger l'entreprise.",
    date: "2026-05-23",
    dateLabel: "23 mai 2026",
    author: "Joël MASHINI",
    excerpt: "De nombreux dirigeants ne s'intéressent à leur comptabilité que lorsqu'un besoin immédiat se présente. Pourtant, la comptabilité est avant tout un outil de pilotage de l'entreprise.",
    blocks: [
      { t: "p", c: "Depuis le lancement de MASHINI & Associés, nous avons constaté une réalité qui revient régulièrement : de nombreux dirigeants ne s'intéressent à leur comptabilité que lorsqu'un besoin immédiat se présente — obtenir un crédit bancaire, répondre à un appel d'offres, produire des états financiers ou déposer une déclaration fiscale." },
      { t: "p", c: "Dans ces situations, la comptabilité est perçue comme une formalité administrative plutôt que comme un véritable outil de gestion." },
      { t: "h2", c: "La réalité des PME locales" },
      { t: "p", c: "De nombreuses PME locales disposent d'idées solides et d'une bonne connaissance de leur marché. Mais elles manquent souvent d'une information financière fiable. Les dirigeants pilotent leur entreprise à l'intuition et à la connaissance du marché, sans indicateurs financiers concrets permettant de mesurer la rentabilité, de gérer la trésorerie ou de planifier la croissance." },
      { t: "p", c: "Au fil de notre accompagnement d'entreprises en phase de développement, nous avons observé une transformation profonde lorsque des systèmes comptables structurés et une information financière fiable ont été mis en place. Ces entreprises pouvaient désormais répondre à des questions essentielles :" },
      { t: "ul", items: [
        "Quels produits génèrent de véritables marges ?",
        "Quels clients sont les plus rentables ?",
        "Quelles activités détruisent de la valeur malgré un chiffre d'affaires important ?",
        "Quelles réserves de trésorerie peuvent soutenir la croissance ?",
        "Quels investissements peuvent être financés en toute sécurité ?",
      ]},
      { t: "h2", c: "La comptabilité comme outil de décision" },
      { t: "p", c: "Une comptabilité bien conduite permet avant tout de prendre de meilleures décisions — et pas seulement de satisfaire aux obligations réglementaires. Sur le plan fiscal également, une comptabilité rigoureuse permet d'anticiper les obligations et d'optimiser légalement les charges d'exploitation." },
      { t: "h2", c: "Un contexte congolais en mutation" },
      { t: "p", c: "Dans le contexte d'évolution réglementaire de la République Démocratique du Congo et des politiques de promotion du contenu local, les entreprises disposant d'une information financière fiable, d'une gouvernance structurée et d'une intégrité de conformité seront les mieux positionnées pour sécuriser des partenariats, obtenir des financements et saisir les opportunités de croissance." },
      { t: "quote", c: "Les entreprises qui connaissent leurs chiffres prennent généralement de meilleures décisions." },
    ],
  },

  {
    slug: "la-loi-de-finances-2026-fiscalite-7",
    categorySlug: "tax-4",
    title: "La loi de finances 2026 : Fiscalité",
    date: "2026-01-18",
    dateLabel: "18 janvier 2026",
    author: "MASHINI & Associés",
    excerpt: "La loi de finances 2026 intervient dans un contexte de réformes fiscales majeures : refonte de la TVA avec la facturation normalisée et entrée en vigueur des nouvelles lois sur la fiscalité directe.",
    blocks: [
      { t: "p", c: "La loi de finances 2026 intervient dans un contexte marqué par la mise en œuvre de réformes fiscales importantes : la réforme de la TVA avec la facturation normalisée (effective depuis le 1er décembre 2025) et la réforme de la fiscalité directe portée par les lois 23/052 et 23/053 du 30 novembre 2023, qui entrent en vigueur en 2026." },
      { t: "h2", c: "Procédure d'attribution du numéro impôt" },
      { t: "p", c: "La loi permet désormais l'obtention du numéro impôt en ligne. Les contribuables doivent fournir un plan de localisation sur demande de l'administration fiscale — une exigence réintroduite après que la loi de finances 2025 avait supprimé l'obligation de certificat de localisation. Cette mesure vise à remédier aux restrictions de déduction de TVA sur les factures d'entités introuvables à leur adresse déclarée." },
      { t: "p", c: "La loi introduit également l'attribution automatique du numéro impôt sur la base des informations détenues par les autorités fiscales." },
      { t: "h2", c: "Contrôle des transactions entre parties liées" },
      { t: "p", c: "Les dispositions s'appliquent aux entités suivantes :" },
      { t: "ul", items: [
        "Sociétés dont le chiffre d'affaires ou l'actif brut atteint ou dépasse 10 milliards de CDF",
        "Entités détenant la majorité du capital ou des droits de vote dans de telles sociétés",
      ]},
      { t: "p", c: "Ces entités doivent notamment :" },
      { t: "ul", items: [
        "Présenter la documentation sur les prix de transfert dès la première visite de vérification fiscale",
        "Déposer annuellement une déclaration sur les prix de transfert",
      ]},
      { t: "h2", c: "Déclaration pays par pays" },
      { t: "p", c: "Applicable aux sociétés établissant des états financiers consolidés avec un chiffre d'affaires annuel consolidé de 850 millions de dollars américains, sous réserve qu'aucune entité mère dans un État non défaillant n'ait cette obligation, et qu'aucun autre membre qualifié du groupe en RDC n'ait déposé la déclaration." },
      { t: "h2", c: "Sanctions" },
      { t: "ul", items: [
        "Non-réponse aux demandes d'information : 250 000 à 10 millions de CDF",
        "Défaillances déclaratives : 200 000 à 400 000 CDF (contribuables exonérés) ; 1,5 à 3 millions de CDF (régularisation après mise en demeure)",
        "Violation du rapport pays par pays : 150 millions de CDF",
        "Violation de la déclaration sur les prix de transfert : 100 millions de CDF",
      ]},
      { t: "h2", c: "Déclarations IS et IRPP" },
      { t: "p", c: "L'administration fiscale peut communiquer aux contribuables des informations sur les éléments de détermination du bénéfice sans pour autant supprimer l'obligation déclarative. Les sociétés doivent soumettre les procès-verbaux de l'assemblée générale approuvant les états certifiés. Les déclarations de revenus catégoriels sous régime du bénéfice réel requièrent la contresignature du conseil d'administration ou du comptable. Les contribuables doivent fournir des listes de fournisseurs incluant identité, adresses, numéros fiscaux et montants." },
      { t: "h2", c: "Restructuration des taux de TVA" },
      { t: "ul", items: [
        "Taux 1 % : biens de première nécessité et matières premières pour l'industrie locale",
        "Taux 5 % : ventes de billets d'avion sur vols intérieurs",
        "Taux zéro : exportations et opérations assimilées",
        "Taux 16 % : opérations restantes",
      ]},
      { t: "h2", c: "Autres dispositions" },
      { t: "p", c: "La loi renforce l'obligation d'utilisation de la facture normalisée, introduit des retenues à la source sur les revenus de capitaux mobiliers de source étrangère, et prévoit l'effet suspensif des recours devant les tribunaux en cas de saisine de la Commission nationale de médiation fiscale." },
    ],
  },

  {
    slug: "l-essentiel-de-la-norme-ifrs-18-6",
    categorySlug: "comptabilite-2",
    title: "L'essentiel de la norme IFRS 18",
    date: "2026-01-14",
    dateLabel: "14 janvier 2026",
    author: "MASHINI & Associés",
    excerpt: "IFRS 18 remplace IAS 1 et établit un cadre précis pour la présentation des états financiers, avec cinq catégories obligatoires, de nouveaux sous-totaux et des règles sur les mesures de performance de la direction.",
    blocks: [
      { t: "p", c: "La norme IFRS 18, qui remplace IAS 1, établit un cadre précis pour la présentation des états financiers. Contrairement à son prédécesseur, elle impose des exigences structurelles spécifiques pour l'organisation des charges et des produits." },
      { t: "h2", c: "Les cinq catégories de classification" },
      { t: "p", c: "Le compte de résultat doit désormais classer les éléments en cinq catégories distinctes :" },
      { t: "ol", items: [
        "Exploitation — couvre les activités principales et accessoires, y compris les éléments exceptionnels",
        "Investissement — concerne les éléments liés aux investissements et aux actifs générateurs de trésorerie fonctionnant de manière indépendante",
        "Financement — inclut les effets de financement et d'actualisation",
        "Impôts — traite des obligations relatives à l'impôt sur le résultat",
        "Activités abandonnées — comptabilise les activités cédées conformément à IFRS 5",
      ]},
      { t: "h2", c: "Sous-totaux obligatoires" },
      { t: "p", c: "La norme impose trois sous-totaux obligatoires : le résultat opérationnel, le résultat avant financement et fiscalité, et le résultat net." },
      { t: "h2", c: "Méthodes de présentation" },
      { t: "p", c: "Les entités peuvent choisir parmi trois approches : la classification fonctionnelle, la classification par nature, ou une présentation hybride combinant les deux." },
      { t: "h2", c: "Mesures de performance de la direction (MPM)" },
      { t: "p", c: "La direction peut introduire des indicateurs de performance personnalisés (MPM) si ceux-ci satisfont trois conditions cumulatives : utilisation dans les communications externes, reflet de la perspective de performance de la direction, et non-imposition par les normes IFRS." },
      { t: "p", c: "Les MPM requièrent des informations détaillées en notes annexes, comprenant la description de la performance, les réconciliations avec les éléments IFRS, les calculs et les explications de toute modification." },
      { t: "h2", c: "Dispositions complémentaires" },
      { t: "p", c: "La norme met l'accent sur les principes d'agrégation et de désagrégation. Les tableaux de flux de trésorerie utilisant la méthode indirecte débutent désormais à partir du résultat opérationnel plutôt que de l'EBITDA." },
      { t: "h2", c: "Entrée en vigueur" },
      { t: "p", c: "IFRS 18 est applicable aux exercices ouverts à compter du 1er janvier 2027. L'adoption anticipée est autorisée." },
    ],
  },

  {
    slug: "la-facture-normalisee-la-reforme-de-la-fiscalite-indirecte-la-taxe-sur-la-valeur-ajoutee-5",
    categorySlug: "consulting-5",
    title: "La facture normalisée : la réforme de la fiscalité indirecte, la taxe sur la valeur ajoutée",
    date: "2026-01-04",
    dateLabel: "4 janvier 2026",
    author: "MASHINI & Associés",
    excerpt: "La réforme sur la facture normalisée a le mérite de permettre aux autorités fiscales de mieux contrôler et collecter la TVA. Du côté des contribuables, elle représente un défi de conformité et de gestion globale.",
    blocks: [
      { t: "p", c: "La réforme sur la facture normalisée a le mérite de permettre aux autorités fiscales de mieux contrôler et collecter l'impôt sur la consommation — la taxe sur la valeur ajoutée. C'est, en tous cas, l'objectif premier de la réforme." },
      { t: "p", c: "Du côté des contribuables, la réforme sonne comme un défi de conformité et de gestion globale : choix des outils et solutions internes à utiliser, gestion des risques liés aux taux de change pour les factures émises en francs congolais dans un environnement économique où le dollar américain est la devise de référence, restructuration des processus pour atteindre une conformité sans faille…" },
      { t: "h2", c: "La facture normalisée" },
      { t: "p", c: "La facture normalisée est une facture émise par des « dispositifs fiscaux électroniques (DFE) connectés à l'administration fiscale » pour collecter les informations relatives à la TVA." },
      { t: "p", c: "Les dispositifs fiscaux électroniques se répartissent en deux grandes catégories :" },
      { t: "ul", items: [
        "Dispositifs en ligne (e-DFE) : e-UF (Unité de Facturation en ligne), e-MCF (Module de Contrôle de Facturation en ligne)",
        "Dispositifs physiques (DFE) : UF (Unité de Facturation) et MCF (Module de Contrôle de Facturation)",
      ]},
      { t: "h2", c: "Les solutions disponibles" },
      { t: "p", c: "Le contribuable aura donc le choix d'opter pour une ou plusieurs solutions :" },
      { t: "ul", items: [
        "e-UF : une plateforme en ligne offrant l'émission et le reporting de ventes gratuitement, nécessitant une connexion internet stable et un numéro impôt.",
        "UF : une unité de facturation physique fournie par des fournisseurs agréés par l'administration fiscale, adaptée aux micro-entreprises du commerce de détail.",
        "e-MCF : un module en ligne s'interfaçant avec les systèmes de facturation internes agréés, nécessitant une connexion internet stable.",
        "MCF : un module de contrôle physique offrant une connexion directe aux systèmes internes, avec capacités de stockage et de transfert de données pour les environnements à connectivité limitée.",
      ]},
      { t: "p", c: "Même si l'on opte pour un DFE dématérialisé, il est toujours préférable de disposer en parallèle d'un dispositif physique." },
      { t: "h2", c: "Au-delà de la TVA" },
      { t: "p", c: "La réforme va au-delà de la conformité TVA et renforce le contrôle fiscal général : les autorités fiscales peuvent désormais reconstituer facilement le chiffre d'affaires lorsqu'elles disposent d'informations TVA exhaustives, et le contrôle des charges afférentes aux prestations et acquisitions de biens auprès de prestataires résidents devient plus aisé." },
      { t: "p", c: "Cette réforme exige un positionnement stratégique adéquat et un accompagnement approprié pour garantir la conformité." },
    ],
  },

  {
    slug: "l-externalisation-de-la-fonction-d-audit-interne-une-solution-d-optimisation-4",
    categorySlug: "comptabilite-2",
    title: "L'externalisation de la fonction d'audit interne : une solution d'optimisation",
    date: "2025-10-03",
    dateLabel: "3 octobre 2025",
    author: "Joël MASHINI",
    excerpt: "L'audit interne reste sous-utilisé dans les contextes entrepreneuriaux malgré son rôle crucial. L'externalisation représente une solution optimale pour les PME, offrant indépendance, expertise et maîtrise des coûts.",
    blocks: [
      { t: "h2", c: "Introduction" },
      { t: "p", c: "Dans les contextes entrepreneuriaux, l'audit interne reste sous-utilisé malgré son rôle crucial dans la garantie de la performance organisationnelle. L'absence d'évaluation critique conduit souvent à des inefficacités opérationnelles. Une démarche d'audit significative doit répondre à plusieurs questions fondamentales :" },
      { t: "ul", items: [
        "Des cadres de gouvernance supérieurs sont-ils disponibles ?",
        "La gouvernance organisationnelle est-elle alignée sur les objectifs stratégiques et la vision ?",
        "Les reportings des responsables (financiers, opérationnels, commerciaux) sont-ils exacts, pertinents et appropriés ?",
        "Existe-t-il un système d'évaluation et de contrôle des risques pour atténuer les risques organisationnels ?",
        "Les données organisationnelles sont-elles correctement sécurisées ?",
      ]},
      { t: "h2", c: "Qu'est-ce que l'audit interne ?" },
      { t: "p", c: "L'audit interne est « une activité indépendante et objective qui fournit une opinion d'assurance sur le niveau de maîtrise des opérations, formule des recommandations d'amélioration et contribue à créer de la valeur »." },
      { t: "p", c: "La fonction d'audit interne aide les organisations à atteindre leurs objectifs en évaluant les systèmes d'évaluation des risques, de contrôle et de gouvernance, tout en formulant des recommandations d'amélioration." },
      { t: "h2", c: "Les contraintes à la mise en place d'une fonction d'audit interne" },
      { t: "h3", c: "L'objectivité" },
      { t: "p", c: "Lorsque l'audit interne perd son indépendance, l'objectivité diminue et les recommandations deviennent biaisées. L'audit exige l'impartialité dans son exécution et ses résultats. Dans les PME notamment, les structures de gouvernance existantes ne garantissent souvent pas l'indépendance de l'auditeur, car celui-ci rend compte à la direction sans comité d'audit. Les pressions de performance exposent la fonction d'audit au risque de compromis dans ses évaluations." },
      { t: "h3", c: "L'expertise requise" },
      { t: "p", c: "Selon le type d'audit, la taille de l'organisation et la complexité des activités, des compétences spécialisées peuvent être nécessaires et indisponibles localement. Certains aspects d'audit requièrent une expertise que l'organisation peut ne pas avoir en interne." },
      { t: "h3", c: "Les ressources" },
      { t: "p", c: "Les organisations peuvent trouver la fonction d'audit interne économiquement inefficiente, en particulier les entités plus petites pour lesquelles les coûts de maintenance et les salaires dépassent les avantages. Les environnements complexes et instables nécessitent souvent le recours à des experts, rendant la fonction d'audit interne prohibitivement coûteuse." },
      { t: "h2", c: "Les solutions d'externalisation" },
      { t: "p", c: "L'externalisation répond aux contraintes mentionnées grâce à plusieurs avantages :" },
      { t: "ul", items: [
        "Les prestataires externes n'ont pas de relations hiérarchiques ni de familiarité avec le personnel, renforçant l'indépendance et l'objectivité",
        "L'expérience diversifiée des prestataires augmente la probabilité de couverture de l'expertise nécessaire",
        "Les fonctions externalisées bénéficient d'économies d'échelle, les prestataires devant toutefois mettre en place des contrôles de conflits d'intérêts",
      ]},
      { t: "p", c: "Les formats d'externalisation comprennent :" },
      { t: "ul", items: [
        "Arrangements ponctuels : lorsque les fonctions internes manquent de ressources pour des plans d'audit complets",
        "Co-sourcing : les prestataires externes accompagnent les équipes internes sur des aspects spécifiques ou évaluent la conformité qualitative des travaux",
        "Sous-traitance : un responsable d'audit interne crée des plans annuels et confie des travaux à un prestataire externe",
      ]},
      { t: "h2", c: "Critères de sélection du prestataire" },
      { t: "ul", items: [
        "Établissement des termes de référence",
        "Évaluation des compétences du prestataire et de ses membres",
        "Évaluation de l'indépendance du prestataire et de ses membres",
        "Mise en place de systèmes d'évaluation du prestataire externe",
      ]},
      { t: "h2", c: "Conclusion" },
      { t: "p", c: "L'externalisation de la fonction d'audit interne représente la solution optimale pour les petites et moyennes entreprises : elle offre une optimisation des coûts, fournit une expertise indisponible en interne et garantit l'indépendance que des structures de gouvernance embryonnaires ne peuvent assurer. Les organisations doivent établir préalablement des termes de référence, évaluer les compétences et l'indépendance du prestataire, et mettre en place des systèmes d'évaluation des prestations." },
    ],
  },

  {
    slug: "l-overtrading-le-piege-de-plus-dans-un-contexte-defavorable-1",
    categorySlug: "comptabilite-2",
    title: "L'overtrading, le piège de plus dans un contexte défavorable",
    date: "2025-08-04",
    dateLabel: "4 août 2025",
    author: "Joël MASHINI",
    excerpt: "L'overtrading représente un risque d'entreprise majeur et souvent négligé. Il se produit lorsque la croissance du chiffre d'affaires n'est pas accompagnée des ressources financières, humaines et opérationnelles nécessaires.",
    blocks: [
      { t: "p", c: "L'overtrading représente un risque d'entreprise majeur et souvent négligé. Le phénomène agit comme « un poison lent mais puissant », fréquemment surveillé lors de grandes transformations organisationnelles mais négligé par la suite, jusqu'à ce que ses conséquences néfastes se manifestent." },
      { t: "h2", c: "Comprendre l'overtrading" },
      { t: "p", c: "Le concept reflète un paradoxe : une expansion rapide sans développement correspondant des ressources. Comme le suggère un principe, « la façon la plus rapide d'atteindre sa destination est d'aller lentement ». L'overtrading se produit lorsque les entreprises connaissent une croissance substantielle de leur chiffre d'affaires sans disposer des ressources financières, de la capacité de production, du personnel qualifié ou du capital humain nécessaires pour soutenir les opérations." },
      { t: "p", c: "Ce déséquilibre peut résulter de forces de marché externes — fluctuations saisonnières de la demande ou évolutions structurelles — ou de facteurs internes comme la perte de personnel, la réduction de capacité ou la suppression de sources de financement." },
      { t: "p", c: "Les indicateurs courants de détresse comprennent :" },
      { t: "ul", items: [
        "Expansion rapide des ventes",
        "Compression des marges",
        "Difficultés persistantes de trésorerie",
        "Hausse des ratios d'endettement et des coûts associés",
        "Difficultés récurrentes de stocks et de paiement",
      ]},
      { t: "h2", c: "Le contexte des pays en développement" },
      { t: "p", c: "Les structures économiques influencent significativement la compétitivité des entreprises et leur capacité organisationnelle. Les environnements compétitifs et organisés encouragent naturellement le développement des compétences avant les tentatives d'expansion, réduisant l'exposition à l'overtrading." },
      { t: "p", c: "Les pays en développement font face à des pressions particulières. Trois vulnérabilités spécifiques émergent :" },
      { t: "h3", c: "Politiques d'incitation à l'investissement mal planifiées" },
      { t: "p", c: "Les gouvernements axés sur le développement mettent en œuvre des mesures d'encouragement à l'entrepreneuriat pour redistribuer les richesses. Cependant, « lorsqu'elles sont isolées de prérequis importants, elles produisent l'effet inverse ». Des exemples historiques incluent la Zaïrianisation (nationalisation et redistribution de 1973) et l'Autorité de Régulation de la Sous-traitance dans le secteur privé (ARSP), qui ont produit des résultats insuffisants en raison d'une préparation et d'une formation des bénéficiaires inadéquates." },
      { t: "h3", c: "Népotisme, corruption et clientélisme" },
      { t: "p", c: "La croissance artificielle des activités par concurrence déloyale, évasion fiscale et avantages politiques se développe souvent sans infrastructure organisationnelle de soutien. Les entreprises connaissant une croissance rapide par des voies non compétitives présentent typiquement des flux de trésorerie instables, une qualité de service en déclin, une faiblesse de la gestion opérationnelle et un effondrement final dû à un endettement insoutenable et à des pertes sur créances." },
      { t: "h3", c: "Structure sociale et économique" },
      { t: "p", c: "Les déficits d'infrastructure, les contraintes administratives, l'expertise disponible et les niveaux de compétence contraignent directement la capacité opérationnelle. Les entrepreneurs doivent évaluer en permanence les opportunités de croissance par rapport aux contraintes environnementales et aux exigences temporelles." },
      { t: "h2", c: "Approches recommandées" },
      { t: "p", c: "Les organisations doivent rejeter les pratiques problématiques et faire appel à des spécialistes du conseil pour :" },
      { t: "ul", items: [
        "La définition d'objectifs alignés sur la vision organisationnelle",
        "L'élaboration de stratégies adaptant les activités et les ressources aux objectifs de l'organisation",
        "La mise en place de systèmes d'évaluation des risques intégrant l'overtrading",
        "Des systèmes d'information (tels que des plateformes ERP comme SAP) permettant le suivi des activités et le pilotage par tableaux de bord",
        "Des pratiques d'amélioration continue de la gestion adressant les risques identifiés et les niveaux d'activité",
      ]},
    ],
  },

  {
    slug: "ifrs-15-point-de-reconnaissance-du-revenue-cas-de-contrat-a-obligations-croisees-2",
    categorySlug: "comptabilite-2",
    title: "IFRS 15 : point de reconnaissance du revenue — cas de contrat à obligations croisées",
    date: "2025-08-04",
    dateLabel: "4 août 2025",
    author: "Joël MASHINI",
    excerpt: "IFRS 15 consolide les anciens référentiels IAS 18 et ses interprétations. Mais un cas pratique reste peu traité : les contrats à obligations croisées, où le vendeur doit suspendre sa prestation en attendant que le client exécute la sienne.",
    blocks: [
      { t: "h2", c: "Introduction" },
      { t: "p", c: "La norme IFRS 15 consolide les anciens référentiels incluant IAS 18 et les interprétations telles que SIC 31 et IFRIC 13-18. Cependant, un cas pratique restait non traité : les contrats à obligations croisées. Ces situations concernent les cas où « le vendeur est obligé de suspendre sa prestation et d'attendre que le client exécute la sienne avant de poursuivre »." },
      { t: "p", c: "Des exemples incluent les commissionnaires en douane attendant le paiement des droits par le client avant de remettre les documents restants, ou les contrats publics où les prestataires attendent des exonérations avant de consommer des matériaux." },
      { t: "h2", c: "Définition des obligations de performance croisées" },
      { t: "p", c: "Les obligations croisées existent lorsque le vendeur doit interrompre une prestation déjà commencée (avec des coûts engagés) en attendant l'exécution du client. Cette performance doit être matériellement significative et présenter un risque de non-survenance." },
      { t: "h2", c: "Conditions standard de reconnaissance du revenu (IFRS 15)" },
      { t: "p", c: "La reconnaissance du revenu requiert :" },
      { t: "ul", items: [
        "L'identification du contrat de vente (substance commerciale, approuvé par les parties, droits identifiables, conditions de paiement stipulées, recouvrement probable)",
        "La détermination des obligations de performance",
        "La détermination du prix du contrat",
        "L'allocation du prix à chaque obligation",
        "La reconnaissance du revenu à la satisfaction de l'obligation",
      ]},
      { t: "h2", c: "Conditions de pertinence de l'analyse" },
      { t: "p", c: "Trois prérequis rendent cette analyse applicable :" },
      { t: "ol", items: [
        "La dépendance du prestataire à l'égard de l'action du client (la performance du client bloque la progression du prestataire sur la même période ou les suivantes)",
        "Les coûts initiaux engagés par le prestataire",
        "Le risque de non-performance du client",
      ]},
      { t: "h2", c: "Pertinence des coûts engagés" },
      { t: "p", c: "Il convient de noter qu'« il n'y a pas de contrat si l'une des parties peut résilier unilatéralement un contrat non entièrement exécuté sans indemniser l'autre partie ». Si le contrat contient des obligations d'indemnisation explicites ou implicites, le revenu peut être reconnu et les coûts portés en actifs jusqu'à l'achèvement de la prestation." },
      { t: "h2", c: "Risque de non-performance" },
      { t: "p", c: "Sans risque de non-performance significatif, l'analyse des obligations croisées devient non pertinente. Le risque est absent lorsque « les ressources nécessaires à l'exécution de l'obligation de performance sont soit disponibles, soit sans contrainte matérielle suffisante pour y accéder »." },
      { t: "h2", c: "Aspects spécifiques à la reconnaissance" },
      { t: "h3", c: "Obligation d'indemnisation en cas de non-performance" },
      { t: "p", c: "IFRS 15 exige qu'aucune des parties ne dispose de droits de résiliation unilatérale sans indemnisation pour les contrats complètement non exécutés. Puisque le prestataire ne livre rien jusqu'à ce que le client s'exécute, le client doit avoir des obligations d'indemnisation constructives ou légales découlant des pratiques commerciales, du droit ou des termes contractuels explicites." },
      { t: "h3", c: "Obligation de prestation progressive" },
      { t: "p", c: "La norme distingue que « les activités que l'entité doit entreprendre pour exécuter un contrat » ne constituent pas des obligations de prestation à moins que des biens ou services ne soient fournis au client durant ces activités." },
      { t: "p", c: "Une prestation progressive existe lorsque :" },
      { t: "ul", items: [
        "Les clients reçoivent et consomment simultanément les avantages",
        "La performance du prestataire crée des actifs (travaux en cours) sur lesquels les clients acquièrent progressivement le contrôle",
        "Le prestataire ne peut utiliser autrement les actifs créés et dispose de droits de paiement exécutoires pour la performance accomplie",
      ]},
      { t: "h2", c: "Reconnaissance progressive du revenu" },
      { t: "p", c: "IFRS 15 requiert une reconnaissance progressive en utilisant les méthodes des intrants ou des extrants, basées sur le degré d'avancement. La méthode des intrants est recommandée pour ce scénario, avec une indemnisation limitée aux coûts déjà engagés." },
      { t: "h2", c: "Composante de financement" },
      { t: "p", c: "IFRS 15 requiert d'ajuster la contrepartie promise pour les effets de la valeur temps de l'argent lorsque les calendriers de paiement procurent des avantages de financement significatifs, que ce soit au bénéfice des clients ou de l'entité." },
      { t: "h2", c: "Conclusion" },
      { t: "p", c: "Les conditions d'application de ce cadre sont les suivantes :" },
      { t: "ul", items: [
        "Dépendance du prestataire à l'égard des actions du client",
        "Coûts initiaux engagés par le prestataire",
        "Risque de non-performance du client",
      ]},
      { t: "p", c: "Les conditions spécifiques de reconnaissance comprennent : l'identification d'obligations de performance du client exécutoires avec obligations d'indemnisation en cas de non-performance, l'identification de l'obligation de prestation progressive, la reconnaissance du revenu par la méthode des intrants, et l'évaluation de la composante de financement." },
    ],
  },
];

export function getPostBySlug(categorySlug: string, slug: string): Post | undefined {
  return posts.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.categorySlug === categorySlug).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
