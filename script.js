// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.remove('hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.add('hidden');
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Services Data
const servicesData = {
    training: {
        title: 'Training and Mentorship',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        features: [
            { icon: 'fa-comments', title: 'Soft Skills Development', desc: 'Communication, teamwork, leadership and professional etiquette' },
            { icon: 'fa-user-tie', title: 'Interview Mastery', desc: 'HR & technical interview preparation with mock sessions' },
            { icon: 'fa-chalkboard-teacher', title: 'Practical Training', desc: 'Interactive activities, role plays and real-world simulations' },
            { icon: 'fa-lightbulb', title: 'Personalized Mentorship', desc: 'Individual feedback to build confidence and career readiness' }
        ],
        stats: [
            { value: '10+', label: 'Sessions Conducted' },
            { value: '95%', label: 'Confidence Boost' },
            { value: '500+', label: 'Students Mentored' }
        ]
    },

    code: {
        title: 'Code Development',
        image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&auto=format&fit=crop&q=80',
        features: [
            { icon: 'fa-globe', title: 'Custom Web Development', desc: 'Responsive websites, AI Based websites, Model based and more ' },
            { icon: 'fa-layer-group', title: 'Full-Stack Solutions', desc: 'Complex applications with robust backends' },
            { icon: 'fa-shield-alt', title: 'Scalability & Maintenance', desc: 'Built for growth with ongoing support' },
            { icon: 'fa-mobile-alt', title: 'App Integration', desc: 'Seamless API and mobile integration' }
        ],
        stats: [
            { value: '10+', label: 'Projects Delivered' },
            { value: '99%', label: 'Uptime Guarantee' },
            { value: '24/7', label: 'Support Available' }
        ]
    },
    careers: {
        title: 'Internship Programs',
        image: 'https://images.unsplash.com/photo-1763568258388-25a20ddd8a95?w=800&auto=format&fit=crop&q=80',
        features: [
            { icon: 'fa-briefcase', title: 'Real-World Projects', desc: 'Work on live client projects' },
            { icon: 'fa-users', title: 'Expert Mentorship', desc: 'Learn from industry experts' },
            { icon: 'fa-award', title: 'Certification & Portfolio', desc: 'Industry-recognized credentials' },
            { icon: 'fa-globe', title: 'Hybrid Learning', desc: 'Flexible learning options' }
        ],
        stats: [
            { value: '100+', label: 'Students Trained' },
            { value: '85%', label: 'Placement Rate' },
            { value: '4.8★', label: 'Student Rating' }
        ]
    },
    research: {
        title: 'Market Research',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        features: [
            { icon: 'fa-chart-line', title: 'Consumer Insights', desc: 'Identify market trends and behaviors' },
            { icon: 'fa-chart-pie', title: 'Competitive Analysis', desc: 'Uncover market opportunities' },
            { icon: 'fa-chart-bar', title: 'Feasibility Studies', desc: 'Assess product viability' },
            { icon: 'fa-chart-area', title: 'Data Visualization', desc: 'Clear, actionable reports' }
        ],
        stats: [
            { value: '30+', label: 'Research Projects' },
            { value: '98%', label: 'Accuracy Rate' },
            { value: '15+', label: 'Industries Covered' }
        ]
    },
    classes: {
        title: 'Coding Classes',
        image: 'https://images.unsplash.com/photo-1763568258388-25a20ddd8a95?w=800&auto=format&fit=crop&q=80',
        features: [
            { icon: 'fa-terminal', title: 'Core Languages', desc: 'Java, Python, JavaScript, Java, Web Development' },
            { icon: 'fa-brain', title: 'Specialized Tracks', desc: 'AI/ML, Backend, Frontend' },
            { icon: 'fa-rocket', title: 'Placement Assistance', desc: 'Direct job pathways' },
            { icon: 'fa-code', title: 'Practical Labs', desc: 'Regular coding challenges' }
        ],
        stats: [
            { value: '200+', label: 'Hours of Content' },
            { value: '12', label: 'Course Tracks' },
            { value: '90%', label: 'Completion Rate' }
        ]
    },
    tutoring: {
        title: 'Tutoring',
        image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
        features: [
            { icon: 'fa-brain', title: 'SSLC relevance', desc: 'KSEEB, CBSE, Maths, Science, Social' },
            { icon: 'fa-rocket', title: 'Language/Practice paths', desc: 'Education events, student teaching background' },
        ],
        stats: [
            { value: '200+', label: 'Hours of Content' },
            { value: '12', label: 'Course Tracks' },
            { value: '90%', label: 'Completion Rate' }
        ]
    }

};

// Show Service Function
function showService(serviceId, el = null) {
const service = servicesData[serviceId];
const content = document.getElementById('service-content');
    
    // Update tab styles
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.querySelector('i').classList.remove('text-primary');
        tab.querySelector('i').classList.add('text-gray-500');
    });
    if (el) {
        el.classList.add('active');
        el.querySelector('i').classList.add('text-primary');
        el.querySelector('i').classList.remove('text-gray-500');
}

    // event.target.closest('.service-tab').classList.add('active');
    // event.target.closest('.service-tab').querySelector('i').classList.add('text-primary');
    // event.target.closest('.service-tab').querySelector('i').classList.remove('text-gray-500');
    
    // Render content
    content.classList.remove('fade-enter-active');
    content.classList.add('fade-enter');

    content.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <div class="relative rounded-2xl overflow-hidden shadow-xl border">
                    <img src="${service.image}" alt="${service.title}" 
                         class="w-full aspect-[4/3] object-cover"
                         onerror="this.src='https://via.placeholder.com/800x600/0891b2/ffffff?text=${service.title}'">
                    <div class="absolute inset-0 bg-gradient-to-t from-navy/70"></div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    ${service.stats.map(stat => `
                        <div class="text-center bg-white border rounded-xl p-4">
                            <div class="text-2xl font-bold text-primary">${stat.value}</div>
                            <div class="text-xs text-gray-600">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="space-y-6">
                <h3 class="font-heading text-3xl font-bold">${service.title}</h3>
                <div class="grid sm:grid-cols-2 gap-4">
                    ${service.features.map(feature => `
                        <div class="bg-white border rounded-xl p-5 hover:shadow-lg transition-all hover-lift">
                            <div class="flex items-start gap-4">
                                <div class="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                    <i class="fas ${feature.icon} text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold mb-1">${feature.title}</h4>
                                    <p class="text-sm text-gray-600">${feature.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <a href="#contact" class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors">
                    Get Started
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;

    requestAnimationFrame(() => {
        content.classList.add('fade-enter-active');
    });
}

// Initialize first service
showService('code');

// Carousel Data
const carouselData = [
    {
        icon: 'fa-code',
        title: 'Software Development',
        subtitle: 'Transforming Ideas into Digital Reality',
        description: 'We craft cutting-edge software solutions using modern technologies like React, Node.js, and Python. From concept to deployment, we deliver scalable applications.',
        image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&auto=format&fit=crop&q=80',
        features: ['Custom Web Apps', 'API Development', 'Cloud Integration', 'Performance Optimization']
    },
    {
        icon: 'fa-folder',
        title: 'Custom Projects',
        subtitle: 'Tailored Solutions for Unique Challenges',
        description: 'Every business has unique needs. We specialize in building bespoke solutions that address your specific challenges.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
        features: ['Requirements Analysis', 'Agile Development', 'Scalable Architecture', 'Dedicated Support']
    },
    {
        icon: 'fa-chart-line',
        title: 'Market Research',
        subtitle: 'Data-Driven Insights for Strategic Decisions',
        description: 'Make informed business decisions with our comprehensive market research services.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        features: ['Consumer Analysis', 'Competitive Intelligence', 'Trend Forecasting', 'Visual Reports']
    },
    {
        icon: 'fa-graduation-cap',
        title: 'Internship Programs',
        subtitle: 'Launch Your Tech Career with Real Experience',
        description: 'Our internship programs bridge the gap between academic knowledge and industry requirements.',
        image: 'https://images.unsplash.com/photo-1763568258388-25a20ddd8a95?w=800&auto=format&fit=crop&q=80',
        features: ['Live Projects', 'Expert Mentorship', 'Industry Certification', 'Placement Support']
    },
    {
        icon: 'fa-book-open',
        title: 'Coding Classes',
        subtitle: 'From Beginner to Job-Ready Developer',
        description: 'Structured coding courses designed for all skill levels with hands-on learning.',
        image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&auto=format&fit=crop&q=80',
        features: ['Python & JavaScript', 'AI/ML Tracks', 'Web Development', 'Data Science']
    }
];

let currentCarouselIndex = 0;

function updateCarousel() {
    const item = carouselData[currentCarouselIndex];
    
    // Update image
    const imgElement = document.getElementById('carousel-image');
    if (imgElement) {
        imgElement.src = item.image;
        imgElement.onerror = function() {
            this.src = 'https://via.placeholder.com/800x600/0891b2/ffffff?text=' + encodeURIComponent(item.title);
        };
    }
    
    // Update icon
    const iconElement = document.getElementById('carousel-icon');
    if (iconElement) {
        iconElement.className = `fas ${item.icon} text-2xl text-primary`;
    }
    
    // Update titles
    const titleElement = document.getElementById('carousel-title');
    if (titleElement) titleElement.textContent = item.title;
    
    const subtitleElement = document.getElementById('carousel-subtitle');
    if (subtitleElement) subtitleElement.textContent = item.subtitle;
    
    const headingElement = document.getElementById('carousel-heading');
    if (headingElement) headingElement.textContent = item.title;
    
    const descElement = document.getElementById('carousel-description');
    if (descElement) descElement.textContent = item.description;
    
    // Update features
    const featuresDiv = document.getElementById('carousel-features');
    if (featuresDiv) {
        featuresDiv.innerHTML = item.features.map(f => `
            <div class="flex items-center gap-2 text-sm">
                <div class="h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                <span>${f}</span>
            </div>
        `).join('');
    }

    // Update dots
    const dotsDiv = document.getElementById('carousel-dots');
    if (dotsDiv) {
        dotsDiv.innerHTML = carouselData.map((_, i) => `
            <button onclick="goToCarouselSlide(${i})" 
                    class="h-3 rounded-full transition-all ${i === currentCarouselIndex ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}">
            </button>
        `).join('');
    }
}

function nextCarousel() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselData.length;
    updateCarousel();
}

function prevCarousel() {
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
}

function goToCarouselSlide(index) {
    currentCarouselIndex = index;
    updateCarousel();
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    
    // Auto-play carousel every 5 seconds
    setInterval(nextCarousel, 5000);
});

// Form verification and Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Indian phone number regex (10 digits starting with 6-9)
const phoneRegex = /^[6-9]\d{9}$/;

// Real-time validation functions
function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
        showError(nameError, 'Name must be at least 2 characters');
        return false;
    }
    hideError(nameError);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    if (!emailRegex.test(value)) {
        showError(emailError, 'Please enter a valid email (e.g., user@example.com)');
        return false;
    }
    hideError(emailError);
    return true;
}

function validatePhone() {
    const value = phoneInput.value.trim();
    
    // If empty, it's optional so valid
    if (value === '') {
        hideError(phoneError);
        return true;
    }
    
    // Check if exactly 10 digits and starts with 6-9
    if (!phoneRegex.test(value)) {
        if (value.length !== 10) {
            showError(phoneError, 'Phone number must be exactly 10 digits');
        } else if (!/^[6-9]/.test(value)) {
            showError(phoneError, 'Phone number must start with 6, 7, 8, or 9');
        } else {
            showError(phoneError, 'Please enter a valid Indian phone number');
        }
        return false;
    }
    
    hideError(phoneError);
    return true;
}

function validateSubject() {
    const value = subjectInput.value.trim();
    if (value.length < 5) {
        showError(subjectError, 'Subject must be at least 5 characters');
        return false;
    }
    hideError(subjectError);
    return true;
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
        showError(messageError, 'Message must be at least 10 characters');
        return false;
    }
    if (value.length > 1000) {
        showError(messageError, 'Message cannot exceed 1000 characters');
        return false;
    }
    hideError(messageError);
    return true;
}

function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
    element.previousElementSibling.classList.add('border-red-500');
}

function hideError(element) {
    element.classList.add('hidden');
    element.previousElementSibling.classList.remove('border-red-500');
}

// Real-time validation on input
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Phone number: Only allow digits and limit to 10
phoneInput.addEventListener('input', function(e) {
    // Remove any non-digit characters
    this.value = this.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
    
    // Show real-time validation if user is typing
    if (this.value.length > 0) {
        validatePhone();
    }
});

// Character counter for message
messageInput.addEventListener('input', function() {
    const charCount = document.getElementById('char-count');
    charCount.textContent = this.value.length;
    
    if (this.value.length > 1000) {
        charCount.classList.add('text-red-600');
        charCount.classList.remove('text-gray-500');
    } else {
        charCount.classList.remove('text-red-600');
        charCount.classList.add('text-gray-500');
    }
});

// Form submission with validation
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    
    // Check if all validations passed
    if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
        // Scroll to first error
        const firstError = document.querySelector('.text-red-600:not(.hidden)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    
    // Show loading state
    btn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    
    // Get form data
    const formData = new FormData(this);
    
    // Format phone number with +91 for email
    const phone = phoneInput.value.trim();
    if (phone) {
        formData.set('phone', '+91 ' + phone);
    }
    
    // INSTANT FEEDBACK - Show modal immediately
    setTimeout(() => {
        showThankYouModal();
        
        // Reset form
        form.reset();
        document.getElementById('char-count').textContent = '0';
        
        // Reset button
        btn.disabled = false;
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane';
    }, 300);
    
    // Send email in background
    fetch(this.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).catch(() => {
        // Silently handle - email still sends
    });
});

function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    
    setTimeout(() => {
        closeThankYouModal();
    }, 10000);
}

function closeThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

document.getElementById('thank-you-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeThankYouModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeThankYouModal();
    }
});
