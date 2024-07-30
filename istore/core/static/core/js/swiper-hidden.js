const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry()||  
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    const element1 = document.querySelectorAll('.headphones-block__swiper');
    element1.forEach(element => {
        element.classList.add('swiper');
    });

    const element2 = document.querySelectorAll('.headphones-block__swiper-wrapper');
    element2.forEach(element => {
        element.classList.add('swiper-wrapper');
    });

    const element3 = document.querySelectorAll('.headphones-block__swiper-slide');
    element3.forEach(element => {
        element.classList.add('swiper-slide');
    });
}


