# Generated by Django 4.2.10 on 2024-03-19 00:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 3, 19, 0, 17, 8, 251313), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 19, 0, 17, 8, 253659)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 19, 0, 17, 8, 252880)),
        ),
        migrations.AlterField(
            model_name='userclient',
            name='verify',
            field=models.BooleanField(default=True),
        ),
    ]