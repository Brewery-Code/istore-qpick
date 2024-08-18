document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.minus-button').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantity(this.dataset.productSlug, 1);
        });
    });

    document.querySelectorAll('.plus-button').forEach(button => {
        button.addEventListener('click', function() {
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
            if (quantityElement) {
                quantityElement.textContent = data.new_quantity;
            }
        }
    })
    .catch(error => console.error('Error:', error));
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
