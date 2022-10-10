# Generated by Django 4.0.6 on 2022-10-08 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_borrower_caseid_alter_borrower_creditscore_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=573611, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=588704, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=80882, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=218556, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=395330, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=540268, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=921183, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=102965, unique=True, verbose_name='ID'),
        ),
    ]
