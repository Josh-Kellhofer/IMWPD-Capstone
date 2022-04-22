from rest_framework import serializers
from .models import Planner

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class PlannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planner
        fields = ['id', 'user', 'firstName', 'lastName', 'city', 'state', 'zipcode', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)
