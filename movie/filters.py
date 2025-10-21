
from django_filters import rest_framework as filters
from .models import Movie

class MovieFilter(filters.FilterSet):
    min_year = filters.NumberFilter(field_name="year", lookup_expr='gte')
    max_year = filters.NumberFilter(field_name="year", lookup_expr='lte')

    class Meta:
        model = Movie
        fields = ['geners','geners__title','year','rating']