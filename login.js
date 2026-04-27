document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const emailInput = document.querySelector(".input-group input");
  const email = emailInput.value + "@gmail.com"; 

  // Save to browser storage
  localStorage.setItem("userEmail", email);

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});