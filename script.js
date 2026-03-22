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
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        // Simple logic to activate current page tab
        if(itemHref === currentPath || (currentPath === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });
            
            // Sort by citations descending
            papers.sort((a, b) => (b.citations || 0) - (a.citations || 0));
            
            // Handle Home Page
            if (homeContainer) {
                homeContainer.innerHTML = ''; // clear loading
                const topPapers = papers.slice(0, 3);
                topPapers.forEach((paper, index) => {
                    const delay = index * 0.1;
                    const card = `
                        <div class="glass-card reveal active" style="transition-delay: ${delay}s;">
                            <span class="glass-pill" style="margin-bottom: 1rem; font-size: 0.75rem;">${paper.year || 'N/A'} | ${paper.venue || 'Publication'}</span>
                            <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">${paper.title}</h3>
                            <p style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--accent-pink); font-weight: 500;">Citations: ${paper.citations}</p>
                            <p style="font-size: 0.85rem; margin-bottom: 1.5rem; opacity: 0.8;">${paper.authors}</p>
                            <a href="${paper.link}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-lavender); font-weight: 500; position: relative; z-index: 2;">
                                Read Paper <i class="fa-solid fa-arrow-right" style="margin-left: 5px;"></i>
                            </a>
                        </div>
                    `;
                    homeContainer.innerHTML += card;
                });
            }
            
            // Handle Academics Page
            if (academicsContainer) {
                academicsContainer.innerHTML = ''; // clear loading
                papers.forEach(paper => {
                    const row = `
                        <tr>
                            <td data-label="Year" style="font-weight: 500; color: var(--text-light);">${paper.year || 'N/A'}</td>
                            <td data-label="Title & Publication">
                                <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-dark);">${paper.title}</strong>
                                <span style="font-size: 0.9rem; color: var(--text-light);">${paper.venue || 'Research Paper'}</span>
                                <div style="font-size: 0.8rem; margin-top: 5px; color: var(--text-light);"><i>${paper.authors}</i></div>
                            </td>
                            <td data-label="Type">
                                <span class="glass-pill" style="font-size: 0.75rem; background: rgba(233, 213, 255, 0.5);">
                                    ${paper.citations > 0 ? paper.citations + ' Citations' : 'Paper'}
                                </span>
                            </td>
                            <td data-label="Action">
                                <a href="${paper.link}" target="_blank" rel="noopener noreferrer" class="btn btn-glass" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
                                    View / Cite <i class="fa-solid fa-external-link-alt" style="margin-left: 5px; font-size: 0.8rem;"></i>
                                </a>
                            </td>
                        </tr>
                    `;
                    academicsContainer.innerHTML += row;
                });
            }
        } catch (error) {
            console.error('Failed to fetch papers:', error);
            const errorMsg = '<div style="grid-column: 1 / -1; text-align: center; color: var(--accent-pink);">Failed to load recent research papers. Please try again later.</div>';
            if (homeContainer) homeContainer.innerHTML = errorMsg;
            if (academicsContainer) academicsContainer.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--accent-pink);">Failed to load archive.</td></tr>`;
        }
    };
    
    fetchResearchPapers();
});
