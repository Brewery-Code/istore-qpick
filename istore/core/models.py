from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    weight = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    material = models.CharField(max_length=255, blank=True, null=True)
    protection_against_moisture = models.BooleanField(default=False, blank=True, null=True)
    cable_length = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    complete_set = models.CharField(max_length=255)
    microphone = models.BooleanField(default=False, blank=True)
    color = models.CharField(max_length=50, blank=True, null=True)
    appointment = models.CharField(max_length=50, blank=True, null=True)
    end_conversation = models.BooleanField(default=False, blank=True)
    connector = models.CharField(max_length=255, blank=True, null=True)
    volume_control = models.BooleanField(default=False, blank=True)
    fastening_type = models.CharField(max_length=50, blank=True, null=True)
    headphone_type = models.CharField(max_length=50, blank=True, null=True)
    connection_type = models.CharField(max_length=70, blank=True, null=True)
    frequency_range = models.CharField(max_length=50, blank=True, null=True)
    sensitivity = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(upload_to='proudcts/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.name