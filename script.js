const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");
        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});