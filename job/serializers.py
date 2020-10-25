from rest_framework import serializers

from account.serializers import CompanySerializer
from job.models import Job, Application


class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Job
        fields = '__all__'


class ApplicationSerializer(serializers.Serializer):
    cv = serializers.FileField()

    def create(self, validated_data):
        user = self.context['user']
        profile = user.profile
        job = self.context['job']
        cv = validated_data.pop('cv')
        application = Application.objects.create(user=profile, job=job, cv=cv)
        return application
