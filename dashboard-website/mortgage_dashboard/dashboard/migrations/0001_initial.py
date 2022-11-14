# Generated by Django 3.2.6 on 2022-11-10 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dashboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('leads', models.CharField(max_length=120)),
                ('borrowers', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='RecentBorrowers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(blank=True, max_length=10, null=True, verbose_name='Date')),
                ('fname', models.CharField(blank=True, max_length=40, null=True, verbose_name='First Name')),
                ('lname', models.CharField(blank=True, max_length=40, null=True, verbose_name='Last Name')),
            ],
        ),
        migrations.CreateModel(
            name='RecentLeads',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(blank=True, max_length=10, null=True, verbose_name='Date')),
                ('fname', models.CharField(blank=True, max_length=40, null=True, verbose_name='First Name')),
                ('lname', models.CharField(blank=True, max_length=40, null=True, verbose_name='Last Name')),
            ],
        ),
    ]
