document.addEventListener("DOMContentLoaded", () => {
    const navbarItems = document.querySelectorAll('#home-nav, #timeline-nav, #skills-nav, #projects-nav, #contact-nav');
    const sections = document.querySelectorAll('.seccion');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navbarItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.id === `${id}-nav`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {rootMargin: "-50% 0px -50% 0px"});

    sections.forEach(section => {
        observer.observe(section);
    });
});