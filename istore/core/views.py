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


def show_product(request, product_id):
    return render(request, 'core/product.html')


def about(request):
    return HttpResponse("About page")


def contact(request):
    return HttpResponse("Contact page")


def cart(request):
    return HttpResponse("Cart page")


def selected(request):
    return HttpResponse("Selected page")