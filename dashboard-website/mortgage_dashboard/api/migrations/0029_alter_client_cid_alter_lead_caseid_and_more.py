# Generated by Django 4.0.4 on 2022-09-13 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_alter_client_cid_alter_lead_caseid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=864771, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=164573, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=33781, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=953564, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=871759, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=511569, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='nmlsID',
            field=models.IntegerField(default=338158, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=600652, unique=True),
        ),
    ]
