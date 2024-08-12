from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse
from core.models import Headphones, Cases


def cart(request):
    cart = request.session.get('cart', {})

    product_slugs = cart.keys()
    headphones = Headphones.objects.filter(slug__in=product_slugs)
    cases = Cases.objects.filter(slug__in=product_slugs)

    cart_items = []
    for product in headphones:
        cart_items.append({
            'product': product,
            'quantity': cart.get(product.slug, 0)
        })
    for product in cases:
        cart_items.append({
            'product': product,
            'quantity': cart.get(product.slug, 0)
        })

    context = {
        'cart_items': cart_items
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


def cart_change(request, product_slug):
    cart = request.session.get('cart', {})

    quantity = int(request.POST.get('quantity', 1))
    if quantity > 0:
        cart[product_slug] = quantity
    else:
        
        cart.pop(product_slug, None)

    request.session['cart'] = cart
    return HttpResponse("Cart updated")


def cart_remove(request, product_slug):
    cart = request.session.get('cart', {})

    if product_slug in cart:
        cart.pop(product_slug, None)

    request.session['cart'] = cart
    return redirect('cart:basket')