from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password

class TokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(TokenObtainPairSerializer, cls).get_token(user)
        token['first_name'] = user.first_name
        token['email'] = user.email
        token['phone'] = user.phone
        return token
    
class StaffUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = StaffUser
        fields = ('id', 'first_name', 'last_name', 'email', 'username', 'password', 'phone', 'title')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = StaffUser(**validated_data)
        if password:
            user.password = make_password(password)
        user.save()
        return user