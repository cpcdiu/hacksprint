import random
import string
import uuid


def generate_random_string(char=15):
    return ''.join(random.choice(string.ascii_lowercase) for i in range(char))


def generate_uuid4():
    return uuid.uuid4()
