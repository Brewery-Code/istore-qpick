from django.shortcuts import render


def index(request):
    return render(request, 'core/base.html') # Потім змінити на файл index.html в якому буде контент головнгої сторінки
