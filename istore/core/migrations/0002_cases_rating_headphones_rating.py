# Generated by Django 5.0.7 on 2024-07-25 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cases',
            name='rating',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='headphones',
            name='rating',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
