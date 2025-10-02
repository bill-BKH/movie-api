from django.shortcuts import render
from .models import Movie,Genre
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView,ListAPIView,DestroyAPIView,RetrieveUpdateDestroyAPIView
from django.views.decorators.csrf import csrf_exempt

from .serializers import MovieSerializer, OneMovieSerializer,GenreSerializer

# ---------------- function based views ----------------
def movies(request):
    return render(request,'movie.html')


@api_view()
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


# ---------------- class based views ----------------
class MovieListAPIView(ListCreateAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class MovieDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = OneMovieSerializer

    
    # @csrf_exempt
    # def delete(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     instance.delete()
    #     return super().delete(request, *args, **kwargs)


class GenreListAPIView(ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer