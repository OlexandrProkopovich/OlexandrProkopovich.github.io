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
    // TODO: replace assets/img/profile.svg with a real photo (keep the path or update it).
    photo: "assets/img/profile.svg",
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
        ua: "Редактор нотного запису, ключова ідея якого — вбудоване розпізнавання партитур: подаєш зображення нот, і вся партитура зʼявляється у вигляді редагованих музичних обʼєктів.",
      },
      description: {
        en: [
          "ScanScore is a desktop scorewriting application built with C++ and Qt5 (Widgets and QML). Its defining feature is optical character recognition (OCR): instead of typing every note, a user imports an image of a score and the application reconstructs it as a tree of musical objects — staves, voices, notes, articulations — that can then be edited like any hand-entered score.",
          "I started on ScanScore as a junior and steadily took ownership of high-priority, cross-cutting features that touch the entire pipeline — optical recognition, the in-memory music model, layout and rendering, the editing UI, and MusicXML export. Several of these were the kind of work usually scoped to mid/senior engineers, delivered end to end on a large, decade-old codebase.",
          "Three of the larger ones: shared notes between voices — a high-priority feature with its own voice-distribution algorithm; recognition and full editing of one-line percussion staves in an engine that had only ever assumed 5-line staves; and a brand-new \"Rehearsal Mark\" text category, from OCR detection through to its edit dialog and MusicXML export. Alongside the features I fixed long-standing bugs and crashes, owned release versioning, and communicated directly with the client to turn vague requests into shipped functionality.",
        ],
        ua: [
          "ScanScore — це десктопний нотний редактор на C++ та Qt5 (Widgets і QML). Його визначальна функція — оптичне розпізнавання (OCR): замість того, щоб вводити кожну ноту вручну, користувач імпортує зображення партитури, а застосунок відтворює її як дерево музичних обʼєктів — стейви, голоси, ноти, артикуляції — які потім можна редагувати, як будь-яку введену вручну партитуру.",
          "Я почав на ScanScore джуном і поступово брав на себе високопріоритетні наскрізні функції, що зачіпають увесь конвеєр — оптичне розпізнавання, музичну модель у памʼяті, верстку й рендеринг, UI редагування та експорт MusicXML. Частина з них — це робота рівня мід/сеньйор, доведена від початку до кінця у великій кодовій базі десятирічної давнини.",
          "Три з більших: спільні ноти між голосами — високопріоритетна функція з власним алгоритмом розподілу голосів; розпізнавання й повноцінне редагування однолінійних ударних стейвів у механізмі, який досі припускав лише 5-лінійні; і цілком нова текстова категорія «Rehearsal Mark» — від OCR-розпізнавання аж до діалогу редагування й експорту MusicXML. Поряд із функціями виправляв давні баги та краші, відповідав за версіонування релізів і напряму спілкувався з клієнтом, перетворюючи розмиті запити на готову функціональність.",
        ],
      },
      highlights: {
        en: [
          "Shared Notes (high-priority feature, SS-693): designed and shipped the algorithm and UI for notes shared between voices — voice distribution, time-slice recalculation, beam/slur handling, error-mask clearing, undo/redo and serialization. A cross-cutting feature spanning recognition, the music model and rendering.",
          "One-line percussion staves: extended the OCR engine — previously hard-coded for 5-line staves — to detect and reconstruct single-line drum staves end to end: candidate detection with false-positive filtering, eStaff_OneLine_Drum assignment, drum-clef rendering, beam adaptation to OCR content bounds, and post-OCR layout fixes.",
          "Rehearsal Mark text category (SS-755): added OCR recognition via bitmap-piece detection, a text-based CScRehearsalMark model, UI insertion and a double-click edit dialog with font/frame settings, multi-mark stacking per bar, MusicXML export, undo/redo and copy/paste.",
          "Hardened the scanning pipeline: fixed multiple crashes (invalid voice index, volta bracket, MIDI export, division-by-zero), incorrect bar typing and runaway beam geometry.",
          "Owned release versioning and direct client communication — repeatedly taking on mid/senior-scoped tasks as a junior and turning vague requests into shipped features.",
        ],
        ua: [
          "Shared Notes (високопріоритетна функція, SS-693): спроектував і випустив алгоритм та UI для нот, спільних між голосами — розподіл голосів, перерахунок time-slice, обробка beam/slur, очищення error-mask, undo/redo та серіалізація. Наскрізна функція, що охоплює розпізнавання, музичну модель і рендеринг.",
          "Однолінійні ударні стейви: розширив OCR-механізм — раніше жорстко прописаний лише під 5-лінійні стейви — для наскрізного виявлення та відтворення однолінійних ударних стейвів: виявлення кандидатів із фільтрацією хибних спрацювань, призначення eStaff_OneLine_Drum, рендеринг ударного ключа, адаптація beam до меж OCR-контенту та виправлення верстки після OCR.",
          "Текстова категорія Rehearsal Mark (SS-755): додав OCR-розпізнавання через детекцію bitmap-фрагментів, текстову модель CScRehearsalMark, вставку через UI та діалог редагування по подвійному кліку з налаштуваннями шрифту/рамки, стекування кількох позначок у такті, експорт MusicXML, undo/redo та copy/paste.",
          "Зміцнив конвеєр сканування: виправив низку крашів (невалідний індекс голосу, volta bracket, експорт MIDI, ділення на нуль), некоректне визначення типу такту та розбіжну геометрію beam.",
          "Відповідав за версіонування релізів і пряму комунікацію з клієнтом — неодноразово брав задачі рівня мід/сеньйор, будучи джуном, і перетворював розмиті запити на готові функції.",
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
          "The app lets users compare the neural ranker against a classic TF-IDF baseline, view rich metadata (authors, dates, DOI, journal, abstracts), save articles as JSON, and export citations in PlainText, BibTeX and RIS. The project ships with 95 passing GoogleTest cases covering matrix ops, tokenization, embeddings, attention and transformer blocks.",
        ],
        ua: [
          "Biblio_LLM шукає статті в arXiv, PubMed і Semantic Scholar, а потім ранжує результати. Найцікавіше — рушій ранжування: мініатюрна велика мовна модель, побудована з основ на C++17 без ML-фреймворків. Вона реалізує власну матричну математику й активації, токенайзери (на основі словника та варіант Byte-Pair Encoding), ембединги, шари уваги, feed-forward і повноцінні трансформерні блоки, а також багатопотоковий тренувальний конвеєр із функціями втрат.",
          "Застосунок дозволяє порівнювати нейронний ранжувальник із класичним TF-IDF, переглядати повні метадані (автори, дати, DOI, журнал, анотації), зберігати статті у JSON та експортувати цитати у PlainText, BibTeX і RIS. Проект має 95 пройдених тестів GoogleTest, що покривають матричні операції, токенізацію, ембединги, увагу та трансформерні блоки.",
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
          "Designed and shipped Shared Notes (SS-693) — a high-priority feature with its own voice-distribution algorithm, time-slice recalculation, undo/redo and serialization.",
          "Extended the OCR engine to detect and fully edit one-line percussion staves end to end (legacy code assumed 5-line staves only).",
          "Built a new \"Rehearsal Mark\" text category from OCR recognition through to its edit dialog and MusicXML export.",
          "Hardened the scanning pipeline against crashes; fixed long-standing bugs; owned release versioning and direct client communication — regularly delivering mid/senior-scoped tasks as a junior.",
        ],
        ua: [
          "Спроектував і випустив Shared Notes (SS-693) — високопріоритетну функцію з власним алгоритмом розподілу голосів, перерахунком time-slice, undo/redo та серіалізацією.",
          "Розширив OCR-механізм для наскрізного виявлення та повноцінного редагування однолінійних ударних стейвів (legacy-код припускав лише 5-лінійні).",
          "Створив нову текстову категорію «Rehearsal Mark» — від OCR-розпізнавання до діалогу редагування й експорту MusicXML.",
          "Зміцнив конвеєр сканування проти крашів; виправляв давні баги; відповідав за версіонування релізів і пряму комунікацію з клієнтом — регулярно закриваючи задачі рівня мід/сеньйор, будучи джуном.",
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
