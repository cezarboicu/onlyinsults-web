(() => {
  const cfg = window.ONLYINSULTS_CONFIG || {};
  const setText = (id, text) => { const el = document.getElementById(id); if (el && text) el.textContent = text; };
  setText('year', new Date().getFullYear());
  setText('domain', cfg.domain);
  setText('launch-price', cfg.launchPrice);

  const support = document.getElementById('support-link');
  if (support && cfg.supportEmail) {
    support.href = `mailto:${cfg.supportEmail}`;
    support.textContent = `Questions? ${cfg.supportEmail} →`;
  }

  const configureStoreLink = (id, url) => {
    const el = document.getElementById(id);
    if (!el || !url || url === '#') return;
    el.href = url;
    el.classList.remove('is-disabled');
    el.removeAttribute('aria-disabled');
  };
  configureStoreLink('app-store-link', cfg.appStoreUrl);
  configureStoreLink('play-store-link', cfg.playStoreUrl);

  document.querySelectorAll('a[aria-disabled="true"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });
})();
