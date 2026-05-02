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
