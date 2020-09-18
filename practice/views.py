from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from practice.models import Track, Practice, Subdomain
from practice.serializers import TrackSerializer, PracticeFilterSerializer, PracticeSerializer


class PracticeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PracticeFilterSerializer(data=request.data)
        if serializer.is_valid():
            track = serializer.data['track']
            difficulty = serializer.data['difficulty']
            subdomain = serializer.data['subdomain']
            difficulty = [practice.difficulty for practice in Practice.objects.all()] if not difficulty else difficulty
            subdomain = [subdomain for subdomain in Subdomain.objects.all()] if not subdomain else Subdomain.objects.filter(id__in=subdomain)
            filtered_practices = Practice.objects.filter(track_id=track).filter(difficulty__in=difficulty, subdomain__in=subdomain).distinct()
            practice_serializer = PracticeSerializer(filtered_practices, many=True)
            return Response(practice_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SinglePracticeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, track_slug, practice_slug):
        practice = Practice.objects.get(slug=practice_slug)
        serializer = PracticeSerializer(practice)
        return Response(serializer.data)


class TrackView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        tracks = Track.objects.all()
        serializer = TrackSerializer(tracks, many=True, context={'request': request})
        return Response(serializer.data)


class SingleTrackView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, track_slug):
        practices = Practice.objects.filter(track__slug=track_slug)
        serializer = PracticeSerializer(practices, many=True)
        return Response(serializer.data)
