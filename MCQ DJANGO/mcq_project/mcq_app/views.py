from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def mcq_app(request):
  template = loader.get_template('home.html')
  return HttpResponse(template.render())

# create a function
def type1(request):
    # return response
    return render(request, "type1.html")

def type2(request):
    # return response
    return render(request, "type2.html")

def type3(request):
    # return response
    return render(request, "type3.html")

def type4(request):
    # return response
    return render(request, "type4.html")
  

