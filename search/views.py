from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from account.models import User
from account.serializers import UserSerializer


class UserSearch(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        query = request.GET.get('q')
        users = User.objects.filter(Q(username__icontains=query))
        user_serializer = UserSerializer(users, many=True)

        return Response(user_serializer.data, status=status.HTTP_200_OK)
