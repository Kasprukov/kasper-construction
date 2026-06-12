export const services = [
  {
    slug: 'project-management',
    priceFrom: { uk: 'від 4% вартості обʼєкта', en: 'from 4% of project cost' },
    title: { uk: 'Управління проєктом', en: 'Project management' },
    excerpt: {
      uk: 'Повний контроль строків, бюджету та якості на кожному етапі будівництва.',
      en: 'Full control of timeline, budget and quality at every stage of the build.',
    },
    image: '/img/office-principal.jpg',
    intro: {
      uk: 'Беремо на себе всю координацію обʼєкта: від тендеру підрядників до здачі в експлуатацію. Ви отримуєте один центр відповідальності та прозору звітність.',
      en: 'We take on all the coordination — from tendering contractors to handover. You get one point of responsibility and clear reporting.',
    },
    deliverables: [
      { uk: 'Календарно-сітьовий графік робіт', en: 'Detailed work schedule' },
      { uk: 'Бюджет із контролем відхилень', en: 'Budget with variance tracking' },
      { uk: 'Тендер та відбір підрядників', en: 'Contractor tender and selection' },
      { uk: 'Щотижневі звіти зі статусом', en: 'Weekly status reports' },
    ],
    process: [
      { step: { uk: 'Аудит', en: 'Audit' }, text: { uk: 'Аналіз проєкту, ризиків і вхідних умов.', en: 'Review of the project, risks and constraints.' } },
      { step: { uk: 'План', en: 'Plan' }, text: { uk: 'Бюджет, графік, команда та KPI.', en: 'Budget, schedule, team and KPIs.' } },
      { step: { uk: 'Контроль', en: 'Control' }, text: { uk: 'Координація підрядників і якості щодня.', en: 'Daily coordination of contractors and quality.' } },
      { step: { uk: 'Здача', en: 'Handover' }, text: { uk: 'Передача обʼєкта та документації.', en: 'Handover of the site and documentation.' } },
    ],
  },
  {
    slug: 'turnkey-construction',
    priceFrom: { uk: 'від $600/мІ', en: 'from $600/m²' },
    title: { uk: 'Будівництво під ключ', en: 'Turnkey construction' },
    excerpt: {
      uk: 'Комплексні роботи: від нульового циклу до фінішного оздоблення.',
      en: 'The whole job: from groundworks to final finishes.',
    },
    image: '/img/hero-build.jpg',
    intro: {
      uk: 'Виконуємо повний цикл будівельних робіт власними бригадами та перевіреними підрядниками — з фіксованою кошторисною вартістю.',
      en: 'We do the full cycle with our own crews and trusted contractors — at a fixed, agreed cost.',
    },
    deliverables: [
      { uk: 'Нульовий цикл і конструктив', en: 'Groundworks and structure' },
      { uk: 'Фасадні та покрівельні роботи', en: 'Facade and roofing' },
      { uk: 'Чорнове та фінішне оздоблення', en: 'Rough and final finishing' },
      { uk: 'Гарантія 5 років', en: '5-year warranty' },
    ],
    process: [
      { step: { uk: 'Кошторис', en: 'Estimate' }, text: { uk: 'Фіксована вартість і специфікації.', en: 'Fixed price and specifications.' } },
      { step: { uk: 'Будівництво', en: 'Build' }, text: { uk: 'Поетапне виконання за графіком.', en: 'Stage-by-stage work on schedule.' } },
      { step: { uk: 'Контроль', en: 'Control' }, text: { uk: 'Технагляд і приймання робіт.', en: 'Supervision and acceptance of works.' } },
      { step: { uk: 'Гарантія', en: 'Warranty' }, text: { uk: 'Сервіс і супровід після здачі.', en: 'Service and support after handover.' } },
    ],
  },
  {
    slug: 'interior-design',
    priceFrom: { uk: 'від $45/мІ', en: 'from $45/m²' },
    title: { uk: 'Дизайн інтерʼєру', en: 'Interior design' },
    excerpt: {
      uk: 'Авторські інтерʼєри, що поєднують естетику, функцію та інженерію.',
      en: 'Bespoke interiors that balance looks, function and engineering.',
    },
    image: '/img/int-2.jpg',
    intro: {
      uk: 'Створюємо інтерʼєри, які виглядають бездоганно й залишаються зручними у щоденному житті. Повний пакет робочої документації.',
      en: 'We design interiors that look sharp and stay liveable day to day. Full set of working drawings included.',
    },
    deliverables: [
      { uk: 'Планувальні рішення', en: 'Space planning' },
      { uk: '3D-візуалізації', en: '3D visualisations' },
      { uk: 'Робоча документація', en: 'Working documentation' },
      { uk: 'Авторський нагляд', en: 'Designer supervision' },
    ],
    process: [
      { step: { uk: 'Бриф', en: 'Brief' }, text: { uk: 'Стиль життя, референси, бюджет.', en: 'Lifestyle, references, budget.' } },
      { step: { uk: 'Концепт', en: 'Concept' }, text: { uk: 'Планування та візуалізації.', en: 'Layouts and visualisations.' } },
      { step: { uk: 'Документація', en: 'Drawings' }, text: { uk: 'Креслення та специфікації.', en: 'Drawings and specifications.' } },
      { step: { uk: 'Реалізація', en: 'Delivery' }, text: { uk: 'Авторський нагляд на обʼєкті.', en: 'Designer supervision on site.' } },
    ],
  },
  {
    slug: 'engineering',
    priceFrom: { uk: 'за проєктом', en: 'project-based' },
    title: { uk: 'Інженерні рішення', en: 'Engineering systems' },
    excerpt: {
      uk: 'Проєктування та монтаж усіх інженерних систем обʼєкта.',
      en: 'Design and installation of all building systems.',
    },
    image: '/img/com-office1.jpg',
    intro: {
      uk: 'Опалення, вентиляція, кондиціювання, електрика та «розумний дім» — проєктуємо й монтуємо системи, що працюють тихо й надійно.',
      en: 'Heating, ventilation, AC, electrics and smart-home — we design and install systems that run quietly and reliably.',
    },
    deliverables: [
      { uk: 'Проєкт ОВК та електрики', en: 'HVAC and electrical design' },
      { uk: 'Системи водопостачання', en: 'Plumbing systems' },
      { uk: 'Автоматизація та smart-home', en: 'Automation and smart-home' },
      { uk: 'Пусконалагодження', en: 'Commissioning' },
    ],
    process: [
      { step: { uk: 'Розрахунок', en: 'Sizing' }, text: { uk: 'Навантаження та підбір обладнання.', en: 'Loads and equipment selection.' } },
      { step: { uk: 'Проєкт', en: 'Design' }, text: { uk: 'Схеми, специфікації, узгодження.', en: 'Schematics, specs, approvals.' } },
      { step: { uk: 'Монтаж', en: 'Install' }, text: { uk: 'Прокладання та збирання систем.', en: 'Routing and assembly of systems.' } },
      { step: { uk: 'Запуск', en: 'Start-up' }, text: { uk: 'Налагодження та інструктаж.', en: 'Tuning and handover briefing.' } },
    ],
  },
  {
    slug: 'supervision',
    priceFrom: { uk: 'від 3% кошторису', en: 'from 3% of estimate' },
    title: { uk: 'Технічний нагляд', en: 'Technical supervision' },
    excerpt: {
      uk: 'Незалежний контроль підрядників, матеріалів і відповідності проєкту.',
      en: 'Independent checks on contractors, materials and compliance.',
    },
    image: '/img/hero-house.jpg',
    intro: {
      uk: 'Захищаємо ваш бюджет: перевіряємо обсяги, якість матеріалів і робіт, фіксуємо порушення та контролюємо їх усунення.',
      en: 'We protect your budget: checking quantities, material and workmanship quality, logging issues and tracking fixes.',
    },
    deliverables: [
      { uk: 'Перевірка обсягів і актів', en: 'Quantity and invoice checks' },
      { uk: 'Контроль якості матеріалів', en: 'Material quality control' },
      { uk: 'Фотофіксація етапів', en: 'Photo records of each stage' },
      { uk: 'Незалежні висновки', en: 'Independent reports' },
    ],
    process: [
      { step: { uk: 'Старт', en: 'Start' }, text: { uk: 'Вивчення проєкту та кошторису.', en: 'Reviewing the design and estimate.' } },
      { step: { uk: 'Інспекції', en: 'Inspections' }, text: { uk: 'Регулярні виїзди на обʼєкт.', en: 'Regular site visits.' } },
      { step: { uk: 'Звіти', en: 'Reports' }, text: { uk: 'Зауваження та статус усунення.', en: 'Issues and status of fixes.' } },
      { step: { uk: 'Приймання', en: 'Acceptance' }, text: { uk: 'Контроль фінальної здачі.', en: 'Final acceptance control.' } },
    ],
  },
  {
    slug: 'furniture',
    priceFrom: { uk: 'за специфікацією', en: 'by specification' },
    title: { uk: 'Виробництво меблів', en: 'Custom furniture' },
    excerpt: {
      uk: 'Власне виробництво корпусних та мʼяких меблів на замовлення.',
      en: 'Our own workshop for cabinetry and upholstered furniture.',
    },
    image: '/img/int-4.jpg',
    intro: {
      uk: 'Виготовляємо меблі за індивідуальними кресленнями на власному виробництві — точно за дизайн-проєктом і в строк.',
      en: 'We make furniture to custom drawings in our own workshop — exactly to the design and on time.',
    },
    deliverables: [
      { uk: 'Корпусні меблі на замовлення', en: 'Bespoke cabinetry' },
      { uk: 'Мʼякі меблі', en: 'Upholstered furniture' },
      { uk: 'Столярні вироби та шпон', en: 'Joinery and veneer work' },
      { uk: 'Доставка та монтаж', en: 'Delivery and installation' },
    ],
    process: [
      { step: { uk: 'Креслення', en: 'Drawings' }, text: { uk: 'Деталювання під обʼєкт.', en: 'Detailing for the specific space.' } },
      { step: { uk: 'Виробництво', en: 'Production' }, text: { uk: 'Власний цех і контроль якості.', en: 'In-house workshop and QC.' } },
      { step: { uk: 'Збірка', en: 'Assembly' }, text: { uk: 'Монтаж на обʼєкті.', en: 'On-site installation.' } },
      { step: { uk: 'Сервіс', en: 'Service' }, text: { uk: 'Гарантія та обслуговування.', en: 'Warranty and servicing.' } },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
