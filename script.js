// Menu responsivo
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggle.setAttribute('aria-expanded', nav.classList.contains('active'));
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});