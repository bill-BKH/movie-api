from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Genre(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title


class Director(models.Model):
    name = models.CharField(max_length=120)

class Movie(models.Model):
    title = models.CharField(max_length=256)
    geners = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True, blank=True)
    year = models.PositiveIntegerField()
    image = models.ImageField(upload_to='movie', null=True,blank=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True)
    rating = models.PositiveIntegerField(null=True,blank=True)
    story = models.TextField(null=True,blank=True)
    director = models.ForeignKey(Director,on_delete=models.SET_NULL,null=True,blank=True)
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'فیلم'
        verbose_name_plural = 'فیلم ها'

