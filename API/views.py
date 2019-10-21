from django.shortcuts import render
from rest_framework import generics
from API.serializers import *
from back.models import Volonteer, Shelter
from API.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated, IsAdminUser
# Create your views here.

class VolonteerCreateView(generics.CreateAPIView):
    serializer_class = VolonteerDetailSerializer
    permission_classes = (IsOwnerOrReadOnly, )

class VolonteerView(generics.ListAPIView):
    serializer_class = VolonteerDetailSerializer
    queryset = Volonteer.objects.all()
    permission_classes = (IsOwnerOrReadOnly, )

class VolonteerDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = VolonteerDetailSerializer
    queryset = Volonteer.objects.all()


#Мероприятия
class ShelterCreateView(generics.CreateAPIView):
    serializer_class = ShelterDetailSerializer

class ShelterListView(generics.ListAPIView):
    serializer_class = ShelterDetailSerializer
    queryset = Shelter.objects.all()

class ShelterDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = ShelterDetailSerializer
    queryset = Shelter.objects.all()

#Таски
class TaskCreateView(generics.CreateAPIView):
    serializer_class = TaskDetailSerializer

class TaskListView(generics.ListAPIView):
    serializer_class = TaskDetailSerializer
    queryset = Task.objects.all()

class TaskDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = TaskDetailSerializer
    queryset = Task.objects.all()