document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger to X
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            mobileMenu.querySelector('span:nth-child(2)').style.opacity = '0';
            mobileMenu.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            mobileMenu.querySelector('span:nth-child(1)').style.transform = 'none';
            mobileMenu.querySelector('span:nth-child(2)').style.opacity = '1';
            mobileMenu.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // Reset hamburger icon
                mobileMenu.classList.remove('active');
                mobileMenu.querySelector('span:nth-child(1)').style.transform = 'none';
                mobileMenu.querySelector('span:nth-child(2)').style.opacity = '1';
                mobileMenu.querySelector('span:nth-child(3)').style.transform = 'none';
            }
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Add a small delay for mobile menu animation
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }, 100);
        });
    });

    // Smooth scrolling for footer links too
    document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // CTA button smooth scroll
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                contact: formData.get('contact'),
                country: formData.get('country'),
                message: formData.get('message')
            };
            console.log('Form Submitted:', data);
            alert('Thank you for your query! We will get back to you soon.');
            this.reset();
        });
    }

    // Scroll animation for fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('nav') && 
            !e.target.closest('#mobile-menu')) {
            navMenu.classList.remove('active');
            // Reset hamburger icon
            mobileMenu.classList.remove('active');
            mobileMenu.querySelector('span:nth-child(1)').style.transform = 'none';
            mobileMenu.querySelector('span:nth-child(2)').style.opacity = '1';
            mobileMenu.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
});




