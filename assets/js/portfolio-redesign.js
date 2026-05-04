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

/* ── Nav Group Dropdowns ───────────────────── */
const navGroups = document.querySelectorAll('.nav-group-dropdown');
const navCenterTitle = document.getElementById('nav-current-title');
const navMobileDropdown = document.getElementById('nav-mobile-dropdown');

if (navGroups.length) {
    const closeAllNavGroups = () => {
        navGroups.forEach((group) => {
            group.classList.remove('is-open');
            const btn = group.querySelector('.nav-group-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    };

    navGroups.forEach((group) => {
        const btn = group.querySelector('.nav-group-btn');
        if (!btn) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = group.classList.contains('is-open');
            closeAllNavGroups();
            if (!isOpen) {
                group.classList.add('is-open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    document.addEventListener('click', closeAllNavGroups);
}

/* ── Mobile Unified Nav Dropdown ───────────── */
if (navMobileDropdown) {
    const mobileBtn = navMobileDropdown.querySelector('.nav-mobile-btn');
    const mobileLinks = navMobileDropdown.querySelectorAll('.nav-mobile-menu a');

    const closeMobileNav = () => {
        navMobileDropdown.classList.remove('is-open');
        if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    };

    if (mobileBtn) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMobileDropdown.classList.contains('is-open');
            closeMobileNav();
            if (!isOpen) {
                navMobileDropdown.classList.add('is-open');
                mobileBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    mobileLinks.forEach((link) => {
        link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', closeMobileNav);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileNav();
    });
}

/* ── Nav Active Section + Center Title ─────── */
const navTrackedSections = document.querySelectorAll('section[id], header[id]');
const navSectionLinks = document.querySelectorAll('.nav-group-menu a, .nav-contact-link');

if (navTrackedSections.length && navSectionLinks.length) {
    const setNavActiveSection = (id) => {
        let activeText = null;

        navSectionLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('is-active', isActive);
            if (isActive) activeText = link.textContent.trim();
        });

        navGroups.forEach((group) => {
            const groupButton = group.querySelector('.nav-group-btn');
            const hasActiveChild = !!group.querySelector('.nav-group-menu a.is-active');
            if (groupButton) groupButton.classList.toggle('is-active', hasActiveChild);
        });

        if (navCenterTitle && activeText) {
            navCenterTitle.textContent = activeText;
        }
    };

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setNavActiveSection(entry.target.id);
                }
            });
        },
        {
            root: null,
            rootMargin: '-28% 0px -62% 0px',
            threshold: 0
        }
    );

    navTrackedSections.forEach((section) => navObserver.observe(section));
}

/* ── Growth Acceleration telemetry ─────────── */
const growthSection = document.querySelector('.growth-acceleration-section');

if (growthSection) {
    const growthCards = Array.from(growthSection.querySelectorAll('.growth-card'));
    const growthValues = Array.from(growthSection.querySelectorAll('.growth-value'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let growthActivated = false;

    const animateGrowthValue = (node, targetValue) => {
        if (!Number.isFinite(targetValue) || targetValue < 0) {
            return;
        }

        if (reducedMotion) {
            node.textContent = String(targetValue);
            return;
        }

        const duration = 1350;
        const startTime = performance.now();

        const step = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = String(Math.round(targetValue * eased));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const activateGrowthTelemetry = () => {
        if (growthActivated) {
            return;
        }

        growthActivated = true;
        growthCards.forEach((card) => card.classList.add('is-live'));
        growthValues.forEach((valueNode) => {
            const targetValue = Number(valueNode.getAttribute('data-count-to'));
            animateGrowthValue(valueNode, targetValue);
        });
    };

    const growthObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateGrowthTelemetry();
                    growthObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.3,
            rootMargin: '0px 0px -12% 0px'
        }
    );

    growthObserver.observe(growthSection);
}
