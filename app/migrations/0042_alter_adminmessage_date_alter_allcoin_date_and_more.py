# Generated by Django 5.0.4 on 2024-08-11 16:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0041_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 8, 11, 12, 51, 58, 336592), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 11, 12, 51, 58, 336592)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 11, 12, 51, 58, 336592)),
        ),
    ]
