from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from challenge.models import Challenge, Subdomain, Domain
from challenge.serializers import ChallengeSerializer, ChallengeFilterSerializer, DomainSerializer


class ChallengeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        challenges = Challenge.objects.filter(domain__default_selected=True)
        serializer = ChallengeSerializer(challenges, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ChallengeFilterSerializer(data=request.data)
        if serializer.is_valid():
            domain = serializer.data['domain']
            subdomain = serializer.data['subdomain']
            subdomain = [sub.id for sub in Subdomain.objects.filter(domain=domain)] if not subdomain else subdomain
            filtered_challenges = Challenge.objects.filter(domain=domain).filter(subdomain__in=subdomain).distinct()
            challenge_serializer = ChallengeSerializer(filtered_challenges, many=True)

            return Response(challenge_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChallengeDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        challenge = Challenge.objects.get(slug=slug)
        serialized_challenge = ChallengeSerializer(challenge)
        return Response(serialized_challenge.data, status=status.HTTP_200_OK)


class DomainView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        domain = Domain.objects.all()
        domain_serializer = DomainSerializer(domain, many=True)
        return Response(domain_serializer.data, status=status.HTTP_200_OK)
