// All page content lives here, in English and French. Edit these entries to update the site.
const content = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.headline": "Data Scientist | PhD in Physical Chemistry | Interpretable ML, LLM agents, Green AI",
    "hero.pitch": "Years of fitting physics-based models to large, noisy datasets, now applied to machine learning: interpretable models, calibrated predictions, explainable systems.",
    "hero.location": "Paris, Île-de-France, France",
    "cta.email": "Email me",
    "about.text": "Data scientist with a background in quantitative science. For several years I built physics-based models fitted to large, noisy measurement datasets, where every parameter had to be justified and every uncertainty quantified. I bring the same standard to machine learning: interpretable models, calibrated predictions and explainable systems.",
    "languages.title": "Languages",
    "contact.text": "Open to Data Scientist positions (permanent or fixed-term) in Paris / Île-de-France, in pharma, materials, energy or environment.",
    "present": "present",
    "inProgress": "in progress",
    experience: [
      {
        title: "AI Developer (work-study)",
        org: "DILA, French Directorate of Legal and Administrative Information",
        place: "Paris",
        dates: "July 2025 – present",
        current: true,
        bullets: [
          "Co-developing an LLM-based agentic retrieval tool for public legal information.",
          "Built a tracing layer measuring the energy use and carbon emissions of each LLM call (LangChain, EcoLogits)."
        ]
      },
      {
        title: "Postdoctoral Researcher, quantitative spectroscopy and modelling",
        org: "CNRS",
        place: "Orsay",
        dates: "November 2023 – September 2024",
        bullets: [
          "Built physics-based models of molecular spectra, fitted by nonlinear least squares to large sets of measured transitions, with physically interpretable parameters.",
          "Processed high-resolution infrared data from the SOLEIL synchrotron: baseline correction, peak assignment, uncertainty estimation.",
          "Co-developed a global fitting approach combining several data sources (infrared, far-infrared, millimetre-wave) into a single model."
        ]
      },
      {
        title: "PhD Researcher, spectroscopy and data modelling",
        org: "MONARIS Laboratory, Sorbonne University",
        place: "Paris",
        dates: "October 2020 – October 2023",
        bullets: [
          "Designed and ran measurement campaigns (laser and synchrotron), producing large high-resolution spectral datasets.",
          "Validated models by comparing experimental data with quantum-chemistry calculations.",
          "Spectral analysis of polycyclic aromatic hydrocarbons (PAHs), their nitrogen-containing derivatives (PANHs) and furans."
        ]
      },
      {
        title: "Earlier research experience",
        org: "Vancouver · Warsaw · Copenhagen",
        dates: "2017 – 2019",
        bullets: [
          "University of British Columbia, Vancouver (8 months): DFT (density functional theory) modelling of a reaction mechanism.",
          "University of Warsaw (2 months): molecular dynamics of receptor-ligand binding, applied to drug discovery.",
          "University of Copenhagen (4 months): UV image analysis of drug dissolution kinetics."
        ]
      }
    ],
    skills: [
      { title: "Languages & tools", items: ["Python", "Git", "Jupyter", "Regex", "BeautifulSoup", "SQL"] },
      { title: "Machine learning & statistics", items: ["scikit-learn", "XGBoost", "Nonlinear least squares", "Uncertainty quantification", "Calibration", "Interpretability"] },
      { title: "Deep learning", items: ["Keras", "PyTorch"] },
      { title: "LLM & generative AI", items: ["LangChain", "Mistral", "RAG", "Agents", "EcoLogits", "Environmental impact measurement"] },
      { title: "Deployment & observability", items: ["FastAPI", "Langfuse", "OpenTelemetry"] },
      { title: "Science", items: ["High-resolution spectroscopy", "Quantum chemistry", "DFT", "Molecular dynamics"] }
    ],
    education: [
      { title: "Data Scientist, RNCP Level 7 certification", detail: "French Master's-level qualification", org: "Loira (formerly DataScientest)", dates: "2025 – 2027", inProgress: true },
      { title: "PhD in Physical Chemistry", org: "Sorbonne University", dates: "2023" },
      { title: "MSc in Chemistry", org: "Sorbonne University", dates: "2020" },
      { title: "BSc in Chemistry", org: "Pierre and Marie Curie University", dates: "2018" },
      { title: "DUT in Chemistry", detail: "2-year technical degree", org: "IUT Montpellier-Sète", dates: "2017" }
    ],
    languages: ["Thai · native", "French · bilingual", "English · bilingual"]
  },

  fr: {
    "nav.about": "Profil",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "hero.headline": "Data Scientist | Docteur en chimie physique | ML interprétable, agents LLM, IA frugale",
    "hero.pitch": "Des années à ajuster des modèles physiques sur de grands jeux de mesures bruitées, aujourd'hui appliquées au machine learning : modèles interprétables, prédictions calibrées, systèmes explicables.",
    "hero.location": "Paris, Île-de-France",
    "cta.email": "M'écrire",
    "about.text": "Data Scientist issu des sciences quantitatives. Pendant plusieurs années, j'ai construit des modèles physiques ajustés sur de grands jeux de mesures bruitées, où chaque paramètre devait être justifié et chaque incertitude quantifiée. J'applique la même exigence au machine learning : modèles interprétables, prédictions calibrées, systèmes explicables.",
    "languages.title": "Langues",
    "contact.text": "Recherche un poste de Data Scientist en CDI ou CDD à Paris / Île-de-France (pharma, matériaux, énergie, environnement).",
    "present": "aujourd'hui",
    "inProgress": "en cours",
    experience: [
      {
        title: "Développeur IA (alternance)",
        org: "DILA, Direction de l'information légale et administrative",
        place: "Paris",
        dates: "juillet 2025 – aujourd'hui",
        current: true,
        bullets: [
          "Co-développement d'un outil de recherche agentique fondé sur des LLM pour l'information juridique publique.",
          "Conception d'une couche de traçage mesurant la consommation d'énergie et les émissions carbone de chaque appel LLM (LangChain, EcoLogits)."
        ]
      },
      {
        title: "Chercheur postdoctoral, spectroscopie quantitative et modélisation",
        org: "CNRS",
        place: "Orsay",
        dates: "novembre 2023 – septembre 2024",
        bullets: [
          "Construction de modèles physiques de spectres moléculaires, ajustés par moindres carrés non linéaires sur de grands jeux de transitions mesurées, avec des paramètres physiquement interprétables.",
          "Traitement de données infrarouges haute résolution du synchrotron SOLEIL : correction de ligne de base, attribution des pics, estimation des incertitudes.",
          "Co-développement d'un ajustement global combinant plusieurs sources de données (infrarouge, infrarouge lointain, ondes millimétriques) dans un modèle unique."
        ]
      },
      {
        title: "Doctorant, spectroscopie et modélisation de données",
        org: "Laboratoire MONARIS, Sorbonne Université",
        place: "Paris",
        dates: "octobre 2020 – octobre 2023",
        bullets: [
          "Conception et conduite de campagnes de mesure (laser et synchrotron), produisant de grands jeux de données spectrales haute résolution.",
          "Validation des modèles par confrontation entre données expérimentales et calculs de chimie quantique.",
          "Analyse spectrale de molécules des familles des hydrocarbures aromatiques polycycliques (HAP), de leurs dérivés azotés (HAPN) et des furanes."
        ]
      },
      {
        title: "Expériences de recherche antérieures",
        org: "Vancouver · Varsovie · Copenhague",
        dates: "2017 – 2019",
        bullets: [
          "University of British Columbia, Vancouver (8 mois) : modélisation DFT (théorie de la fonctionnelle de la densité) d'un mécanisme réactionnel.",
          "Université de Varsovie (2 mois) : dynamique moléculaire de liaison récepteur-ligand, appliquée à la découverte de médicaments.",
          "Université de Copenhague (4 mois) : analyse d'images UV de la cinétique de dissolution de médicaments."
        ]
      }
    ],
    skills: [
      { title: "Langages et outils", items: ["Python", "Git", "Jupyter", "Regex", "BeautifulSoup", "SQL"] },
      { title: "Machine learning et statistiques", items: ["scikit-learn", "XGBoost", "Moindres carrés non linéaires", "Quantification des incertitudes", "Calibration", "Interprétabilité"] },
      { title: "Deep learning", items: ["Keras", "PyTorch"] },
      { title: "LLM et IA générative", items: ["LangChain", "Mistral", "RAG", "Agents", "EcoLogits", "Mesure d'impact environnemental"] },
      { title: "Industrialisation et observabilité", items: ["FastAPI", "Langfuse", "OpenTelemetry"] },
      { title: "Sciences", items: ["Spectroscopie haute résolution", "Chimie quantique", "DFT", "Dynamique moléculaire"] }
    ],
    education: [
      { title: "Data Scientist, certification RNCP niveau 7", org: "Loira (ex-DataScientest)", dates: "2025 – 2027", inProgress: true },
      { title: "Doctorat en chimie physique", org: "Sorbonne Université", dates: "2023" },
      { title: "Master de chimie", org: "Sorbonne Université", dates: "2020" },
      { title: "Licence de chimie", org: "Université Pierre et Marie Curie", dates: "2018" },
      { title: "DUT chimie", org: "IUT de Montpellier-Sète", dates: "2017" }
    ],
    languages: ["Thaï · langue maternelle", "Français · bilingue", "Anglais · bilingue"]
  }
};

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }
};

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderExperience(t) {
  const list = document.getElementById("experience-list");
  list.replaceChildren(...t.experience.map(job => {
    const li = el("li", job.current ? "current" : "");
    const card = el("article", "card");
    const head = el("div", "job-head");
    head.append(el("h3", "job-title", job.title), el("span", "job-meta mono", job.dates));
    const org = el("p", "job-org", job.org);
    if (job.place) org.append(el("span", "job-place", " · " + job.place));
    const ul = el("ul");
    job.bullets.forEach(b => ul.append(el("li", "", b)));
    card.append(head, org, ul);
    li.append(card);
    return li;
  }));
}

function renderSkills(t) {
  const grid = document.getElementById("skills-grid");
  grid.replaceChildren(...t.skills.map(group => {
    const card = el("article", "card");
    const chips = el("ul", "chips");
    group.items.forEach(item => chips.append(el("li", "chip", item)));
    card.append(el("h3", "mono", group.title), chips);
    return card;
  }));
}

function renderEducation(t) {
  const list = document.getElementById("education-list");
  list.replaceChildren(...t.education.map(e => {
    const card = el("article", "card");
    card.append(el("h3", "edu-title", e.title));
    const meta = el("p", "edu-meta", e.org + " · ");
    meta.append(el("span", "mono", e.dates));
    card.append(meta);
    if (e.detail) card.append(el("p", "edu-meta", e.detail));
    if (e.inProgress) card.append(el("span", "badge mono", t.inProgress));
    return card;
  }));
  const langs = document.getElementById("languages-list");
  langs.replaceChildren(...t.languages.map(l => el("li", "chip", l)));
}

function setLanguage(lang) {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = t[node.dataset.i18n];
    if (value != null) node.textContent = value;
  });
  renderExperience(t);
  renderSkills(t);
  renderEducation(t);
  const toggle = document.getElementById("lang-toggle");
  toggle.textContent = lang === "en" ? "FR" : "EN";
  toggle.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
  storage.set("lang", lang);
}

function initialLanguage() {
  const saved = storage.get("lang");
  if (saved && content[saved]) return saved;
  return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en";
}

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function initNavHighlight() {
  const links = [...document.querySelectorAll(".nav-links a")];
  const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove("active"));
      const link = byId.get(entry.target.id);
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

let lang = initialLanguage();
setLanguage(lang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "en" ? "fr" : "en";
  setLanguage(lang);
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  storage.set("theme", next);
});

document.getElementById("year").textContent = new Date().getFullYear();
initNavHighlight();
