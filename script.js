'use strict';

// Progressive enhancement: all important content stays visible without JavaScript.
const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = opened;
  menuButton.setAttribute('aria-expanded', String(!opened));
  menuButton.setAttribute('aria-label', opened ? 'メニューを開く' : 'メニューを閉じる');
  document.body.classList.toggle('menu-open', !opened);
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });

// Reveal animations only when reduced motion is not requested.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.09, rootMargin: '0px 0px 16px 0px' });
  document.documentElement.classList.add('js-animations');
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

// Reading progress line.
const progress = document.getElementById('page-progress');
let scrollScheduled = false;
function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0})`;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) { window.requestAnimationFrame(updateProgress); scrollScheduled = true; }
}, { passive: true });
updateProgress();

// Gallery filter controls.
const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.gallery-item');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('is-active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  galleryItems.forEach(item => {
    item.hidden = !(category === 'all' || item.dataset.category === category);
  });
}));

// Dialog image viewer with native ESC close and outside-click close.
const dialog = document.getElementById('lightbox');
const dialogImage = document.getElementById('lightbox-img');
const dialogCaption = document.getElementById('lightbox-caption');
const closeButton = document.getElementById('lightbox-close');
let previousFocus = null;
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  previousFocus = button;
  dialogImage.src = button.dataset.image;
  dialogImage.alt = button.dataset.alt || 'ゲームの画像';
  dialogCaption.textContent = button.dataset.alt || '';
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else window.open(button.dataset.image, '_blank', 'noopener,noreferrer');
}));
function closeDialog() { if (dialog.open) dialog.close(); }
closeButton?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog?.addEventListener('close', () => { dialogImage.removeAttribute('src'); previousFocus?.focus(); });

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
