# Generated by Django 4.0.3 on 2022-12-07 23:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0130_articles_alter_borrower_caseid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=997541, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=579155, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=832570, unique=True),
        ),
        migrations.AlterField(
            model_name='images',
            name='id',
            field=models.IntegerField(default=668169, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=458570, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=583039, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=433259, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.CreateModel(
            name='RecyclingBin',
            fields=[
                ('dataName', models.CharField(blank=True, max_length=30, null=True, verbose_name='Data Name')),
                ('caseId', models.IntegerField(default=157617, primary_key=True, serialize=False, unique=True, verbose_name='Case ID')),
                ('date', models.DateTimeField(verbose_name='Date')),
                ('fName', models.CharField(blank=True, max_length=40, null=True)),
                ('lName', models.CharField(blank=True, max_length=40, null=True)),
                ('creditScore', models.IntegerField(default=454016, verbose_name='Credit Score')),
                ('email', models.EmailField(max_length=254, verbose_name='Email Address')),
                ('phone_num', models.CharField(max_length=16, null=True, verbose_name='Phone Number')),
                ('status', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.status')),
            ],
        ),
    ]