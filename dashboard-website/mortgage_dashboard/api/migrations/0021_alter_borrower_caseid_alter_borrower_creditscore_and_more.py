# Generated by Django 4.0.3 on 2022-10-19 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_alter_borrower_caseid_alter_borrower_creditscore_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=298345, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=233423, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=594373, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=197111, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=202154, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=960153, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=51196, unique=True, verbose_name='ID'),
        ),
    ]