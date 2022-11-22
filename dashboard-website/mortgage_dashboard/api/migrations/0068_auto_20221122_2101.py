# Generated by Django 3.2.6 on 2022-11-22 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0067_auto_20221122_2043'),
    ]

    operations = [
        migrations.AddField(
            model_name='recyclingbin',
            name='status',
            field=models.CharField(default='Closed', max_length=40),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=227180, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=526014, unique=True),
        ),
        migrations.AlterField(
            model_name='file',
            name='id',
            field=models.IntegerField(default=564589, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=768598, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=327958, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='caseId',
            field=models.IntegerField(default=666075, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='trashID',
            field=models.IntegerField(default=277832, primary_key=True, serialize=False, unique=True, verbose_name='trash ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=688268, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='video',
            name='id',
            field=models.IntegerField(default=923899, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
    ]
