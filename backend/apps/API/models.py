from django.db import models

# Create your models here.

class AddUsers(models.Model):


    GENDER_CJOICES = (
        ('M', 'male'),
        ('F', 'female'),
    )
    
    BLOOD_GROUP_CHOICES = (
        ('A-', 'A-'),
        ('A+', 'A+'),
        ('B-', 'B-'),
        ('B+', 'B+'),
        ('AB-, AB-'),
        ('AB+','AB+'),
        ('O+','O+'),
        ('O-','O-'),
    )
    
    STATUS_USER = (
        ('Student','Student'),
        ('Teacher','Teacher'),
        ('Parent','Parent'),
        ('Admain','Admain'),
    )

    RELIGION_STATUS = (
        ('Muslim','Muslim'),
        ('Chritian','Chritian'),
        ('Jewish','Jewish'),
    )

    first_name  = models.CharField(max_length=255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField()
    password = models.CharField(max_length = 30)
    address = models.CharField(max_length = 255)
    Phone = models.CharField(max_length = 10)
    father_name = models.CharField(max_length = 255)
    mother_name = models.CharField(max_length = 255)
    short_bio = models.CharField(max_length = 200)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name + " " + self.last_name
