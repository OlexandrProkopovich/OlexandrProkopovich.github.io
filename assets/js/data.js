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
      title: { en: "Desktop & Build", ua: "Десктоп і збірка" },
      items: [
        "Desktop C++",
        "Qt6 Quick / QML",
        "Qt5 Widgets",
        "MFC / Win32 API",
        "CMake / Ninja / MSBuild",
        "MSVC / arm-none-eabi-gcc",
      ],
    },
    {
      title: { en: "Protocols & Interfaces", ua: "Протоколи та інтерфейси" },
      items: [
        "TCP",
        "SMTP / IMAP",
        "SSH",
        "TLS",
      ],
    },
    {
      title: { en: "Web & Scripting", ua: "Веб і скрипти" },
      items: [
        "Python / Flask",
        "HTML5 / CSS3 / JS",
        "MySQL / SQLite",
        "Git / GitPython",
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
          "ScanScore is a desktop scorewriting app in C++ and Qt5. Its defining feature is optical recognition: a user imports a photo or scan of sheet music and the app reconstructs it as a structured, fully editable document - staves, notes and other symbols become real objects you can move, change and export.",
          "I started here as a junior and took ownership of features running through the whole pipeline - recognition, the in-memory document model, layout/rendering, the editing UI and file export. Most of the work was about data structures, geometry and image analysis rather than music theory, and several pieces were normally scoped to mid/senior engineers.",
        ],
        ua: [
          "ScanScore - десктопний нотний редактор на C++ та Qt5. Його ключова ідея - оптичне розпізнавання: користувач імпортує фото чи скан нот, а застосунок відтворює їх як структурований, повністю редагований документ - нотоносці, ноти й інші символи стають реальними об'єктами, які можна рухати, змінювати й експортувати.",
          "Я почав тут джуном і брав на себе функції, що проходять крізь увесь конвеєр - розпізнавання, документну модель у пам'яті, верстку/рендеринг, UI редагування та експорт. Більша частина роботи стосувалася структур даних, геометрії й аналізу зображень, а не музичної теорії, а частину задач зазвичай доручають мід-/сеньйор-інженерам.",
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
          "PiobMaster Pro is a Windows desktop application in C++ and MFC, dedicated to creating scores from scratch for one specific instrument and notation style — workflow and music objects modelled around that instrument’s conventions.",
          "My work was adding algorithms and dialogs that solve user-facing problems, fixing bugs, and handling versioning — turning client requests into shippable features.",
        ],
        ua: [
          "PiobMaster Pro — десктопний застосунок для Windows на C++ та MFC, призначений для створення партитур з нуля для одного конкретного інструмента та стилю нотації — робочий процес і музичні обʼєкти змодельовані під конвенції цього інструмента.",
          "Моя робота — додавання алгоритмів і діалогів, що вирішують проблеми користувачів, виправлення багів і керування версіями — перетворення запитів клієнта на готові до релізу функції.",
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
          "Biblio_LLM searches across arXiv, PubMed and Semantic Scholar and ranks the results. The interesting part is the ranking engine: a miniature LLM built from first principles in C++17, no ML frameworks — its own matrix math, tokenizers (vocabulary-based and Byte-Pair Encoding), embeddings, attention and full transformer blocks, plus a multi-threaded training pipeline.",
          "Wrapped in a Qt Widgets desktop UI, it compares the neural ranker against a TF-IDF baseline, shows rich metadata, saves articles as JSON, and exports citations to PlainText, BibTeX and RIS — backed by 95 passing GoogleTest cases.",
        ],
        ua: [
          "Biblio_LLM шукає статті в arXiv, PubMed і Semantic Scholar і ранжує результати. Найцікавіше — рушій ранжування: мініатюрна LLM, побудована з основ на C++17 без ML-фреймворків — власна матрична математика, токенайзери (словниковий і Byte-Pair Encoding), ембединги, увага й повноцінні трансформерні блоки та багатопотоковий тренувальний конвеєр.",
          "Загорнутий у десктопний інтерфейс на Qt Widgets, застосунок порівнює нейронний ранжувальник із TF-IDF, показує повні метадані, зберігає статті у JSON та експортує цитати у PlainText, BibTeX і RIS — і має 95 пройдених тестів GoogleTest.",
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
    nav_education:  { en: "Education",   ua: "Освіта" },

    hero_cta_projects: { en: "View projects", ua: "Переглянути проекти" },
    hero_resume:       { en: "Download CV",   ua: "Завантажити CV" },

    section_about:      { en: "About",          ua: "Про мене" },
    section_skills:     { en: "Skills",         ua: "Навички" },
    section_projects:   { en: "Projects",       ua: "Проекти" },
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
