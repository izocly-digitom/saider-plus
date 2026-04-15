document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav.primary');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  const items = document.querySelectorAll('.pillar-item');
  const isMobile = () => window.matchMedia('(max-width: 860px)').matches;
  items.forEach(item => {
    const tab = item.querySelector('.pillar-tab');
    if (!tab) return;
    const activate = () => {
      items.forEach(i => i.classList.toggle('active', i === item));
    };
    const toggle = () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        activate();
      }
    };
    tab.addEventListener('mouseenter', () => { if (!isMobile()) activate(); });
    tab.addEventListener('click', () => { isMobile() ? toggle() : activate(); });
  });

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbCap = lightbox.querySelector('.lightbox-caption');
    const lbClose = lightbox.querySelector('.lightbox-close');
    const open = (src, alt, caption) => {
      lbImg.src = src;
      lbImg.alt = alt || '';
      lbCap.textContent = caption || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('open');
      lbImg.src = '';
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.card-media').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        if (img) open(img.src, img.alt, title ? title.textContent : '');
      });
    });
    lbClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  const timelineEntries = document.querySelectorAll('.timeline-entry');
  if (timelineEntries.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -60px 0px' });
    timelineEntries.forEach(el => io.observe(el));
  } else {
    timelineEntries.forEach(el => el.classList.add('visible'));
  }
});
