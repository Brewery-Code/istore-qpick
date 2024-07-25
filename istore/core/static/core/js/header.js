// let isMobile = {
//     Android: function () { return navigator.userAgent.match(/Android/i); },
//     BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
//     iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
//     Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
//     Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
//     any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
// };

const menuList = document.querySelector('.menu__list');

document.addEventListener("click", menuOpen);

function menuOpen(event) {
    if (event.target.closest('.menu__button')) {
        menuList.classList.toggle('menu__list_active');
    }
}

function menuClose(event) {
    if (!event.target.closest('.menu')) {
        menuList.classList.remove('menu__list_active');
    }
}

function menuCloseEsc(event) {
    if (event.code === 'Escape') {
        menuList.classList.remove('menu__list_active');
    }
}

document.addEventListener('click', menuOpen);
document.addEventListener('click', menuClose);
document.addEventListener('keyup', menuCloseEsc);
