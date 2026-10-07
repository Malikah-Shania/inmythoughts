// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const list = document.getElementById('site-nav');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// Copy link button on entry pages
const copyBtn = document.getElementById('copy-btn');
const status = document.getElementById('copy-status');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      status.textContent = 'Link copied.';
    } catch (e) {
      status.textContent = 'Copy the link from your address bar.';
    }
  });
}
