# Generated by Django 4.2.5 on 2024-04-28 11:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0027_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 4, 28, 11, 8, 10, 800086), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 28, 11, 8, 10, 801957)),
        ),
        migrations.AlterField(
            model_name='deposit',
            name='amount',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 28, 11, 8, 10, 801261)),
        ),
        migrations.AlterField(
            model_name='userclient',
            name='balance',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='withdraw',
            name='amount',
            field=models.FloatField(default=0),
        ),
    ]