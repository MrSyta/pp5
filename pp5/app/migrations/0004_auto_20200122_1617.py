# Generated by Django 3.0.2 on 2020-01-22 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20200122_1600'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.TextField(default=None, max_length=500),
        ),
    ]