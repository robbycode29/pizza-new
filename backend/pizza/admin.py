# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from pizza.models import Pizza, Ingredient, Order, PizzaIngredient

@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'image')
    list_filter = ('name', 'price', 'image')
    search_fields = ('name', 'price', 'image')
    ordering = ('name', 'price', 'image')

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    list_filter = ('name', 'price')
    search_fields = ('name', 'price')
    ordering = ('name', 'price')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'pizzas', 'price', 'date')
    list_filter = ('user', 'pizzas', 'price', 'date')
    search_fields = ('user', 'pizzas', 'price', 'date')
    ordering = ('user', 'pizzas', 'price', 'date')

@admin.register(PizzaIngredient)
class PizzaIngredientAdmin(admin.ModelAdmin):
    list_display = ('pizza', 'ingredient')
    list_filter = ('pizza', 'ingredient')
    search_fields = ('pizza', 'ingredient')
    ordering = ('pizza', 'ingredient')

