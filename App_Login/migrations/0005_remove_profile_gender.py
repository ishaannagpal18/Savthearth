# Generated by Django 3.2.7 on 2022-04-26 11:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App_Login', '0004_auto_20220106_1333'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='gender',
        ),
    ]
