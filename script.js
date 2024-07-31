// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(79, 70, 229, 0.9)'; // Indigo with opacity
    } else {
        header.style.backgroundColor = '#4F46E5'; // Original indigo color
    }
});

// Animate skill items on scroll
const skillItems = document.querySelectorAll('.skill-item');
const animateSkills = () => {
    skillItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight - 50) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateSkills);

// Typewriter effect for visionary section
const visionaryText = document.querySelector('#visionary p');
const text = visionaryText.textContent;
visionaryText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        visionaryText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}

// Start typewriter effect when visionary section is in view
const visionarySection = document.querySelector('#visionary');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(visionarySection);

// Form submission handling (if you add a contact form later)
// const form = document.querySelector('#contact-form');
// if (form) {
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Add form submission logic here
//         console.log('Form submitted');
//     });
// }

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }
});