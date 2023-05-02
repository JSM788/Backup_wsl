#!/usr/bin/python3
"""This function print a square"""


def print_square(size):
    """Print a square"""

    if isinstance(size, int) is not True:
        raise TypeError('size must be an integer')
    if size < 0:
        raise ValueError('size must be >= 0')
    for row in range(size):
        print('#' * size)
