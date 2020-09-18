import random
import string
import uuid
from django.utils.text import slugify


def generate_random_string(size=10, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def generate_uuid4():
    return uuid.uuid4()


def unique_slug_generator(instance, for_, new_slug=None):
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(for_)

    Klass = instance.__class__
    qs_exists = Klass.objects.filter(slug=slug).exists()
    if qs_exists:
        new_slug = slug + '-' + generate_random_string(size=4)
        return unique_slug_generator(instance, for_=for_, new_slug=new_slug)
    return slug