from django.urls import path
from planner import views

urlpatterns = [
  path('', views.planner_list),
  path('<int:pk>/', views.planner_detail),
]