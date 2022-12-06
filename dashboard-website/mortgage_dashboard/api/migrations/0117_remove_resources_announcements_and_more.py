# Generated by Django 4.0.3 on 2022-12-05 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0116_merge_20221204_0449'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resources',
            name='announcements',
        ),
        migrations.RemoveField(
            model_name='resources',
            name='files',
        ),
        migrations.RemoveField(
            model_name='resources',
            name='media',
        ),
        migrations.RemoveField(
            model_name='resources',
            name='news',
        ),
        migrations.RemoveField(
            model_name='resources',
            name='video',
        ),
        migrations.RemoveField(
            model_name='client',
            name='resources',
        ),
        migrations.RemoveField(
            model_name='files',
            name='file',
        ),
        migrations.RemoveField(
            model_name='lead',
            name='resources',
        ),
        migrations.RemoveField(
            model_name='recyclingbin',
            name='resources',
        ),
        migrations.RemoveField(
            model_name='video',
            name='video',
        ),
        migrations.AddField(
            model_name='files',
            name='filename',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='files',
            name='link',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='video',
            name='link',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=996702, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=708473, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=121511, unique=True),
        ),
        migrations.AlterField(
            model_name='files',
            name='date_uploaded',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='files',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='images',
            name='id',
            field=models.IntegerField(default=356353, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=153100, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=334684, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='caseId',
            field=models.IntegerField(default=911774, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='recyclingbin',
            name='trashID',
            field=models.IntegerField(default=83188, primary_key=True, serialize=False, unique=True, verbose_name='trash ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=731394, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='video',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.DeleteModel(
            name='Anouncements',
        ),
        migrations.DeleteModel(
            name='Resources',
        ),
    ]