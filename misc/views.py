from challenge.models import Challenge, ChallengesParticipation
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from challenge.serializers import ChallengeSerializer, ParticipationSerializer


class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        participations = request.user.challengesparticipation_set.filter(submission_time=None)
        challenges = []
        
        for participation in participations:
            challenges.append(participation.challenge)

        serializer = ChallengeSerializer(challenges, many=True, context={'user': request.user})

        return Response(serializer.data, status=status.HTTP_200_OK)
