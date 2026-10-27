// All page content lives here, in English and French. Edit these entries to update the site.
const content = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.headline": "Data Scientist | PhD in Physical Chemistry | Interpretable ML, LLM agents, Green AI",
    "hero.pitch": "Years of fitting physics-based models to large, noisy datasets, now applied to machine learning: interpretable models, calibrated predictions, explainable systems.",
    "hero.location": "Paris, Île-de-France, France",
    "cta.email": "Email me",
    "featured.label": "Latest case study",
    "featured.title": "Hidden anomalies in a greenhouse climate",
    "featured.desc": "Multivariate anomaly detection on greenhouse climate data: a white-box detector that explains every alarm, checked on past data only before calling it deployable.",
    "featured.more": "Read the case study →",
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
    languages: ["Thai · native", "French · bilingual", "English · bilingual"],
    "projects.caseStudy": "Case study →",
    "projects.code": "Code",
    "projects.pypi": "PyPI",
    projects: [
      {
        title: "reliability-lab: how far can you trust an LLM judge?",
        meta: "Open-source Python library · 2026",
        summary: "Krippendorff's alpha already has Python implementations; this library adds the study design around it, for LLM judges and human annotators alike. Every rating carries an explicit status (abstention, parse or provider error), disagreement is reported white-box, bootstrap intervals name their resampling scheme and were checked by simulation in 26 scenarios, two judge configurations are compared with a paired interval, and group-safe splits keep reliability measured on units the tuning never saw.",
        tags: ["Krippendorff's alpha", "Inter-rater reliability", "LLM-as-a-judge", "Bootstrap", "Simulation", "Python package"],
        repo: "https://github.com/Sathapana/reliability-lab",
        pypi: "https://pypi.org/project/reliability-lab/"
      },
      {
        title: "Hidden anomalies in a greenhouse climate",
        meta: "Personal research project · 2026",
        summary: "Temperature, humidity and CO₂ can each look normal while their combination is impossible. A white-box study of 15 multivariate detectors on six greenhouse compartments, from the Mahalanobis distance to a control chart on context residuals: a frozen protocol, every alarm explained per variable, and a deployment check on past data only.",
        tags: ["Anomaly detection", "Mahalanobis", "MEWMA", "Calibration", "Explainability", "Time series"],
        href: "projects/greenhouse-anomaly-detection/",
        repo: "https://github.com/Sathapana/Greenhouse_Plant_Growth"
      },
      {
        title: "Crash hazard in US penny stocks",
        meta: "Personal research project · 2026",
        summary: "For a volatile US small cap on a given day, what is the probability of a crash within 20 trading days, and does anything predict it better than a volatility forecast? A pre-registered survival study on 590,000 stock-days, with time-ordered validation and a run-once holdout.",
        tags: ["Survival analysis", "Cox PH", "Discrete-time hazard", "XGBoost", "Calibration", "Pre-registration"],
        href: "projects/penny-stock-survival/",
        repo: "https://github.com/Sathapana/PennyStock_survival"
      }
    ]
  },

  fr: {
    "nav.about": "Profil",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "hero.headline": "Data Scientist | Docteur en chimie physique | ML interprétable, agents LLM, IA frugale",
    "hero.pitch": "Des années à ajuster des modèles physiques sur de grands jeux de mesures bruitées, aujourd'hui appliquées au machine learning : modèles interprétables, prédictions calibrées, systèmes explicables.",
    "hero.location": "Paris, Île-de-France",
    "cta.email": "M'écrire",
    "featured.label": "Dernière étude de cas",
    "featured.title": "Anomalies cachées dans le climat d'une serre",
    "featured.desc": "Détection d'anomalies multivariée sur des données climatiques de serre : un détecteur « boîte blanche » qui explique chaque alarme, vérifié sur données passées uniquement avant d'être dit déployable.",
    "featured.more": "Lire l'étude de cas (en anglais) →",
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
    languages: ["Thaï · langue maternelle", "Français · bilingue", "Anglais · bilingue"],
    "projects.caseStudy": "Étude de cas (en anglais) →",
    "projects.code": "Code",
    "projects.pypi": "PyPI",
    projects: [
      {
        title: "reliability-lab : peut-on se fier à un juge LLM ?",
        meta: "Bibliothèque Python open source · 2026",
        summary: "L'alpha de Krippendorff existe déjà en Python ; cette bibliothèque ajoute le protocole d'étude autour du coefficient, pour les juges LLM comme pour les annotateurs humains. Chaque annotation porte un statut explicite (abstention, erreur de parsing ou d'API), le désaccord est détaillé en « boîte blanche », les intervalles bootstrap nomment leur schéma de rééchantillonnage et ont été vérifiés par simulation sur 26 scénarios, deux configurations de juge se comparent avec un intervalle apparié, et des découpages respectant les groupes mesurent la fiabilité sur des unités jamais vues pendant le réglage.",
        tags: ["Alpha de Krippendorff", "Fiabilité inter-annotateurs", "LLM-as-a-judge", "Bootstrap", "Simulation", "Package Python"],
        repo: "https://github.com/Sathapana/reliability-lab",
        pypi: "https://pypi.org/project/reliability-lab/"
      },
      {
        title: "Anomalies cachées dans le climat d'une serre",
        meta: "Projet de recherche personnel · 2026",
        summary: "Température, humidité et CO₂ peuvent chacun paraître normaux alors que leur combinaison est impossible. Une étude « boîte blanche » de 15 détecteurs multivariés sur six compartiments de serre, de la distance de Mahalanobis à une carte de contrôle sur résidus de contexte : un protocole figé, chaque alarme expliquée par variable et un test de déploiement sur données passées uniquement.",
        tags: ["Détection d'anomalies", "Mahalanobis", "MEWMA", "Calibration", "Explicabilité", "Séries temporelles"],
        href: "projects/greenhouse-anomaly-detection/",
        repo: "https://github.com/Sathapana/Greenhouse_Plant_Growth"
      },
      {
        title: "Risque de krach des penny stocks américaines",
        meta: "Projet de recherche personnel · 2026",
        summary: "Pour une small cap américaine volatile, un jour donné, quelle est la probabilité d'un krach dans les 20 séances suivantes, et peut-on la prédire mieux qu'une prévision de volatilité ? Une étude de survie pré-enregistrée sur 590 000 jours-actions, avec validation chronologique et un test final exécuté une seule fois.",
        tags: ["Analyse de survie", "Cox PH", "Hazard en temps discret", "XGBoost", "Calibration", "Pré-enregistrement"],
        href: "projects/penny-stock-survival/",
        repo: "https://github.com/Sathapana/PennyStock_survival"
      }
    ]
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

function link(text, href, external) {
  const a = el("a", "", text);
  a.href = href;
  if (external) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

// A project without a case study page (`href`) links its title to the repository instead.
function renderProjects(t) {
  const list = document.getElementById("projects-list");
  list.replaceChildren(...t.projects.map(p => {
    const card = el("article", "card project-card");
    const title = el("h3", "project-title");
    title.append(p.href ? link(p.title, p.href) : link(p.title, p.repo, true));
    const chips = el("ul", "chips");
    p.tags.forEach(tag => chips.append(el("li", "chip", tag)));
    const links = el("p", "project-links mono");
    if (p.href) links.append(link(t["projects.caseStudy"], p.href));
    links.append(link(t["projects.code"], p.repo, true));
    if (p.pypi) links.append(link(t["projects.pypi"], p.pypi, true));
    card.append(title, el("p", "project-meta mono", p.meta), el("p", "project-summary", p.summary), chips, links);
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
  renderProjects(t);
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
