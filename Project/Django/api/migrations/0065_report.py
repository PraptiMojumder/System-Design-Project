# Generated by Django 4.2.5 on 2023-12-16 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0064_message_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reporterid', models.CharField(max_length=100)),
                ('reportername', models.CharField(max_length=100)),
                ('reporterimage', models.CharField(max_length=100)),
                ('reportedid', models.CharField(max_length=100)),
                ('reportedname', models.CharField(max_length=100)),
                ('reportedimage', models.CharField(max_length=100)),
                ('messege', models.TextField()),
            ],
        ),
    ]
