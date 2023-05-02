#!/usr/bin/python3
"""This function print your first and last name"""


def say_my_name(first_name, last_name=""):
    """Print your name"""

    if isinstance(first_name, str) is not True:
        raise TypeError('first_name must be a string')
    elif isinstance(last_name, str) is not True:
        raise TypeError('last_name must be a string')
    print("My name is {} {}".format(first_name, last_name))
