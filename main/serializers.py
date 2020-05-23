from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

from userpanel.models import Profile


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    def create(self, validated_data):
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email,
                                 password=password, is_active=False)
        Profile.objects.create(user=user)
        return user