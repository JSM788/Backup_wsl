#!/usr/bin/python3
"""The function check if object is an instance of class"""


def is_same_class(obj, a_class):
    """Returns True if is an instance of class, otherwise False"""

    if type(obj) == a_class:
        return True
    return False
