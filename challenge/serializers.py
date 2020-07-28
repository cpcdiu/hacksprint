from rest_framework import serializers

from challenge.models import Challenge


class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = '__all__'


class ChallengeFilterSerializer(serializers.Serializer):
    domain = serializers.CharField(max_length=100)
    subdomain = serializers.ListField(child=serializers.IntegerField(), allow_empty=True, allow_null=True)