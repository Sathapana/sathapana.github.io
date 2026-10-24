# sathapana.chawananon.github.io

Personal portfolio of Sathapana Chawananon, a static site served by GitHub Pages (no build step).

- Content (English and French) lives in `assets/js/main.js`, in the `content` object. Edit the `en` and `fr` entries together.
- Layout is in `index.html`, styles in `assets/css/style.css`.
- Project case studies live in `projects/<slug>/index.html` (English only, styles in `assets/css/project.css`, figures in `projects/<slug>/img/`). Each one is listed in the `projects` array of `main.js`.
- Preview locally: `python -m http.server 8000`, then open http://localhost:8000.
