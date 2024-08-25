from django.shortcuts import redirect, render
from django.http import HttpResponse
from core.models import Headphones, Cases
from django.views.decorators.http import require_POST


def index(request):
    headphones = Headphones.objects.filter(category__name="Headphones")
    cases = Cases.objects.filter(category__name="Cases")
    data = {
        'headphones': headphones,
        'cases': cases
    }
    return render(request, 'core/index.html', context=data)

def show_product(request, product_slug):
    product = Headphones.objects.get(slug=product_slug)
    data = {
        'product': product,
    }
    return render(request, 'core/product.html', context=data)


def about(request):
    return render(request, 'core/about.html')


def contact(request):
    return render(request, 'core/contact.html')


def selected(request):
    favorites = request.session.get('favorites', [])

    headphones = Headphones.objects.filter(slug__in=favorites)
    cases = Cases.objects.filter(slug__in=favorites)

    favorite_items = []
    for product in headphones:
        favorite_items.append(product)
    for product in cases:
        favorite_items.append(product)
        

    context = {
        'favorite_items': favorite_items
    }

    return render(request, 'core/like.html', context)


def selected_add(request, product_slug):
    favorites = request.session.get('favorites', [])

    if product_slug not in favorites:
        favorites.append(product_slug)

    request.session['favorites'] = favorites
    return HttpResponse(status=204)


def selected_remove(request, product_slug):
    favorites = request.session.get('favorites', [])

    if product_slug in favorites:
        favorites.remove(product_slug)

    request.session['favorites'] = favorites
    return redirect(request.META['HTTP_REFERER'])


def order_page(request):
    return render(request, 'core/order-page.html')



