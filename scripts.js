document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    // Check for saved theme preference
    if (localStorage.getItem("dark-theme") === "enabled") {
        document.body.classList.add("dark-theme");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("dark-theme", "enabled");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("dark-theme", "disabled");
        }
    });
});
// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    document.querySelector(".carousel-container").style.transform = 
        `translateX(${-currentSlide * 100}%)`;
}

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
// Feature Fade-in Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    function revealFeatures() {
        features.forEach((feature) => {
            const featureTop = feature.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (featureTop < windowHeight - 100) {
                feature.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealFeatures);
    revealFeatures(); // Run on page load in case features are already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("pricing-toggle");
    const basicPrice = document.getElementById("basic-price");
    const premiumPrice = document.getElementById("premium-price");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            basicPrice.textContent = "₹4999";
            premiumPrice.textContent = "₹9999";
        } else {
            basicPrice.textContent = "₹499";
            premiumPrice.textContent = "₹999";
        }
    });
});
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbwikG2C1xebul4v9eoh7SYcXxdyO9dMm3OFVGlqoCt-MqSZIwVSAAzQ00MpetyiRWAc/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("📩 Response from server:", data);
        alert(data);  // Show success or error message
    })
    .catch(error => {
        console.error("❌ Error:", error);
        alert("Error: Could not connect to server.");
    });
});

