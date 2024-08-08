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
        if (event.target.closest('summary')) {
            const arrow = description.querySelector('.description__title-arrow');
            if (arrow) {
                arrow.classList.toggle('description__title-arrow_active');
            }
        }
    });
});


let rating = document.querySelector('.product__response-number').innerHTML;
rating = Math.round(rating);
document.querySelectorAll('.product__response').forEach(item => {
    item.setAttribute('data-total-value', rating);
});



const userResponsMenu = document.querySelector('.user-response');

function openResponsMenu(event) {
    userResponsMenu.style.display = 'flex';
    setTimeout(() => {
        userResponsMenu.style.opacity = '1';
    }, 10);
}

function closeResponsMenu(event) {
    if (event.target === userResponsMenu) {
        userResponsMenu.style.display = 'none';
        userResponsMenu.style.opacity = '0';
    }
}

document.getElementById('user-response-btn').addEventListener('click', openResponsMenu);
userResponsMenu.addEventListener('click', closeResponsMenu);
userResponsMenu.querySelector('.user-response__close').addEventListener('click', () => {
    userResponsMenu.style.display = 'none';
    userResponsMenu.style.opacity = '0';
    console.log('test')
})