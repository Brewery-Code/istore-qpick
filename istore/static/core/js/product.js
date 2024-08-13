document.addEventListener("DOMContentLoaded", function () {
    function toggleDetails() {
        const productSpecifications = document.querySelectorAll('.product__specifications details');

        if (window.innerWidth >= 992) {
            productSpecifications.forEach(detail => {
                detail.setAttribute('open', '');
            });
        } else {
            productSpecifications.forEach(detail => {
                detail.removeAttribute('open');
            });
        }
    }

    toggleDetails();

    window.addEventListener('resize', toggleDetails);
});


document.querySelectorAll('.description').forEach(description => {
    description.addEventListener('click', function (event) {
        if (event.target.closest('summary')) {
            const arrow = description.querySelector('.description__title-arrow');
            if (arrow) {
                arrow.classList.toggle('description__title-arrow_active');
            }
        }
    });
});


let rating = document.querySelector('.product__response-number').innerHTML;
rating = Math.round(rating);
document.querySelectorAll('.product__response').forEach(item => {
    item.setAttribute('data-total-value', rating);
});



const userResponsMenu = document.querySelector('.user-response');

function openResponsMenu(event) {
    userResponsMenu.style.display = 'flex';
    setTimeout(() => {
        userResponsMenu.style.opacity = '1';
    }, 10);
}

function closeResponsMenu(event) {
    if (event.target === userResponsMenu) {
        userResponsMenu.style.display = 'none';
        userResponsMenu.style.opacity = '0';
    }
}

document.getElementById('user-response-btn').addEventListener('click', openResponsMenu);
userResponsMenu.addEventListener('click', closeResponsMenu);
userResponsMenu.querySelector('.user-response__close').addEventListener('click', () => {
    userResponsMenu.style.display = 'none';
    userResponsMenu.style.opacity = '0';
    console.log('test')
})


const cartAlert = document.querySelector('.add-to-cart');
function addToCart(event) {
    event.target.disabled = true;
    cartAlert.classList.add('add-to-cart--active');
    setTimeout(() => {
        cartAlert.classList.remove('add-to-cart--active');
        event.target.disabled = false;
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const likeElements = document.querySelectorAll('.product__like');

    function saveLike() {
        const likedItemIds = Array.from(document.querySelectorAll('.product__like--active')).map(div => div.id);
        localStorage.setItem('likedItems', JSON.stringify(likedItemIds));
    }

    function updateLikeStates(likedItems) {
        likedItems.forEach(id => {
            const div = document.getElementById(id);
            if (div) {
                div.classList.add('product__like--active');
                const img = div.querySelector('img');
                if (img) {
                    img.setAttribute('src', "/static/core/images/like-active.svg");
                }
            }
        });
    }

    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    updateLikeStates(likedItems);

    likeElements.forEach((item) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const itemId = item.id;

            if (item.classList.contains('product__like--active')) {
                img.setAttribute('src', "/static/core/images/like.svg");
                item.classList.remove('product__like--active');
            } else {
                img.setAttribute('src', "/static/core/images/like-active.svg");
                item.classList.add('product__like--active');
            }
            saveLike();
        });
    });

    window.addEventListener('storage', (event) => {
        if (event.key === 'likedItems') {
            const likedItems = JSON.parse(event.newValue) || [];
            updateLikeStates(likedItems);
        }
    });
});
