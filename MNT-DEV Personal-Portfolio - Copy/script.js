// Initialize EmailJS (Replace with your actual credentials)
emailjs.init("2uge-b6EhUCcONs1O"); // Get from EmailJS dashboard

// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "AI Agent Developer",
    "React Native App Developer",
    "Web Developer",
    "Python Developer",
    "Automation Expert"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const skillsData = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 75 },
    { name: "JavaScript", percentage: 65 },
    { name: "Python", percentage: 60 },
    { name: "React", percentage: 65 },
    { name: "React Native", percentage: 65 },
    { name: "FastAPI", percentage: 55 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "Prompt Engineering", percentage: 85 }
];

let skillsInitialized = false;

function initializeSkills() {
    if (skillsInitialized) return;
    
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = ''; // Clear first
    
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.percentage}"></div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
    
    skillsInitialized = true;
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = `${width}%`;
        }, 100);
    });
}

// Single initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    
    // Setup observer for animation only
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkillBars();
                observer.unobserve(skillsSection);
            }
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
});
// Portfolio Data

// Portfolio Data
const projectsData = [
    {
        id: 1,
        title: "AI Chat Assistant",
        description: "An intelligent chatbot with natural language processing capabilities.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["AI", "NLP", "Chatbot"],
        category: "ai"
    },
    {
        id: 2,
        title: "E-commerce Mobile App",
        description: "Full-featured shopping app with React Native and Firebase.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["React Native", "Mobile", "Firebase"],
        category: "mobile"
    },
    {
        id: 3,
        title: "Task Automation System",
        description: "Python scripts for automating repetitive business tasks.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["Python", "Automation", "Scripting"],
        category: "automation"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Modern responsive portfolio with glassmorphism design.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["HTML/CSS", "JavaScript", "UI/UX"],
        category: "web"
    },
    {
        id: 5,
        title: "AI Content Generator",
        description: "Web app that generates marketing content using GPT API.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["AI", "GPT", "Content"],
        category: "ai"
    },
    {
        id: 6,
        title: "Fitness Tracking App",
        description: "Mobile app for tracking workouts and nutrition with React Native.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["React Native", "Health", "Fitness"],
        category: "mobile"
    },
    {
        id: 7,
        title: "Data Scraping Tool",
        description: "Python automation for collecting and analyzing web data.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["Python", "Web Scraping", "Data"],
        category: "automation"
    },
    {
        id: 8,
        title: "Admin Dashboard",
        description: "Modern dashboard for managing business operations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["React", "Dashboard", "Admin"],
        category: "web"
    },
    {
        id: 9,
        title: "Weather AI App",
        description: "Mobile app with AI weather predictions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["AI", "Mobile", "Weather"],
        category: "mobile"
    },
    {
        id: 10,
        title: "Email Automation",
        description: "Python system for automated email campaigns.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["Python", "Automation", "Email"],
        category: "automation"
    }
];


// Initialize Portfolio
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        portfolioGrid.appendChild(projectCard);
    });
    
    // Initialize filter functionality
    initializeFilter();
}

// Filter Portfolio Items
function initializeFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animate Skill Bars
function animateSkillBars() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = `${width}%`;
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillProgressBars.forEach(bar => observer.observe(bar));
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        father_name: document.getElementById('fatherName').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send('service_itnkcym', 'template_g22mg0q', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'form-message success';
            
            // Reset form
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.className = 'form-message error';
        })
        .finally(function() {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Update active nav link based on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSkills();
    initializePortfolio();
});
// Slider Variables
let currentSlide = 0;
let slideInterval;
const slideDuration = 4000; // 4 seconds

// Initialize Slider
function initializeSlider() {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderDots = document.getElementById('sliderDots');
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create slides
    projectsData.forEach((project, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="slide-img">
            <div class="slide-content">
                <h3 class="slide-title">${project.title}</h3>
                <p class="slide-description">${project.description}</p>
                <div class="slide-tags">
                    ${project.tags.map(tag => `<span class="slide-tag">${tag}</span>`).join('')}
                </div>
                <span class="slide-category">${project.category.toUpperCase()}</span>
            </div>
        `;
        sliderTrack.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    // Initialize slider controls
    initializeSliderControls();
    
    // Start auto-play
    startAutoPlay();
}

// Initialize Slider Controls
function initializeSliderControls() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const autoplayToggle = document.getElementById('autoplayToggle');
    
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoPlay();
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoPlay();
    });
    
    autoplayToggle.addEventListener('change', function() {
        if (this.checked) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    });
    
    // Filter buttons for slider
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterSliderProjects(filterValue);
        });
    });
}

// Go to specific slide
// Go to specific slide - RESPONSIVE VERSION
function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderTrack = document.getElementById('sliderTrack');
    
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    currentSlide = slideIndex;
    
    // Get slide width dynamically based on screen size
    const slide = slides[0];
    const slideStyle = window.getComputedStyle(slide);
    const slideWidth = slide.offsetWidth;
    const slideMarginRight = parseInt(slideStyle.marginRight) || 0;
    const totalSlideWidth = slideWidth + slideMarginRight;
    
    // Update slide position
    sliderTrack.style.transform = `translateX(-${currentSlide * totalSlideWidth}px)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Center active slide on mobile if possible
    if (window.innerWidth <= 768) {
        const containerWidth = document.querySelector('.slider-wrapper').offsetWidth;
        const trackWidth = sliderTrack.scrollWidth;
        const maxTranslate = Math.max(0, trackWidth - containerWidth);
        const translateX = Math.min(currentSlide * totalSlideWidth, maxTranslate);
        sliderTrack.style.transform = `translateX(-${translateX}px)`;
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        goToSlide(currentSlide); // Recalculate on resize
    }, 250);
});

// Filter slider projects
function filterSliderProjects(filter) {
    const slides = document.querySelectorAll('.slide');
    
    if (filter === 'all') {
        slides.forEach(slide => {
            slide.style.display = 'block';
        });
        goToSlide(0);
        return;
    }
    
    // Find first matching slide
    let firstMatchIndex = -1;
    slides.forEach((slide, index) => {
        const category = projectsData[index].category;
        if (category === filter) {
            slide.style.display = 'block';
            if (firstMatchIndex === -1) firstMatchIndex = index;
        } else {
            slide.style.display = 'none';
        }
    });
    
    if (firstMatchIndex !== -1) {
        goToSlide(firstMatchIndex);
    }
}

// Auto-play functions
function startAutoPlay() {
    stopAutoPlay(); // Clear any existing interval
    slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, slideDuration);
}

function stopAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

function resetAutoPlay() {
    if (document.getElementById('autoplayToggle').checked) {
        startAutoPlay();
    }
}

// Update DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initializeSkills();
    initializeSlider(); // REPLACE initializePortfolio() with this
    // Remove or comment out: initializePortfolio();
});


//====== CODE PROTECTION ======//
// Prevent right-click, text selection, and copy-paste
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showToast('🚫 Right-click is disabled on this portfolio');
});

// Prevent keyboard shortcuts for copy/cut/paste/view source
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showToast('🔒 View source is disabled');
        return false;
    }
    
    // Disable Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showToast('🛡️ Developer tools are restricted');
        return false;
    }
    
    // Disable F12 (DevTools)
    if (e.key === 'F12') {
        e.preventDefault();
        showToast('🔐 Developer tools access blocked');
        return false;
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showToast('💾 Page saving is disabled');
        return false;
    }
    
    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showToast('🖨️ Printing is disabled');
        return false;
    }
});

// Prevent text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Prevent drag and drop of images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('📸 Image dragging is disabled');
    }
});

// ====== CODE PROTECTION ======
(function() {
    'use strict';
    
    // Toast notification function
    function showToast(message) {
        // Remove existing toast
        const existingToast = document.querySelector('.protection-toast');
        if (existingToast) existingToast.remove();
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'protection-toast';
        toast.innerHTML = '<span>' + message + '</span><i class="fas fa-shield-alt"></i>';
        
        // Add styles
        toast.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #ff4d4d, #ff6b6b); color: white; padding: 12px 20px; border-radius: 10px; font-family: "Poppins", sans-serif; font-size: 14px; font-weight: 500; display: flex; align-items: center; gap: 10px; z-index: 99999; box-shadow: 0 5px 15px rgba(255, 77, 77, 0.3); animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);';
        
        document.body.appendChild(toast);
        
        // Auto remove
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOutRight 0.3s ease forwards';
                setTimeout(() => toast.remove(), 300);
            }
        }, 3000);
    }
    
    // Add CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        * {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        input, textarea {
            user-select: text !important;
            -webkit-user-select: text !important;
        }
    `;
    document.head.appendChild(style);
    
    // Event Listeners
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showToast('🚫 Right-click disabled');
    });
    
    document.addEventListener('keydown', function(e) {
        // Ctrl+U
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            showToast('🔒 View source disabled');
            return false;
        }
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            showToast('🛡️ DevTools restricted');
            return false;
        }
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            showToast('🔐 DevTools blocked');
            return false;
        }
        // Ctrl+S
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            showToast('💾 Save disabled');
            return false;
        }
        // Ctrl+P
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            showToast('🖨️ Print disabled');
            return false;
        }
    });
    
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            showToast('📸 Image drag disabled');
        }
    });
    
    // Prevent iframe embedding
    if (window.self !== window.top) {
        window.top.location = window.self.location;
        showToast('🚫 Embedding not allowed');
    }
    
    // Console warning
    console.log('%c🚨 Stop!', 'color: red; font-size: 40px; font-weight: bold;');
    console.log('%cThis is a browser feature for developers.', 'color: #ff6b6b; font-size: 16px;');
    console.log('%cIf told to copy-paste here, it\'s a scam!', 'color: #ff4d4d; font-size: 18px; font-weight: bold;');
    
    // Initial message
    window.addEventListener('load', function() {
        setTimeout(() => {
            showToast('🛡️ Protection enabled');
        }, 1000);
    });
})();
// ====== END PROTECTION ======