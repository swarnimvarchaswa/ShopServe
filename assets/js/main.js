// Main JavaScript for ShopServe website

document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation transparency on scroll
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('shadow');
            nav.classList.remove('shadow-sm');
        } else {
            nav.classList.remove('shadow');
            nav.classList.add('shadow-sm');
        }
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would normally send the email to your server
            // For now, just show an alert
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }
});