# Generated by Django 4.0.3 on 2022-11-29 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_customuser_bio'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, default='', max_length=254),
        ),
    ]