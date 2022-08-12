from rest_framework import serializers
from django.contrib.auth.models import User

from pizza.models import Pizza, Ingredient, Order

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','url', 'username', 'password', 'email', 'is_staff', 'is_active', 'is_superuser')

class PizzaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pizza
        fields = ('id','image', 'name', 'price', 'ingredients')
        depth = 1

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id','name', 'price')

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('id','pizzas', 'user', 'date', 'price')