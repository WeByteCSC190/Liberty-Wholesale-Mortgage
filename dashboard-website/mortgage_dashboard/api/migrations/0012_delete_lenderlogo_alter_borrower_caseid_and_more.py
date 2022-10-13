# Generated by Django 4.0.3 on 2022-10-13 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_merge_20221013_0426'),
    ]

    operations = [
        migrations.DeleteModel(
            name='LenderLogo',
        ),
        migrations.AlterField(
            model_name='borrower',
            name='caseId',
            field=models.IntegerField(default=732432, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='borrower',
            name='creditScore',
            field=models.IntegerField(default=438, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='client',
            name='cID',
            field=models.IntegerField(default=345458, unique=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='caseId',
            field=models.IntegerField(default=52738, primary_key=True, serialize=False, unique=True, verbose_name='Case ID'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='creditScore',
            field=models.IntegerField(default=106440, unique=True, verbose_name='Credit Score'),
        ),
        migrations.AlterField(
            model_name='lender',
            name='website',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Website'),
        ),
        migrations.AlterField(
            model_name='milestone',
            name='id',
            field=models.IntegerField(default=131738, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='resources',
            name='id',
            field=models.IntegerField(default=187540, primary_key=True, serialize=False, unique=True, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.IntegerField(default=618728, unique=True, verbose_name='ID'),
        ),
    ]
