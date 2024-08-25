from os import name
from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='home'), #127.0.0.1:8000/
    path('about/', views.about, name='about'), #127.0.0.1:8000/about
    path('contact/', views.contact, name='contact'), #127.0.0.1:8000/contact
    path('selected/', views.selected, name='selected'), #127.0.0.1:8000/selected
    path('product/<slug:product_slug>', views.show_product, name='product'),
    path('selected-add/<slug:product_slug>/', views.selected_add, name='selected_add'),
    path('selected-remove/<slug:product_slug>/', views.selected_remove, name='selected_remove'),
    path('order-page/', views.order_page, name='order_page')
]