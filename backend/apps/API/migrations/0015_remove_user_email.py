# Generated by Django 4.1.7 on 2023-04-19 21:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("API", "0014_alter_user_email"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="email",
        ),
    ]
