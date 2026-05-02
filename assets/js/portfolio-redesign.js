const revealNodes = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px'
    }
);

revealNodes.forEach((node) => revealObserver.observe(node));

const motionLayer = document.querySelector('[data-hero-motion]');
if (motionLayer) {
    window.addEventListener('mousemove', (event) => {
        const xRatio = (event.clientX / window.innerWidth - 0.5) * 10;
        const yRatio = (event.clientY / window.innerHeight - 0.5) * 10;
        motionLayer.style.transform = `translate3d(${xRatio}px, ${yRatio}px, 0)`;
    });
}

const yearNode = document.getElementById('year');
if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId.length < 2) {
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (!targetElement) {
            return;
        }

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
