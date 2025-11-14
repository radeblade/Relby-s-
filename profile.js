// 🔧 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBHB7EJ3YyQSxLJQtuxE04RQYp3n5pJ6yw",
  authDomain: "relby-s.firebaseapp.com",
  projectId: "relby-s",
  storageBucket: "relby-s.firebasestorage.app",
  messagingSenderId: "134518765287",
  appId: "1:134518765287:web:388cd65f7b91c1782f9442",
  measurementId: "G-G6LTZNPVV0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// ✅ DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // 🔘 Slide Menu Logic
  const hamburger = document.querySelector(".hamburger");
  const slideMenu = document.getElementById("slideMenu");
  const closeBtn = document.getElementById("closeBtn");
  const blurOverlay = document.getElementById("blurOverlay");

  hamburger?.addEventListener("click", () => {
    slideMenu?.classList.add("active");
    blurOverlay?.classList.add("active");
  });

  closeBtn?.addEventListener("click", () => {
    slideMenu?.classList.remove("active");
    blurOverlay?.classList.remove("active");
  });

  blurOverlay?.addEventListener("click", () => {
    slideMenu?.classList.remove("active");
    blurOverlay?.classList.remove("active");
  });

  // Profile Card Flip
  const profileCard = document.querySelector(".profile-card");
  profileCard?.addEventListener("click", () => {
    profileCard.classList.toggle("flipped");
  });

  // Firebase Auth State
  const cardBack = document.querySelector(".card-back");
  const cardFront = document.querySelector(".card-front");

  auth.onAuthStateChanged(function (user) {
    const loginButton = document.querySelector(".login-button");

    if (user) {
      loginButton.textContent = user.email;

      cardBack.innerHTML = `
      <p><strong>Email:</strong> ${user.email}</p>
      <button id="logoutBtn" class="logout-button">Logout</button>     
    `;

      document.getElementById("logoutBtn").addEventListener("click", function () {
        auth.signOut().then(() => {
          localStorage.removeItem("relbyCart");
          window.location.href = "/login.html";
        });
      });
    } else {
      cardFront.innerHTML = "<h3 class='user-details'>Please log in to view your profile.</h3>";
      cardBack.innerHTML = `
      <span class="material-icons lock-icon">lock</span>
    `;
    }
  });
});