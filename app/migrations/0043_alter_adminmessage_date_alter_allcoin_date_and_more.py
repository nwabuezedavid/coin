# Generated by Django 5.0.4 on 2024-09-05 07:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0042_alter_adminmessage_date_alter_allcoin_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 9, 5, 8, 44, 19, 610970), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 5, 8, 44, 19, 610970)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 9, 5, 8, 44, 19, 610970)),
        ),
    ]
