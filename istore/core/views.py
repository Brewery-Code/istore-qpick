from django.shortcuts import render
from core.models import Headphones, Cases


def index(request):
    headphones = Headphones.objects.filter(category__name="Headphones")
    cases = Cases.objects.filter(category__name="Cases")
    data = {
        'headphones': headphones,
        'cases': cases
    }
    return render(request, 'core/index.html', context=data)
