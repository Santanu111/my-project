// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link'); // Get all nav links
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // Get current page
  
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Optional: Toggle ARIA attribute for accessibility
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !isExpanded);
      });
    }
  
    // Highlight active navigation link
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active'); // Ensure others are not active
      }
    });
  });