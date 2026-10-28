# sathapana.chawananon.github.io

Personal portfolio of Sathapana Chawananon, a static site served by GitHub Pages (no build step).

- Content is static HTML so search engines, ATS and link previews can read it without running JavaScript: English in `index.html`, French in `fr/index.html`. The two pages share the same structure; edit them together.
- Styles are in `assets/css/style.css`. `assets/js/main.js` (shared by both pages) only handles the theme toggle, the language preference, the nav highlight and the footer year. The FR/EN toggle is a link to the other page; `index.html` redirects to `fr/` when the visitor chose French or has a French browser and no saved choice.
- Project case studies live in `projects/<slug>/index.html` (English only, styles in `assets/css/project.css`, figures in `projects/<slug>/img/`). Each one has a card in the Projects section of both pages (links are `projects/<slug>/` in `index.html` and `../projects/<slug>/` in `fr/index.html`). A project without a case study links its title to the repository instead.
- Project cards, and the top of each case study, summarise the work as a `dl.psi` (Problem / Solution / Impact). Impact lines carry only numbers published in the case study or the project's repository.
- Preview locally: `python -m http.server 8000`, then open http://localhost:8000.
