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

    class Meta:
        model = Profile
        fields = ['location', 'contact', 'website', 'user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        print(user_data, '----------------', 'created...........')
        location = validated_data.pop('location')
        contact = validated_data.pop('contact')
        website = validated_data.pop('website')
        user = User.objects.create(user_data)
        profile = Profile.objects.create(user=user, location=location, contact=contact, website=website)

        return profile

    def update(self, instance, validated_data):
        location = validated_data.pop('location')
        contact = validated_data.pop('contact')
        website = validated_data.pop('website')

        # profile = instance.profile
        instance.location = location
        instance.contact = contact
        instance.website = website

        instance.save()

        # user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        # profile, created = Profile.objects.update_or_create(user=user, location=location, contact=contact, website=website)

        return instance


class TimelineSerializer(serializers.Serializer):
    profile = ProfileSerializer()
    work = WorkExperienceSerializer(many=True)


class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
