from django.urls import path
from saved_plan import views

# urlpatterns = [
#     path('', views.planner_activities),
# ]

urlpatterns = [
  path('', views.saved_plan_list),
  path('<int:pk>/', views.saved_plan_detail),
]

