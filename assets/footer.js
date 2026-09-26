// Reserve the actual footer height, including wrapping and text zoom.
const footer = document.querySelector('footer');
if (footer) {
  const reserveFooterSpace = () => {
    document.documentElement.style.setProperty('--footer-height', `${footer.getBoundingClientRect().height}px`);
  };
  reserveFooterSpace();
  new ResizeObserver(reserveFooterSpace).observe(footer);
}
