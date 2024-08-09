from django.shortcuts import render
from django.http import HttpResponse
from core.models import Headphones, Cases


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
    return HttpResponse("Selected page")