from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Caracteristiques(models.Model):
    id = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE, primary_key=True)
    niveau = models.IntegerField()
    attaque = models.IntegerField()
    defense = models.IntegerField()
    vitesse = models.IntegerField()
    precision = models.IntegerField()
    effet = models.IntegerField()

class Objet(models.Model):
    nom = models.TextField()
    pd = models.IntegerField()
    pa = models.IntegerField()
    typeobjet = models.IntegerField()    

class Equipement(models.Model):
    id = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE, primary_key=True)
    casque = models.IntegerField()
    armure = models.IntegerField()
    pantalon = models.IntegerField()
    chaussures = models.IntegerField()
    arme = models.IntegerField()

