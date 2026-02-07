// Testimonials data - Edit this array to add your own testimonials
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "Tech Solutions Inc.",
        text: "Your LinkedIn content has been incredibly insightful! The way you break down complex topics makes them easy to understand. Keep up the amazing work!",
        initial: "SJ"
    },
    {
        name: "Michael Chen",
        role: "Entrepreneur",
        company: "Startup Founder",
        text: "Following your journey has been inspiring. Your authenticity and willingness to share both wins and challenges is refreshing. Thank you for being so genuine!",
        initial: "MC"
    },
    {
        name: "Emily Rodriguez",
        role: "HR Manager",
        company: "Global Corp",
        text: "Your posts about professional development have helped me grow in my career. The practical advice you share is gold. Grateful to be part of your network!",
        initial: "ER"
    },
    {
        name: "David Thompson",
        role: "Product Manager",
        company: "Innovation Labs",
        text: "I look forward to your posts every week! Your insights on leadership and teamwork have transformed how I approach my role. Truly valuable content.",
        initial: "DT"
    },
    {
        name: "Lisa Wang",
        role: "Sales Executive",
        company: "Enterprise Solutions",
        text: "Your LinkedIn journey has motivated me to start sharing my own story. Thank you for showing that being vulnerable and authentic creates real connections!",
        initial: "LW"
    },
    {
        name: "James Miller",
        role: "Software Engineer",
        company: "Dev Studios",
        text: "The way you engage with your community is remarkable. You don't just post content, you build relationships. That's what LinkedIn should be about!",
        initial: "JM"
    },
    {
        name: "Amanda Foster",
        role: "Business Coach",
        company: "Growth Mindset Co.",
        text: "Your content consistently delivers value. I've implemented several of your strategies in my own business with great results. Keep inspiring us!",
        initial: "AF"
    },
    {
        name: "Robert Kim",
        role: "Financial Analyst",
        company: "Investment Group",
        text: "Your perspective on work-life balance and career growth resonates deeply. Thank you for sharing your experiences so openly and helping others learn!",
        initial: "RK"
    },
    {
        name: "Jennifer Martinez",
        role: "Content Creator",
        company: "Digital Media",
        text: "Watching your growth on LinkedIn has been amazing! Your storytelling skills and ability to connect with people is truly special. Honored to be on this journey with you.",
        initial: "JM"
    }
];

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    card.innerHTML = `
        <div class="testimonial-header">
            <div class="testimonial-avatar">${testimonial.initial}</div>
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role} at ${testimonial.company}</p>
            </div>
        </div>
        <div class="testimonial-text">
            "${testimonial.text}"
        </div>
    `;
    
    return card;
}

// Load testimonials on page load
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('testimonialsGrid');
    
    // Add each testimonial to the grid
    testimonials.forEach((testimonial, index) => {
        const card = createTestimonialCard(testimonial);
        // Add slight delay for staggered animation effect
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});

// Optional: Add a simple form submission handler if you add a contact form later
function handleFormSubmit(event) {
    event.preventDefault();
    // Add your form handling logic here
    alert('Thank you for reaching out! I\'ll get back to you soon.');
}
