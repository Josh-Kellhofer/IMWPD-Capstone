from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Restaurant
from .serializers import RestaurantSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def restaurant_list(request):
        
    if request.method == 'GET':
      restaurant = Restaurant.objects.all()
      serializer = RestaurantSerializer(restaurant, many=True)
      return Response(serializer.data)

    elif request.method == 'POST':
      serializer = RestaurantSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def restaurant_detail(request, pk):

      restaurants = get_object_or_404(Restaurant, pk=pk)

      if request.method == 'GET':
        serializer = RestaurantSerializer(restaurants);
        return Response(serializer.data)

      elif request.method == "PUT":
        serializer = RestaurantSerializer(restaurants, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
        
      elif request.method == 'DELETE':
        restaurants.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





# class RestaurantList(APIView):

#     permission_classes = [AllowAny]

#     def get(self, request):
#         restaurant = Restaurant.objects.all()
#         serializer = RestaurantSerializer(restaurant, many=True)
#         return Response(serializer.data)
