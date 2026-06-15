/* ============================================================================
 *  project.js — renders a single project detail page (?id=...).
 * ========================================================================== */

function currentProject() {
  const id = new URLSearchParams(location.search).get("id");
  return DATA.projects.find((p) => p.id === id) || null;
}

function renderNav(lang) {
  const u = DATA.ui;
  const navItems = [
    ["about", u.nav_about], ["skills", u.nav_skills], ["projects", u.nav_projects],
    ["education", u.nav_education],
  ];
  el("nav-links").innerHTML = navItems
    .map(([id, label]) => `<a href="index.html#${id}">${esc(t(label, lang))}</a>`)
    .join("");
  const footSocials = DATA.profile.socials
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${socialIcon(s.type)}</a>`)
    .join("");
  el("footer-inner").innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(DATA.profile.name)}</span>
    <div class="footer-socials">${footSocials}</div>`;
}

function renderProject(lang) {
  const u = DATA.ui;
  document.documentElement.lang = lang === "ua" ? "uk" : "en";
  renderNav(lang);
  markLangActive(lang);

  const pr = currentProject();
  const root = el("detail-root");

  if (!pr) {
    root.innerHTML = `
      <a class="detail-back" href="index.html#projects">${esc(t(u.project_back, lang))}</a>
      <h1 style="font-family:var(--font-disp);margin-top:24px">${esc(t(u.project_notfound, lang))}</h1>`;
    return;
  }

  document.title = `${pr.name} — Olexandr Prokopovych`;

  const desc = (t(pr.description, lang) || []).map((x) => `<p>${esc(x)}</p>`).join("");
  const highlights = (t(pr.highlights, lang) || []).map((x) => `<li>${esc(x)}</li>`).join("");
  const linksBlock = pr.links && pr.links.length
    ? `<div class="detail-block">
         <h2>${esc(t(u.project_links, lang))}</h2>
         <div class="detail-links">
           ${pr.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${socialIcon("external")}<span>${esc(l.label)}</span></a>`).join("")}
         </div>
       </div>`
    : "";

  root.innerHTML = `
    <a class="detail-back" href="index.html#projects">${esc(t(u.project_back, lang))}</a>
    <div class="detail-head reveal">
      <span class="project-type">${esc(t(pr.type, lang))}</span>
      <h1>${esc(pr.name)}</h1>
      <span class="project-stack">${esc(pr.stack)}</span>
    </div>
    <div class="detail-grid">
      <div class="detail-main reveal">
        <div class="detail-block">
          <h2>${esc(t(u.project_about, lang))}</h2>
          ${desc}
        </div>
        <div class="detail-block">
          <h2>${esc(t(u.project_role, lang))}</h2>
          <ul>${highlights}</ul>
        </div>
      </div>
      <aside class="detail-aside reveal">
        <div class="skill-card">
          <h3>${esc(t(u.project_tech, lang))}</h3>
          <div class="chips">${chips(pr.tech)}</div>
        </div>
        ${linksBlock}
      </aside>
    </div>`;

  observeReveal();
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = getLang();
  renderProject(lang);
  wireLangToggle(() => lang, (l) => { lang = l; renderProject(l); });
});
