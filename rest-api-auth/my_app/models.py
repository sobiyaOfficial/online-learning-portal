from django.db import models
from django.contrib.auth.models import AbstractUser
class StaffUser(AbstractUser):
    phone = models.CharField(blank=True, max_length=15, default='')
    title = models.CharField(blank=True, max_length=50, default='')
 
