document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const backgroundToggle = document.getElementById("background-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    // Toggle dark mode
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        sections.forEach(section => section.classList.toggle("dark-mode"));
        footer.classList.toggle("dark-mode");
    });

    // Change background color
    const backgrounds = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
    let currentBackgroundIndex = 0;

    backgroundToggle.addEventListener("click", function () {
        body.classList.remove(backgrounds[currentBackgroundIndex]);
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.classList.add(backgrounds[currentBackgroundIndex]);
    });

    // Typing animation
    const text = "Genís Baños López";
    const target = document.getElementById("typing-text");
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            target.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);

    // AOS animation init
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });
});
