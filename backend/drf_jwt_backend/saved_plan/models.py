from django.db import models
from planner.models import Planner
# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class SavedPlan(models.Model):
    planner = models.ForeignKey(Planner, on_delete=models.SET_NULL, null = True)
    breakfast = models.CharField(max_length=100)
    morning_activity =  models.CharField(max_length=100)
    lunch =  models.CharField(max_length=100)
    afternoon_activity =  models.CharField(max_length=100)
    dinner =  models.CharField(max_length=100)
    night_time_activity =  models.CharField(max_length=100)
