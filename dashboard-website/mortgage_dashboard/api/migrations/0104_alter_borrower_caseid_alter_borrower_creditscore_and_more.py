# Generated by Django 4.0.3 on 2022-11-29 10:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0103_alter_borrower_caseid_alter_borrower_creditscore_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=476404, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=848966, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=575470, unique=True),
        ),
        migrations.AlterField(
            model_name='files',
            name='id',
            field=models.IntegerField(default=987707, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='images',
            name='id',
            field=models.IntegerField(default=181859, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=482922, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=158195, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='caseId',
            field=models.IntegerField(default=959009, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='trashID',
            field=models.IntegerField(default=190056, primary_key=True, serialize=False, unique=True, verbose_name='trash ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=256566, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=158275, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='video',
            name='id',
            field=models.IntegerField(default=798184, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
