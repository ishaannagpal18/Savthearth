# Generated by Django 3.1 on 2022-09-29 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Index', '0017_auto_20220929_1004'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscribe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='subscriber',
        ),
    ]
