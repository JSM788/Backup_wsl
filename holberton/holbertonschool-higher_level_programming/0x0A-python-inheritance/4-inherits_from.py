#!/usr/bin/python3
"""Check if the object is an instance of a class that/
inherited from the specified class"""


def inherits_from(obj, a_class):
    """Returns True if the object is an instance of a class/
    that inherited otherwise False"""

    if issubclass(type(obj), a_class) and not type(obj) == a_class:
        return True
    return False
