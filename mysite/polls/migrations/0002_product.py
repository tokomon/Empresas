# Generated by Django 2.2.dev20181022192133 on 2018-10-26 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_text', models.CharField(max_length=300)),
                ('price_value', models.IntegerField(max_length=200)),
            ],
        ),
    ]