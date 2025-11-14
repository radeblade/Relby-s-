document.addEventListener("DOMContentLoaded", function () {
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

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const slideMenu = document.getElementById("slideMenu");
  const closeBtn = document.getElementById("closeBtn");
  const blurOverlay = document.getElementById("blurOverlay");

  if (hamburger && slideMenu && closeBtn && blurOverlay) {
    hamburger.addEventListener("click", () => {
      slideMenu.classList.add("active");
      blurOverlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      slideMenu.classList.remove("active");
      blurOverlay.classList.remove("active");
    });

    blurOverlay.addEventListener("click", () => {
      slideMenu.classList.remove("active");
      blurOverlay.classList.remove("active");
    });
  }

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

  // Sign-up form
  const form = document.getElementById("signupForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();

      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const confirmPasswordError = document.getElementById("confirmPasswordError");

      let valid = true;

      if (!email || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      } else {
        emailError.textContent = "";
      }

      if (!password || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
      } else {
        passwordError.textContent = "";
      }

      if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
      } else {
        confirmPasswordError.textContent = "";
      }

      if (valid) {
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            user.updateProfile({ displayName: email })
              .catch((err) => console.error("Profile update failed:", err.message));

            alert("Account created successfully!");
            window.location.href = "/login.html";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode.includes("email")) {
              emailError.textContent = errorMessage;
            } else if (errorCode.includes("password")) {
              passwordError.textContent = errorMessage;
            } else {
              alert(errorMessage);
            }
          });
      }
    });
  }
});