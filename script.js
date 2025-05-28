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
    let currentBackgroundIndex = 0;

    backgroundToggle.addEventListener("click", function() {
        body.classList.remove(backgrounds[currentBackgroundIndex]);
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.classList.add(backgrounds[currentBackgroundIndex]);
    });

    // Efecto de escritura
    const text = "Genís Baños López";
    const target = document.getElementById("typing-text");
    let index = 0;
    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });
});

