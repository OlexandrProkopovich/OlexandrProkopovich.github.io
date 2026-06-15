/* ============================================================================
 *  data.js — single source of content for the site (bilingual EN / UA).
 *  Edit text here; app.js renders it. Each translatable value is { en, ua }.
 *  TODO markers below highlight fields you may want to personalise.
 * ========================================================================== */

const DATA = {
  /* --------------------------------------------------------------------- */
  profile: {
    name: "Olexandr Prokopovych",
    role: {
      en: "C++ / Qt Software Engineer",
      ua: "Розробник ПЗ C++ / Qt",
    },
    tagline: {
      en: "I design algorithms and keep large legacy desktop codebases healthy — currently building music-notation software.",
      ua: "Проектую алгоритми та підтримую великі legacy-кодові бази десктопних застосунків — зараз працюю над ПЗ для нотного запису.",
    },
    location: { en: "Lviv, Ukraine", ua: "Львів, Україна" },
    photo: "assets/img/profile.jpg",
    resume: "", // optional: path to a PDF CV, e.g. "assets/cv.pdf"
    socials: [
      { type: "email",    label: "Email",    url: "mailto:sashaprokop1234@gmail.com" },
      { type: "github",   label: "GitHub",   url: "https://github.com/OlexandrProkopovich" },
      { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/oleksandr-prokopovych-82b848210/" },
      // TODO: set your real Telegram username below.
      { type: "telegram", label: "Telegram", url: "https://t.me/your_username" },
    ],
  },

  /* --------------------------------------------------------------------- */
  about: {
    en: [
      "Software engineer focused on C++ desktop applications. I design new algorithms and keep large legacy codebases healthy.",
      "I’ve shipped recognition and editing features for professional scorewriting tools, dug into decade-old code to extend it safely, fixed long-standing bugs, managed versioning, and communicated directly with clients to turn vague requests into working features.",
      "On the side I explore machine learning from first principles — I built a small transformer-based LLM entirely from scratch in C++ to rank academic papers.",
    ],
    ua: [
      "Інженер-програміст, що спеціалізується на десктопних застосунках C++. Проектую нові алгоритми та підтримую великі legacy-кодові бази у робочому стані.",
      "Реалізовував функції розпізнавання й редагування для професійних нотних редакторів, заглиблювався у код десятирічної давнини, щоб безпечно його розширювати, виправляв давні баги, керував версіонуванням і напряму спілкувався з клієнтами, перетворюючи розмиті запити на готові функції.",
      "У вільний час вивчаю машинне навчання з основ — написав невелику LLM на трансформерах повністю з нуля на C++ для ранжування наукових статей.",
    ],
  },

  /* --------------------------------------------------------------------- */
  skills: [
    {
      title: { en: "Languages", ua: "Мови" },
      items: ["C++ (11/14/17)", "C", "Python", "QML"],
    },
    {
      title: { en: "Frameworks & Tools", ua: "Фреймворки та інструменти" },
      items: ["Qt5 (Widgets, QML)", "MFC", "CMake", "GoogleTest / CTest", "Git", "MSVC"],
    },
    {
      title: { en: "Domains", ua: "Напрями" },
      items: [
        "Optical Character Recognition (OCR)",
        "Music notation engraving",
        "Legacy code maintenance",
        "Algorithm design",
        "Neural networks (from scratch)",
        "Client communication",
      ],
    },
  ],

  /* --------------------------------------------------------------------- */
  projects: [
    {
      id: "scanscore",
      name: "ScanScore",
      featured: true,
      type: { en: "Commercial · Work", ua: "Комерційний · Робота" },
      stack: "C++ · Qt5 Widgets / QML",
      tags: ["C++", "Qt5", "QML", "OCR", "Legacy"],
      summary: {
        en: "A music-notation editor whose core idea is built-in score recognition: feed it an image of sheet music and the whole score appears as editable musical objects.",
        ua: "Редактор нотного запису, ключова ідея якого - вбудоване розпізнавання партитур: подаєш зображення нот, і вся партитура з'являється у вигляді редагованих музичних об'єктів.",
      },
      description: {
        en: [
          "ScanScore is a desktop scorewriting application built with C++ and Qt5 (Widgets and QML). Its defining feature is optical recognition: instead of entering every note by hand, a user imports a photo or scan of sheet music and the app reconstructs it as a structured, fully editable document - the staves, notes and other symbols become real objects you can move, change and export again.",
          "I started here as a junior and gradually took ownership of features that run through the entire pipeline - the recognition step, the in-memory document model, layout and rendering, the editing UI, and file export. Several were the kind of work usually handed to mid or senior engineers, delivered end to end on a large codebase that had been maintained for years.",
          "The larger ones were algorithmic and cross-cutting rather than cosmetic, and most of the engineering had little to do with music theory and a lot to do with data structures, geometry and image analysis. Alongside the features I tracked down crashes, owned release versioning, and translated loosely-specified client requests into working functionality.",
        ],
        ua: [
          "ScanScore - десктопний нотний редактор на C++ та Qt5 (Widgets і QML). Його ключова ідея - оптичне розпізнавання: замість того щоб вводити кожну ноту вручну, користувач імпортує фото чи скан нот, а застосунок відтворює їх як структурований, повністю редагований документ - нотоносці, ноти й інші символи стають реальними об'єктами, які можна рухати, змінювати й експортувати назад.",
          "Я почав тут джуном і поступово брав на себе функції, що проходять крізь увесь конвеєр - етап розпізнавання, документну модель у пам'яті, верстку й рендеринг, UI редагування та експорт файлів. Частина з них - це робота, яку зазвичай доручають мід- чи сеньйор-інженерам, доведена від початку до кінця у великій кодовій базі, яку підтримують роками.",
          "Найбільші задачі були радше алгоритмічні й наскрізні, ніж косметичні, і більша частина інженерії стосувалася не музичної теорії, а структур даних, геометрії та аналізу зображень. Поряд із функціями я відловлював краші, відповідав за версіонування релізів і перетворював нечітко сформульовані запити клієнта на робочу функціональність.",
        ],
      },
      highlights: {
        en: [
          "Shared notes: built the algorithm and UI for notes that belong to two independent melodic lines at the same time - deciding which line each note goes to, recalculating timing positions, and keeping the on-screen layout, save/load and undo/redo all consistent. It cut across the whole stack: recognition, the in-memory document model and rendering.",
          "Single-line staves: the recognition engine was hard-wired to assume every staff has five lines. I extended it to also detect and rebuild single-line (percussion) staves straight from the scanned image - separating real staff lines from noise such as text, then correcting how the recognized content gets positioned.",
          "Rehearsal markers: added a brand-new labeled-text element (the boxed letters used to coordinate rehearsals) end to end - detecting it in the scan, representing it in the document model, an edit dialog, plus copy/paste, undo/redo and export to MusicXML (the standard score-exchange format).",
          "Stability: tracked down and fixed several crashes in the scanning pipeline and a class of incorrect-output bugs.",
          "Ownership: handled release versioning and worked directly with the client, repeatedly turning vague requests into shipped features - and taking on work normally scoped to mid/senior engineers while still a junior.",
        ],
        ua: [
          "Спільні ноти: побудував алгоритм і UI для нот, що належать одночасно до двох незалежних мелодійних ліній - вирішення, до якої лінії йде кожна нота, перерахунок позицій у часі та збереження узгодженими екранної верстки, збереження/завантаження й undo/redo. Функція пронизала весь стек: розпізнавання, документну модель і рендеринг.",
          "Однолінійні нотоносці: механізм розпізнавання був жорстко прив'язаний до п'ятилінійного нотоносця. Я розширив його так, щоб він також виявляв і відтворював однолінійні (ударні) нотоносці прямо зі скана - відрізняючи справжні лінії нотоносця від шуму на кшталт тексту й коригуючи позиціонування розпізнаного вмісту.",
          "Репетиційні позначки: наскрізно додав цілком новий елемент тексту в рамці (позначки, якими координують репетиції) - від виявлення у скані й представлення в документній моделі до діалогу редагування, copy/paste, undo/redo та експорту в MusicXML (стандартний формат обміну нотами).",
          "Стабільність: знайшов і виправив низку крашів у конвеєрі сканування та клас багів із некоректним результатом.",
          "Відповідальність: вів версіонування релізів і працював напряму з клієнтом, неодноразово перетворюючи розмиті запити на готові функції - і брав задачі рівня мід/сеньйор, ще будучи джуном.",
        ],
      },
      tech: ["C++", "Qt5 Widgets", "QML", "Optical Character Recognition", "MusicXML export", "Legacy code"],
      links: [], // proprietary — no public repository
    },

    {
      id: "piobmasterpro",
      name: "PiobMaster Pro",
      featured: true,
      type: { en: "Commercial · Work", ua: "Комерційний · Робота" },
      stack: "C++ · MFC",
      tags: ["C++", "MFC", "Notation"],
      summary: {
        en: "A specialised scorewriter for creating piobaireachd (Highland bagpipe) notation from scratch — tailored entirely to the conventions of that instrument.",
        ua: "Спеціалізований нотний редактор для створення партитур piobaireachd (волинка) з нуля — повністю заточений під нотацію саме цього інструмента.",
      },
      description: {
        en: [
          "PiobMaster Pro is a Windows desktop application built with C++ and MFC. Unlike a general-purpose editor, it is dedicated to creating scores from scratch for one specific instrument and notation style, with the workflow and music objects modelled around that instrument’s conventions.",
          "As on ScanScore, my work was adding new algorithms and dialogs to solve user-facing problems, fixing bugs in existing code, and handling versioning — turning client requests into concrete, shippable features.",
        ],
        ua: [
          "PiobMaster Pro — десктопний застосунок для Windows на C++ та MFC. На відміну від універсального редактора, він призначений для створення партитур з нуля для одного конкретного інструмента та стилю нотації, з робочим процесом і музичними обʼєктами, змодельованими під конвенції цього інструмента.",
          "Як і в ScanScore, моя робота — додавання нових алгоритмів і діалогів, що вирішують проблеми користувачів, виправлення багів у наявному коді та керування версіями — перетворення запитів клієнта на конкретні готові до релізу функції.",
        ],
      },
      highlights: {
        en: [
          "Implemented new editing algorithms and user dialogs around the instrument-specific notation model.",
          "Fixed bugs and maintained the MFC codebase.",
          "Managed versioning and incorporated direct client feedback.",
        ],
        ua: [
          "Реалізував нові алгоритми редагування та користувацькі діалоги навколо специфічної для інструмента моделі нотації.",
          "Виправляв баги та підтримував MFC-кодову базу.",
          "Керував версіями та враховував прямий зворотний звʼязок клієнта.",
        ],
      },
      tech: ["C++", "MFC", "Windows desktop", "Music notation"],
      links: [],
    },

    {
      id: "biblio-llm",
      name: "Biblio_LLM",
      featured: true,
      type: { en: "Pet project · Bachelor’s thesis", ua: "Пет-проект · Бакалаврська робота" },
      stack: "C++17 · Qt Widgets · CMake",
      tags: ["C++17", "Qt", "LLM", "Transformer", "CMake"],
      summary: {
        en: "A desktop app that searches, ranks, saves and exports academic papers — powered by a small transformer-based LLM I wrote entirely from scratch in C++.",
        ua: "Десктопний застосунок для пошуку, ранжування, збереження й експорту наукових статей — на основі невеликої LLM-моделі на трансформерах, написаної повністю з нуля на C++.",
      },
      description: {
        en: [
          "Biblio_LLM searches across arXiv, PubMed and Semantic Scholar, then ranks the results. The interesting part is the ranking engine: a miniature large language model built from first principles in C++17 — no ML frameworks. It implements its own matrix math and activations, tokenizers (a vocabulary-based one and a Byte-Pair Encoding variant), embeddings, attention layers, feed-forward and full transformer blocks, plus a multi-threaded training pipeline with loss functions.",
          "Wrapped in a Qt Widgets desktop interface, the app lets users compare the neural ranker against a classic TF-IDF baseline, view rich metadata (authors, dates, DOI, journal, abstracts), save articles as JSON, and export citations in PlainText, BibTeX and RIS. The project ships with 95 passing GoogleTest cases covering matrix ops, tokenization, embeddings, attention and transformer blocks.",
        ],
        ua: [
          "Biblio_LLM шукає статті в arXiv, PubMed і Semantic Scholar, а потім ранжує результати. Найцікавіше — рушій ранжування: мініатюрна велика мовна модель, побудована з основ на C++17 без ML-фреймворків. Вона реалізує власну матричну математику й активації, токенайзери (на основі словника та варіант Byte-Pair Encoding), ембединги, шари уваги, feed-forward і повноцінні трансформерні блоки, а також багатопотоковий тренувальний конвеєр із функціями втрат.",
          "Загорнутий у десктопний інтерфейс на Qt Widgets, застосунок дозволяє порівнювати нейронний ранжувальник із класичним TF-IDF, переглядати повні метадані (автори, дати, DOI, журнал, анотації), зберігати статті у JSON та експортувати цитати у PlainText, BibTeX і RIS. Проект має 95 пройдених тестів GoogleTest, що покривають матричні операції, токенізацію, ембединги, увагу та трансформерні блоки.",
        ],
      },
      highlights: {
        en: [
          "Built a transformer LLM from scratch in C++17 — matrix math, BPE tokenizer, embeddings, attention, transformer blocks and training loop.",
          "Multi-source search across arXiv, PubMed and Semantic Scholar.",
          "Neural ranking vs. TF-IDF comparison and custom model training on TSV datasets.",
          "Citation export to PlainText, BibTeX and RIS; local JSON storage.",
          "95 passing automated tests (GoogleTest / CTest).",
        ],
        ua: [
          "Побудував трансформерну LLM з нуля на C++17 — матрична математика, BPE-токенайзер, ембединги, увага, трансформерні блоки та тренувальний цикл.",
          "Пошук з кількох джерел: arXiv, PubMed і Semantic Scholar.",
          "Порівняння нейронного ранжування з TF-IDF та тренування власної моделі на TSV-датасетах.",
          "Експорт цитат у PlainText, BibTeX і RIS; локальне зберігання у JSON.",
          "95 пройдених автоматичних тестів (GoogleTest / CTest).",
        ],
      },
      tech: ["C++17", "Qt Widgets", "CMake", "GoogleTest", "Python", "Transformers"],
      links: [
        { label: "GitHub", url: "https://github.com/OlexandrProkopovich/Biblio_LLM" },
      ],
    },
  ],

  /* --------------------------------------------------------------------- */
  // TODO: update the period / dates below to your real timeline.
  experience: [
    {
      role: { en: "Software Engineer — ScanScore", ua: "Інженер-програміст — ScanScore" },
      period: { en: "Mar 2025 — Mar 2026", ua: "бер. 2025 — бер. 2026" },
      stack: "C++ · Qt5 Widgets / QML",
      points: {
        en: [
          "Built the algorithm and UI for notes shared between two simultaneous melodic lines - assignment, timing recalculation, layout, undo/redo and save/load.",
          "Extended the image-recognition engine, hard-wired for five-line staves, to also detect and rebuild single-line staves straight from the scan.",
          "Added a new editable boxed-text element end to end - from detection in the scan to its edit dialog, copy/paste and MusicXML export.",
          "Fixed crashes and incorrect-output bugs; owned release versioning and direct client communication - regularly delivering mid/senior-scoped work as a junior.",
        ],
        ua: [
          "Побудував алгоритм і UI для нот, спільних між двома одночасними мелодійними лініями - призначення, перерахунок часу, верстка, undo/redo та збереження/завантаження.",
          "Розширив механізм розпізнавання зображення, прив'язаний до п'ятилінійних нотоносців, щоб він також виявляв і відтворював однолінійні нотоносці прямо зі скана.",
          "Наскрізно додав новий редагований елемент тексту в рамці - від виявлення у скані до діалогу редагування, copy/paste та експорту в MusicXML.",
          "Виправляв краші та баги з некоректним результатом; вів версіонування релізів і пряму комунікацію з клієнтом - регулярно закриваючи задачі рівня мід/сеньйор, будучи джуном.",
        ],
      },
    },
    {
      role: { en: "Software Engineer — PiobMaster Pro", ua: "Інженер-програміст — PiobMaster Pro" },
      period: { en: "Mar 2026 — Present", ua: "бер. 2026 — тепер" },
      stack: "C++ · MFC",
      points: {
        en: [
          "Added editing algorithms and dialogs for an instrument-specific notation tool.",
          "Maintained and debugged the MFC codebase; managed versioning and client feedback.",
        ],
        ua: [
          "Додавав алгоритми редагування та діалоги для специфічного під інструмент нотного редактора.",
          "Підтримував і налагоджував MFC-кодову базу; керував версіями та зворотним звʼязком клієнта.",
        ],
      },
    },
    {
      role: { en: "Personal project — Biblio_LLM (Bachelor’s thesis)", ua: "Особистий проект — Biblio_LLM (бакалаврська)" },
      period: { en: "2026", ua: "2026" },
      stack: "C++17 · Qt · CMake",
      points: {
        en: [
          "Designed and built a transformer-based LLM from scratch to rank academic papers.",
          "Multi-source search, neural vs. TF-IDF ranking, citation export, 95 automated tests.",
        ],
        ua: [
          "Спроектував і побудував трансформерну LLM з нуля для ранжування наукових статей.",
          "Пошук з кількох джерел, нейронне vs TF-IDF ранжування, експорт цитат, 95 автотестів.",
        ],
      },
    },
  ],

  /* --------------------------------------------------------------------- */
  education: [
    {
      school: { en: "Ivan Franko National University of Lviv", ua: "Львівський національний університет імені Івана Франка" },
      degree: { en: "Bachelor’s degree, Computer Science", ua: "Бакалавр, компʼютерні науки" },
      period: { en: "2022 — 2026", ua: "2022 — 2026" },
    },
  ],

  /* --------------------------------------------------------------------- */
  /* UI strings */
  ui: {
    nav_about:      { en: "About",      ua: "Про мене" },
    nav_skills:     { en: "Skills",     ua: "Навички" },
    nav_projects:   { en: "Projects",   ua: "Проекти" },
    nav_experience: { en: "Experience", ua: "Досвід" },
    nav_education:  { en: "Education",   ua: "Освіта" },

    hero_cta_projects: { en: "View projects", ua: "Переглянути проекти" },
    hero_resume:       { en: "Download CV",   ua: "Завантажити CV" },

    section_about:      { en: "About",          ua: "Про мене" },
    section_skills:     { en: "Skills",         ua: "Навички" },
    section_projects:   { en: "Projects",       ua: "Проекти" },
    section_experience: { en: "Experience",     ua: "Досвід" },
    section_education:  { en: "Education",       ua: "Освіта" },

    project_view:   { en: "View project →", ua: "Детальніше →" },
    project_back:   { en: "← Back to all projects", ua: "← До всіх проектів" },
    project_about:  { en: "Overview", ua: "Огляд" },
    project_role:   { en: "My role & highlights", ua: "Моя роль та ключове" },
    project_tech:   { en: "Tech stack", ua: "Технології" },
    project_links:  { en: "Links", ua: "Посилання" },
    project_notfound: { en: "Project not found.", ua: "Проект не знайдено." },

    footer_built: { en: "Built with plain HTML, CSS & JS.", ua: "Зроблено на чистому HTML, CSS та JS." },
  },
};

if (typeof module !== "undefined") module.exports = DATA;
