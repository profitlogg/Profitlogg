document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        document.querySelector(".header").classList.toggle("dark-theme");
    });

    // Login Dropdown Functionality
    const loginButton = document.querySelector(".login-btn");
    const loginDropdown = document.querySelector(".login-dropdown");

    loginButton.addEventListener("click", function() {
        loginDropdown.style.display = 
            loginDropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!loginButton.contains(event.target) && !loginDropdown.contains(event.target)) {
            loginDropdown.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    function fadeInFeatures() {
        features.forEach((feature) => {
            const featureTop = feature.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (featureTop < windowHeight * 0.85) {
                feature.classList.add("visible");
            }
        });
    }

    // Run on page load & scroll event
    fadeInFeatures();
    window.addEventListener("scroll", fadeInFeatures);
});
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-left, .fade-right");

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
