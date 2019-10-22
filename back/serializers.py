from rest_framework import serializers
from back.models import Task, Volonteer


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    status = serializers.IntegerField(default=1)

    def create(self, validated_data):
        """
        Create and return a new `Task` instance, given the validated data.
        """
        return Task.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Task` instance, given the validated data.
        """
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance

class VolonteerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    allergy = serializers.BooleanField(default=True)

    def create(self, validated_data):
        """
        Create and return a new `Volonteer` instance, given the validated data.
        """
        return Volonteer.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Volonteer` instance, given the validated data.
        """
        instance.allergy = validated_data.get('allergy', instance.allergy)
        instance.save()
        return instance