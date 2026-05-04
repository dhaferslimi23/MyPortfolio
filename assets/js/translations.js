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
