# Generated by Django 4.1.4 on 2023-04-22 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0020_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=20),
        ),
    ]