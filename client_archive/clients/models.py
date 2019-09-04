from django.db import models
from django.contrib.auth.models import User



class Client(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.EmailField(max_length=100, blank=False)
    project = models.CharField(max_length=500, default=False, blank=False)
    tech_stack = models.CharField(max_length=500, default=False, blank=False)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="clients", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=False)


