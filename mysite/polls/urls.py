from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
 # ex: /polls/
    path('', views.ProductoView.as_view(), name='product'),

    path('', views.IndexView.as_view(), name='index'),
    # ex: /polls/5/
    path('<int:producto_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    # ex: /polls/5/vote/
    path('precio/', views.precio, name='precio'),
    path('soup/', views.index1.as_view(), name='soup'),

]