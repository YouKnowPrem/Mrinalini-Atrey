document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // 3. Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Handle Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        // Simple logic to activate current page tab
        if (itemHref === currentPath || (currentPath === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });

    // 4. Lazy Load FontAwesome to improve initial load & Speed Index
    let faLoaded = false;
    const loadFontAwesome = () => {
        if (faLoaded) return;
        faLoaded = true;

        // Add preconnect for cdnjs
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = 'https://cdnjs.cloudflare.com';
        document.head.appendChild(preconnect);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    };

    // Load after 4 seconds of idle time or on interaction
    const faTimer = setTimeout(loadFontAwesome, 4000);
    const triggerFaLoad = () => {
        clearTimeout(faTimer);
        loadFontAwesome();
        cleanupFaListeners();
    };
    const cleanupFaListeners = () => {
        window.removeEventListener('scroll', triggerFaLoad);
        window.removeEventListener('mousemove', triggerFaLoad);
        window.removeEventListener('touchstart', triggerFaLoad);
        window.removeEventListener('click', triggerFaLoad);
    };
    window.addEventListener('scroll', triggerFaLoad, { passive: true });
    window.addEventListener('mousemove', triggerFaLoad, { passive: true });
    window.addEventListener('touchstart', triggerFaLoad, { passive: true });
    window.addEventListener('click', triggerFaLoad, { passive: true });
});

