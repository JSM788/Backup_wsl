#!/usr/bin/python3
"""Creating a class Rectangle"""


class Rectangle:
    """Initializing the values """

    def __init__(self, width=0, height=0):

        self.__height = height
        self.__width = width

    """Rectangle area"""
    def area(self):
        return(self.__height * self.__width)

    """Perimeter of the rectangle"""
    def perimeter(self):
        if self.__width == 0 or self.__height == 0:
            return(0)
        else:
            return((self.__height * 2) + (self.__width * 2))

    """Get height values"""
    @property
    def height(self):
        return(self.__height)

    """Update height values"""
    @height.setter
    def height(self, value):
        if isinstance(value, int) is not True:
            raise TypeError('height must be an integer')
        elif value < 0:
            raise ValueError('height must be >= 0')
        self.__height = value

    """Get width values"""
    @property
    def width(self):
        return(self.__width)

    """Update height values"""
    @width.setter
    def width(self, value):
        if isinstance(value, int) is not True:
            raise TypeError('width must be an integer')
        elif value < 0:
            raise ValueError('width must be >= 0')
        self.__width = value

    """Literally read the string"""
    def __str__(self):
        if self.__width == 0 or self.__height == 0:
            return ""
        for i in range(self.__height):
            for j in range(self.__width):
                var = (self.__width * "#" + "\n") * self.__height
                return(var.rstrip())

    """Create a representation of the rectangle"""
    def __repr__(self):
        return(f"Rectangle({self.width}, {self.height})")

    """Removing the rectangle"""
    def __del__(self):
        print("Bye rectangle...")
