const toggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Book Flip Logic
const bookCover = document.getElementById('bookCover');
if (bookCover) {
    setInterval(() => {
        bookCover.classList.toggle('flipped');
    }, 10000);
}
