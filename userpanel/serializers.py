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
        fields = ['position', 'company', 'started_at', 'end_date']

    def update(self, instance, validated_data):
        instance.position = validated_data.pop('position')
        instance.company = validated_data.pop('company')
        instance.started_at = validated_data.pop('started_at')
        instance.end_date = validated_data.pop('end_date')
        instance.save()

        return instance


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['subject', 'institution', 'started_at', 'end_date']

    def update(self, instance, validated_data):
        instance.subject = validated_data.pop('subject')
        instance.institution = validated_data.pop('institution')
        instance.started_at = validated_data.pop('started_at')
        instance.end_date = validated_data.pop('end_date')
        instance.save()

        return instance


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['location', 'contact', 'website', 'user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
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
