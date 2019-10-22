from django.contrib import admin
from .models import Shelter, Volonteer, Task

# Register your models here.
class ShelterAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image', 'urlVK')
    search_fields = ['title', 'urlVK']
    
class VolonteerAdmin(admin.ModelAdmin):
    list_display = ('vorname', 'nachname', 'allergy', 'urlVK')
    search_fields = ['vorname', 'urlVK', 'nachname']

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'place', 'date')
    list_display = ('title', 'place', 'date', 'shelter')

admin.site.register(Shelter, ShelterAdmin)
admin.site.register(Volonteer, VolonteerAdmin)
admin.site.register(Task, TaskAdmin)