# Generated by Django 5.0.4 on 2024-05-31 08:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0040_siteedit_domain_alter_adminmessage_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminmessage',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 5, 31, 9, 25, 34, 68683), null=True),
        ),
        migrations.AlterField(
            model_name='allcoin',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 5, 31, 9, 25, 34, 68683)),
        ),
        migrations.AlterField(
            model_name='invested',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 5, 31, 9, 25, 34, 68683)),
        ),
        migrations.AlterField(
            model_name='siteedit',
            name='domain',
            field=models.CharField(blank=True, default=models.CharField(blank=True, max_length=50, null=True), max_length=50, null=True),
        ),
    ]