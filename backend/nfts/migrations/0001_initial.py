# Generated by Django 4.0.5 on 2022-07-01 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Nfts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collection_name', models.CharField(max_length=245)),
                ('collection_link', models.URLField()),
                ('asset_name', models.CharField(max_length=245)),
                ('asset_img', models.URLField()),
                ('asset_link', models.URLField()),
                ('price', models.FloatField()),
            ],
        ),
    ]
