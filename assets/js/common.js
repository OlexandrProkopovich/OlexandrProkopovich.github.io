/* common.js — shared helpers and language state for all pages. */

const LANG_KEY = "site-lang";
function getLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "ua") return saved;
  return (navigator.language || "en").toLowerCase().startsWith("uk") ? "ua" : "en";
}
function setLang(l) { localStorage.setItem(LANG_KEY, l); }

function t(val, lang) {
  if (val == null) return "";
  return typeof val === "object" ? (val[lang] ?? val.en ?? "") : val;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function el(id) { return document.getElementById(id); }
function chips(items) { return items.map((i) => `<span class="chip">${esc(i)}</span>`).join(""); }
function socialIcon(type) {
  if (typeof ICONS === "undefined") return "";
  return ICONS[type] || ICONS.external || "";
}

/* shared scroll-reveal */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
}

/* shared lang toggle wiring; calls render(lang) on change */
function wireLangToggle(getCurrent, render) {
  const tog = document.getElementById("lang-toggle");
  if (!tog) return;
  tog.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (!b || b.dataset.lang === getCurrent()) return;
    setLang(b.dataset.lang);
    render(b.dataset.lang);
  });
}
function markLangActive(lang) {
  document.querySelectorAll("#lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang));
}
