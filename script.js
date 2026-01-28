// ===========================
// Navigation Functionality
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===========================
// Intersection Observer for Animations
// ===========================

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

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll(
    '.section-header, .about-content, .skill-category, .achievement-card, .timeline-item, .contact-card'
);

elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// Skill Bar Animation
// ===========================

const skillBars = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.style.width;
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===========================
// Smooth Scroll Enhancement
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Typing Effect for Hero Title (Optional Enhancement)
// ===========================

function addCursorBlink() {
    const nameElement = document.querySelector('.name-line');
    if (nameElement) {
        // Add a subtle pulse effect to the name
        setInterval(() => {
            nameElement.style.opacity = nameElement.style.opacity === '0.9' ? '1' : '0.9';
        }, 2000);
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    addCursorBlink();
    
    // Trigger initial scroll check for active nav link
    scrollActive();
});

// ===========================
// Parallax Effect for Hero Background
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Dynamic Grid Animation
// ===========================

function createParticleEffect() {
    const dataParticles = document.querySelector('.data-particles');
    
    // Add floating data point elements
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'var(--accent-color)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${3 + Math.random() * 3}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        if (dataParticles) {
            dataParticles.appendChild(particle);
        }
    }
}

// Initialize particle effect
createParticleEffect();

// ===========================
// Copy to Clipboard Functionality (Optional)
// ===========================

document.querySelectorAll('.contact-value').forEach(element => {
    element.addEventListener('click', function(e) {
        // Only copy if it's email or phone
        const text = this.textContent;
        if (text.includes('@') || text.match(/\d{11}/)) {
            navigator.clipboard.writeText(text).then(() => {
                // Create a temporary tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Copied!';
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'var(--accent-color)';
                tooltip.style.color = 'var(--darker-bg)';
                tooltip.style.padding = '0.5rem 1rem';
                tooltip.style.borderRadius = '6px';
                tooltip.style.fontSize = '0.85rem';
                tooltip.style.fontWeight = '600';
                tooltip.style.zIndex = '1000';
                tooltip.style.animation = 'fadeInUp 0.3s ease';
                
                this.parentElement.style.position = 'relative';
                this.parentElement.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        }
    });
});

// ===========================
// Performance Optimization
// ===========================

// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScrollActive = debounce(scrollActive, 10);
window.addEventListener('scroll', debouncedScrollActive);

// ===========================
// Accessibility Enhancements
// ===========================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Focus management for mobile menu
hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        navLinks[0]?.focus();
    }
});

console.log('Portfolio initialized successfully! 🚀');
