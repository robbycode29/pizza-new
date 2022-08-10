from .views import *
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
## In future we may wish to switch to alternate auth methods such as JWT/Token based methods to work from differnt session contexts to the backend

urlpatterns = [
    path('users/', UserList.as_view(),name='user_list')
]