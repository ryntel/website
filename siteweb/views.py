from django.shortcuts import render

from .models import Users

# Create your views here.
def index(request):
    users = Users.objects.all()
    return render(request, 'index.html', {'users' : users})

