from django.http import HttpResponse
from django.shortcuts import render


def cart(request):
    return render(request, 'cart/basket.html')


def cart_add(request, product_id):
    pass


def cart_change(request, product_id):
    pass


def cart_remove(request, product_id):
    pass