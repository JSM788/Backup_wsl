#!/usr/bin/python3
"""Creating a class Square with its size"""


class Square:
    """class that defines a square"""

    def __init__(self, size=0):
        self.__size = size
        if (type(self.__size)) is not int:
            raise TypeError('size must be an integer')
        elif (self.__size < 0):
            raise ValueError('size must be >= 0')
