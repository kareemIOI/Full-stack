from django.db import models
from django.utils import timezone
class User(models.Model):
    
    GENDER_CHOICES = (
        ('M', 'male'),
        ('F', 'female'),
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
    
    STATUS_USER = (
        ('Student', 'Student'),
        ('Teacher', 'Teacher'),
        ('Parent', 'Parent'),
        ('Admin', 'Admin'),
    )
    
    RELIGION_STATUS = (
        ('Muslim', 'Muslim'),
        ('Christian', 'Christian'),
        ('Jewish', 'Jewish'),
    )

    username = models.CharField(max_length=255, null=False, default = 'none')
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=128,  default = 'none')
    first_name  = models.CharField(max_length=255,default = 'none')
    last_name = models.CharField(max_length=255,  default = 'none')
    address = models.CharField(max_length=255, default = '')
    Phone = models.CharField(max_length=10, default='xxxxxxxxxx')
    father_name = models.CharField(max_length=255, default = 'none')
    mother_name = models.CharField(max_length=255, default = 'none' )
    short_bio = models.CharField(max_length=200, default = 'none')
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES,  default = 'none')
    blood = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, default = '')
    status = models.CharField(max_length=15, choices=STATUS_USER,  default = 'none')
    religion = models.CharField(max_length=10, choices=RELIGION_STATUS, )
    ifLogged = models.BooleanField(default=False)

    def __str__(self):
        return "{} - {}".format(self.username, self.email)
