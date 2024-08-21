from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def start (request):
    return render(request,"starting_page.html")

def signin (request):
    return render(request,"signin.html")

def signup (request):
  return render(request,"signup.html")


def index (request):
    return render(request,"index.html")



