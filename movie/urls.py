from django.urls import path
from . import views


urlpatterns = [
    # ---------------- function based views ----------------
    path('',views.movies), # info page and small api test with js
    path('list/',views.movie_list),
    # ---------------- class based views ----------------
    path('rest/',views.movie_list_2.as_view()),
    path('detail/<int:pk>/',views.movie_detail.as_view()),
    path('destroy/<int:pk>/',views.movie_delete.as_view()),
]