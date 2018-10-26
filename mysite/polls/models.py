import datetime

from django.db import models
from django.utils import timezone

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text
    def was_published_recently(self):
        now = timezone.now()
        return  now - datetime.timedelta(days=1) <= self.pub_date <= now


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text

class Product(models.Model):
    product_text = models.CharField(max_length=300)
    price_value = models.IntegerField(max_length=200)
    #url_text = models.CharField(max_length=500)
    def __str__(self):
        return self.product_text


class Producto(models.Model):
    product_text = models.CharField(max_length=300)
    price_value= models.DecimalField(max_digits=10, decimal_places=2)
    #price_value = models.IntegerField(max_length=200)
    url_text = models.CharField(max_length=500)
    def __str__(self):
        return self.product_text