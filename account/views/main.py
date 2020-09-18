import six
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode
from rest_framework import status, generics
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from account.serializers import *


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name
        })


class SignUpView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "success"})
        return Response(serializer.errors)


class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return six.text_type(user.pk) + six.text_type(timestamp) + six.text_type(user.is_active)


def verify_email(request):
    mixed_token = request.GET['token']
    splited_token = mixed_token.split(".")
    uidb64 = splited_token[0]
    token = splited_token[1]
    account_activation_token = AccountActivationTokenGenerator()
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('/success')
    else:
        return redirect('/failed')


def reset_password(request):
    if request.method == 'GET':
        try:
            mixed_token = request.GET['token']
            splited_token = mixed_token.split(".")
            uidb64 = splited_token[0]
            token = splited_token[1]
            password_reset_token = PasswordResetTokenGenerator()
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

        except:
            return redirect('/failed')

        if user is not None and password_reset_token.check_token(user, token):
            return render(request, 'main/reset-password.html')

        return redirect('/failed')

    elif request.method == 'POST':
        url = request.POST['token'].split("=")
        mixed_token = url[1]
        password = request.POST['password']
        splited_token = mixed_token.split(".")
        uidb64 = splited_token[0]
        token = splited_token[1]
        password_reset_token = PasswordResetTokenGenerator()
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and password_reset_token.check_token(user, token):
            user.set_password(password)
            user.save()
            return redirect('/login')
        else:
            return redirect('/failed')


class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():

            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"status": "failed", "message": "Old password is wrong"},
                                status=status.HTTP_400_BAD_REQUEST)

            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'message': 'Password updated successfully',
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
