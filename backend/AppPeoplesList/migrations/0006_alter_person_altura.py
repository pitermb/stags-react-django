# Generated by Django 4.0.5 on 2022-06-24 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AppPeoplesList', '0005_alter_person_altura'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='altura',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
