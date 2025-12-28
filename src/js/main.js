// Import CSS
import '../css/input.css';

// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
    console.log('Africape Safari website loaded');
    
    // Load navigation and footer components
    loadComponents();
    
    // Add smooth scroll for anchor links
    addSmoothScroll();
    
    // Initialize animations
    initAnimations();
});

// Function to load reusable components
async function loadComponents() {
    try {
        // Load navigation
        const navResponse = await fetch('/components/navigation.html');
        const navHTML = await navResponse.text();
        document.getElementById('navigation').innerHTML = navHTML;
        
        // Load footer
        const footerResponse = await fetch('/components/footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerHTML;
        
        // Initialize mobile menu toggle
        initMobileMenu();
        
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('animate-slide-down');
        });
    }
}

// Smooth scroll for anchor links
function addSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll animations
function initAnimations() {
    // Add intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Form handling (to be implemented later)
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription:', email);
    // In production, you would send this to your backend
    alert('Thank you for subscribing!');
    e.target.reset();
}

// Export functions for use in other modules
export { initMobileMenu, addSmoothScroll, handleNewsletterSubmit };