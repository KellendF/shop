# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2019-09-24 04:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sku',
            name='default_image_url',
            field=models.ImageField(default=None, upload_to='', verbose_name='默认图片'),
        ),
        migrations.AlterField(
            model_name='sku',
            name='name',
            field=models.CharField(max_length=50, verbose_name='SKU名称'),
        ),
    ]