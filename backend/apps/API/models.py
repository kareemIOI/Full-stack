from django.db import models
from django.utils import timezone


class User(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    BLOOD_GROUP_CHOICES = (
        ('A-', 'A-'),
        ('A+', 'A+'),
        ('B-', 'B-'),
        ('B+', 'B+'),
        ('AB-', 'AB-'),
        ('AB+', 'AB+'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    )

    STATUS_CHOICES = (
        ('Student', 'Student'),
        ('Teacher', 'Teacher'),
        ('Parent', 'Parent'),
        ('Admin', 'Admin'),
    )

    RELIGION_CHOICES = (
        ('Muslim', 'Muslim'),
        ('Christian', 'Christian'),
        ('Jewish', 'Jewish'),
    )

    username = models.CharField(max_length=255, null=False, default="")
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=128, default="")
    first_name = models.CharField(max_length=255, default="")
    last_name = models.CharField(max_length=255, default="")
    address = models.CharField(max_length=255, default="")
    phone_number = models.CharField(max_length=10, default="")
    father_name = models.CharField(max_length=255, default="", null=True)
    mother_name = models.CharField(max_length=255, default="", null=True)
    short_bio = models.TextField(default="")
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default="")
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, default="")
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default="")
    religion = models.CharField(max_length=10, choices=RELIGION_CHOICES, default="")
    if_logged = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return "{} - {}".format(self.username, self.email)


class Contact(models.Model):
    name = models.CharField(max_length = 255, null = False, default = "")
    phone = models.CharField(max_length = 10, default = "")
    subject = models.TextField(default = "")
    message = models.TextField(default = "")
    
    def __str__(self):
        return "{} - {}".format(self.name, self.phone)