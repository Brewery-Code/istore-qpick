from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'), #127.0.0.1:8000/
]