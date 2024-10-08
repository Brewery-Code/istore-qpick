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
})


const cartAlert = document.querySelector('.add-to-cart');
function addToCart(event) {
    setProductCountPlusOne();
    event.target.disabled = true;
    cartAlert.classList.add('add-to-cart--active');
    setTimeout(() => {
        cartAlert.classList.remove('add-to-cart--active');
        event.target.disabled = false;
    }, 4000);
}

function setProductCountPlusOne() {
    const productCount = document.querySelector('.right-content__img:nth-child(2)');
    let numberOfProductCount = parseInt(productCount.querySelector('h6').innerHTML);
    numberOfProductCount += 1;
    if (numberOfProductCount != 0) {
        productCount.querySelector('h6').innerHTML = numberOfProductCount;
        productCount.querySelector('.right-content__count').style.display = 'block';
    } else {
        productCount.querySelector('.right-content__count').style.display = 'none';
    }
};





function saveActiveLike(id) {
    let likesID = JSON.parse(localStorage.getItem('likesID')) || [];
    likesID.push(id);
    localStorage.setItem('likesID', JSON.stringify(likesID));
}

function deleteActiveLike(id) {
    let rawLikesID = JSON.parse(localStorage.getItem('likesID')) || [];
    const likesID = rawLikesID.filter(item => item !== id);
    localStorage.setItem('likesID', JSON.stringify(likesID));
}

function togleLike(likeButton) {
    const img = likeButton.querySelector('img');

    if (likeButton.classList.contains('product__like--active')) {
        likeButton.classList.remove('product__like--active');
        img.setAttribute('src', "/static/core/images/like.svg");
        deleteActiveLike(likeButton.id);
    } else {
        likeButton.classList.add('product__like--active');
        img.setAttribute('src', "/static/core/images/like-active.svg");
        saveActiveLike(likeButton.id);
    }
    setLikeCount();
}

function setLikeStatus(likeButton) {
    const likesID = JSON.parse(localStorage.getItem('likesID')) || [];

    if (likesID.includes(likeButton.id)) {
        likeButton.classList.add('product__like--active');
        likeButton.querySelector('img').setAttribute('src', "/static/core/images/like-active.svg");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.product__like');
    setLikeStatus(likeButton);
    likeButton.addEventListener('click', () => togleLike(likeButton));
});



