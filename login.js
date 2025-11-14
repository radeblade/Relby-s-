// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHB7EJ3YyQSxLJQtuxE04RQYp3n5pJ6yw",
  authDomain: "relby-s.firebaseapp.com",
  projectId: "relby-s",
  storageBucket: "relby-s.firebasestorage.app",
  messagingSenderId: "134518765287",
  appId: "1:134518765287:web:388cd65f7b91c1782f9442",
  measurementId: "G-G6LTZNPVV0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function () {
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

  // Password toggle
  const toggleBtn = document.getElementById("togglePassword");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const isHidden = passwordInput.getAttribute("type") === "password";

      passwordInput.setAttribute("type", isHidden ? "text" : "password");
      this.textContent = isHidden ? "Hide" : "Show";

      passwordInput.focus();
    });
  }

  // Login form
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');

      // Clear previous errors
      emailError.textContent = '';
      passwordError.textContent = '';

      // Firebase login
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`✅ Welcome back, ${user.email}!`);
          window.location.href = '/index.html';
        })
        .catch((error) => {
          const passwordError = document.getElementById('passwordError');
          passwordError.textContent = 'Email or password is invalid.';
        });
    });
  }
});