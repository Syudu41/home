// GitHub Pages supplies Last-Modified for each deployed HTML page.
// Use the document timestamp, never the visitor's current date.
const lastUpdated = document.querySelector('[data-last-updated]');
const modified = new Date(document.lastModified);
if (lastUpdated && !Number.isNaN(modified.getTime())) {
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(modified);
  const part = (type) => dateParts.find((entry) => entry.type === type).value;
  lastUpdated.dateTime = `${part('year')}-${part('month')}-${part('day')}`;
  lastUpdated.textContent = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', year: 'numeric', month: 'long', day: 'numeric'
  }).format(modified);
}

// Reserve the actual footer height, including wrapping and text zoom.
const footer = document.querySelector('footer');
if (footer) {
  const reserveFooterSpace = () => {
    document.documentElement.style.setProperty('--footer-height', `${footer.getBoundingClientRect().height}px`);
  };
  reserveFooterSpace();
  new ResizeObserver(reserveFooterSpace).observe(footer);
}

// Keep anchor destinations below the pinned header at every screen size.
const header = document.querySelector('.site-header');
if (header) {
  const measureHeader = () => {
    document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  };
  measureHeader();
  new ResizeObserver(measureHeader).observe(header);
}
