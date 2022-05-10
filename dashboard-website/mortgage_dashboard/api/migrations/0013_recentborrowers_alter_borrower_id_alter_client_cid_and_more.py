# Generated by Django 4.0.3 on 2022-05-09 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_borrower_status_remove_lead_creditscore_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecentBorrowers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(blank=True, max_length=10, null=True, verbose_name='Date')),
                ('fname', models.CharField(blank=True, max_length=40, null=True, verbose_name='First Name')),
                ('lname', models.CharField(blank=True, max_length=40, null=True, verbose_name='Last Name')),
            ],
        ),
        migrations.AlterField(
            model_name='borrower',
            name='id',
            field=models.IntegerField(default=810252, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=365273, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='fico',
            field=models.IntegerField(default=801627, unique=True, verbose_name='Fico Score'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='id',
            field=models.IntegerField(default=219884, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=382025, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=389766, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=326259, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='nmlsID',
            field=models.IntegerField(default=7042, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=210079, unique=True),
        ),
    ]
