from django.db import models
from django.utils import timezone


class User(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
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

    Username = models.CharField(max_length=255, null=False, default="")
    Email = models.EmailField(default = "")
    Password = models.CharField(max_length=128, default="")
    FirstName = models.CharField(max_length=255, default="")
    LastName = models.CharField(max_length=255, default="")
    Address = models.CharField(max_length=255, default="")
    Phone = models.CharField(max_length=20, default="")
    FatherName = models.CharField(max_length=255, default="", null=True)
    MotherName = models.CharField(max_length=255, default="", null=True)
    ShortBio = models.TextField(default="")
    Gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default = '')
    Blood = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, default="")
    Status = models.CharField(max_length=15, choices=STATUS_CHOICES, default="")
    Religon = models.CharField(max_length=10, choices=RELIGION_CHOICES, default="")
    if_logged = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.username + " " + self.email


class Contact(models.Model):
    name = models.CharField(max_length = 255, null = False, default = "")
    phone = models.CharField(max_length = 10, default = "")
    subject = models.TextField(default = "")
    message = models.TextField(default = "")
    
    def __str__(self):
        return "{} - {}".format(self.name, self.phone)