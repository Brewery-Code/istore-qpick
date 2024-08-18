from django.urls import path
from cart import views

app_name = 'cart'

urlpatterns = [
    path('', views.cart, name='basket'), 
    path('cart-add/<slug:product_slug>/', views.cart_add, name='cart_add'),
    path('change/', views.cart_change, name='cart_change'),
    path('cart-remove/<slug:product_slug>/', views.cart_remove, name='cart_remove')
]