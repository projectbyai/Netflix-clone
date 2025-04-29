// Authentication Modal
function openAuthModal() {
    document.getElementById('authModal').classList.remove('modal-slide-out');
    document.getElementById('authModal').classList.add('modal-slide-in');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('modal-slide-in');
    document.getElementById('authModal').classList.add('modal-slide-out');
    document.body.style.overflow = 'auto';
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Category tabs
const tabs = document.querySelectorAll('.category-tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simulate login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginBtn').classList.add('hidden');
    document.getElementById('userMenuBtn').classList.remove('hidden');
    closeAuthModal();
});

// In a real app, you would fetch from an API like this:
/*
async function fetchMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
        const data = await response.json();
        // Process and display movies
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
fetchMovies();
*/