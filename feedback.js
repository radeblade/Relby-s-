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

// SUBMISSION HANDLER //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you for your feedback!");
      form.reset();
    }
  });
});
