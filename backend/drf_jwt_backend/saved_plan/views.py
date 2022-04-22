from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import SavedPlan
from .serializers import SavedPlanSerializer
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def saved_plan_list(request):
        
    if request.method == 'GET':
      saved_plan = SavedPlan.objects.all()
      serializer = SavedPlanSerializer(saved_plan, many=True)
      return Response(serializer.data)

    elif request.method == 'POST':
      serializer = SavedPlanSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def saved_plan_detail(request, pk):

      saved_plans = get_object_or_404(SavedPlan, pk=pk)

      if request.method == 'GET':
        # plan_details = SavedPlan.ojbects.filter(planner=request.user.id)  //filtering method to GET the plans for an individual
        serializer = SavedPlanSerializer(saved_plans);
        return Response(serializer.data)

      elif request.method == "PUT":
        serializer = SavedPlanSerializer(saved_plans, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

      elif request.method == 'DELETE':
        saved_plans.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class SavedPlanList(APIView):

#     permission_classes = [AllowAny]

#     def get(self, request):
#         saved_list = SavedPlan.objects.filter(planner=request.planner.user)
#         serializer = SavedPlanSerializer(saved_list, many=True)
#         return Response(serializer.data)
