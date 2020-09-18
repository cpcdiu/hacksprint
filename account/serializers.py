from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from account.models import Profile, WorkExperience, Education
from practice.models import Track, Practice


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    def create(self, validated_data):
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email,
                                        password=password, is_active=False)
        Profile.objects.create(user=user)
        return user


class ChangePasswordSerializer(serializers.Serializer):
    model = User
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


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
        fields = ['location', 'contact', 'website', 'user', 'image']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        location = validated_data.pop('location')
        contact = validated_data.pop('contact')
        website = validated_data.pop('website')
        image = validated_data.pop('image')
        user = User.objects.create(user_data)
        profile = Profile.objects.create(user=user, location=location, contact=contact, website=website)
        return profile

    def update(self, instance, validated_data):
        location = validated_data.pop('location')
        contact = validated_data.pop('contact')
        website = validated_data.pop('website')
        image = validated_data.pop('image')

        # profile = instance.profile
        instance.location = location
        instance.contact = contact
        instance.website = website
        instance.image = image

        instance.save()
        return instance


class TimelineSerializer(serializers.Serializer):
    profile = ProfileSerializer()
    work = WorkExperienceSerializer(many=True)


class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
