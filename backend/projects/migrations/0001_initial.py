# Generated by Django 4.0.5 on 2022-06-20 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=225)),
                ('is_active', models.BooleanField()),
                ('active_link', models.URLField(blank=True, null=True)),
                ('github_link', models.URLField()),
                ('language', models.CharField(max_length=175)),
                ('description', models.TextField()),
            ],
        ),
    ]
