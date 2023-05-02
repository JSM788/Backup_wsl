#!/usr/bin/python3
"""Square class inheriting from Rectangle."""
from models.rectangle import Rectangle


class Square(Rectangle):
    """Defines a Square class"""

    def __init__(self, size, x=0, y=0, id=None):
        super().__init__(size, size, x, y, id)

    @property
    def size(self):
        """Retrieves the size"""
        return self.width

    @size.setter
    def size(self, size):
        """Setter/Updater"""
        self.width = size
        self.height = size

    def update(self, *args, **kwargs):
        """Update by assigning the attributes"""
        if args:
            for index, value in enumerate(args):
                if index == 0:
                    self.id = value
                elif index == 1:
                    self.size = value
                elif index == 2:
                    self.x = value
                elif index == 3:
                    self.y = value
        else:
            for key, val in kwargs.items():
                if key == "size":
                    self.size = val
                elif key == "x":
                    self.x = val
                elif key == "y":
                    self.y = val
                elif key == "id":
                    self.id = val

    def __str__(self):
        """Defining the __str__ method"""
        return "[Square] ({}) {}/{} - {}".format(
                self.id, self.x, self.y, self.width)

    def to_dictionary(self):
        """Returns the dictionary representation
        of a Square"""
        return {"id": self.id, "x": self.x, "size": self.size, "y": self.y}
