from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from adminpanel.models import Track, Practice
from userpanel.models import Profile
from userpanel.serializers import PracticeSerializer, TrackSerializer, PublicProfileSerializer, UserSerializer, \
    ProfileSerializer


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

    def get(self, request, track_id):
        practices = Practice.objects.filter(track__id=track_id)
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

    def get(self, request):
        profile = Profile.objects.get(user=request.user)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        profile = Profile(user=request.user, works_at='google', location='bangladesh', contact='ok@mail.com', website='hello.com')
        profile.save()
        return Response({"Success": "OK"})


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

