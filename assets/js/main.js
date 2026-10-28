// Page content is static HTML: English in index.html, French in fr/index.html.
// This script only handles the theme, the language preference, the nav highlight and the year.
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }
};

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

// The toggle is a plain link to the other language's page; remember the choice so index.html can redirect.
document.getElementById("lang-toggle").addEventListener("click", event => {
  storage.set("lang", event.currentTarget.hreflang);
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  storage.set("theme", next);
});

document.getElementById("year").textContent = new Date().getFullYear();
initNavHighlight();
