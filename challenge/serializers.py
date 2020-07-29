from rest_framework import serializers

from challenge.models import Challenge, Domain, Subdomain


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

    class Meta:
        model = Challenge
        exclude = ['domain']


class ChallengeFilterSerializer(serializers.Serializer):
    domain = serializers.CharField(max_length=100)
    subdomain = serializers.ListField(child=serializers.IntegerField(), allow_empty=True, allow_null=True)