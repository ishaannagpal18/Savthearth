# Generated by Django 4.0.1 on 2022-08-29 15:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App_Login', '0011_profile_is_qualified_profile_task1_image1_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='task1_image1',
            new_name='image1',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='task1_image2',
            new_name='image2',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='task1_image3',
            new_name='image3',
        ),
    ]
