const like = document.querySelectorAll('.heart-button__icon-like');

like.forEach((item) => {
    item.addEventListener('click', () => {
        let img = item.querySelector('img');

        if (item.classList.contains('heart-button__icon-like--active')) {
            img.setAttribute('src', "/static/core/images/like.svg");
            item.classList.remove('heart-button__icon-like--active')
        } else {
            img.setAttribute('src', "/static/core/images/like-active.svg");
            item.classList.add('heart-button__icon-like--active')
        }
    })
})