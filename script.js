document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const backgroundToggle = document.getElementById("background-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    // Theme Toggle
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        sections.forEach(section => section.classList.toggle("dark-mode"));
        footer.classList.toggle("dark-mode");
    });

    // Background Toggle
    const backgrounds = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
