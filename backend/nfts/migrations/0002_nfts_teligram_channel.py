# Generated by Django 4.0.5 on 2022-07-01 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nfts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='nfts',
            name='teligram_channel',
            field=models.URLField(blank=True, null=True),
        ),
    ]
