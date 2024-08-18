import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse
from core.models import Headphones, Cases


def cart(request):
    cart = request.session.get('cart', {})

    product_slugs = cart.keys()
    headphones = Headphones.objects.filter(slug__in=product_slugs)

    cart_items = []
    total_price = 0
    
    for product in headphones:
        quantity = cart.get(product.slug, 0)
        item_price = product.price * quantity
        cart_items.append({
            'product': product,
            'quantity': quantity,
            'price': item_price
        })
        total_price += item_price

    context = {
        'cart_items': cart_items,
        'total_price': total_price
    }

    return render(request, 'cart/basket.html', context)


def cart_add(request, product_slug):
    cart = request.session.get('cart', {})

    quantity = int(request.POST.get('quantity', 1))  
    if product_slug in cart:
        cart[product_slug] += quantity
    else:
        cart[product_slug] = quantity

    request.session['cart'] = cart
    return HttpResponse(status=204)


def cart_change(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        product_slug = data.get('slug')
        quantity_change = data.get('quantity', 1)

        cart = request.session.get('cart', {})
        
        if quantity_change > 0:
            cart[product_slug] = cart.get(product_slug, 0) + quantity_change
        else:
            new_quantity = cart.get(product_slug, 0) + quantity_change
            if new_quantity > 0:
                cart[product_slug] = new_quantity
            else:
                cart.pop(product_slug, None)

        request.session['cart'] = cart

        total_price = sum(
            (Headphones.objects.get(slug=slug).price if Headphones.objects.filter(slug=slug).exists()
            else Cases.objects.get(slug=slug).price) * qty
            for slug, qty in cart.items()
        )

        return JsonResponse({
            'success': True,
            'new_quantity': cart.get(product_slug, 0),
            'total_price': float(total_price)
        })

    return JsonResponse({'success': False, 'error': 'Invalid request'}, status=400)


def cart_remove(request, product_slug):
    cart = request.session.get('cart', {})

    if product_slug in cart:
        cart.pop(product_slug, None)

    request.session['cart'] = cart
    return redirect(request.META['HTTP_REFERER'])