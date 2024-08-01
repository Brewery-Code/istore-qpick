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
        if (event.target.closest('.description')) {
            const arrow = description.querySelector('.description__title-arrow');
            if (arrow) {
                arrow.classList.toggle('description__title-arrow_active');
            }
        }
    });
});
