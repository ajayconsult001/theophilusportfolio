/* ===== Dark / Light Toggle ===== */
const toggleBtn = document.getElementById('themeToggle');
const root      = document.documentElement;
const icon      = toggleBtn.querySelector('i');

/* Persist Theme */
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* Toggle */
toggleBtn.addEventListener('click', () => {
  const current  = root.getAttribute('data-theme');
  const newTheme = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  localStorage.setItem('theme', newTheme);
});
