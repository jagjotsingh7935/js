let lastScrollTop = 0;
const header = document.getElementById('header');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('navbar-hidden');
        footer.classList.add('footer-hidden');
    } else {
        // Scrolling up
        header.classList.remove('navbar-hidden');
        footer.classList.remove('footer-hidden');
    }
    lastScrollTop = scrollTop;
});
