from account.models import User
from rest_framework import serializers

from account.serializers import UserSerializer
from challenge.models import Challenge, Domain, Subdomain, ChallengesParticipation


class SubdomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subdomain
        fields = '__all__'


class DomainSerializer(serializers.ModelSerializer):
    subdomain = serializers.SerializerMethodField('get_subdomain_from_domain')

    class Meta:
        model = Domain
        fields = '__all__'

    def get_subdomain_from_domain(self, domain):
        subdomain = domain.subdomain_set.all()
        subdomain_serializer = SubdomainSerializer(subdomain, many=True)
        return subdomain_serializer.data


class ChallengeSerializer(serializers.ModelSerializer):
    subdomain = SubdomainSerializer(many=True, read_only=True)
    team_count = serializers.SerializerMethodField('total_team')
    is_joined = serializers.SerializerMethodField('check_join')

    class Meta:
        model = Challenge
        fields = '__all__'

    def check_join(self, challenge):
        user = self.context['user']
        usr_participations = user.challengesparticipation_set.filter(
            challenge=challenge)
        return True if usr_participations else False

    def total_team(self, challenge):
        team_count = challenge.challengesparticipation_set.all().count()
        return team_count


class ParticipationSerializer(serializers.ModelSerializer):
    member = UserSerializer(many=True, read_only=True)
    leader = UserSerializer(read_only=True)

    class Meta:
        model = ChallengesParticipation
        fields = '__all__'
        # extra_kwargs = {'name': {'required': False}, 'challenge': {'required': False}}


class EndParticipationSerializer(serializers.ModelSerializer):
    member = UserSerializer(many=True, read_only=True)

    class Meta:
        model = ChallengesParticipation
        fields = '__all__'
        extra_kwargs = {'name': {'required': False}, 'challenge': {
            'required': False}, 'leader': {'required': False}}


class ChallengeFilterSerializer(serializers.Serializer):
    domain = serializers.CharField(max_length=100)
    subdomain = serializers.ListField(
        child=serializers.IntegerField(), allow_empty=True, allow_null=True)
