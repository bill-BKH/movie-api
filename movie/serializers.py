from rest_framework  import serializers
from .models import Movie,Genre

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['title']

class MovieSerializer(serializers.ModelSerializer):
    geners = GenreSerializer()
    class Meta:
        model = Movie
        # fields = ['id','title','year']
        fields = "__all__"
        # exclude = ['year']


class OneMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # fields = ['title','year']
        # exclude = ['year']
        fields = "__all__"
