const menuBtn = document.getElementById('menuBtn');
const dropdown = document.getElementById('dropdown');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove('show');
  });
});

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 100);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = '0.6s ease';
  observer.observe(el);
});