from rest_framework import serializers

from practice.models import Track, Practice


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'


class PracticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Practice
        fields = '__all__'


class PracticeFilterSerializer(serializers.Serializer):
    track = serializers.IntegerField()
    difficulty = serializers.ListField(child=serializers.IntegerField(), allow_empty=True, allow_null=True)
    subdomain = serializers.ListField(child=serializers.IntegerField(), allow_empty=True, allow_null=True)