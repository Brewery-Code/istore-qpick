# from django.db import models
# from core.models import Category, Cases, Headphones

# class CartItem(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)
#     product_id = models.PositiveIntegerField()
#     quantity = models.PositiveIntegerField(default=1)

#     def get_product(self):
#         if self.category.name.lower() == 'headphones':
#             return Headphones.objects.get(id=self.product_id)
#         elif self.category.name.lower() == 'cases':
#             return Cases.objects.get(id=self.product_id)
        

#     def __str__(self):
#         return f'{self.quantity} x {self.get_product().name}'
