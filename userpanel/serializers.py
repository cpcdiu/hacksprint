from abc import ABC

from django.contrib.auth.models import User
from rest_framework import serializers

from adminpanel.models import Practice, Track
from userpanel.models import Profile, WorkExperience, Education


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
        fields = ['first_name', 'last_name', 'email', 'username']


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    work = WorkExperienceSerializer(required=False)

    class Meta:
        model = Profile
        fields = '__all__'


class TimelineSerializer(serializers.Serializer):
    profile = ProfileSerializer()
    work = WorkExperienceSerializer(many=True)


class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
