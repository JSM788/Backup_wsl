#!/usr/bin/python3
"""Creating a class Square"""


class Square:
    """Getting and updating square area values"""

    def __init__(self, size=0):
        self.__size = size

    def __eq__(self, var):
        return self.area() == var.area()

    def __ne__(self, var):
        return self.area() != var.area()

    def __gt__(self, var):
        return self.area() > var.area()

    def __ge__(self, var):
        return self.area() >= var.area()

    def __lt__(self, var):
        return self.area() < var.area()

    def __le__(self, var):
        return self.area() <= var.area()

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
        elif value < self.__size:
            raise TypeError
        else:
            self.__size = value

    def area(self):
        return(self.__size ** 2)
