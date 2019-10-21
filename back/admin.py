from django.contrib import admin
from .models import Shelter, Volonteer

# Register your models here.
class ShelterAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image', 'urlVK')
    search_fields = ['title', 'urlVK']
    
class VolonteerAdmin(admin.ModelAdmin):
    list_display = ('vorname', 'nachname', 'allergy', 'urlVK')
    search_fields = ['vorname', 'urlVK', 'nachname']

admin.site.register(Shelter, ShelterAdmin)
admin.site.register(Volonteer, VolonteerAdmin)