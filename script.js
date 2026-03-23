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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
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
        if(itemHref === currentPath || (currentPath === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });

    // 4. GSAP Background Doodle Animations
    if (typeof gsap !== 'undefined') {
        gsap.to('.doodle-1', {
            y: -50,
            x: 40,
            rotation: 15,
            scale: 1.05,
            duration: 15,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
        
        gsap.to('.doodle-2', {
            y: 50,
            x: -40,
            rotation: -10,
            scale: 0.95,
            duration: 18,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
        
        gsap.to('.doodle-3', {
            y: -30,
            x: 50,
            rotation: 20,
            scale: 1.1,
            duration: 12,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }
});
