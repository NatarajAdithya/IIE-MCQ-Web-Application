from django.urls import path
from . import views
from .views import type1,type2,type3,type4

urlpatterns = [
    path('', views.mcq_app, name='mcq_app'),
    path("type1/", type1, name="type1"),
    path("type2/", type2, name="type2"),
    path("type3/", type3, name="type3"),
    path("type4/", type4, name="type4"),
]
