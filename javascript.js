const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function toggleProcedimentos() {
    const area = document.getElementById("procedimentos");
    const texto = document.getElementById("txt-procedimentos");
    const icone = document.getElementById("icone-seta");

    if (area.style.display === "none") {
        area.style.display = "block";
        texto.innerText = "Fechar Procedimentos";
        icone.classList.replace('ri-arrow-down-s-line', 'ri-arrow-up-s-line');
        area.scrollIntoView({ behavior: 'smooth' });
    } else {
        area.style.display = "none";
        texto.innerText = "Ver Procedimentos";
        icone.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line');
    }
}
