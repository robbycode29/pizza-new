# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# class Pizza(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     price = models.DecimalField(max_digits=5, decimal_places=2)
#     description = models.TextField()
#     # image = models.ImageField(upload_to='pizza_images')
#     ingredients = models.ManyToManyField('Ingredient', through='PizzaIngredient')
#     isExpanded = False
#     inCart = False
#     nrOfItemsInCart = 0
#     extraPrice = 0
#     # extraIngredients = models.ManyToManyField('Ingredient', through='PizzaExtraIngredient')


#     def __str__(self):
#         return self.name


# class Ingredient(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     price = models.DecimalField(max_digits=5, decimal_places=2)
#     checked = False

#     def __str__(self):
#         return self.name

# class Order(models.Model): 
#     id = models.AutoField(primary_key=True)
#     pizzas = models.ManyToManyField('Pizza', through='OrderPizza')
#     price = models.DecimalField(max_digits=5, decimal_places=2)
#     date = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return str(self.id)

# class OrderPizza(models.Model):
#     id = models.AutoField(primary_key=True)
#     pizza = models.ForeignKey('Pizza', on_delete=models.CASCADE)
#     order = models.ForeignKey('Order', on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.id)

# class PizzaIngredient(models.Model):
#     id = models.AutoField(primary_key=True)
#     pizza = models.ForeignKey('Pizza', on_delete=models.CASCADE)
#     ingredient = models.ForeignKey('Ingredient', on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.id)

# # class PizzaExtraIngredient(models.Model):
# #     id = models.AutoField(primary_key=True)
# #     pizza = models.ForeignKey('Pizza', on_delete=models.CASCADE)
# #     ingredient = models.ForeignKey('Ingredient', on_delete=models.CASCADE)

# #     def __str__(self):
# #         return str(self.id)