// Minimal interactivity for the portfolio
document.addEventListener('DOMContentLoaded', () => {
    console.log('Jon Daniel Portfolio Initialized');
    
    // Smooth hover effects for cards
    const cards = document.querySelectorAll('.rounded-4xl');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
