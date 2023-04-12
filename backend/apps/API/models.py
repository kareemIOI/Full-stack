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
        ('teacher', 'teacher'),
        ('Parent', 'Parent'),
        ('Admain', 'Admain'),
    )
    
    RELIGION_STATUS = (
        ('Muslim', 'Muslim'),
        ('Christian', 'Christian'),
        ('Jewish', 'Jewish'),
    )

    username = models.CharField(max_length=255, null=False, default = '-')
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=128,  default = '-')
    first_name  = models.CharField(max_length=255,default = '-')
    last_name = models.CharField(max_length=255,  default = '-')
    address = models.CharField(max_length=255, default = '-')
    Phone = models.CharField(max_length=10, default='-')
    father_name = models.CharField(max_length=255, default = '-')
    mother_name = models.CharField(max_length=255, default = '-' )
    short_bio = models.CharField(max_length=200, default = '-')
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES,  default = '-')
    blood = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, default = '-')
    status = models.CharField(max_length=15, choices=STATUS_USER,  default = '-')
    religion = models.CharField(max_length=10, choices=RELIGION_STATUS, default = '-')
    ifLogged = models.BooleanField(default=False)

    def __str__(self):
        return "{} - {}".format(self.username, self.email)
