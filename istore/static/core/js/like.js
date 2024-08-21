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

function setLikeStatus(item) {
    const likesID = JSON.parse(localStorage.getItem('likesID')) || [];

    if (likesID.includes(item.id)) {
        item.classList.add('heart-button__icon-like--active');
        item.querySelector('img').setAttribute('src', "/static/core/images/like-active.svg");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.heart-button__icon-like');
    likeButtons.forEach(item => {
        setLikeStatus(item);
        // item.addEventListener('click', () => toggleLike(item));
    });
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        window.location.reload(true);
    }
});

function toggleLike(slug) {
    const item = document.getElementById(slug);

    if (!item) {
        console.error(`Element with ID ${slug} not found.`);
        return;
    }

    const img = item.querySelector('img');

    if (item.classList.contains('heart-button__icon-like--active')) {
        fetch(`/selected-remove/${slug}/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            }
        }).then(response => {
            if (response.ok) {
                item.classList.remove('heart-button__icon-like--active');
                img.setAttribute('src', "/static/core/images/like.svg");
                deleteActiveLike(item.id);
            }
        });
    } else {
        fetch(`/selected-add/${slug}/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
            }
        }).then(response => {
            if (response.ok) {
                item.classList.add('heart-button__icon-like--active');
                img.setAttribute('src', "/static/core/images/like-active.svg");
                saveActiveLike(item.id);
            }
        });
    }
}


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


