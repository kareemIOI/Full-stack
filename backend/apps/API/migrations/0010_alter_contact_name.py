# Generated by Django 4.1.7 on 2023-04-15 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("API", "0009_rename_iflogged_user_if_logged_remove_user_phone_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contact",
            name="name",
            field=models.CharField(default="", max_length=255),
        ),
    ]