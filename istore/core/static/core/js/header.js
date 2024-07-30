// Open dropdown menu on desktop version of website and help with animation of arrows.

const menuList = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button')

document.addEventListener("click", menuOpen);

function menuOpen(event) {
    if (event.target.closest('.menu__button')) {
        menuList.classList.toggle('menu__list_active');
        menuButton.classList.toggle('menu__button_active');
    }
}

function menuClose(event) {
    if (!event.target.closest('.menu')) {
        menuList.classList.remove('menu__list_active');
        menuButton.classList.remove('menu__button_active');
    }
}

function menuCloseEsc(event) {
    if (event.code === 'Escape') {
        menuList.classList.remove('menu__list_active');
        menuButton.classList.remove('menu__button_active');
    }
}

document.addEventListener('click', menuOpen);
document.addEventListener('click', menuClose);
document.addEventListener('keyup', menuCloseEsc);

function arrowRotate(event) {
    const summary = event.target.closest('.header__summary');
    if (summary) {
        const menuSubtitle = summary.querySelector('.menu__list-subtitle');
        if (menuSubtitle) {
            menuSubtitle.classList.toggle('menu__list-subtitle_active');
        }
    }
}

document.addEventListener('click', arrowRotate);

// Open burger menu on mobile version of website.

const wrapper = document.querySelector('.wrapper');

function burgerMenuOpen(event) {
    const burger = event.target.closest('.right-content__burger-btn');
    if (burger) {
        const burgerOpen = document.querySelector('.menu__list');
        const burgerMenu = document.querySelector('.menu');
        if (burgerOpen) {
            burgerOpen.classList.toggle('menu__list-subtitle_active');
            burgerMenu.classList.toggle('menu_active')
            wrapper.classList.toggle('wrapper_burger')
        }
    }
}

function burgerMenuClose(event) {
    if (!event.target.closest('.menu__list') && !event.target.closest('.right-content__burger-btn')) {
        const burgerMenu = document.querySelector('.menu')
        burgerMenu.classList.remove('menu_active')
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.remove('wrapper_burger')
    }
}

document.addEventListener('click', burgerMenuOpen);
document.addEventListener('click', burgerMenuClose);

// Animation of details and summary tags

class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.content = el.querySelector('.menu__details-content');

        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';
        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}


document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
});



