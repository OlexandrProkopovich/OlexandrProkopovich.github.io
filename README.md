# OlexandrProkopovich.github.io

Personal portfolio / CV site of **Oleksandr Prokopovych** — C++ / Qt software engineer.

Plain HTML + CSS + JavaScript (no build step, no frameworks). Bilingual **EN / UA**
with a language switch in the navbar. All content is data-driven.

## Featured projects
- **ScanScore** — C++ / Qt5 music-notation editor with optical music recognition (OMR).
- **PiobMaster Pro** — C++ / MFC scorewriter for piobaireachd (bagpipe) notation.
- **Biblio_LLM** — C++17 desktop app with a transformer LLM written from scratch.

## Structure
```
index.html          home page
project.html        project detail page (?id=<project-id>)
assets/css/style.css
assets/js/
  data.js           ← ALL content lives here (bilingual). Edit this.
  common.js         shared helpers + language state
  app.js            renders the home page
  project.js        renders a project detail page
  icons.js          inline SVG icons
assets/img/         SVG covers, avatar, favicon
```

## Editing content
Open `assets/js/data.js`. Every translatable string is an object `{ en, ua }`.
`TODO:` comments mark fields worth personalising (your photo, Telegram username,
experience dates).

## Running locally
Any static server works, e.g.:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment (GitHub Pages)
This repo is named `OlexandrProkopovich.github.io`, so pushing to the default
branch publishes it automatically at `https://OlexandrProkopovich.github.io/`.
`.nojekyll` is included so files are served as-is.
