from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Shelter(models.Model):
    title = models.CharField(max_length=200, unique=True)
    description = models.TextField(max_length=1200, blank=True, default='Не заполнено')
    image = models.ImageField(upload_to = 'images', default = 'images/no-img.jpg')
    members = models.TextField(max_length=500, blank=True, default='')
    urlVK = models.CharField(max_length=100, blank=True)

class Volonteer(models.Model):
    #Неизменяемые
    events_registered = models.CharField(max_length=1000, blank=True)
    karma = models.FloatField(default=0)
    location = models.CharField(max_length=30, default='Не указан')
    birth_date = models.DateField(null=True, blank=True)
    vorname = models.CharField(max_length=20, blank=True)
    nachname = models.CharField(max_length=50, blank=True)
    urlVK = models.CharField(max_length=100, blank=True)
    phone = PhoneNumberField(null=False, blank=True)
    #Есть ли у Вас медицинские противопоказания, аллергия, в т.ч. на животных?
    allergy = models.BooleanField(default=False)
    profile_image = models.ImageField(upload_to = 'images', default = 'images/no-img.jpg')
    shelters = models.CharField(max_length=1000, blank=True)
    card_id = models.CharField(max_length=6, default='AA1234')

class Task(models.Model):
    exp = models.FloatField(default=0)
    description = models.TextField(max_length=1200, blank=True, default='Не заполнено')
    place = models.TextField(max_length=1200, blank=True, default='Не заполнено')
    date = models.DateField(null=True, blank=True)
    shelter = models.IntegerField(blank=True)