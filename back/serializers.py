from rest_framework import serializers
from back.models import Task, Volonteer, Post


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    status = serializers.IntegerField(default=1)
    user_id = serializers.IntegerField(default=0)

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
        instance.user_id = validated_data.get('user_id', instance.user_id)
        instance.save()
        return instance

class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    description = serializers.CharField(default='Не задано')
    place = serializers.CharField(default='Не задано')
    custom = serializers.CharField(default='Не задано')
    lat = serializers.FloatField()
    lon = serializers.FloatField()

    def create(self, validated_data):
        """
        Create and return a new `Task` instance, given the validated data.
        """
        import vk_api
        login, password = '89994456233', 'test_hackaton'
        vk_session = vk_api.VkApi(login, password)
        try:
            vk_session.auth(token_only=True)
        except vk_api.AuthError as error_msg:
            print(error_msg)

        vk = vk_session.get_api()
        string = 'ALERT' + '\n' + 'Описание проблемы: ' + validated_data.get('description') + '\n' + 'Примерное местоположение: ' + validated_data.get('place') + '\n' + 'Особые приметы: ' + validated_data.get('custom')
        vk.wall.post(message=string, owner_id=-180054668, from_group=1, lat=validated_data.get('lat'), long=validated_data.get('lon'))
        return Post.objects.create(**validated_data)

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