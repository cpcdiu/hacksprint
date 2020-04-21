from django.contrib.auth.models import User
from rest_framework import serializers

from adminpanel.models import Practice, Track


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'


class PracticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practice
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
