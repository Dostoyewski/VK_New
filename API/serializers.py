from rest_framework import serializers
from back.models import Volonteer, Shelter
# Create your views here.

class VolonteerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volonteer
        fields = '__all__'


class ShelterDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shelter
        fields = '__all__'