from django.db import models

# Create your models here.

class Activities(models.Model):
    breakfast = models.CharField(max_length=100)
    morning_activity =  models.CharField(max_length=100)
    lunch =  models.CharField(max_length=100)
    afternoon_activity =  models.CharField(max_length=100)
    dinner =  models.CharField(max_length=100)
    night_time_activity =  models.CharField(max_length=100)