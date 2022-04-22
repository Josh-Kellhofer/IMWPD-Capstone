from rest_framework import serializers
from .models import Activities

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ActivitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Activities
        fields = ['id', 'breakfast', 'morning_activity', 'lunch', 'afternoon_activity', 'dinner', 'night_time_activity',]
        depth = 1