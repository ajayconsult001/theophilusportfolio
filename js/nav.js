/* ===== Sticky Nav Shrink + Burger ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* Burger */
const burger  = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if(burger){
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
  });
}
