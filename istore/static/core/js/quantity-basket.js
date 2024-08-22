function setProductCountProductPage() {
    const productCount = document.querySelector('.right-content__img:nth-child(2)');
    const ListNumberOfProducts = document.querySelectorAll('.item-bottom-text');
    let numberOfProducts = 0;
    ListNumberOfProducts.forEach((item) => {
        numberOfProducts += parseInt(item.innerHTML);
    });
    if (numberOfProducts != 0) {
        productCount.querySelector('h6').innerHTML = numberOfProducts;
        productCount.querySelector('.right-content__count').style.display = 'block';
    } else {
        productCount.querySelector('.right-content__count').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.minus-button').forEach(button => {
        button.addEventListener('click', function () {
            updateQuantity(this.dataset.productSlug, 1);
        });
    });

    document.querySelectorAll('.plus-button').forEach(button => {
        button.addEventListener('click', function () {
            updateQuantity(this.dataset.productSlug, -1);
        });
    });

    function updateQuantity(productSlug, change) {
        fetch('/cart/change/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                'slug': productSlug,
                'quantity': change
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const quantityElement = document.querySelector(`[data-product-slug="${productSlug}"]`).nextElementSibling;
                    quantityElement.textContent = data.new_quantity;

                    const totalElement = document.querySelector('.cart-total p:last-of-type');
                    if (totalElement) {
                        const totalPrice = parseFloat(data.total_price);
                        if (!isNaN(totalPrice)) {
                            totalElement.textContent = `${totalPrice.toFixed(2)}$`;
                            setProductCountProductPage();
                        }
                    }
                }
            });
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
});


