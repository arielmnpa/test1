// Script untuk scroll otomatis di row film
const rows = document.querySelectorAll('.row');

rows.forEach(row => {
    row.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            row.scrollBy(300, 0);
        } else {
            row.scrollBy(-300, 0);
        }
    });
});

// Contoh script interaksi lain bisa ditambahkan di sini

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If user scrolls down, hide navbar; if they scroll up, show navbar
    if (scrollTop > lastScrollTop) {
        navbar.classList.remove('visible');
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// ... script JavaScript lainnya ...

