# Generated by Django 4.2.5 on 2024-03-31 22:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0026_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 3, 31, 22, 5, 49, 622073), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 31, 22, 5, 49, 626194)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 31, 22, 5, 49, 624650)),
        ),
    ]
