from account.models import User
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from challenge.models import Challenge, Subdomain, Domain, ChallengesParticipation
from challenge.serializers import ChallengeSerializer, ChallengeFilterSerializer, DomainSerializer, \
    ParticipationSerializer, EndParticipationSerializer
import datetime


class ChallengeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        challenges = Challenge.objects.filter(domain__default_selected=True)
        serializer = ChallengeSerializer(challenges, many=True, context={'user': request.user})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ChallengeFilterSerializer(data=request.data)
        if serializer.is_valid():
            domain = serializer.data['domain']
            subdomain = serializer.data['subdomain']
            subdomain = [sub.id for sub in Subdomain.objects.filter(domain=domain)] if not subdomain else subdomain
            filtered_challenges = Challenge.objects.filter(domain=domain).filter(subdomain__in=subdomain).distinct()
            challenge_serializer = ChallengeSerializer(filtered_challenges, many=True, context={'user': request.user})

            return Response(challenge_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChallengeDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        challenge = Challenge.objects.get(slug=slug)
        serialized_challenge = ChallengeSerializer(challenge, context={'user': request.user})
        return Response(serialized_challenge.data, status=status.HTTP_200_OK)


class JoinChallengeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, challenge_slug):
        print(challenge_slug)
        challenge = Challenge.objects.get(slug=challenge_slug)
        participation = ChallengesParticipation.objects.create(name=request.user.username, challenge=challenge,
                                                               leader=request.user)
        participation.member.add(request.user)
        challenge_serializer = ChallengeSerializer(challenge, context={'user': request.user})
        return Response(challenge_serializer.data, status=status.HTTP_200_OK)


class EndChallengeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, challenge_slug):
        is_challenge = Challenge.objects.filter(slug=challenge_slug).exists()
        if is_challenge:
            is_participate = ChallengesParticipation.objects.filter(name=request.user.username).exists()
            participation_obj = ChallengesParticipation.objects.get(name=request.user.username)
            if is_participate and participation_obj.submission_time is None:

                serializer = EndParticipationSerializer(data=request.data)
                if serializer.is_valid():
                    feedback = serializer.data['feedback']
                    participation_obj.feedback = feedback
                    participation_obj.submission_time = datetime.datetime.now()
                    participation_obj.save()
                    participation_serializer = EndParticipationSerializer(participation_obj)

                    return Response(participation_serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"msg": "Sorry you have no participation or the challenge is over"},
                                status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"msg": "Sorry invalid challenge"}, status=status.HTTP_400_BAD_REQUEST)


class SubmissionLinkChallengeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, challenge_slug):
        is_challenge = Challenge.objects.filter(slug=challenge_slug).exists()
        if is_challenge:
            is_participate = ChallengesParticipation.objects.filter(name=request.user.username).exists()
            participation_obj = ChallengesParticipation.objects.get(name=request.user.username)
            if is_participate and participation_obj.submission_time is None:

                serializer = EndParticipationSerializer(data=request.data)
                if serializer.is_valid():
                    submission_link = serializer.data['submission_link']
                    participation_obj.submission_link = submission_link
                    participation_obj.save()
                    participation_serializer = EndParticipationSerializer(participation_obj)

                    return Response(participation_serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"msg": "Sorry you have no participation or the challenge is over"},
                                status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"msg": "Sorry invalid challenge"}, status=status.HTTP_400_BAD_REQUEST)


class MyTeamView(APIView):
    def get(self, request, challenge_slug):
        challenge = Challenge.objects.get(slug=challenge_slug)
        user = request.user.challengesparticipation_set.get(challenge=challenge)
        # user = ChallengesParticipation.objects.get(challenge__slug=challenge_slug,member__username=request.user.username)
        participation_serializer = ParticipationSerializer(user)

        return Response(participation_serializer.data, status=status.HTTP_200_OK)

    def put(self, request, challenge_slug):

        p_challenge = ChallengesParticipation.objects.get(challenge__slug=challenge_slug,
                                                          member__username=request.user.username,
                                                          leader__username=request.user.username)
        for member in request.data["member"]:
            selected_member = User.objects.get(username=member["username"])
            p_challenge.member.add(selected_member)

        selected_leader = User.objects.get(username=request.data["leader"])
        p_challenge.leader = selected_leader
        p_challenge.save()

        serializer = ParticipationSerializer(p_challenge, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, challenge_slug):
        p_challenge = ChallengesParticipation.objects.get(challenge__slug=challenge_slug,
                                                          member__username=request.user.username)
        for mem in request.data["member"]:
            s_member = User.objects.get(username=mem["username"])
            p_challenge.member.remove(s_member)

        serializer = ParticipationSerializer(p_challenge)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ChallengeTeamView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, challenge_slug):
        challenge = Challenge.objects.get(slug=challenge_slug)
        participations = ChallengesParticipation.objects.filter(challenge=challenge)
        serializer = ParticipationSerializer(participations, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class DomainView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        domain = Domain.objects.all()
        domain_serializer = DomainSerializer(domain, many=True)
        return Response(domain_serializer.data, status=status.HTTP_200_OK)


class UserDashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        is_user = User.objects.filter(username=request.user.username).exists()
        if is_user:
            is_member = ChallengesParticipation.objects.filter(member=request.user).exists()
            if is_member:
                all_participations = ChallengesParticipation.objects.filter(member=request.user)
                final = []
                for participations in all_participations:
                    if participations.submission_time is None:
                        final.append(participations)
                serializer = ParticipationSerializer(final, many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"msg": "This user have no participation"})
        else:
            return Response({"msg": "Invalid user"})
