# Generated by Django 4.0.3 on 2022-11-23 17:50

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Annoucements',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(verbose_name='Date')),
                ('content', models.TextField(blank=True, verbose_name='Content')),
            ],
        ),
        migrations.CreateModel(
            name='Anouncements',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField(blank=True, verbose_name='Description')),
                ('link', models.URLField(verbose_name='Website Address')),
            ],
        ),
        migrations.CreateModel(
            name='Bio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Borrower',
            fields=[
                ('caseId', models.IntegerField(default=758774, primary_key=True, serialize=False, unique=True, verbose_name='Case ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('fName', models.CharField(blank=True, max_length=40, null=True)),
                ('lName', models.CharField(blank=True, max_length=40, null=True)),
                ('creditScore', models.IntegerField(default=59661, unique=True, verbose_name='Credit Score')),
                ('email', models.EmailField(max_length=254, verbose_name='Email Address')),
                ('phone_num', models.CharField(max_length=16, null=True, verbose_name='Phone Number')),
            ],
        ),
        migrations.CreateModel(
            name='Files',
            fields=[
                ('file', models.FileField(null=True, upload_to='files_uploaded', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['doc', 'pdf', 'docx', 'txt'])])),
                ('date_uploaded', models.DateTimeField(default=django.utils.timezone.now)),
                ('id', models.IntegerField(default=339619, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('images', models.FileField(null=True, upload_to='images_uploaded', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['JPEG', 'GIF', 'PNG', 'JPG'])])),
                ('date_uploaded', models.DateTimeField(default=django.utils.timezone.now)),
                ('id', models.IntegerField(default=755304, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('caseId', models.IntegerField(default=694427, primary_key=True, serialize=False, unique=True, verbose_name='Case ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('fName', models.CharField(blank=True, max_length=40, null=True)),
                ('lName', models.CharField(blank=True, max_length=40, null=True)),
                ('creditScore', models.IntegerField(blank=True, null=True, verbose_name='Credit Score')),
                ('email', models.EmailField(max_length=254, verbose_name='Email Address')),
                ('phone_num', models.CharField(max_length=16, null=True, verbose_name='Phone Number')),
            ],
        ),
        migrations.CreateModel(
            name='Lender',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(blank=True, max_length=200, null=True, verbose_name='Company')),
                ('rating', models.CharField(blank=True, max_length=2, null=True, verbose_name='Rating')),
                ('programs', models.CharField(blank=True, max_length=200, null=True, verbose_name='Programs')),
                ('lender_FHA_ID', models.CharField(blank=True, max_length=20, null=True, verbose_name='Lender FHA ID')),
                ('lender_VA_ID', models.CharField(blank=True, max_length=20, null=True, verbose_name='Lender VA ID')),
                ('account_executive', models.CharField(blank=True, max_length=20, null=True, verbose_name='Account Executive')),
                ('phone_num', models.CharField(blank=True, max_length=30, null=True, verbose_name='Phone')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='Email')),
                ('website', models.URLField(blank=True, null=True, verbose_name='Website')),
            ],
        ),
        migrations.CreateModel(
            name='LenderLogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(blank=True, max_length=200, null=True, verbose_name='Company')),
                ('logo', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.URLField(verbose_name='Website Address')),
            ],
        ),
        migrations.CreateModel(
            name='MileStone',
            fields=[
                ('id', models.IntegerField(default=59220, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=40, null=True, verbose_name='Name')),
                ('desc', models.TextField(blank=True, verbose_name='Description')),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField(blank=True, verbose_name='Description')),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('status', models.CharField(blank=True, choices=[('Lead', (('Application_Complete', 'Application Complete'), ('Recently_Added', 'Recently Added'), ('Contacted', 'Contacted'), ('Declined', 'Declined'), ('In_Progress', 'In Progress'), ('Missing_Paperwork', 'Missing Paperwork'), ('Move_to_Borrower', 'Move to Borrower'))), ('Borrower', (('Application_Complete', 'Application Complete'), ('AUS_Cleared', 'AUS Cleared'), ('Initial_Disclosure_Sent', 'Initial Disclosure Sent'), ('Title_Ordered', 'Title Ordered'), ('Title_Recieved', 'Title Recieved'), ('Appraisal_Ordered', 'Appraisal Ordered'), ('Appraisal_Recieved', 'Appraisal Recieved'), ('Initial_Disclosure_Recieved', 'Initial Disclosure Recieved'), ('UW_Submitted', 'UW Submitted'), ('UW_Response', 'UW Response'), ('Pending_Conditions', 'Pending Conditions'), ('Cleared_To_Close', 'Cleared To Close'), ('Closing_Package_Sent', 'Closing Package Sent')))], max_length=40)),
                ('id', models.IntegerField(default=506947, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=40, null=True, verbose_name='Name')),
                ('desc', models.TextField(blank=True, verbose_name='Description')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('video', models.FileField(null=True, upload_to='videos_uploaded', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])),
                ('date_uploaded', models.DateTimeField(default=django.utils.timezone.now)),
                ('id', models.IntegerField(default=805768, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Resources',
            fields=[
                ('id', models.IntegerField(default=540267, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=40, null=True, verbose_name='Name')),
                ('announcements', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.anouncements')),
                ('files', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.files')),
                ('media', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.media')),
                ('news', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.news')),
                ('video', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.video')),
            ],
        ),
        migrations.CreateModel(
            name='RecyclingBin',
            fields=[
                ('dataName', models.CharField(blank=True, max_length=30, null=True, verbose_name='Data Name')),
                ('trashID', models.IntegerField(default=642822, primary_key=True, serialize=False, unique=True, verbose_name='trash ID')),
                ('caseId', models.IntegerField(default=429219, verbose_name='Case ID')),
                ('date', models.DateTimeField(verbose_name='Date')),
                ('fName', models.CharField(blank=True, max_length=40, null=True)),
                ('lName', models.CharField(blank=True, max_length=40, null=True)),
                ('creditScore', models.IntegerField(blank=True, null=True, verbose_name='Credit Score')),
                ('email', models.EmailField(max_length=254, verbose_name='Email Address')),
                ('phone_num', models.CharField(max_length=16, null=True, verbose_name='Phone Number')),
                ('resources', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.resources')),
            ],
        ),
        migrations.CreateModel(
            name='LoanProcessor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pTitle', models.CharField(blank=True, max_length=40, null=True)),
                ('mileStone', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.milestone')),
            ],
        ),
        migrations.CreateModel(
            name='LoanOfficer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('oTitle', models.CharField(blank=True, max_length=40, null=True)),
                ('mileStone', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.milestone')),
            ],
        ),
        migrations.CreateModel(
            name='LeadNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('leadnote', models.TextField(max_length=200, null=True, verbose_name='Note')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('lead', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.lead')),
            ],
        ),
        migrations.AddField(
            model_name='lead',
            name='resources',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.resources'),
        ),
        migrations.AddField(
            model_name='lead',
            name='status',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.status'),
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cID', models.IntegerField(default=144809, unique=True)),
                ('fName', models.CharField(blank=True, max_length=40, null=True, verbose_name='First Name')),
                ('lName', models.CharField(blank=True, max_length=40, null=True, verbose_name='Last Name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email Address')),
                ('phone_num', models.CharField(max_length=16, null=True, verbose_name='Phone Number')),
                ('resources', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.resources')),
            ],
        ),
        migrations.CreateModel(
            name='BorrowerNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('borrowernote', models.TextField(blank=True, verbose_name='Note')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('borrower', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.borrower')),
            ],
        ),
        migrations.AddField(
            model_name='borrower',
            name='status',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.status'),
        ),
    ]
