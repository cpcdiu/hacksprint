# Generated by Django 3.0.7 on 2020-11-14 13:27

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Challenge',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('body', ckeditor.fields.RichTextField()),
                ('thumbnail', models.ImageField(upload_to='challenge/challenges')),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('guidelines', models.TextField(blank=True)),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Domain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('description', models.TextField(blank=True)),
                ('default_selected', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Subdomain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('domain', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='challenge.Domain')),
            ],
        ),
        migrations.CreateModel(
            name='ChallengesParticipation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('reg_time', models.DateTimeField(auto_now_add=True)),
                ('submission_time', models.DateTimeField(blank=True, null=True)),
                ('feedback', models.TextField(blank=True)),
                ('submission_link', models.CharField(blank=True, max_length=300, null=True)),
                ('challenge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='challenge.Challenge')),
                ('leader', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('member', models.ManyToManyField(related_name='member', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='challenge',
            name='domain',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='challenge.Domain'),
        ),
        migrations.AddField(
            model_name='challenge',
            name='host',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='challenge',
            name='subdomain',
            field=models.ManyToManyField(to='challenge.Subdomain'),
        ),
    ]
