from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from . models import *

class UserSerializer(serializers.ModelSerializer):

    code = serializers.ReadOnlyField()
    email = serializers.ReadOnlyField()
    name = serializers.ReadOnlyField()
    last_name = serializers.ReadOnlyField()
    degree = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['code', 'email', 'name', 'last_name', 'degree', 'avatar', 'cover_image', 'date_joined']

    def get_degree(self, obj):
        if obj.degree:
            return obj.degree.name_depart
        return None
        

# Obtener diferentes cosas del token, indicar que cosas queremos mandar por el token
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        # Obtener el token y extender el método base para incluir más información en el token
        token = super().get_token(user)

        # Agregar información personalizada al token
        token['code'] = user.code
        token['email'] = user.email
        token['name'] = user.name
        token['last_name'] = user.last_name
        token['degree'] = user.degree.id # Usar solo el ID del departamento
        token['avatar'] = user.avatar.url # Agrega la URL del avatar
        token['is_staff'] = user.is_staff # Indica si el usuario es personal administrativo

        return token
    
# El registro del usuario
class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['code', 'email', 'name', 'last_name', 'degree', 'password']

# Serializador para la entidad 'Department'
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        # Incluye todos los campos del modelo en el serializador
        fields = '__all__'