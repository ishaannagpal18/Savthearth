# Generated by Django 3.2.7 on 2022-04-28 08:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App_Login', '0006_auto_20220428_0740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='student_class',
            field=models.CharField(max_length=12),
        ),
    ]
