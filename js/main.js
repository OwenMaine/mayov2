document.addEventListener('DOMContentLoaded', function() {
    
    // --- GSAP & ScrollTrigger Registration ---
    gsap.registerPlugin(ScrollTrigger);

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Toggle icon
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // --- Hero Section Animation ---
    gsap.to('.hero-headline', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });
    gsap.to('.hero-subtext', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });
    gsap.to('.hero-cta-group', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
    });

    // --- Section Animations on Scroll ---
    const sections = gsap.utils.toArray('.page-section');
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('.section-title, .grid-4-col, .split-grid, .grid-3-col, .timeline'), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // --- Footer Year ---
    document.getElementById('year').textContent = new Date().getFullYear();

});