# Generated by Django 4.0.3 on 2022-11-23 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0052_alter_borrower_caseid_alter_borrower_creditscore_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=158235, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=887033, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=660677, unique=True),
        ),
        migrations.AlterField(
            model_name='files',
            name='id',
            field=models.IntegerField(default=753493, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='images',
            name='id',
            field=models.IntegerField(default=362169, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=356866, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=568552, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='caseId',
            field=models.IntegerField(default=941328, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='trashID',
            field=models.IntegerField(default=920211, primary_key=True, serialize=False, unique=True, verbose_name='trash ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=850835, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=171982, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='video',
            name='id',
            field=models.IntegerField(default=187846, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
    ]
