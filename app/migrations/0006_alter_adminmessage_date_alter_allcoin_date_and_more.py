# Generated by Django 4.2.7 on 2024-02-07 21:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_withdraw_name_alter_withdraw_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 2, 7, 22, 5, 36, 466565), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 7, 22, 5, 36, 472151)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 7, 22, 5, 36, 468560)),
        ),
    ]