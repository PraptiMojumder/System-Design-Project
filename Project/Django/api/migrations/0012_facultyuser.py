# Generated by Django 4.2.5 on 2023-12-07 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_studentuser_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacultyUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('facultytype', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=100, null=True)),
                ('website', models.CharField(max_length=200, null=True)),
                ('github', models.CharField(max_length=200, null=True)),
                ('linkedin', models.CharField(max_length=200, null=True)),
                ('bio', models.CharField(max_length=200, null=True)),
                ('image', models.ImageField(null=True, upload_to='uploads')),
            ],
        ),
    ]
