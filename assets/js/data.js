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
      en: "I build and maintain desktop applications for music notation — from optical score recognition to from-scratch transformer models.",
      ua: "Розробляю та підтримую десктопні застосунки для нотного запису — від оптичного розпізнавання партитур до трансформерів, написаних з нуля.",
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
      "Software engineer focused on C++ desktop applications in the music-notation domain. My day-to-day work is adding features and dialogs that solve concrete user problems, designing new algorithms, and keeping large legacy codebases healthy.",
      "I’ve shipped recognition and editing features for professional scorewriting tools, dug into decade-old code to extend it safely, fixed long-standing bugs, managed versioning, and communicated directly with clients to turn vague requests into working features.",
      "On the side I explore machine learning from first principles — I built a small transformer-based LLM entirely from scratch in C++ to rank academic papers.",
    ],
    ua: [
      "Інженер-програміст, що спеціалізується на десктопних застосунках C++ у сфері нотного запису. Щодня додаю функції та діалоги, які вирішують конкретні проблеми користувачів, проектую нові алгоритми та підтримую великі legacy-кодові бази у робочому стані.",
      "Реалізовував функції розпізнавання й редагування для професійних нотних редакторів, заглиблювався у код десятирічної давнини, щоб безпечно його розширювати, виправляв давні баги, керував версіонуванням і напряму спілкувався з клієнтами, перетворюючи розмиті запити на готові функції.",
      "У вільний час вивчаю машинне навчання з основ — написав невелику LLM на трансформерах повністю з нуля на C++ для ранжування наукових статей.",
    ],
  },

  /* --------------------------------------------------------------------- */
  skills: [
    {
      title: { en: "Languages", ua: "Мови" },
      items: ["C++ (11/14/17)", "C", "Python", "QML", "JavaScript"],
    },
    {
      title: { en: "Frameworks & Tools", ua: "Фреймворки та інструменти" },
      items: ["Qt5 (Widgets, QML)", "MFC", "CMake", "GoogleTest / CTest", "Git", "MSVC"],
    },
    {
      title: { en: "Domains", ua: "Напрями" },
      items: [
        "Optical Music Recognition (OMR)",
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
      tags: ["C++", "Qt5", "QML", "OMR", "Legacy"],
      image: "assets/img/scanscore.svg",
      summary: {
        en: "A music-notation editor whose core idea is built-in score recognition: feed it an image of sheet music and the whole score appears as editable musical objects.",
        ua: "Редактор нотного запису, ключова ідея якого — вбудоване розпізнавання партитур: подаєш зображення нот, і вся партитура зʼявляється у вигляді редагованих музичних обʼєктів.",
      },
      description: {
        en: [
          "ScanScore is a desktop scorewriting application built with C++ and Qt5 (Widgets and QML). Its defining feature is optical music recognition (OMR): instead of typing every note, a user imports an image of a score and the application reconstructs it as a tree of musical objects — staves, voices, notes, articulations — that can then be edited like any hand-entered score.",
          "My role was feature and maintenance engineering on top of a large, long-lived codebase: implementing new algorithms and dialogs that solve real user problems, extending the recognition engine, fixing long-standing bugs, managing release versions, and communicating directly with the client to shape requirements.",
        ],
        ua: [
          "ScanScore — це десктопний нотний редактор на C++ та Qt5 (Widgets і QML). Його визначальна функція — оптичне розпізнавання нот (OMR): замість того, щоб вводити кожну ноту вручну, користувач імпортує зображення партитури, а застосунок відтворює її як дерево музичних обʼєктів — стейви, голоси, ноти, артикуляції — які потім можна редагувати, як будь-яку введену вручну партитуру.",
          "Моя роль — інженерія функцій і підтримка великої довгоживучої кодової бази: реалізація нових алгоритмів і діалогів, що вирішують реальні проблеми користувачів, розширення механізму розпізнавання, виправлення давніх багів, керування версіями релізів і пряме спілкування з клієнтом для формування вимог.",
        ],
      },
      highlights: {
        en: [
          "Extended the legacy recognition engine to handle single-line staves — the existing code was hard-coded for 5-line staves only.",
          "Designed an algorithm for notes shared between voices.",
          "Added a dialog and logic for assigning abbreviations to staves.",
          "Fixed long-standing bugs across old, unfamiliar code paths.",
          "Owned release versioning and direct client communication.",
        ],
        ua: [
          "Розширив legacy-механізм розпізнавання для роботи з однолінійними стейвами — наявний код був жорстко прописаний лише під 5-лінійні.",
          "Спроектував алгоритм для нот, спільних між голосами (shared notes).",
          "Додав діалог і логіку призначення абревіатур стейвам.",
          "Виправляв давні баги у старих, незнайомих ділянках коду.",
          "Відповідав за версіонування релізів і пряму комунікацію з клієнтом.",
        ],
      },
      tech: ["C++", "Qt5 Widgets", "QML", "Optical Music Recognition", "Legacy code"],
      links: [], // proprietary — no public repository
    },

    {
      id: "piobmasterpro",
      name: "PiobMaster Pro",
      featured: true,
      type: { en: "Commercial · Work", ua: "Комерційний · Робота" },
      stack: "C++ · MFC",
      tags: ["C++", "MFC", "Notation"],
      image: "assets/img/piobmaster.svg",
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
      image: "assets/img/biblio.svg",
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
      period: { en: "20XX — Present", ua: "20XX — тепер" },
      stack: "C++ · Qt5 Widgets / QML",
      points: {
        en: [
          "Add new algorithms and dialogs solving real user problems on a large legacy codebase.",
          "Extended the OMR engine to recognise single-line staves (legacy code assumed 5 lines).",
          "Implemented shared-notes-between-voices logic; fixed long-standing bugs; managed versioning.",
          "Communicated directly with the client to refine requirements.",
        ],
        ua: [
          "Додаю нові алгоритми та діалоги, що вирішують реальні проблеми користувачів, у великій legacy-кодовій базі.",
          "Розширив OMR-механізм для розпізнавання однолінійних стейвів (legacy-код припускав 5 ліній).",
          "Реалізував логіку спільних нот між голосами; виправляв давні баги; керував версіонуванням.",
          "Напряму спілкувався з клієнтом для уточнення вимог.",
        ],
      },
    },
    {
      role: { en: "Software Engineer — PiobMaster Pro", ua: "Інженер-програміст — PiobMaster Pro" },
      period: { en: "20XX — Present", ua: "20XX — тепер" },
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
      period: { en: "20XX", ua: "20XX" },
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
  /* UI strings */
  ui: {
    nav_about:      { en: "About",      ua: "Про мене" },
    nav_skills:     { en: "Skills",     ua: "Навички" },
    nav_projects:   { en: "Projects",   ua: "Проекти" },
    nav_experience: { en: "Experience", ua: "Досвід" },
    nav_contact:    { en: "Contact",    ua: "Контакти" },

    hero_cta_projects: { en: "View projects", ua: "Переглянути проекти" },
    hero_cta_contact:  { en: "Get in touch",  ua: "Звʼязатися" },
    hero_resume:       { en: "Download CV",   ua: "Завантажити CV" },

    section_about:      { en: "About",          ua: "Про мене" },
    section_skills:     { en: "Skills",         ua: "Навички" },
    section_projects:   { en: "Projects",       ua: "Проекти" },
    section_experience: { en: "Experience",     ua: "Досвід" },
    section_contact:    { en: "Get in touch",   ua: "Звʼязатися" },

    contact_text: {
      en: "Open to interesting C++ / Qt and desktop engineering work. The fastest way to reach me is email.",
      ua: "Відкритий до цікавих задач на C++ / Qt та десктоп-розробки. Найшвидше зі мною звʼязатися поштою.",
    },

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
