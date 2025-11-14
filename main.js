const hamburger = document.querySelector('.hamburger');
const slideMenu = document.getElementById('slideMenu');
const closeBtn = document.getElementById('closeBtn');
const blurOverlay = document.getElementById('blurOverlay');

hamburger.addEventListener('click', () => {
  slideMenu.classList.add('active');
  blurOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  slideMenu.classList.remove('active');
  blurOverlay.classList.remove('active');
});

blurOverlay.addEventListener('click', () => {
  slideMenu.classList.remove('active');
  blurOverlay.classList.remove('active');
});

document.querySelectorAll('.arrow').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
