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

/* ── i18n ──────────────────────────────────── */
function getNestedValue(obj, path) {
    return path.split('.').reduce((cur, key) => (cur && cur[key] !== undefined ? cur[key] : null), obj);
}

function applyTranslations(lang) {
    const translations = window.TRANSLATIONS;
    if (!translations || !translations[lang]) return;

    const dict = translations[lang];
    const html = document.documentElement;

    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(dict, key);
        if (value !== null) {
            el.textContent = value;
        }
    });

    const currentLabel = document.querySelector('.lang-current');
    if (currentLabel) {
        currentLabel.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('.lang-menu li button').forEach((btn) => {
        btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('preferred-lang', lang); } catch (_) {}
}

// Lang switcher toggle
const langSwitcher = document.querySelector('.lang-switcher');
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.lang-menu');

if (langBtn && langSwitcher) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('is-open');
    });

    document.addEventListener('click', () => {
        langSwitcher.classList.remove('is-open');
    });

    if (langMenu) {
        langMenu.addEventListener('click', (e) => e.stopPropagation());
    }
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyTranslations(lang);
        if (langSwitcher) langSwitcher.classList.remove('is-open');
    });
});

// Apply saved or default language on load
(function () {
    let saved = null;
    try { saved = localStorage.getItem('preferred-lang'); } catch (_) {}
    const lang = saved && window.TRANSLATIONS && window.TRANSLATIONS[saved] ? saved : 'en';
    applyTranslations(lang);
})();

/* ── Theme Toggle ──────────────────────────── */
function applyTheme(mode) {
    document.documentElement.classList.toggle('light', mode === 'light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
    try { localStorage.setItem('preferred-theme', mode); } catch (_) {}
}

(function () {
    let saved = null;
    try { saved = localStorage.getItem('preferred-theme'); } catch (_) {}
    // Default to dark mode if no saved value
    if (!saved) {
        saved = 'dark';
    }
    applyTheme(saved);
})();

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light');
        applyTheme(isLight ? 'dark' : 'light');
    });
}
