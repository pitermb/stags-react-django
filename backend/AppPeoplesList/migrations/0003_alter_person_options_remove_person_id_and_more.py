# Generated by Django 4.0.5 on 2022-06-24 14:45

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('AppPeoplesList', '0002_alter_person_age_alter_person_altura'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='person',
            options={'ordering': ['-name']},
        ),
        migrations.RemoveField(
            model_name='person',
            name='id',
        ),
        migrations.AddField(
            model_name='person',
            name='id_person',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AddField(
            model_name='person',
            name='password',
            field=models.CharField(max_length=16, null=True),
        ),
    ]
