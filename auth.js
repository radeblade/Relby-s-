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

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-button");
  const emailSpan = document.getElementById("customerEmail");

  auth.onAuthStateChanged(function (user) {
    if (user) {
      if (loginButton) {
        loginButton.textContent = user.email;
        loginButton.href = "/profile.html";
      }
      if (emailSpan) {
        emailSpan.textContent = user.email;
      }
    } else {
      if (emailSpan) {
        emailSpan.textContent = "Guest";
      }

      // 🧹 Clear cart if guest refreshes
      localStorage.removeItem("relbyCart");
    }
  });
});
