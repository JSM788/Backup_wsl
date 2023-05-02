#!/usr/bin/python3
"""The function check if the object is an instance or an /
instance of a class that inherited"""


def is_kind_of_class(obj, a_class):
    """Return True or False"""

    if isinstance(obj, a_class):
        return True
    return False
