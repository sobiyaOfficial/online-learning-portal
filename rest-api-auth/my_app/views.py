from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
# Create your views here.
class LoginView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = TokenObtainPairSerializer

class StaffUSerCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        serializer = StaffUserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()  # Save the new user with hashed password
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Return the created user data
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
