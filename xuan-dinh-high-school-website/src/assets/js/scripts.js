// This file contains JavaScript code for the website, handling interactivity, event listeners, and any dynamic content.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to the navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example: Display a welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.innerText = 'Welcome to Xuân Đỉnh High School!';
    }
});