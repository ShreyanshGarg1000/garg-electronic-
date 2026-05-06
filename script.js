// ==========================================================================
// Standard E-commerce Logic
// ==========================================================================

// Fake Cart Functionality
const cartBtns = document.querySelectorAll('.add-to-cart');
const cartCountEl = document.querySelector('.cart-count');
let cartCount = 0;

cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        cartCount++;
        cartCountEl.textContent = cartCount;
        
        // Button animation
        const originalText = btn.textContent;
        btn.textContent = 'Added!';
        btn.style.background = 'linear-gradient(135deg, #00ff88, #00b359)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 1500);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ==========================================================================
// Chatbot Logic
// ==========================================================================
const chatbotToggler = document.getElementById('chatbot-toggler');
const chatbotContainer = document.getElementById('chatbot-container');
const chatIcon = document.querySelector('.chat-icon');
const closeIcon = document.querySelector('.close-icon');

chatbotToggler.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
    
    // Toggle icons
    if (chatbotContainer.classList.contains('active')) {
        chatIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        chatIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
