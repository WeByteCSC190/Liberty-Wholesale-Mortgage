# Generated by Django 3.2.6 on 2022-11-17 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20221117_0839'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=776981, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=792961, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=83095, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=64459, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=825396, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='caseId',
            field=models.IntegerField(default=708613, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='trashID',
            field=models.IntegerField(default=450644, primary_key=True, serialize=False, unique=True, verbose_name='trash ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=881375, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
    ]
