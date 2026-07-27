// ===============================
// Portfolio JavaScript
// Janani J Portfolio
// ===============================

// Smooth fade-in animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Navbar shadow when scrolling
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
    }
});

// Highlight active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
