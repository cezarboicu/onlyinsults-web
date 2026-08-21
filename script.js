(() => {
  const cfg = window.ONLYINSULTS || {};
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-domain]").forEach(el => el.textContent = cfg.domain || "onlyinsults.net");
  document.querySelectorAll("[data-support-email]").forEach(el => {
    const email = cfg.supportEmail || "support@onlyinsults.net";
    el.textContent = email;
    if (el.tagName === "A") el.href = `mailto:${email}`;
  });
  document.querySelectorAll("[data-privacy-email]").forEach(el => {
    const email = cfg.privacyEmail || "privacy@onlyinsults.net";
    el.textContent = email;
    if (el.tagName === "A") el.href = `mailto:${email}`;
  });
  document.querySelectorAll("[data-launch-price]").forEach(el => el.textContent = cfg.launchPrice || "€4.99");

  const configureStoreLink = (selector, url) => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (url) {
      el.href = url;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
    } else {
      el.href = "#";
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.addEventListener("click", e => e.preventDefault());
    }
  };
  configureStoreLink("#app-store-link", cfg.appStoreUrl);
  configureStoreLink("#play-store-link", cfg.playStoreUrl);
})();
