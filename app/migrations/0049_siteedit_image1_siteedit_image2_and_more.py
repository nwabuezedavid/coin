# Generated by Django 5.0.4 on 2024-09-07 14:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0048_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='siteedit',
            name='image1',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='siteedit',
            name='image2',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 9, 7, 10, 18, 57, 593137), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 7, 10, 18, 57, 593137)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 7, 10, 18, 57, 593137)),
        ),
    ]
