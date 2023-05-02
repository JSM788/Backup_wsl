#!/usr/bin/python3
"""Making a class Rectangle"""
BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """Rectangle inherits from the BaseGeometry class"""

    def __init__(self, width, height):
        self.integer_validator('width', width)
        self.integer_validator('height', height)
