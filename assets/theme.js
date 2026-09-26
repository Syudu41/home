(() => {
  const key = 'sudarshan-home-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem(key); } catch {}
  if (!['light', 'dark'].includes(preference)) preference = null;
  const apply = (theme) => {
    document.documentElement.dataset.theme = theme;
    const dark = theme === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#141a22' : '#ffffff';
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', 'Dark mode');
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
      button.querySelector('[data-theme-icon]').textContent = dark ? '☀' : '☾';
    }
  };
  const current = () => preference || (system.matches ? 'dark' : 'light');
  apply(current());
  document.addEventListener('DOMContentLoaded', () => {
    apply(current());
    document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch {}
      apply(preference);
    });
  });
  system.addEventListener('change', () => { if (!preference) apply(current()); });
  window.addEventListener('storage', (event) => {
    if (event.key !== key && event.key !== null) return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : null;
    apply(current());
  });
})();
