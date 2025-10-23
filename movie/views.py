from django.shortcuts import render
from .models import Movie, Genre
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import (
    ListAPIView,
    DestroyAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    CreateAPIView,
)
from django.views.decorators.csrf import csrf_exempt
from .serializers import MovieSerializer, OneMovieSerializer, GenreSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .permissions import IsOwnerOrReadOnly, IsSuperUser
from rest_framework_simplejwt.authentication import JWTAuthentication
from .pagination import SmallPagination
from django_filters.rest_framework import DjangoFilterBackend
from .filters import MovieFilter
from rest_framework.filters import SearchFilter,OrderingFilter

# ---------------- function based views ----------------
def movies(request):
    # print(dir(request))
    # print(request.user.is_authenticated)
    return render(request, "movie.html")


# ---------------- class based views ----------------
class MovieListAPIView(ListAPIView):
    queryset = Movie.objects.all()
    # permission_classes = [IsAuthenticated]
    serializer_class = MovieSerializer
    # pagination_class = SmallPagination
    filter_backends = [DjangoFilterBackend,SearchFilter,OrderingFilter]
    filterset_class = MovieFilter
    search_fields = ['title','story'] 
    ordering_fields = ['rating']
    ordering = ['-year']

class MovieCreateAPIView(CreateAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    # permission_classes = [IsAdminUser]


class MovieDetailAPIView(RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = OneMovieSerializer
    permission_classes = [AllowAny]


class MovieDeleteAPIView(DestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = OneMovieSerializer
    permission_classes = [IsSuperUser]


class MovieUpdateAPIView(UpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = OneMovieSerializer
    permission_classes = [IsOwnerOrReadOnly]


class GenreListAPIView(ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [JWTAuthentication]
