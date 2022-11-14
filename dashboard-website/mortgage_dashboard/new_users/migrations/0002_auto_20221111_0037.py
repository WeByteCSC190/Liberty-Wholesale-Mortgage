# Generated by Django 3.2.6 on 2022-11-11 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('new_users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='nmlsID',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='ssn',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='uId',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
    ]
