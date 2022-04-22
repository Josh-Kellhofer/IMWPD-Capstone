from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Activities
from .serializers import ActivitiesSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404



@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def activities_list(request):
        
    if request.method == 'GET':
      activity = Activities.objects.all()
      serializer = ActivitiesSerializer(activity, many=True)
      return Response(serializer.data)

    elif request.method == 'POST':
      serializer = ActivitiesSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def activities_detail(request, pk):

      activities = get_object_or_404(Activities, pk=pk)

      if request.method == 'GET':
        serializer = ActivitiesSerializer(activities)
        return Response(serializer.data)

      elif request.method == "PUT":
        serializer = ActivitiesSerializer(activities, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        
      elif request.method == 'DELETE':
        activities.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





# class ActivitiesList(APIView):

#     permission_classes = [AllowAny]

#     def get(self, request):
#         activity = Activities.objects.all()
#         serializer = ActivitiesSerializer(activity, many=True)
#         return Response(serializer.data)
