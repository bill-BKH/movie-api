from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    # ---------------- function based views ----------------
    path('',views.movies), # info page and small api test with js
    # ---------------- class based views ----------------
    path('list/',views.MovieListAPIView.as_view()),
    path('create/',views.MovieCreateAPIView.as_view()),
    path('detail/<int:pk>/',views.MovieDetailAPIView.as_view()),
    path('delete/<int:pk>/',views.MovieDeleteAPIView.as_view()),
    path('update/<int:pk>/',views.MovieUpdateAPIView.as_view()),
    path('genres/',views.GenreListAPIView.as_view()),
]
# urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])