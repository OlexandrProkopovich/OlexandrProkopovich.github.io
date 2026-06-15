/* ============================================================================
 *  app.js — renders the home page from DATA. Shared helpers live in common.js.
 * ========================================================================== */

function renderHome(lang) {
  const p = DATA.profile;
  const u = DATA.ui;
  document.documentElement.lang = lang === "ua" ? "uk" : "en";

  /* nav */
  const navItems = [
    ["#about", u.nav_about], ["#skills", u.nav_skills], ["#projects", u.nav_projects],
    ["#education", u.nav_education],
  ];
  el("nav-links").innerHTML = navItems
    .map(([href, label]) => `<a href="${href}">${esc(t(label, lang))}</a>`)
    .join("");

  /* hero */
  const socials = p.socials
    .map((s) => `<a class="icon-link" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${socialIcon(s.type)}</a>`)
    .join("");
  const resumeBtn = p.resume
    ? `<a class="btn" href="${esc(p.resume)}" target="_blank" rel="noopener">${esc(t(u.hero_resume, lang))}</a>` : "";
  el("hero-inner").innerHTML = `
    <div>
      <span class="hero-eyebrow">${esc(t(p.role, lang))}</span>
      <h1>${esc(p.name)}</h1>
      <p class="hero-role">${esc(t(p.tagline, lang))}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#projects">${esc(t(u.hero_cta_projects, lang))}</a>
        ${resumeBtn}
      </div>
      <div class="hero-socials">${socials}</div>
    </div>
    <div class="hero-photo">
      <img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="eager" />
      <div class="hero-meta">📍 ${esc(t(p.location, lang))}</div>
    </div>`;

  /* about */
  el("t-about").textContent = t(u.section_about, lang);
  const aboutParas = (t(DATA.about, lang) || []).map((x) => `<p>${esc(x)}</p>`).join("");
  el("about-grid").innerHTML = `
    <div class="about-text">${aboutParas}</div>
    <div class="about-facts">
      <div class="fact"><div class="k">${lang === "ua" ? "Робота" : "Work"}</div><div class="v">CDev · ${lang === "ua" ? "бер. 2025 — тепер" : "Mar 2025 — present"}</div></div>
      <div class="fact"><div class="k">${lang === "ua" ? "Локація" : "Location"}</div><div class="v">${esc(t(p.location, lang))}</div></div>
      <div class="fact"><div class="k">${lang === "ua" ? "Фокус" : "Focus"}</div><div class="v">C++ · Qt · Desktop · OCR</div></div>
    </div>`;

  /* skills */
  el("t-skills").textContent = t(u.section_skills, lang);
  el("skills-grid").innerHTML = DATA.skills
    .map((g) => `<div class="skill-card reveal"><h3>${esc(t(g.title, lang))}</h3><ul class="skill-list">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`)
    .join("");

  /* projects */
  el("t-projects").textContent = t(u.section_projects, lang);
  el("projects-sub").textContent = lang === "ua"
    ? "Головні проекти, над якими я працював найбільше."
    : "The main projects I’ve worked on the most.";
  el("projects-grid").innerHTML = DATA.projects.map((pr) => `
    <a class="project-card reveal" href="project.html?id=${encodeURIComponent(pr.id)}">
      <div class="project-body">
        <span class="project-type">${esc(t(pr.type, lang))}</span>
        <h3>${esc(pr.name)}</h3>
        <span class="project-stack">${esc(pr.stack)}</span>
        <p class="project-summary">${esc(t(pr.summary, lang))}</p>
        <div class="project-tags">${chips(pr.tags)}</div>
        <div class="project-foot"><span class="project-link">${esc(t(u.project_view, lang))}</span></div>
      </div>
    </a>`).join("");

  /* education */
  el("t-education").textContent = t(u.section_education, lang);
  el("education-list").innerHTML = DATA.education.map((e) => `
    <div class="tl-item">
      <div class="tl-period">${esc(t(e.period, lang))}</div>
      <div class="tl-role">${esc(t(e.school, lang))}</div>
      <div class="tl-stack">${esc(t(e.degree, lang))}</div>
    </div>`).join("");

  /* footer */
  const footSocials = p.socials
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${socialIcon(s.type)}</a>`)
    .join("");
  el("footer-inner").innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(p.name)}</span>
    <div class="footer-socials">${footSocials}</div>`;

  markLangActive(lang);
  observeReveal();
}

/* ---- wiring --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  let lang = getLang();
  renderHome(lang);
  wireLangToggle(() => lang, (l) => { lang = l; renderHome(l); });

  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  }
});
