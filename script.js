document.addEventListener("DOMContentLoaded", () => {

    // THEME TOGGLE
    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {
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
    }

    console.log("JS Loaded");

    // HAMBURGER MENU
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (!hamburger) {
        console.error("Hamburger NOT found");
        return;
    }

    hamburger.addEventListener("click", () => {
        console.log("clicked");
        navMenu.classList.toggle("active");
    });

});