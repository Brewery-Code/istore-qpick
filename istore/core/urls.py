from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'), #127.0.0.1:8000/
    path('about/', views.about, name='about'), #127.0.0.1:8000/about
    path('contact/', views.contact, name='contact'), #127.0.0.1:8000/contact
    path('cart/', views.cart, name='cart'), #127.0.0.1:8000/
    path('selected/', views.selected, name='selected'), #127.0.0.1:8000/selected
    path('product/<int:product_id>', views.show_product, name='product')
]