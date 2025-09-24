from django.db import models

# Create your models here.
class Geners(models.Model):
    title = models.CharField(max_length=128)


class Movie(models.Model):
    title = models.CharField(max_length=256)
    geners = models.ManyToManyField(Geners)
    year = models.CharField(max_length=4)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'فیلم'
        verbose_name_plural = 'فیلم ها'