from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from apps.account.models import *


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email', 'password', 'first_name', 'last_name', 'gender', 'age', 'phone', 'dni', 'birthday', 'enterprise',
            'headquarter', 'admission_date', 'departure_date')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'], first_name=validated_data['first_name'],
                                   last_name=validated_data['last_name'], gender=validated_data['gender'],
                                   age=validated_data['age'],
                                   phone=validated_data['phone'], dni=validated_data['dni'],
                                   birthday=validated_data['birthday'], enterprise=validated_data['enterprise'],
                                   headquarter=validated_data['headquarter'], area=validated_data['area'],
                                   profile=validated_data['profile'], admission_date=validated_data['admission_date'],
                                   departure_date=validated_data['departure_date'])
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(error_messages={"blank": "Este campo es obligatorio"})
    password = serializers.CharField(error_messages={"blank": "Este campo es obligatorio"})

    def validate(self, attrs):
        self.user_cache = authenticate(email=attrs["email"], password=attrs["password"])
        if not self.login_condition(self.user_cache):
            raise serializers.ValidationError("Inicio de Sesión Invalido")
        else:
            return attrs

    def get_user(self):
        return self.user_cache

    def login_condition(self, user):
        if not user.is_enabled:
            return False
        return user


class RetrieveUserSerializer(serializers.ModelSerializer):
    name_enterprise = serializers.CharField()

    class Meta:
        model = User
        fields = (
            'id', 'email', 'first_name', 'last_name', 'phone', 'gender', 'photo', 'created_at', 'modified_at',
            'age', 'birthday', 'dni', 'enterprise', 'headquarter', 'admission_date',
            'departure_date', 'is_enabled', 'name_enterprise')
        read_only_fields = ('id', 'email')
