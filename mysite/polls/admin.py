from django.contrib import admin

# Register your models here.
from .models import Question,Producto

admin.site.register(Question)
admin.site.register(Producto)
