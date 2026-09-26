# Sudarshan Balaji — academic website

A lightweight, responsive academic homepage inspired by Yanchen Liu’s website and al-folio. Built with plain HTML and CSS; no package installation or build step required.

Intended URL: https://syudu41.github.io/home/

## Preview

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000.

## Editing

- `index.html`: biography, links, news, and selected publications.
- `assets/style.css`: typography, colors, and responsive layout.

All asset paths are relative, so the site works under `/home/` on GitHub Pages.

## Deployment

Publish the `main` branch from the repository root using GitHub Pages (Settings → Pages → Deploy from a branch). `.nojekyll` disables unnecessary Jekyll processing.

## Content notes

The first-year PhD status, current advisor Dr. Dipankar Dasgupta, and research interests are user supplied. Education and prior research experience were carried over from the public `Syudu41/portfolio` repository and should be reviewed for currency. Publication metadata was verified against https://aclanthology.org/2025.gem-1.36/.

Email is omitted at the user’s request. CV is marked under construction. Google Scholar and LinkedIn URLs were supplied by the user; Scholar may not list all publications. The PhD start date is not specified.

## Emote credits

Inline excited-blob and waving-Pikachu GIFs were reused from the reference site https://liuyanchen1015.github.io/ (source: https://github.com/liuyanchen1015/liuyanchen1015.github.io). Sparkles artwork comes from GitHub’s emoji assets. Assets are stored locally in `assets/emotes`; animated decorations are hidden when visitors request reduced motion. See `assets/emotes/REFERENCE-LICENSE.txt` for the reference repository license.

## Blog and news

`blog/index.html` is the separate blog landing page, currently under construction. Both pages share navigation and `assets/style.css`. The AiXB 2026 acceptance, author names, September 28 presentation, and January 2026 PhD start were supplied by the site owner. The September news label records the announcement month.

`publications/index.html` is an independent full-publications placeholder, linked from the navigation. The homepage’s selected publications stay separate. The personal photo has been removed from current files and social-preview metadata, and replaced with a robot emoji placeholder. May 2026 summer work with Dr. Vinhthuy Phan is owner supplied.
