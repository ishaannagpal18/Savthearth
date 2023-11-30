# Generated by Django 3.2.7 on 2022-05-14 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Index', '0006_alter_exhibition_logo1'),
    ]

    operations = [
        migrations.CreateModel(
            name='Preview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('logo1', models.ImageField(upload_to='Preview')),
                ('logo2', models.ImageField(upload_to='Preview')),
                ('image1', models.ImageField(upload_to='Preview')),
                ('image2', models.ImageField(upload_to='Preview')),
                ('image3', models.ImageField(upload_to='Preview')),
                ('image4', models.ImageField(upload_to='Preview')),
                ('image5', models.ImageField(upload_to='Preview')),
                ('video', models.CharField(max_length=100)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]