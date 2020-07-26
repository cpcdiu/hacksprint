from collections import namedtuple

from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from adminpanel.models import Track, Practice
from userpanel.models import Profile, WorkExperience, Education
from userpanel.serializers import PracticeSerializer, TrackSerializer, PublicProfileSerializer, UserSerializer, \
    ProfileSerializer, WorkExperienceSerializer, TimelineSerializer, EducationSerializer

Timeline = namedtuple('Timeline', ('profile', 'work'))


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is dashboard page"
        }
        return Response(content)


class ChallengesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is challenge page"
        }
        return Response(content)


class TrackView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        tracks = Track.objects.all()
        serializer = TrackSerializer(tracks, many=True)
        return Response(serializer.data)


class SingleTrackView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, track_slug):
        practices = Practice.objects.filter(track__slug=track_slug)
        serializer = PracticeSerializer(practices, many=True)
        return Response(serializer.data)


class SinglePracticeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, track_id, practice_id):
        practice = Practice.objects.get(id=practice_id)
        serializer = PracticeSerializer(practice)
        return Response(serializer.data)


class JobsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is jobs page"
        }
        return Response(content)


class NotificationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is notification page"
        }
        return Response(content)


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    # def get(self, request):
    #     profile = Profile.objects.get(user=request.user)
    #     workexp = WorkExperience.objects.filter(profile=profile)
    #
    #     timeline = Timeline(
    #         profile=profile,
    #         work=workexp,
    #     )
    #
    #     serializer = TimelineSerializer(timeline)
    #     return Response(serializer.data)

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        workexp = WorkExperience.objects.filter(profile=profile)
        education = Education.objects.filter(profile=profile)

        profile_serializer = ProfileSerializer(profile)
        workexp_serializer = WorkExperienceSerializer(workexp, many=True)
        education_serializer = EducationSerializer(education, many=True)

        d1 = profile_serializer.data
        d2 = {'work': workexp_serializer.data, 'education': education_serializer.data}
        d1.update(d2)

        return Response(d1)

    def post(self, request):
        # user = User.objects.get(username=request.user)
        # profile = Profile(user=user)
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddWorkView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        profile = Profile.objects.get(user=request.user)
        workexp = WorkExperience(profile=profile)
        serializer = WorkExperienceSerializer(workexp, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddEducationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        profile = Profile.objects.get(user=request.user)
        education = Education(profile=profile)
        serializer = EducationSerializer(education, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(username=request.user)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class PublicProfileView(APIView):
    def get(self, request, pid):
        user = User.objects.get(id=pid)
        serializer = PublicProfileSerializer(user)
        return Response(serializer.data)


class SettingsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is settings page"
        }
        return Response(content)


# DISCARDED ROUTES, WILL BE REMOVED SOON
def profile(request):
    return render(request, 'userpanel/profile.html')


def challenges(request):
    return render(request, 'userpanel/challenges.html')


def practices(request):
    tracks = Track.objects.all()
    return render(request, 'userpanel/practice.html', {'tracks': tracks})


def jobs(request):
    return render(request, 'userpanel/jobs.html')


def settings(request):
    return render(request, 'userpanel/settings.html')


def notification(request):
    return render(request, 'userpanel/notification.html')
