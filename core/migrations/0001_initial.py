# Generated by Django 5.0.6 on 2024-06-21 07:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('registration_number', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('contact_person', models.CharField(max_length=255)),
                ('contact_phone', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('number_of_employees', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.company')),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('employee_id', models.CharField(max_length=50, unique=True)),
                ('role', models.CharField(max_length=255)),
                ('date_started', models.DateField()),
                ('date_left', models.DateField(blank=True, null=True)),
                ('duties', models.TextField()),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.company')),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.department')),
            ],
        ),
    ]
