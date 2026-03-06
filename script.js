document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== "#") {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 90;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translateY(3px)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'translateY(0)';
    });
});
