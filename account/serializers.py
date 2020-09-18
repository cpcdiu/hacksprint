from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from account.models import User, Profile, WorkExperience, Education, Company


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    def create(self, validated_data):
        first_name = validated_data.pop('first_name', '')
        last_name = validated_data.pop('last_name', '')
        username = validated_data.pop('username')
        email = validated_data.pop('email', '')
        password = validated_data.pop('password')

        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email,
                                        password=password, is_active=False)
        return user


class PublicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username']


class ChangePasswordSerializer(serializers.Serializer):
    model = User
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'

    def create(self, validated_data):
        position = validated_data.pop('position')
        company = validated_data.pop('company')
        started_at = validated_data.pop('started_at')
        end_date = validated_data.pop('end_date')
        user = self.context['user']

        work_experience = WorkExperience.objects.create(
            position=position, company=company, started_at=started_at, end_date=end_date, user=user)
        return work_experience

    def update(self, instance, validated_data):
        instance.position = validated_data.pop('position')
        instance.company = validated_data.pop('company')
        instance.started_at = validated_data.pop('started_at')
        instance.end_date = validated_data.pop('end_date')
        instance.save()
        return instance


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

    def create(self, validated_data):
        program = validated_data.pop('program')
        institution = validated_data.pop('institution')
        started_at = validated_data.pop('started_at')
        end_date = validated_data.pop('end_date')
        user = self.context['user']

        education = Education.objects.create(
            program=program, institution=institution, started_at=started_at, end_date=end_date, user=user)
        return education

    def update(self, instance, validated_data):
        instance.program = validated_data.pop('program')
        instance.institution = validated_data.pop('institution')
        instance.started_at = validated_data.pop('started_at')
        instance.end_date = validated_data.pop('end_date')
        instance.save()
        return instance


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['address', 'phone', 'website', 'user', 'avatar']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        address = validated_data.pop('address')
        phone = validated_data.pop('phone')
        website = validated_data.pop('website')
        avatar = validated_data.pop('avatar')
        user = User.objects.create(user_data)
        profile = Profile.objects.create(
            user=user, address=address, phone=phone, website=website, avatar=avatar)
        return profile

    def update(self, instance, validated_data):
        address = validated_data.pop('address')
        phone = validated_data.pop('phone')
        website = validated_data.pop('website')
        avatar = validated_data.pop('avatar')

        # profile = instance.profile
        instance.address = address
        instance.phone = phone
        instance.website = website
        instance.avatar = avatar

        instance.save()
        return instance


class TimelineSerializer(serializers.Serializer):
    profile = ProfileSerializer()
    work = WorkExperienceSerializer(many=True)


class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class CompanySerializer(serializers.ModelSerializer):
    user = PublicUserSerializer(read_only=True)

    class Meta:
        model = Company
        fields = '__all__'
