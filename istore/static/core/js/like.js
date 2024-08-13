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

function toggleLike(item) {
    const img = item.querySelector('img');

    if (item.classList.contains('heart-button__icon-like--active')) {
        item.classList.remove('heart-button__icon-like--active');
        img.setAttribute('src', "/static/core/images/like.svg");
        deleteActiveLike(item.id);
    } else {
        item.classList.add('heart-button__icon-like--active');
        img.setAttribute('src', "/static/core/images/like-active.svg");
        saveActiveLike(item.id);
    }
}

function setLikeStatus(item) {
    const likesID = JSON.parse(localStorage.getItem('likesID')) || [];

    if (likesID.includes(item.id)) {
        item.classList.add('heart-button__icon-like--active');
        item.querySelector('img').setAttribute('src', "/static/core/images/like-active.svg");
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
    const likeButtons = document.querySelectorAll('.heart-button__icon-like');
    likeButtons.forEach(item => {
        setLikeStatus(item);
        item.addEventListener('click', () => toggleLike(item));
    });

    setLikeCount();
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload(true);
    }
});






