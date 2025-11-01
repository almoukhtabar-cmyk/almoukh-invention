// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.concept').scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.concept-card, .format-item, .why-card, .example-card');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// CTA Button interaction
document.querySelector('.cta-button')?.addEventListener('click', () => {
    alert('Merci de votre intérêt ! Pour plus d\'informations, contactez-nous à : contact@circuitsessions.com');
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add dynamic gradient animation to section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.transition = 'all 0.3s ease';
        title.style.transform = 'scale(1.05)';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'scale(1)';
    });
});

// Counter animation for format numbers
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = String(target).padStart(2, '0');
            clearInterval(timer);
        } else {
            element.textContent = String(Math.floor(current)).padStart(2, '0');
        }
    }, 20);
};

// Observe format numbers for counter animation
const formatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const number = parseInt(entry.target.textContent);
            entry.target.dataset.animated = 'true';
            animateCounter(entry.target, number);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.format-number').forEach(num => {
    formatObserver.observe(num);
});

// Add hover effect to example cards
document.querySelectorAll('.example-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.example-overlay').style.background = 'rgba(0, 0, 0, 0.5)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.example-overlay').style.background = 'rgba(0, 0, 0, 0.3)';
    });
});

// Mobile menu handling (if needed in future)
const isMobile = window.innerWidth <= 768;

if (isMobile) {
    // Adjust animations for mobile
    document.querySelectorAll('.concept-card, .why-card').forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
}

// Log page load
console.log('🏎️ Circuit Sessions - Présentation chargée avec succès!');
console.log('🎤 Concept: Artistes célèbres × Jeunes talents × Circuit automobile');
