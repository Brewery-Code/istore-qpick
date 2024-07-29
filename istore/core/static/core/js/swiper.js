document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 1200) {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
});
