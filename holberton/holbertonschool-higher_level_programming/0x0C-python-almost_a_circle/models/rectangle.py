#!/usr/bin/python3
"""Rectangle class inheriting from Base"""
from models.base import Base


class Rectangle(Base):
    """Defines a Rectangle class"""

    def __init__(self, width, height, x=0, y=0, id=None):
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    @property
    def width(self):
        """Retrieves the width"""
        return(self.__width)

    @width.setter
    def width(self, width):
        """Setter/Updater"""
        if type(width) is not int:
            raise TypeError('width must be an integer')
        if width <= 0:
            raise ValueError('width must be > 0')
        self.__width = width

    @property
    def height(self):
        """Retrieves the height"""
        return(self.__height)

    @height.setter
    def height(self, height):
        """Setter/Updater"""
        if type(height) is not int:
            raise TypeError('height must be an integer')
        if height <= 0:
            raise ValueError('height must be > 0')
        self.__height = height

    @property
    def x(self):
        """Retrieves the x"""
        return(self.__x)

    @x.setter
    def x(self, x):
        """Setter/Updater"""
        if type(x) is not int:
            raise TypeError('x must be an integer')
        if x < 0:
            raise ValueError('x must be >= 0')
        self.__x = x

    @property
    def y(self):
        """Retrieves the y"""
        return(self.__y)

    @y.setter
    def y(self, y):
        """Setter/Updater"""
        if type(y) is not int:
            raise TypeError('y must be an integer')
        if y < 0:
            raise ValueError('y must be >= 0')
        self.__y = y

    def area(self):
        """Returns the area of the rectangle"""
        return self.width * self.height

    def display(self):
        """Print in stdout the Rectangle instance
        with the character # by taking care of x and y"""
        print(self.__y * '\n', end="")
        for i in range(self.__height):
            print(self.__x * ' ' + self.__width * "#")

    def update(self, *args, **kwargs):
        """Update by assigning the attributes"""
        if args:
            for index, value in enumerate(args):
                if index == 0:
                    self.id = value
                elif index == 1:
                    self.width = value
                elif index == 2:
                    self.height = value
                elif index == 3:
                    self.x = value
                elif index == 4:
                    self.y = value
        else:
            for key, value in kwargs.items():
                setattr(self, key, value)

    def __str__(self):
        """Defining the __str__ method"""
        return("[Rectangle] ({}) {}/{} - {}/{}".format(
            self.id, self.__x, self.__y, self.__width, self.__height))

    def to_dictionary(self):
        """Returns the dictionary representation
        of a Rectangle"""
        return {"x": self.x, "width": self.width,
                "id": self.id, "height": self.height, "y": self.y}
