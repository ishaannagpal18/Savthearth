from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, User


#To Automatically create one to one objects
from django.db.models.signals import post_save
from django.dispatch import receiver




# Create your models here.
class Subscriber(models.Model):
    subs = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    order_id = models.CharField(max_length=100, blank=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True)
    paid = models.BooleanField(default=False)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    auth_token = models.CharField(max_length=100, blank=False)
    fullname = models.CharField(max_length=100, blank=False)
    dob = models.CharField(max_length=20, blank=False)
    email = models.EmailField(max_length=20, blank=False)
    # GENDER_CHOICES = (
    #     (u'M', u'Male'),
    #     (u'F', u'Female'),
    #     (u'T', u'Transgender'),
    # )
    # gender = models.CharField(max_length=3, choices=GENDER_CHOICES, blank=False)
    student_class = models.CharField(max_length=12, blank=False)
    school = models.CharField(max_length=30, blank=False)
    score =  models.CharField(max_length=12, blank=True)
    contact = models.CharField(max_length=12, blank=False)
    acontact = models.CharField(max_length=12, blank=False)
    country = models.CharField(max_length=20, blank=False)
    city = models.CharField(max_length=20, blank=False)
    image1 = models.ImageField(upload_to="Task1" ,blank=True )
    image2 = models.ImageField(upload_to="Task1" ,blank=True )
    image3 = models.ImageField(upload_to="Task1" ,blank=True )
    insta_story = models.ImageField(upload_to="Task2" ,blank=True )
    is_qualified = models.BooleanField(default=False)
    test_attempted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + "'s Profile"


class School_Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    school_name = models.CharField(max_length=100, blank=False)
    city = models.CharField(max_length=20, blank=False)
    country = models.CharField(max_length=20, blank=False)
    principal_name = models.CharField(max_length=100, blank=False)
    teacher_incharge = models.CharField(max_length=100, blank=True)
    mobile_number = models.CharField(max_length=12, blank=False)
    landline_number = models.CharField(max_length=12, blank=False)
    student_strength = models.IntegerField(blank=False)
    email = models.EmailField(max_length=100, blank=False)
    Identification_assessment_and_planning_of_site = models.BooleanField(default=False)
    Written_permission_from_the_owner_and_gathering_of_materials = models.BooleanField(default=False)
    Selecting_and_Purchasing_Your_Trees = models.BooleanField(default=False)
    Caring_for_Trees_After_Planting = models.BooleanField(default=False)
    Weekly_inspection_of_trees_for_disease_insects_or_vandalism = models.BooleanField(default=False)
    Planning_for_setting_up_school_garden_and_Committee = models.BooleanField(default=False)
    Determine_Goals_for_Garden_and_gathering_of_materials = models.BooleanField(default=False)
    Funding_and_Information_Sources = models.BooleanField(default=False)
    Quiz_or_Olympiad = models.BooleanField(default=False)
    is_qualified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + "'s Profile"
