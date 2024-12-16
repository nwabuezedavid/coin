# Generated by Django 4.2.7 on 2024-02-02 10:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='siteedit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('locatio', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50)),
                ('logo', models.FileField(upload_to='logo')),
                ('limited', models.BooleanField(default=False)),
                ('idx', models.IntegerField(default=1)),
                ('intrest', models.IntegerField(default=5)),
            ],
        ),
        migrations.RemoveField(
            model_name='invested',
            name='howmantime',
        ),
        migrations.AddField(
            model_name='allplan',
            name='daygiven',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AddField(
            model_name='allplan',
            name='interest',
            field=models.IntegerField(default=4),
        ),
        migrations.AddField(
            model_name='invested',
            name='off',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='userclient',
            name='password',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='deposit',
            name='coin',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.allcoin'),
        ),
        migrations.AlterField(
            model_name='deposit',
            name='proof',
            field=models.FileField(blank=True, max_length=6000, null=True, upload_to='coin'),
        ),
        migrations.RemoveField(
            model_name='invested',
            name='useronplan',
        ),
        migrations.AlterField(
            model_name='userclient',
            name='howmanreferral',
            field=models.CharField(default=0, max_length=50),
        ),
        migrations.AlterField(
            model_name='userclient',
            name='timesamp',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='Kycuser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filex', models.FileField(blank=True, null=True, upload_to='kyc')),
                ('uuid', models.CharField(blank=True, max_length=50, null=True)),
                ('lname', models.CharField(blank=True, max_length=50, null=True)),
                ('fname', models.CharField(blank=True, max_length=50, null=True)),
                ('fathernamef', models.CharField(blank=True, max_length=50, null=True)),
                ('fathernamel', models.CharField(blank=True, max_length=50, null=True)),
                ('PAN', models.CharField(blank=True, max_length=50, null=True)),
                ('DateofBirth', models.DateField(blank=True, max_length=50, null=True)),
                ('address1', models.CharField(blank=True, max_length=50, null=True)),
                ('address2', models.CharField(blank=True, max_length=50, null=True)),
                ('city', models.CharField(blank=True, max_length=50, null=True)),
                ('state', models.CharField(blank=True, max_length=50, null=True)),
                ('zipcode', models.CharField(blank=True, max_length=50, null=True)),
                ('Country', models.CharField(blank=True, max_length=50, null=True)),
                ('gender', models.CharField(blank=True, max_length=50, null=True)),
                ('email', models.CharField(blank=True, max_length=50, null=True)),
                ('PANStatue', models.CharField(blank=True, max_length=50, null=True)),
                ('martialstatue', models.CharField(blank=True, max_length=50, null=True)),
                ('citizenStatus', models.CharField(blank=True, max_length=50, null=True)),
                ('proofaddress', models.CharField(blank=True, max_length=50, null=True)),
                ('disableshow', models.BooleanField(default=False)),
                ('approved', models.BooleanField(default=False)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.userclient')),
            ],
        ),
        migrations.AddField(
            model_name='invested',
            name='useronplan',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.allplan'),
        ),
    ]