
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Header
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Animated Stats Counter
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);
            
            if (count < target) {
                counter.innerText = Math.min(count + increment, target);
                setTimeout(animateCounters, 1);
            }
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-container')) {
                    animateCounters();
                }
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.stats-container, .service-card, .portfolio-item, .testimonial, .blog-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Testimonial Slider (simplified version)
    const testimonialControls = document.querySelectorAll('.testimonial-control');
    
    testimonialControls.forEach(control => {
        control.addEventListener('click', () => {
            // In a real implementation, this would cycle through testimonials
            alert('Testimonial slider functionality would go here. For a full implementation, we would use a library like Swiper.js or build a custom carousel.');
        });
    });

    // Form validation for newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            const consent = newsletterForm.querySelector('input[type="checkbox"]').checked;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            if (!consent) {
                alert('Please agree to receive updates.');
                return;
            }
            
            // In a real implementation, this would send the data to a server
            alert('Thank you for subscribing! In a real implementation, this would connect to a service like Mailchimp.');
            newsletterForm.reset();
        });
    }

    // Initialize when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Add any initialization code here
    });
    