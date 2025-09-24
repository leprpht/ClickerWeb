const downloadSection = document.querySelector('.download-section');
const nav = document.querySelector('nav');

let lastScrollTop = window.scrollY;
let navTop = 0;

function getNavHeight() {
    return nav.offsetHeight;
}

window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollTop;

    navTop += delta;

    const maxHide = getNavHeight();
    navTop = Math.max(Math.min(navTop, maxHide), 0);

    nav.style.top = -navTop + 'px';

    lastScrollTop = currentScrollY;
});

function goToDownload() {
    window.scrollTo({
        top: downloadSection.offsetTop - getNavHeight(),
        behavior: 'smooth'
    });
}

function toHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toDesc() {
    window.scrollTo({
        top: document.querySelector('#how-it-works').offsetTop - getNavHeight(),
        behavior: 'smooth'
    });
}

function toBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
