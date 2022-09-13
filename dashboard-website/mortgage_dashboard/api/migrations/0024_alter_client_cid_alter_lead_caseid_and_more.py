# Generated by Django 4.0.4 on 2022-09-13 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_client_cid_alter_lead_caseid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=702206, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=444853, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=531550, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=307909, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=908165, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=489216, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='nmlsID',
            field=models.IntegerField(default=310631, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=148347, unique=True),
        ),
    ]
