# Generated by Django 3.2.6 on 2022-11-16 22:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('new_users', '0002_auto_20221111_0037'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='nmlsID',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='ssn',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='uID',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='is_superuser',
            field=models.IntegerField(default=0),
        ),
    ]
