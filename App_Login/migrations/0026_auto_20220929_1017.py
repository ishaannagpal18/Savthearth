# Generated by Django 3.1 on 2022-09-29 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App_Login', '0025_auto_20220929_1003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school_profile',
            name='student_strength',
            field=models.IntegerField(),
        ),
    ]
