document.addEventListener('DOMContentLoaded', () => {
    const likeElements = document.querySelectorAll('.heart-button__icon-like');

    function saveLike() {
        const likedItemIds = Array.from(document.querySelectorAll('.heart-button__icon-like--active')).map(div => div.id);
        localStorage.setItem('likedItems', JSON.stringify(likedItemIds));
    }

    function updateLikeStates(likedItems) {
        likedItems.forEach(id => {
            const div = document.getElementById(id);
            if (div) {
                div.classList.add('heart-button__icon-like--active');
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

            if (item.classList.contains('heart-button__icon-like--active')) {
                img.setAttribute('src', "/static/core/images/like.svg");
                item.classList.remove('heart-button__icon-like--active');
            } else {
                img.setAttribute('src', "/static/core/images/like-active.svg");
                item.classList.add('heart-button__icon-like--active');
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

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);

    if (!url.searchParams.has('reload')) {
        url.searchParams.set('reload', 'true');
        window.location.href = url.href;
    } else {
        url.searchParams.delete('reload');
    }
});



