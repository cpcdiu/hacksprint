from collections import namedtuple

from account.models import User
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from account.serializers import ProfileSerializer, EducationSerializer, WorkExperienceSerializer, UserSerializer, \
    PublicProfileSerializer
from practice.models import Track, Practice, Subdomain
from account.models import Profile, WorkExperience, Education
from practice.serializers import TrackSerializer, PracticeSerializer, PracticeFilterSerializer

Timeline = namedtuple('Timeline', ('profile', 'work'))


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {
            "message": "this is dashboard page"
        }
        return Response(content)


class PracticeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PracticeFilterSerializer(data=request.data)
        if serializer.is_valid():
            track = serializer.data['track']
            difficulty = serializer.data['difficulty']
            subdomain = serializer.data['subdomain']
            difficulty = [practice.difficulty for practice in Practice.objects.all()] if not difficulty else difficulty
            subdomain = [subdomain for subdomain in
                         Subdomain.objects.all()] if not subdomain else Subdomain.objects.filter(id__in=subdomain)
            filtered_practices = Practice.objects.filter(track_id=track).filter(difficulty__in=difficulty,
                                                                                subdomain__in=subdomain).distinct()
            practice_serializer = PracticeSerializer(filtered_practices, many=True)
            return Response(practice_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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
        user = request.user
        profile = Profile.objects.get(user=user)
        workexp = WorkExperience.objects.filter(user=user)
        education = Education.objects.filter(user=user)

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
        serializer = WorkExperienceSerializer(data=request.data, context={'user': request.user}, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddEducationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = EducationSerializer(data=request.data, context={'user': request.user}, partial=True)

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
