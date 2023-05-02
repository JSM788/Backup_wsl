#!/usr/bin/python3
"""Defining id for all other classes."""
import json


class Base():
    """Defines a Base class"""

    __nb_objects = 0

    def __init__(self, id=None):
        """Initializing constructor method"""
        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects

    @staticmethod
    def to_json_string(list_dictionaries):
        """Returns the JSON string representation
        of list_dictionaries"""
        if list_dictionaries is None or len(list_dictionaries) == 0:
            return "[]"
        return json.dumps(list_dictionaries)

    @classmethod
    def save_to_file(cls, list_objs):
        """
        JSON string representation of list_objs in a file
        """
        new_list = []
        if list_objs:
            for i in list_objs:
                dictionary = i.to_dictionary()
                new_list.append(dictionary)
        filename = cls.__name__ + ".json"
        with open(filename, mode="w", encoding="utf-8")as myFile:
            myFile.write(cls.to_json_string(new_list))

    def from_json_string(json_string):
        """Returns the list of the JSON string
        representation json_string"""
        if json_string is None:
            return []
        else:
            return json.loads(json_string)
