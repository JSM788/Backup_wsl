#!/usr/bin/python3
"""This function adds two integers"""


def add_integer(a, b=98):
    """Returns the sum of both elements"""

    if isinstance(a, (int, float)) is not True:
        raise TypeError('a must be an integer')
    elif isinstance(b, (int, float)) is not True:
        raise TypeError('b must be an integer')
    return(int(a) + int(b))
