# Generated by Django 3.2.12 on 2022-04-09 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cid', models.IntegerField(default=846587, unique=True)),
                ('fname', models.CharField(max_length=40, null=True)),
                ('lname', models.CharField(max_length=40, null=True)),
                ('email', models.CharField(max_length=120, null=True)),
                ('phone_num', models.CharField(max_length=16, null=True)),
            ],
        ),
    ]
