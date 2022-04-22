from rest_framework import serializers
from .models import SavedPlan

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class SavedPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPlan
        fields = ['planner', 'breakfast', 'morning_activity', 'lunch', 'afternoon_activity', 'dinner', 'night_time_activity',]
        depth = 1
