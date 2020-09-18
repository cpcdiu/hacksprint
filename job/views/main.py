from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from account.models import Profile
from job.models import Job, Application, Company
from job.serializers import JobSerializer, ApplicationSerializer


class JobsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        jobs = Job.objects.all()
        job_serializer = JobSerializer(jobs, many=True)

        return Response(job_serializer.data, status=status.HTTP_200_OK)


class JobsDetailsView(APIView):
    def get_object(self, pk):
        try:
            return Job.objects.get(pk=pk)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        job = self.get_object(pk)
        job_serializer = JobSerializer(job)
        return Response(job_serializer.data)


class ApplicationView(APIView):

    lookup_field = 'pk'

    def get(self, request, pk):
        if Job.objects.filter(id=pk).exists():
            profile = Profile.objects.get(user=request.user)
            job = Job.objects.get(id=pk)
            is_applied = profile.application_set.filter(job=job).exists()

            if not is_applied:
                serializer = ApplicationSerializer(data=request.data, context={'user': request.user, 'job': Job.objects.get(id=pk)})
                if serializer.is_valid():
                    serializer.save()
                    return Response({"msg": "Successfully applied for the job"}, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"msg": "already applied for this job"})
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
