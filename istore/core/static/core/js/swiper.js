document.addEventListener('DOMContentLoaded', () => {
    let swiper;

    function initSwiper() {
        if (window.innerWidth <= 900) {
            if (!swiper) {
                swiper = new Swiper('.mySwiper', {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    spaceBetween: 0,
                    initialSlide: 1,
                });
            }
        } else {
            if (swiper) {
                swiper.destroy();
                swiper = undefined;
            }
        }
    }

    initSwiper();

    window.addEventListener('resize', () => {
        initSwiper();
    });
});
