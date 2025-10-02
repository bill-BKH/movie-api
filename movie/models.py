from django.db import models

# Create your models here.
class Genre(models.Model):
    title = models.CharField(max_length=128)


class Movie(models.Model):
    title = models.CharField(max_length=256)
    geners = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True, blank=True)
    year = models.CharField(max_length=4)
    image = models.ImageField(upload_to='movie', null=True,blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'فیلم'
        verbose_name_plural = 'فیلم ها'