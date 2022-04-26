# Generated by Django 3.2.12 on 2022-04-26 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20220426_0205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=97600, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=826941, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=387438, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=716018, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=944845, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='nmlsID',
            field=models.IntegerField(default=509875, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=772524, unique=True),
        ),
    ]
