# Generated by Django 4.0.1 on 2022-08-30 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App_Login', '0013_alter_profile_image1_alter_profile_image2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='insta_story',
            field=models.ImageField(blank=True, upload_to='Task2'),
        ),
    ]