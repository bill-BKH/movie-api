from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    # ---------------- function based views ----------------
    path('',views.movies), # info page and small api test with js
    # path('list/',views.movie_list),

    # ---------------- class based views ----------------
    path('list/',views.MovieListAPIView.as_view()),
    path('detail/<int:pk>/',views.MovieDetailAPIView.as_view()),


    path('genres/',views.GenreListAPIView.as_view()),
]
# urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])