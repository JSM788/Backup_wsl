#!/usr/bin/python3
"""Creating a class Square"""


class Square:
    """Getting and updating square area values"""

    def __init__(self, size=0):
        self.__size = size
        if (type(self.__size)) is not int:
            raise TypeError('size must be an integer')
        elif (self.__size < 0):
            raise ValueError('size must be >= 0')

    def area(self):
        return(self.__size ** 2)

    """Getter"""
    @property
    def size(self):
        return(self.__size)

    """Updater"""
    @size.setter
    def size(self, value):
        if (type(value)) is not int:
            raise TypeError('size must be an integer')
        elif (value < 0):
            raise ValueError('size must be >= 0')
        else:
            self.__size = value

    """Print the square"""
    def my_print(self):
        if self.__size == 0:
            print()
        else:
            for i in range(self.__size):
                for x in range(self.__size):
                    print("#", end="")
                print()
