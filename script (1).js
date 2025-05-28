document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const backgroundToggle = document.getElementById("background-toggle");
    const body = document.body;
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    // Tema oscuro
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");
        sections.forEach(section => section.classList.toggle("dark-mode"));
        footer.classList.toggle("dark-mode");
    });

    // Cambio de fondo
    const backgrounds = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
    let currentBackgroundIndex = 0;

    backgroundToggle.addEventListener("click", function () {
        body.classList.remove(backgrounds[currentBackgroundIndex]);
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.classList.add(backgrounds[currentBackgroundIndex]);
    });

    // Texto de escritura animada corregido
    const name = "Genís Baños López";
    const typingTarget = document.getElementById("typing-text");
    let i = 0;
    const interval = setInterval(() => {
        typingTarget.textContent += name[i];
        i++;
        if (i === name.length) clearInterval(interval);
    }, 100);

    // Inicializar animaciones
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });
});


