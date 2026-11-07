// Google Analytics loads only after the visitor accepts it (GDPR / CNIL).
// The choice is kept in localStorage ("analytics" = "granted" | "denied"); a "Cookies" button
// added to the footer reopens the banner so consent can be withdrawn at any time.
(function () {
  var GA_ID = "G-58VS90ZMV5";
  var KEY = "analytics";
  var TEXT = {
    en: {
      msg: "This site uses Google Analytics cookies to count visits. Nothing is loaded unless you accept.",
      accept: "Accept", decline: "Decline", settings: "Cookies"
    },
    fr: {
      msg: "Ce site utilise les cookies de Google Analytics pour mesurer l'audience. Rien n'est chargé sans votre accord.",
      accept: "Accepter", decline: "Refuser", settings: "Cookies"
    }
  };
  var t = TEXT[(document.documentElement.lang || "en").slice(0, 2)] || TEXT.en;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage unavailable */ } }

  var loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  // Withdrawing consent: remove the GA cookies set on this domain.
  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0) {
        document.cookie = name + "=; Max-Age=0; path=/";
        document.cookie = name + "=; Max-Age=0; path=/; domain=." + location.hostname;
      }
    });
  }

  function showBanner() {
    if (document.getElementById("consent")) return;
    var box = document.createElement("div");
    box.id = "consent";
    box.className = "consent";
    box.setAttribute("role", "region");
    box.setAttribute("aria-label", t.settings);
    var p = document.createElement("p");
    p.textContent = t.msg;
    var actions = document.createElement("div");
    actions.className = "consent-actions";
    [["decline", "btn"], ["accept", "btn btn-primary"]].forEach(function (b) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = b[1];
      btn.textContent = t[b[0]];
      btn.addEventListener("click", function () {
        var granted = b[0] === "accept";
        set(granted ? "granted" : "denied");
        box.remove();
        if (granted) loadAnalytics();
        else if (loaded) { clearAnalyticsCookies(); location.reload(); }
        else clearAnalyticsCookies();
      });
      actions.appendChild(btn);
    });
    box.appendChild(p);
    box.appendChild(actions);
    document.body.appendChild(box);
  }

  function addSettingsButton() {
    var footer = document.querySelector("footer");
    if (!footer) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "consent-link mono";
    btn.textContent = t.settings;
    btn.addEventListener("click", showBanner);
    footer.appendChild(btn);
  }

  if (get() === "granted") loadAnalytics();

  function init() {
    addSettingsButton();
    if (!get()) showBanner();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
