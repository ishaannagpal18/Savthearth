from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, User


class Exhibition(models.Model):
    name = models.CharField(max_length=100, blank=False)
    logo1 = models.ImageField(upload_to="Exhibition", blank=False)
    logo2 = models.ImageField(upload_to="Exhibition", blank=False)
    image1 = models.ImageField(upload_to="Exhibition", blank=False)
    image2 = models.ImageField(upload_to="Exhibition", blank=False)
    image3 = models.ImageField(upload_to="Exhibition", blank=False)
    image4 = models.ImageField(upload_to="Exhibition", blank=False)
    image5 = models.ImageField(upload_to="Exhibition", blank=False)
    video = models.CharField(max_length=100, blank=False)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name


class contactlist(models.Model):
    address = models.TextField(max_length=800, blank=False)
    email = models.CharField(max_length=100, blank=False)
    phone = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return self.email

class contactform(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    subject = models.CharField(max_length=400, blank=False)
    message = models.TextField(max_length=800, blank=False)
    def __str__(self):
        return self.email

class Subscribe(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return self.name
