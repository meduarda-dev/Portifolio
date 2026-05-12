const nav = document.getElementById('nav');
const backToTop = document.getElementById('backToTop');
const themeBtn = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    backToTop.classList.add('show');
  } else {
    nav.classList.remove('scrolled');
    backToTop.classList.remove('show');
  }

  const sections = ['home', 'about', 'projects', 'knowledge', 'experience', 'contact'];
  sections.forEach(id => {
    const section = document.getElementById(id);
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (section && link) {
      const top = section.offsetTop - 140;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

let dark = false;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

ScrollReveal({ origin: 'bottom', distance: '40px', duration: 900, reset: false }).reveal(
  '#home .hero-text, #home .hero-img-wrap, #about .about-img-wrap, #about .about-content, ' +
  '#projects .section-header, .project-card, #knowledge .section-header, .skill-card, .extra-chip, ' +
  '#experience .section-header, .timeline-item, #contact .section-header, .contact-links, footer',
  { interval: 80 }
);