# Generated by Django 3.2.12 on 2022-04-26 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_anouncements_files_media_milestone_news_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=830899, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=513195, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=958878, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=49542, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=780395, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='nmlsID',
            field=models.IntegerField(default=860876, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=223048, unique=True),
        ),
    ]
