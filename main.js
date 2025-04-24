// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
    } else {
    navbar.classList.remove('navbar-scrolled');
    }
});

// Toggle sidebar mobile
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('mobile-sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const overlay = document.getElementById('sidebar-overlay');

// Function to open sidebar
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.add('opacity-50');
    overlay.classList.remove('pointer-events-none');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close sidebar
function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-50');
    overlay.classList.add('pointer-events-none');
    document.body.style.overflow = ''; // Enable scrolling
}

// Event listeners
sidebarToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking links
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});