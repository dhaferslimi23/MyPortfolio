const TRANSLATIONS = {
    en: {
        nav: {
            about: "About", kpi: "KPI", education: "Education", experience: "Experience",
            skills: "Skills", contributions: "Contributions", aiSignals: "AI Signals", tools: "Tech Stack", contact: "Contact", theme: "Theme",
            generalInfo: "General Info", engineering: "Engineering", menu: "Menu"
        },
        hero: {
            badge: "Software Engineer – Insurance and Healthcare Systems",
            copy: "Software Engineer with hands-on experience delivering enterprise-grade platforms for insurance and healthcare domains. Contributed to and led multiple projects focused on reimbursement systems, medical coverage, and payment lifecycle management, supporting multiple clients simultaneously.",
            cta1: "View Experience", cta2: "Contact Me",
            metric1: "Clients supervised in parallel",
            metric2: "Software Architecture Engineer diploma",
            metric3: "English and French proficiency",
            role: "Software Engineer", location: "Ariena, Tunis"
        },
        clients: { label: "Clients & partners I have worked with" },
        about: {
            kicker: "About Me",
            title: "Enterprise software engineer focused on health and insurance workflows",
            copy: "I design and deliver robust digital systems that simplify complex business processes. My work combines architecture, implementation, and operational execution to create reliable platforms for reimbursement, medical coverage, claims management, and payment lifecycle operations.",
            card1: { title: "Domain Focus", body: "Insurance and healthcare systems with enterprise reliability and compliance-oriented workflows." },
            card2: { title: "Execution Model", body: "Owns scoping, planning, development, testing, and deployment across multi-client programs." },
            card3: { title: "Platform Strength", body: "Builds full-stack systems with secure APIs, strong data models, and production-grade operations." },
            card4: { title: "Leadership Impact", body: "Coordinates teams, manages risk, and drives technical decisions while contributing hands-on." }
        },
        edu: {
            kicker: "Education",
            title: "Software Architecture Engineer",
            copy: "Diploma – ESPRIT – Tunis | 2018 – 2023"
        },
        exp: {
            kicker: "Work Experience",
            title: "Delivered and led software initiatives in insurance and healthcare",
            dh: {
                company: "Digihealth Services and Solutions (DH-SS)",
                role1: { title: "Software Developer", body: "Developed workflows for reimbursement and contribution systems. Built backend services, queries, and unit tests. Integrated new features into existing enterprise platforms." },
                role2: { title: "Team Lead", date: "2023 – present", body: "Supervise and deliver solutions for 3 clients in insurance and healthcare. Manage project lifecycle: scoping, planning, development, testing, and deployment. Coordinate teams, manage risks, and drive technical decisions. Contribute hands-on through APIs, deployments, and database management." }
            },
            orange: { company: "Orange | 2021 – 2023", title: "Software Developer Intern", body: "Built a multilingual CMS (MERN stack) for Orange Foundation Tunisia. Implemented back-office content management and CI workflows." }
        },
        skills: {
            kicker: "Skills & Expertise",
            title: "Personal, professional, and communication capabilities",
            personal: { title: "Personal Skills", body: "Leadership, management skills, time management, communication skills, and critical thinking.", t1: "Leadership", t2: "Management Skills", t3: "Time Management", t4: "Communication Skills", t5: "Critical Thinking" },
            pro: { title: "Professional Skills", body: "Full-stack engineering and workflow design for secure, scalable enterprise systems.", t1: "Full-Stack Development", t2: "Workflow and Business Process Engineering", t3: "REST API Design and Secure Architecture", t4: "Project Leadership and Agile Coordination" },
            lang: { title: "Languages", body: "Strong communication across multicultural teams and stakeholders.", t1: "English – B2", t2: "French – B2", t3: "Arabic – Native" }
        },
        contrib: {
            kicker: "Key Contributions & Responsibilities",
            title: "Hands-on delivery across architecture, security, data, and operations",
            c1: "Designed and delivered full-stack enterprise applications using Spring Boot, Vaadin, React, and Node.js, enabling end-to-end workflows for claims processing, reimbursement, preapproval, and payment management.",
            c2: "Led and coordinated projects for multiple clients in parallel, defining scope, requirements, and delivery roadmaps while ensuring alignment with business needs.",
            c3: "Engineered state-driven workflow systems managing claims, financial operations, and batch processing with validation checkpoints and audit-ready flows.",
            c4: "Developed and secured RESTful APIs for web and mobile applications, including JWT-based authentication and scalable session management strategies.",
            c5: "Implemented role-based access control (RBAC) using Spring Security to secure multi-actor platforms (back-office, providers, insurers).",
            c6: "Modeled and optimized relational databases (SQL/MySQL), writing advanced queries for high-performance data access and reporting.",
            c7: "Built analytics dashboards and reporting systems, providing real-time insights into financial and operational performance.",
            c8: "Developed rule-based engines handling insurance logic such as coverage limits, eligibility rules, and reimbursement validation.",
            c9: "Implemented document generation and reporting pipelines (PDF exports) and file management systems with integrity controls.",
            c10: "Automated operations using scheduled jobs (batch processing, backups, maintenance), improving system reliability.",
            c11: "Contributed to DevOps practices, including Git branching strategies, CI workflows, and deployments to pre-prod and production environments.",
            c12: "Produced and maintained API documentation (Swagger/OpenAPI) to streamline frontend and mobile integrations.",
            c13: "Supported functional testing, requirement analysis, and technical specifications, ensuring high-quality delivery.",
            c14: "Coordinated with stakeholders, managed risks, tracked progress, and ensured adherence to timelines and budgets."
        },
        kpi: {
            kicker: "KPI & Performance",
            title: "Engineering Impact Dashboard",
            badge_pre: "Scoped to",
            badge_post: "experience only",
            copy: "Quantified contribution across system reliability, release engineering, and production stability — measured across live enterprise platforms.",
            sub1_title: "System Performance & Reliability Engineering",
            sub2_title: "Release Engineering & Operational Execution",
            sub3_title: "Production Stability & Continuous Improvement",
            card1_label: "Production Anomalies Resolved",
            card1_desc: "Stabilized system performance by resolving production-level anomalies and edge cases, improving platform robustness and reducing recurring failure patterns across releases.",
            card2_label: "~42% of Codebase Footprint",
            card2_desc: "Owned system health across a broad surface area, demonstrating deep multi-module responsibility and architectural awareness.",
            card3_label: "Cross-Branch Release Cycles",
            card3_desc: "Coordinated cross-branch integration and release cycles, ensuring smooth convergence of parallel development streams into production.",
            card4_label: "~21% of Total Activity",
            card4_desc: "Reduced integration friction, prevented regressions, and maintained delivery flow stability across all active branches.",
            legend_stab: "Stabilization",
            legend_feat: "Feature Delivery",
            card5_label: "Engineering Balance Ratio",
            card5_desc: "Balanced engineering profile ensuring both system progress and production reliability across every release cycle.",
            card6_label: "~28% of Total Output",
            card6_desc: "Bug-fix commits focused on production defect elimination and system hardening, continuously reducing recurring failure patterns.",
            pillar1: "Defect Elimination",
            pillar2: "Edge-Case Hardening",
            pillar3: "Long-Term System Stability",
            pillar4: "Operational Resilience",
            card7_label: "Stability Pillars",
            card7_desc: "Strengthened operational resilience by identifying and eliminating edge-case behaviors under real-world usage conditions."
        },
        growth: {
            kicker: "Growth Acceleration",
            title: "Growth Acceleration",
            chip: "4-year-old startup",
            contribution: "Contributed to 3 years of growth within a 4-year-old startup",
            copy: "Scaling a 4-year-old startup under exponential operational load",
            scope_note: "Metrics reflect growth observed between 2024 and 2026",
            label_clients: "Clients",
            label_members: "Members",
            label_beneficiaries: "Beneficiaries",
            label_batches: "Batches",
            appreciation1: "This growth reflects a collective effort — driven by strong market traction and executed through consistent engineering delivery.",
            appreciation2: "Special appreciation to the marketing team for accelerating acquisition, and to the development team for sustaining system performance under increasing scale."
        },
        ai: {
            kicker: "AI-Augmented Engineering",
            title: "AI-Augmented Engineering Signals",
            badge: "Systemized development indicators — AI-enabled engineering profile",
            copy: "Observable behavioral signals across commit cadence, codebase coverage, integration throughput, and workflow structure — reflecting AI-enhanced execution discipline and engineering scalability.",
            signal1_title: "High-Frequency Cross-Branch Integration",
            signal1_desc: "Sustained involvement in merging, aligning, and converging parallel development streams with low friction and minimal regression — a pattern indicative of systematic integration discipline.",
            signal1_tag: "Integration Throughput",
            signal2_title: "Large-Scale Codebase Footprint",
            signal2_desc: "Contributions spanning ~42% of the codebase surface area signal deep architectural familiarity, cross-module ownership, and the kind of broad-scope awareness that scales with AI-assisted code navigation and synthesis.",
            signal2_tag: "Architectural Coverage",
            signal3_title: "Sustained High-Throughput Delivery",
            signal3_desc: "Consistent engineering output across extended delivery cycles — not burst-driven, but cadence-driven. Reflects the kind of sustained throughput enabled by structured workflow automation and AI-assisted task execution.",
            signal3_tag: "Delivery Cadence",
            signal4_title: "Structured & Repetitive Workflow Patterns",
            signal4_desc: "Disciplined, systematic execution across fix cycles, configuration updates, and reporting changes — exhibiting the efficiency-oriented repetition and process normalization characteristic of AI-augmented engineering practices.",
            signal4_tag: "Workflow Systematization"
        },
        tools: { kicker: "Tools & Technologies", title: "Core stack used in delivery" },
        contact: {
            kicker: "Contact", headline: "I build systems that simplify complexity and deliver real impact.",
            copy: "If you need a software engineer who can lead enterprise delivery and build secure, scalable systems for healthcare and insurance products, I am available to collaborate.",
            email_btn: "Email Me", call_btn: "Call Me", portfolio_btn: "Portfolio URL",
            card_email: "Email", card_phone: "Phone", card_location: "Location", card_website: "Website"
        },
        footer: { copy: "Built with precision and intent.", tagline: "Engineering systems for measurable outcomes." }
    },

    fr: {
        nav: {
            about: "À propos", kpi: "KPI", education: "Formation", experience: "Expérience",
            skills: "Compétences", contributions: "Contributions", aiSignals: "Signaux IA", tools: "Stack Tech", contact: "Contact", theme: "Thème",
            generalInfo: "Infos générales", engineering: "Ingénierie", menu: "Menu"
        },
        hero: {
            badge: "Ingénieur Logiciel – Systèmes d'assurance et de santé",
            copy: "Ingénieur logiciel avec une expérience pratique dans la livraison de plateformes d'entreprise pour les domaines de l'assurance et de la santé. J'ai contribué et dirigé plusieurs projets axés sur les systèmes de remboursement, la couverture médicale et la gestion du cycle de paiement.",
            cta1: "Voir l'expérience", cta2: "Me contacter",
            metric1: "Clients supervisés en parallèle",
            metric2: "Diplôme d'ingénieur en architecture logicielle",
            metric3: "Niveau B2 en anglais et français",
            role: "Ingénieur Logiciel", location: "Ariena, Tunis"
        },
        clients: { label: "Clients et partenaires avec qui j'ai travaillé" },
        about: {
            kicker: "À propos",
            title: "Ingénieur logiciel d'entreprise spécialisé en santé et assurance",
            copy: "Je conçois et livre des systèmes numériques robustes qui simplifient les processus métier complexes. Mon travail combine architecture, implémentation et exécution opérationnelle pour créer des plateformes fiables dédiées au remboursement, à la couverture médicale et à la gestion des paiements.",
            card1: { title: "Domaine d'expertise", body: "Systèmes d'assurance et de santé avec fiabilité d'entreprise et workflows orientés conformité." },
            card2: { title: "Modèle d'exécution", body: "Pilote le périmètre, la planification, le développement, les tests et le déploiement sur plusieurs clients." },
            card3: { title: "Force Plateforme", body: "Construit des systèmes full-stack avec des APIs sécurisées, des modèles de données solides et des opérations de niveau production." },
            card4: { title: "Impact Leadership", body: "Coordonne les équipes, gère les risques et pilote les décisions techniques tout en contribuant opérationnellement." }
        },
        edu: {
            kicker: "Formation",
            title: "Ingénieur en Architecture Logicielle",
            copy: "Diplôme – ESPRIT – Tunis | 2018 – 2023"
        },
        exp: {
            kicker: "Expérience professionnelle",
            title: "Livraison et pilotage d'initiatives logicielles en assurance et santé",
            dh: {
                company: "Digihealth Services and Solutions (DH-SS)",
                role1: { title: "Développeur Logiciel", body: "Développement de workflows pour les systèmes de remboursement et de cotisation. Construction de services backend, requêtes et tests unitaires. Intégration de nouvelles fonctionnalités dans les plateformes d'entreprise existantes." },
                role2: { title: "Chef d'équipe", date: "2023 – présent", body: "Supervise et livre des solutions pour 3 clients en assurance et santé. Gestion du cycle de vie du projet : cadrage, planification, développement, tests et déploiement. Coordination des équipes, gestion des risques et prise de décisions techniques. Contribution pratique via les APIs, déploiements et gestion des bases de données." }
            },
            orange: { company: "Orange | 2021 – 2023", title: "Développeur Logiciel Stagiaire", body: "Construction d'un CMS multilingue (stack MERN) pour Orange Foundation Tunisie. Implémentation de la gestion de contenu back-office et des workflows CI." }
        },
        skills: {
            kicker: "Compétences & Expertise",
            title: "Capacités personnelles, professionnelles et de communication",
            personal: { title: "Compétences personnelles", body: "Leadership, gestion, gestion du temps, communication et esprit critique.", t1: "Leadership", t2: "Gestion", t3: "Gestion du temps", t4: "Communication", t5: "Esprit critique" },
            pro: { title: "Compétences professionnelles", body: "Ingénierie full-stack et conception de workflows pour des systèmes d'entreprise sécurisés et évolutifs.", t1: "Développement Full-Stack", t2: "Ingénierie des processus métier", t3: "Conception d'API REST sécurisée", t4: "Leadership projet et coordination Agile" },
            lang: { title: "Langues", body: "Communication solide au sein d'équipes et avec des parties prenantes multiculturelles.", t1: "Anglais – B2", t2: "Français – B2", t3: "Arabe – Natif" }
        },
        contrib: {
            kicker: "Contributions clés & Responsabilités",
            title: "Livraison pratique en architecture, sécurité, données et opérations",
            c1: "Conception et livraison d'applications d'entreprise full-stack avec Spring Boot, Vaadin, React et Node.js, permettant des workflows de bout en bout pour le traitement des sinistres, remboursements, préautorisations et gestion des paiements.",
            c2: "Pilotage et coordination de projets pour plusieurs clients en parallèle, définition du périmètre, des exigences et des feuilles de route de livraison.",
            c3: "Conception de systèmes de workflows pilotés par états gérant sinistres, opérations financières et traitements par lots avec points de validation.",
            c4: "Développement et sécurisation d'APIs RESTful pour applications web et mobile, incluant l'authentification JWT et la gestion des sessions.",
            c5: "Implémentation du contrôle d'accès basé sur les rôles (RBAC) avec Spring Security pour sécuriser des plateformes multi-acteurs.",
            c6: "Modélisation et optimisation de bases de données relationnelles (SQL/MySQL), rédaction de requêtes avancées pour l'accès aux données haute performance.",
            c7: "Construction de tableaux de bord analytiques et de systèmes de reporting fournissant des insights en temps réel.",
            c8: "Développement de moteurs de règles gérant la logique d'assurance : plafonds de couverture, règles d'éligibilité et validation des remboursements.",
            c9: "Implémentation de pipelines de génération de documents et de gestion de fichiers avec contrôles d'intégrité.",
            c10: "Automatisation des opérations via des tâches planifiées (batch, sauvegardes, maintenance), améliorant la fiabilité du système.",
            c11: "Contribution aux pratiques DevOps : stratégies de branches Git, workflows CI et déploiements en pré-production et production.",
            c12: "Production et maintenance de la documentation API (Swagger/OpenAPI) pour faciliter les intégrations frontend et mobile.",
            c13: "Support aux tests fonctionnels, analyse des exigences et spécifications techniques pour garantir une livraison de qualité.",
            c14: "Coordination avec les parties prenantes, gestion des risques, suivi de l'avancement et respect des délais et budgets."
        },
        kpi: {
            kicker: "KPI & Performance",
            title: "Tableau de bord d'impact ingénierie",
            badge_pre: "Limité à l'expérience",
            badge_post: "uniquement",
            copy: "Contribution quantifiée en matière de fiabilité des systèmes, d'ingénierie des releases et de stabilité en production — mesurée sur des plateformes d'entreprise en exploitation.",
            sub1_title: "Performance système & Ingénierie de la fiabilité",
            sub2_title: "Ingénierie des releases & Exécution opérationnelle",
            sub3_title: "Stabilité en production & Amélioration continue",
            card1_label: "Anomalies de production résolues",
            card1_desc: "Stabilisation des performances système en résolvant les anomalies et cas limites en production, améliorant la robustesse de la plateforme et réduisant les schémas de défaillances récurrents.",
            card2_label: "~42% de l'empreinte du code",
            card2_desc: "Responsabilité de la santé système sur une large surface, démontrant une responsabilité multi-modules et une conscience architecturale approfondie.",
            card3_label: "Cycles de release multi-branches",
            card3_desc: "Coordination des cycles d'intégration et de release multi-branches, assurant la convergence fluide des flux de développement parallèles vers la production.",
            card4_label: "~21% de l'activité totale",
            card4_desc: "Réduction de la friction d'intégration, prévention des régressions et maintien de la stabilité du flux de livraison sur toutes les branches actives.",
            legend_stab: "Stabilisation",
            legend_feat: "Livraison de fonctionnalités",
            card5_label: "Ratio d'équilibre ingénierie",
            card5_desc: "Profil d'ingénierie équilibré assurant à la fois le progrès système et la fiabilité en production à chaque cycle de release.",
            card6_label: "~28% de la production totale",
            card6_desc: "Commits de correction axés sur l'élimination des défauts en production et le renforcement du système, réduisant continuellement les schémas de défaillances récurrents.",
            pillar1: "Élimination des défauts",
            pillar2: "Renforcement des cas limites",
            pillar3: "Stabilité système à long terme",
            pillar4: "Résilience opérationnelle",
            card7_label: "Piliers de stabilité",
            card7_desc: "Renforcement de la résilience opérationnelle en identifiant et éliminant les comportements de cas limites dans des conditions d'utilisation réelles."
        },
        growth: {
            kicker: "Accélération de croissance",
            title: "Accélération de croissance",
            chip: "startup de 4 ans",
            contribution: "Contribution à 3 ans de croissance au sein d'une startup de 4 ans",
            copy: "Mise à l'échelle d'une startup de 4 ans sous une charge opérationnelle exponentielle",
            scope_note: "Les métriques reflètent la croissance observée entre 2024 et 2026",
            label_clients: "Clients",
            label_members: "Membres",
            label_beneficiaries: "Bénéficiaires",
            label_batches: "Lots",
            appreciation1: "Cette croissance reflète un effort collectif — portée par une forte traction marché et exécutée par une livraison ingénierie constante.",
            appreciation2: "Toute ma gratitude à l'équipe marketing pour avoir accéléré l'acquisition, et à l'équipe de développement pour avoir maintenu les performances du système sous une charge croissante."
        },
        ai: {
            kicker: "Ingénierie augmentée par l'IA",
            title: "Signaux d'ingénierie augmentée par l'IA",
            badge: "Indicateurs de développement systématisés — profil d'ingénierie activé par l'IA",
            copy: "Signaux comportementaux observables sur la cadence de commits, la couverture du code, le débit d'intégration et la structure des workflows — reflétant une discipline d'exécution améliorée par l'IA et une scalabilité d'ingénierie.",
            signal1_title: "Intégration multi-branches à haute fréquence",
            signal1_desc: "Implication soutenue dans la fusion, l'alignement et la convergence des flux de développement parallèles avec peu de friction et peu de régression — un pattern indicatif d'une discipline d'intégration systématique.",
            signal1_tag: "Débit d'intégration",
            signal2_title: "Empreinte large dans le code",
            signal2_desc: "Des contributions couvrant ~42% de la surface du code signalent une familiarité architecturale profonde, une propriété multi-modules et ce type de conscience à large portée qui s'adapte à la navigation et à la synthèse de code assistées par l'IA.",
            signal2_tag: "Couverture architecturale",
            signal3_title: "Livraison soutenue à haut débit",
            signal3_desc: "Production d'ingénierie constante sur des cycles de livraison prolongés — non pas par burst, mais par cadence. Reflète le type de débit soutenu permis par l'automatisation structurée des workflows et l'exécution des tâches assistée par l'IA.",
            signal3_tag: "Cadence de livraison",
            signal4_title: "Patterns de workflows structurés et répétitifs",
            signal4_desc: "Exécution disciplinée et systématique sur les cycles de correction, les mises à jour de configuration et les changements de reporting — présentant la répétition orientée vers l'efficacité et la normalisation des processus caractéristiques des pratiques d'ingénierie augmentées par l'IA.",
            signal4_tag: "Systématisation des workflows"
        },
        tools: { kicker: "Outils & Technologies", title: "Stack principal utilisé en livraison" },
        contact: {
            kicker: "Contact", headline: "Je construis des systèmes qui simplifient la complexité et créent un impact réel.",
            copy: "Si vous avez besoin d'un ingénieur logiciel capable de piloter des livraisons d'entreprise et de construire des systèmes sécurisés et évolutifs pour la santé et l'assurance, je suis disponible pour collaborer.",
            email_btn: "M'écrire", call_btn: "M'appeler", portfolio_btn: "Portfolio",
            card_email: "Email", card_phone: "Téléphone", card_location: "Localisation", card_website: "Site web"
        },
        footer: { copy: "Conçu avec précision et intention.", tagline: "Ingénierie de systèmes pour des résultats mesurables." }
    },

    ar: {
        nav: {
            about: "نبذة عني", kpi: "KPI", education: "التعليم", experience: "الخبرة",
            skills: "المهارات", contributions: "المساهمات", aiSignals: "إشارات الذكاء", tools: "التقنيات", contact: "التواصل", theme: "المظهر",
            generalInfo: "معلومات عامة", engineering: "الهندسة", menu: "القائمة"
        },
        hero: {
            badge: "مهندس برمجيات – أنظمة التأمين والرعاية الصحية",
            copy: "مهندس برمجيات ذو خبرة عملية في تسليم منصات مؤسسية لقطاعي التأمين والرعاية الصحية. شاركت وقدت مشاريع متعددة تتمحور حول أنظمة السداد، التغطية الطبية وإدارة دورة المدفوعات، مع دعم عدة عملاء في آنٍ واحد.",
            cta1: "عرض الخبرة", cta2: "تواصل معي",
            metric1: "عملاء يُشرف عليهم بالتوازي",
            metric2: "دبلوم مهندس معمارية البرمجيات",
            metric3: "مستوى B2 في الإنجليزية والفرنسية",
            role: "مهندس برمجيات", location: "أريانة، تونس"
        },
        clients: { label: "العملاء والشركاء الذين عملت معهم" },
        about: {
            kicker: "نبذة عني",
            title: "مهندس برمجيات مؤسسي متخصص في أنظمة الصحة والتأمين",
            copy: "أصمم وأُسلّم أنظمة رقمية متينة تُبسّط العمليات التجارية المعقدة. يجمع عملي بين الهندسة المعمارية والتنفيذ والعمليات لإنشاء منصات موثوقة للسداد والتغطية الطبية وإدارة المطالبات.",
            card1: { title: "مجال التخصص", body: "أنظمة تأمين ورعاية صحية بموثوقية مؤسسية وسير عمل موجّهة نحو الامتثال." },
            card2: { title: "نموذج التنفيذ", body: "يمتلك تحديد النطاق والتخطيط والتطوير والاختبار والنشر عبر برامج متعددة العملاء." },
            card3: { title: "قوة المنصة", body: "يبني أنظمة full-stack بواجهات برمجية آمنة ونماذج بيانات قوية وعمليات على مستوى الإنتاج." },
            card4: { title: "أثر القيادة", body: "ينسق الفرق ويدير المخاطر ويقود القرارات التقنية مع المساهمة العملية المباشرة." }
        },
        edu: {
            kicker: "التعليم",
            title: "مهندس معمارية البرمجيات",
            copy: "دبلوم – ESPRIT – تونس | 2018 – 2023"
        },
        exp: {
            kicker: "الخبرة المهنية",
            title: "تسليم وقيادة مبادرات برمجية في التأمين والرعاية الصحية",
            dh: {
                company: "Digihealth Services and Solutions (DH-SS)",
                role1: { title: "مطور برمجيات", body: "تطوير سير العمل لأنظمة السداد والاشتراكات. بناء خدمات الواجهة الخلفية والاستعلامات واختبارات الوحدات. دمج ميزات جديدة في المنصات المؤسسية الموجودة." },
                role2: { title: "قائد فريق", date: "2023 – حتى الآن", body: "الإشراف على وتسليم حلول لـ 3 عملاء في مجالي التأمين والرعاية الصحية. إدارة دورة حياة المشروع: التحديد والتخطيط والتطوير والاختبار والنشر. تنسيق الفرق وإدارة المخاطر وقيادة القرارات التقنية. المساهمة العملية عبر واجهات برمجية والنشر وإدارة قواعد البيانات." }
            },
            orange: { company: "أورنج | 2021 – 2023", title: "مطور برمجيات متدرب", body: "بناء نظام إدارة محتوى متعدد اللغات (MERN stack) لـ Orange Foundation Tunisia. تنفيذ إدارة محتوى الواجهة الخلفية وسير عمل CI." }
        },
        skills: {
            kicker: "المهارات والخبرات",
            title: "قدرات شخصية ومهنية وتواصلية",
            personal: { title: "المهارات الشخصية", body: "القيادة والإدارة وإدارة الوقت ومهارات التواصل والتفكير النقدي.", t1: "القيادة", t2: "مهارات الإدارة", t3: "إدارة الوقت", t4: "مهارات التواصل", t5: "التفكير النقدي" },
            pro: { title: "المهارات المهنية", body: "هندسة full-stack وتصميم سير العمل لأنظمة مؤسسية آمنة وقابلة للتوسع.", t1: "تطوير Full-Stack", t2: "هندسة العمليات التجارية", t3: "تصميم REST API والأمان", t4: "قيادة المشاريع وتنسيق Agile" },
            lang: { title: "اللغات", body: "تواصل قوي عبر فرق ومعنيين متعددي الثقافات.", t1: "الإنجليزية – B2", t2: "الفرنسية – B2", t3: "العربية – لغة أم" }
        },
        contrib: {
            kicker: "المساهمات الرئيسية والمسؤوليات",
            title: "تسليم عملي في الهندسة المعمارية والأمان والبيانات والعمليات",
            c1: "تصميم وتسليم تطبيقات مؤسسية full-stack باستخدام Spring Boot وVaadin وReact وNode.js، لتمكين سير عمل شامل لمعالجة المطالبات والسداد والموافقة المسبقة وإدارة المدفوعات.",
            c2: "قيادة وتنسيق مشاريع لعدة عملاء بالتوازي، تحديد النطاق والمتطلبات وخرائط طريق التسليم مع ضمان التوافق مع الأعمال.",
            c3: "هندسة أنظمة سير عمل تعتمد على الحالة لإدارة المطالبات والعمليات المالية ومعالجة الدُفعات.",
            c4: "تطوير وتأمين واجهات RESTful للتطبيقات الويب والجوال، بما في ذلك المصادقة عبر JWT.",
            c5: "تنفيذ التحكم في الوصول المبني على الأدوار (RBAC) باستخدام Spring Security لتأمين منصات متعددة الأطراف.",
            c6: "نمذجة وتحسين قواعد البيانات العلائقية (SQL/MySQL) وكتابة استعلامات متقدمة للوصول عالي الأداء.",
            c7: "بناء لوحات معلومات تحليلية وأنظمة تقارير توفر رؤى آنية حول الأداء المالي والتشغيلي.",
            c8: "تطوير محركات قواعد تعامل مع منطق التأمين كحدود التغطية وقواعد الأهلية والتحقق من السداد.",
            c9: "تنفيذ خطوط إنشاء الوثائق والتقارير (تصدير PDF) وأنظمة إدارة الملفات مع ضوابط السلامة.",
            c10: "أتمتة العمليات باستخدام المهام المجدولة (المعالجة الدُفعية والنسخ الاحتياطي والصيانة).",
            c11: "المساهمة في ممارسات DevOps بما في ذلك استراتيجيات تفريع Git وسير عمل CI والنشر.",
            c12: "إنتاج وصيانة وثائق API (Swagger/OpenAPI) لتسهيل تكاملات الواجهة الأمامية والجوال.",
            c13: "دعم الاختبارات الوظيفية وتحليل المتطلبات والمواصفات التقنية لضمان جودة التسليم.",
            c14: "التنسيق مع أصحاب المصلحة وإدارة المخاطر وتتبع التقدم وضمان الالتزام بالجداول الزمنية والميزانيات."
        },
        kpi: {
            kicker: "KPI والأداء",
            title: "لوحة متابعة الأثر الهندسي",
            badge_pre: "مقتصر على تجربة",
            badge_post: "فقط",
            copy: "مساهمة مُقاسة في موثوقية الأنظمة وهندسة الإصدارات والاستقرار في بيئة الإنتاج — محسوبة عبر منصات مؤسسية حية.",
            sub1_title: "أداء النظام وهندسة الموثوقية",
            sub2_title: "هندسة الإصدارات والتنفيذ التشغيلي",
            sub3_title: "استقرار الإنتاج والتحسين المستمر",
            card1_label: "شذوذات الإنتاج المحلولة",
            card1_desc: "تثبيت أداء النظام من خلال حل الشذوذات والحالات الحدية في الإنتاج، وتحسين متانة المنصة وتقليل أنماط الإخفاقات المتكررة.",
            card2_label: "~42% من بصمة قاعدة الكود",
            card2_desc: "مسؤولية صحة النظام عبر نطاق واسع، تُجسّد عمق المسؤولية متعددة الوحدات والوعي المعماري الشامل.",
            card3_label: "دورات الإصدار متعددة الفروع",
            card3_desc: "تنسيق دورات التكامل والإصدار متعددة الفروع، وضمان التقارب السلس لتدفقات التطوير المتوازية نحو الإنتاج.",
            card4_label: "~21% من إجمالي النشاط",
            card4_desc: "تقليل احتكاك التكامل ومنع التراجعات والحفاظ على استقرار تدفق التسليم عبر جميع الفروع النشطة.",
            legend_stab: "التثبيت",
            legend_feat: "تسليم الميزات",
            card5_label: "نسبة التوازن الهندسي",
            card5_desc: "ملف هندسي متوازن يضمن تقدم النظام وموثوقية الإنتاج في كل دورة إصدار.",
            card6_label: "~28% من الإنتاج الكلي",
            card6_desc: "عمليات التزام بإصلاح الأخطاء تركز على القضاء على عيوب الإنتاج وتصليب النظام، وتقليل أنماط الإخفاقات المتكررة باستمرار.",
            pillar1: "القضاء على العيوب",
            pillar2: "تصليب الحالات الحدية",
            pillar3: "استقرار النظام على المدى البعيد",
            pillar4: "المرونة التشغيلية",
            card7_label: "ركائز الاستقرار",
            card7_desc: "تعزيز المرونة التشغيلية من خلال تحديد وإزالة السلوكيات الحدية في ظروف الاستخدام الواقعية."
        },
        growth: {
            kicker: "تسريع النمو",
            title: "تسريع النمو",
            chip: "شركة ناشئة عمرها 4 سنوات",
            contribution: "ساهمت في 3 سنوات من النمو ضمن شركة ناشئة عمرها 4 سنوات",
            copy: "تطوير شركة ناشئة عمرها 4 سنوات تحت عبء تشغيلي متصاعد",
            scope_note: "تعكس المقاييس النمو الملاحظ بين 2024 و2026",
            label_clients: "العملاء",
            label_members: "الأعضاء",
            label_beneficiaries: "المستفيدون",
            label_batches: "الدُفعات",
            appreciation1: "يعكس هذا النمو جهداً جماعياً — مدفوعاً بجاذبية سوقية قوية ومُنفَّذاً من خلال تسليم هندسي ثابت.",
            appreciation2: "تقدير خاص لفريق التسويق على تسريع الاكتساب، ولفريق التطوير على الحفاظ على أداء النظام في ظل التوسع المتزايد."
        },
        ai: {
            kicker: "الهندسة المُعزَّزة بالذكاء الاصطناعي",
            title: "إشارات الهندسة المُعزَّزة بالذكاء الاصطناعي",
            badge: "مؤشرات تطوير ممنهجة — ملف هندسي مُمكَّن بالذكاء الاصطناعي",
            copy: "إشارات سلوكية قابلة للملاحظة عبر إيقاع الالتزامات وتغطية قاعدة الكود وإنتاجية التكامل وهيكل سير العمل — تعكس انضباط تنفيذ معزز بالذكاء الاصطناعي وقابلية توسع هندسية.",
            signal1_title: "تكامل متعدد الفروع بتردد عالٍ",
            signal1_desc: "مشاركة مستدامة في دمج وتوافق وتقارب تدفقات التطوير المتوازية بانخفاض الاحتكاك والتراجع — نمط يشير إلى انضباط تكامل ممنهج.",
            signal1_tag: "إنتاجية التكامل",
            signal2_title: "بصمة واسعة في قاعدة الكود",
            signal2_desc: "تغطية ~42% من سطح قاعدة الكود تشير إلى الألفة المعمارية العميقة وملكية الوحدات المتعددة ونوع الوعي الشامل الذي يتوسع مع التنقل في الكود والتوليف بمساعدة الذكاء الاصطناعي.",
            signal2_tag: "التغطية المعمارية",
            signal3_title: "تسليم مستدام بإنتاجية عالية",
            signal3_desc: "إنتاج هندسي ثابت عبر دورات تسليم ممتدة — ليس مدفوعاً بالانفجارات، بل بالإيقاع. يعكس نوع الإنتاجية المستدامة الممكّنة بأتمتة سير العمل المنظمة وتنفيذ المهام بمساعدة الذكاء الاصطناعي.",
            signal3_tag: "إيقاع التسليم",
            signal4_title: "أنماط سير عمل منظمة ومتكررة",
            signal4_desc: "تنفيذ منضبط ومنهجي عبر دورات الإصلاح وتحديثات التهيئة وتغييرات التقارير — يُظهر التكرار الموجه نحو الكفاءة وتطبيع العملية المميز لممارسات الهندسة المُعزَّزة بالذكاء الاصطناعي.",
            signal4_tag: "تنظيم سير العمل"
        },
        tools: { kicker: "الأدوات والتقنيات", title: "الحزمة الأساسية المستخدمة في التسليم" },
        contact: {
            kicker: "التواصل", headline: "أبني أنظمة تُبسّط التعقيد وتُحدث أثراً حقيقياً.",
            copy: "إذا كنت بحاجة إلى مهندس برمجيات قادر على قيادة التسليم المؤسسي وبناء أنظمة آمنة وقابلة للتوسع لقطاعي الصحة والتأمين، فأنا متاح للتعاون.",
            email_btn: "راسلني", call_btn: "اتصل بي", portfolio_btn: "رابط المحفظة",
            card_email: "البريد الإلكتروني", card_phone: "الهاتف", card_location: "الموقع", card_website: "الموقع الإلكتروني"
        },
        footer: { copy: "مُصمَّم بدقة وعناية.", tagline: "هندسة أنظمة لنتائج قابلة للقياس." }
    }
};

window.TRANSLATIONS = TRANSLATIONS;
