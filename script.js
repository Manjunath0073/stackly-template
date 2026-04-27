const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light-mode");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light-mode");

if (document.body.classList.contains("light-mode")) {
toggleBtn.textContent = "☀️";
localStorage.setItem("theme", "light");
} else {
toggleBtn.textContent = "🌙";
localStorage.setItem("theme", "dark");
}
});

const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
