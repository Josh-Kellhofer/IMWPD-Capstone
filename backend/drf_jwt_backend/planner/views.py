from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Planner
from .serializers import PlannerSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def planner_list(request):
            
    if request.method == 'GET':
      planner = Planner.objects.all()
      serializer = PlannerSerializer(planner, many=True)
      return Response(serializer.data)

    elif request.method == 'POST':
      serializer = PlannerSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def planner_detail(request, pk):

      planners = get_object_or_404(Planner, pk=pk)

      if request.method == 'GET':
        serializer = PlannerSerializer(planners);
        return Response(serializer.data)

      elif request.method == "PUT":
        serializer = PlannerSerializer(planners, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        
      elif request.method == 'DELETE':
        planners.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





# class PlannerList(APIView):

#     permission_classes = [IsAuthenticated]

#     def get_planner(self, pk):
#       try:
#         return Planner.objects.get(pk=pk)
#       except Planner.DoesNotExist:
#         raise Http404

#     def get(self, request):
#         planner = Planner.objects.all()
#         serializer = PlannerSerializer(planner, many=True)
#         return Response(serializer.data)

#     def delete(self, request, pk):
#       plannerdelete = self.get_planner(pk)
#       plannerdelete.delete()
#       return Response(status=status.HTTP_204_NO_CONTENT)

