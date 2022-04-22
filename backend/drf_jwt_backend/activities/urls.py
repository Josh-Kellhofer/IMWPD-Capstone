from django.urls import path
from activities import views

urlpatterns = [
  path('', views.activities_list),
  path('<int:pk>/', views.activities_detail),
]