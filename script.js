document.addEventListener('DOMContentLoaded', function() {
    // Efek sentuhan
    document.body.addEventListener('click', function(e) {
        // Buat elemen efek sentuhan
        const touchEffect = document.createElement('div');
        touchEffect.className = 'touch-effect';
        touchEffect.style.left = e.clientX - 25 + 'px';
        touchEffect.style.top = e.clientY - 25 + 'px';
        
        document.body.appendChild(touchEffect);
        
        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            touchEffect.remove();
        }, 500);
    });
    
    // Animasi elemen saat scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('section, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    });
    
    // Jalankan saat load dan scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Efek hover dinamis untuk tombol
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.background = `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue('--secondary')}, ${getComputedStyle(document.documentElement).getPropertyValue('--primary')})`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue('--primary')}, ${getComputedStyle(document.documentElement).getPropertyValue('--secondary')})`;
        });
    });
    
    // Animasi floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        // Set random animation duration and delay
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        element.style.animation = `float ${duration}s infinite ${delay}s linear`;
    });
});
