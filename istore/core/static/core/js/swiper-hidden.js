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
    const headphonesElements = document.querySelectorAll('.headphones-block__swiper');
    headphonesElements.forEach(element => {
        element.classList.add('swiper');
    });

    const casesElements = document.querySelectorAll('.cases-block__swiper');
    casesElements.forEach(element => {
        element.classList.add('swiper');
    });

    const headphonesWrapperElements = document.querySelectorAll('.headphones-block__swiper-wrapper');
    headphonesWrapperElements.forEach(element => {
        element.classList.add('swiper-wrapper');
    });

    const casesWrapperElements = document.querySelectorAll('.cases-block__swiper-wrapper');
    casesWrapperElements.forEach(element => {
        element.classList.add('swiper-wrapper');
    });

    const headphonesSlideElements = document.querySelectorAll('.headphones-block__swiper-slide');
    headphonesSlideElements.forEach(element => {
        element.classList.add('swiper-slide');
    });

    const casesSlideElements = document.querySelectorAll('.cases-block__swiper-slide');
    casesSlideElements.forEach(element => {
        element.classList.add('swiper-slide');
    });
}



