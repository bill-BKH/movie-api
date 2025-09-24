from rest_framework  import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id','title','year']
        # fields = "__all__"
        # exclude = ['year']


class OneMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # fields = ['title','year']
        fields = "__all__"
        # exclude = ['year']