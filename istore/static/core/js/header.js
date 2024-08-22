// Open dropdown menu on desktop version of website and help with animation of arrows.

const menuList = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button');

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
        this.content = el.querySelector('.details-content');

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




function setLikeCount() {
    const likeCount = document.querySelector('.right-content__img');
    const likes = JSON.parse(localStorage.getItem('likesID')) || [];
    const numberOfLikes = likes.length;
    if (numberOfLikes != 0) {
        likeCount.querySelector('h6').innerHTML = numberOfLikes;
        likeCount.querySelector('.right-content__count').style.display = 'block';
    } else {
        likeCount.querySelector('.right-content__count').style.display = 'none';
    }
}

function setProductCount() {
    const productCount = document.querySelector('.right-content__img:nth-child(2)');
    const numberOfProductCount = productCount.querySelector('h6').innerHTML;
    if (numberOfProductCount != 0) {
        productCount.querySelector('.right-content__count').style.display = 'block';
    } else {
        productCount.querySelector('.right-content__count').style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setLikeCount();
    setProductCount();
});



document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === '/selected/' && window.innerWidth <= 992) {
        const likeIconOff = document.querySelector('.right-content__img');
        likeIconOff.style.display = 'none';

        const logo = document.querySelector('a');
        logo.innerHTML = '<span style="margin: 0 0 5px 0;">&LeftAngleBracket;</span><h2>Избранное</h2>';
        logo.style.color = 'rgb(28, 28, 39)';
        logo.style.fontSize = '21px';
        logo.style.display = 'Flex';
        logo.style.alignItems = 'center';
        logo.style.gap = '20px';
    }
});
