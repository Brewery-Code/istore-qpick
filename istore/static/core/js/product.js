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
        console.log();
        likeButton.querySelector('img').setAttribute('src', "/static/core/images/like-active.svg");
    }
}

function setLikeCount() {
    const likeCount = document.querySelector('.right-content__img');
    const likes = JSON.parse(localStorage.getItem('likesID')) || [];
    const numberOfLikes = likes.length;
    if (numberOfLikes != 0) {
        likeCount.querySelector('h6').innerHTML = numberOfLikes;
        console.log(numberOfLikes);
        likeCount.querySelector('.right-content__count').style.display = 'block';
    } else {
        likeCount.querySelector('.right-content__count').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.product__like');
    setLikeStatus(likeButton);
    likeButton.addEventListener('click', () => togleLike(likeButton));

    setLikeCount();
});
