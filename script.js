document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       HAMBURGER MENU
    ========================= */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    /* =========================
       COUNTER FUNCTION
    ========================= */
    function animateCounter(el) {
    const target = +el.getAttribute("data-target");
    let startTime = null;
    const duration = 1500; // animation time (ms)

    function easeOutQuad(t) {
        return t * (2 - t); // smooth easing
    }

    function update(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress);

        const value = Math.floor(easedProgress * target);
        el.innerText = value + "+";

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.innerText = target + "+";
        }
    }

    requestAnimationFrame(update);
}

    /* =========================
       SINGLE OBSERVER
    ========================= */
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            if (entry.target.hasAttribute("data-target")) {

                // delay before counting (premium feel)
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 200);
            }

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 }); // 👈 triggers when mostly visible

    /* =========================
       APPLY OBSERVER SAFELY
    ========================= */

    const elements = document.querySelectorAll(
        "section, .about-text, .about-image, .why-card, .journey-card, [data-target]"
    );

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});

const process = document.querySelector(".process-steps");

if (process) {
    const steps = document.querySelectorAll(".step");

    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                process.classList.add("show");

                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add("show");
                    }, index * 200);
                });

                processObserver.unobserve(process);
            }
        });
    }, { threshold: 0.3 });

    processObserver.observe(process);
}