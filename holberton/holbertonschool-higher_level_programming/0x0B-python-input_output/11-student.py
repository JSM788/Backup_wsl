#!/usr/bin/python3
"""
Write a class Student
that defines a student by
"""


class Student:
    """
    The class Student
    """

    def __init__(self, first_name, last_name, age):
        """
        initializes arguments
        """

        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """
        return representation
        """

        myDict = {}
        if type(attrs) is list:
            for i in attrs:
                try:
                    myDict[i] = self.__dict__[i]
                except KeyError:
                    pass

            return myDict

        return self.__dict__

    def reload_from_json(self, json):
        """
        method reload from json
        """

        for i in json:
            try:
                self.__dict__[i] = json[i]
            except Exception as e:
                pass
