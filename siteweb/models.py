from django.db import models

# Create your models here.

class Users(models.Model):
    user = models.CharField(max_length=250)
    description = models.TextField()
    discordid = models.BigIntegerField()
    url = models.TextField()
