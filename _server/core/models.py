from django.db import models

class Memo(models.Model):
    name = models.TextField()
    length = models.TextField()
