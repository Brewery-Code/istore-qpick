function saveActiveLike(id) {
    let likesID = JSON.parse(localStorage.getItem('likesID')) || [];
    likesID.push(id);
    localStorage.setItem('likesID', JSON.stringify(likesID));
    setLikeCount();
}

function deleteActiveLike(id) {
    let rawLikesID = JSON.parse(localStorage.getItem('likesID')) || [];
    const likesID = rawLikesID.filter(item => item !== id);
    localStorage.setItem('likesID', JSON.stringify(likesID));
    setLikeCount();
}

function setLikeStatus(item) {
    const likesID = JSON.parse(localStorage.getItem('likesID')) || [];

    if (likesID.includes(item.id)) {
        item.classList.add('heart-button__icon-like--active');
        item.querySelector('img').setAttribute('src', "/static/core/images/like-active.svg");
    }
}

function toggleLike(likeButton) {
    const img = likeButton.querySelector('img');

    if (likeButton.classList.contains('heart-button__icon-like--active')) {
        likeButton.classList.remove('heart-button__icon-like--active');
        img.setAttribute('src', "/static/core/images/like.svg");
        deleteActiveLike(likeButton.id);
    } else {
        likeButton.classList.add('heart-button__icon-like--active');
        img.setAttribute('src', "/static/core/images/like-active.svg");
        saveActiveLike(likeButton.id);
    }
    setLikeCount();
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.heart-button__icon-like');
    likeButtons.forEach(item => {
        setLikeStatus(item);
        item.addEventListener('click', () => toggleLike(item));
    });
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload(true);
    }
});
